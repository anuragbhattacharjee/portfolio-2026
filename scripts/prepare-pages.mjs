import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const siteUrl = "https://anuragbhattacharjee.github.io";
const personId = `${siteUrl}/#person`;
const routes = JSON.parse(
  await readFile(path.join(root, "src/data/seo-routes.json"), "utf8"),
);
const manifest = JSON.parse(
  await readFile(path.join(dist, ".vite/manifest.json"), "utf8"),
);
const template = await readFile(path.join(dist, "index.html"), "utf8");
const serverBundle = path.join(root, ".seo-render/entry-server.js");
const { render } = await import(pathToFileURL(serverBundle).href);

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function setMeta(html, attribute, key, content) {
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"\\s+content="[^"]*"\\s*/?>`,
    "i",
  );
  const tag = `<meta ${attribute}="${key}" content="${escapeAttribute(content)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
}

function removeMeta(html, attribute, key) {
  const pattern = new RegExp(
    `\\s*<meta\\s+${attribute}="${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"\\s+content="[^"]*"\\s*/?>`,
    "i",
  );
  return html.replace(pattern, "");
}

function routeImage(route) {
  if (route.image === "site") return `${siteUrl}/og.png`;
  if (!route.imageSource) return undefined;

  const entry = manifest[route.imageSource];
  if (!entry?.file) {
    throw new Error(`No Vite manifest entry for ${route.imageSource}`);
  }
  return `${siteUrl}/${entry.file}`;
}

function structuredData(route, canonicalUrl) {
  const person = {
    "@type": "Person",
    "@id": personId,
    name: "Anurag Bhattacharjee",
    url: `${siteUrl}/`,
    jobTitle: "Senior Full Stack Software Engineer",
    address: { "@type": "PostalAddress", addressCountry: "CA" },
    knowsAbout: [
      "Python",
      "Django",
      "React",
      "TypeScript",
      "REST APIs",
      "Natural language processing",
      "Applied artificial intelligence",
    ],
    sameAs: [
      "https://github.com/anuragbhattacharjee",
      "https://www.linkedin.com/in/anuragbhattacharjee/",
      "https://medium.com/@anuragbhattacharjee",
      "https://stackoverflow.com/users/2149373/anurag",
      "https://www.chess.com/member/bender_blunder",
    ],
  };
  let page = {
    "@type": route.kind === "profile" ? "ProfilePage" : "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: route.title,
    description: route.description,
    inLanguage: "en-CA",
    ...(route.kind === "profile" ? { mainEntity: { "@id": personId } } : {}),
  };
  const graph = [person, page];

  if (route.kind === "collection") {
    graph[1] = page = {
      ...page,
      "@type": "CollectionPage",
      about: { "@id": personId },
    };
  }

  if (route.kind === "project" || route.kind === "research") {
    const work = {
      "@type": "CreativeWork",
      "@id": `${canonicalUrl}#work`,
      url: canonicalUrl,
      name: route.title.replace(" | Anurag Bhattacharjee", ""),
      description: route.description,
      creator: { "@id": personId },
      genre: route.kind === "research" ? "Academic research" : "Software engineering project",
    };
    graph[1] = { ...page, mainEntity: { "@id": work["@id"] } };
    graph.push(work);
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

function renderRoute(route) {
  const canonicalUrl = `${siteUrl}${route.path === "/" ? "/" : `${route.path}/`}`;
  const image = routeImage(route);
  const imageAlt = route.imageAlt ?? "Anurag Bhattacharjee, Senior Full Stack Software Engineer";
  let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${route.title}</title>`);
  html = html.replace(
    '<div id="root" class="cp-site"></div>',
    `<div id="root" class="cp-site">${render(route.path)}</div>`,
  );
  html = setMeta(html, "name", "description", route.description);
  html = setMeta(html, "name", "robots", "index, follow");
  html = setMeta(html, "property", "og:title", route.title);
  html = setMeta(html, "property", "og:description", route.description);
  html = setMeta(html, "property", "og:type", route.kind === "profile" ? "profile" : "website");
  html = setMeta(html, "property", "og:url", canonicalUrl);
  html = setMeta(html, "name", "twitter:card", image ? "summary_large_image" : "summary");
  html = setMeta(html, "name", "twitter:title", route.title);
  html = setMeta(html, "name", "twitter:description", route.description);
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?\s*>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );

  if (image) {
    html = setMeta(html, "property", "og:image", image);
    html = setMeta(html, "property", "og:image:alt", imageAlt);
    html = setMeta(html, "name", "twitter:image", image);
    html = setMeta(html, "name", "twitter:image:alt", imageAlt);
  } else {
    html = removeMeta(html, "property", "og:image");
    html = removeMeta(html, "property", "og:image:alt");
    html = removeMeta(html, "name", "twitter:image");
    html = removeMeta(html, "name", "twitter:image:alt");
  }

  return html.replace(
    /<script\s+type="application\/ld\+json"\s+id="structured-data">[\s\S]*?<\/script>/i,
    `<script type="application/ld+json" id="structured-data">${JSON.stringify(structuredData(route, canonicalUrl))}</script>`,
  );
}

for (const route of routes) {
  const outputDirectory = route.path === "/"
    ? dist
    : path.join(dist, route.path.slice(1));
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(path.join(outputDirectory, "index.html"), renderRoute(route));
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => [
    "  <url>",
    `    <loc>${siteUrl}${route.path === "/" ? "/" : `${route.path}/`}</loc>`,
    "  </url>",
  ].join("\n")),
  "</urlset>",
  "",
].join("\n");

await writeFile(path.join(dist, "sitemap.xml"), sitemap);
await rm(path.join(root, ".seo-render"), { recursive: true, force: true });
console.log(`Prepared ${routes.length} indexable routes and sitemap.xml.`);
