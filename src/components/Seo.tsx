import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "../data/projects";
import { researchItems } from "../data/researches";
import seoRouteData from "../data/seo-routes.json";

const siteUrl = "https://anuragbhattacharjee.github.io";
const personId = `${siteUrl}/#person`;

type SeoRoute = {
  path: string;
  title: string;
  description: string;
  kind: "profile" | "collection" | "project" | "research";
  image?: "site";
  imageSource?: string;
  imageAlt?: string;
};

const seoRoutes = seoRouteData as SeoRoute[];

function normalizePath(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "");
}

function setMeta(selector: string, attribute: string, value?: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!value) {
    element?.remove();
    return;
  }

  const meta = element ?? document.createElement("meta");
  meta.setAttribute(attribute, value);

  if (!element) {
    if (selector.includes("property=")) {
      const property = selector.match(/property="([^"]+)"/)?.[1];
      if (property) meta.setAttribute("property", property);
    } else {
      const name = selector.match(/name="([^"]+)"/)?.[1];
      if (name) meta.setAttribute("name", name);
    }
    document.head.append(meta);
  }
}

function setCanonical(url: string) {
  const existing = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  const canonical = existing ?? document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = url;
  if (!existing) document.head.append(canonical);
}

function getRouteImage(route: SeoRoute) {
  if (route.image === "site") {
    return `${siteUrl}/og.png`;
  }

  if (route.kind === "project") {
    const slug = route.path.split("/").at(-1);
    return projects.find((project) => project.slug === slug)?.image;
  }

  if (route.kind === "research") {
    const slug = route.path.split("/").at(-1);
    return researchItems.find((research) => research.slug === slug)?.image;
  }

  return undefined;
}

function getStructuredData(route: SeoRoute, canonicalUrl: string) {
  const person = {
    "@type": "Person",
    "@id": personId,
    name: "Anurag Bhattacharjee",
    url: `${siteUrl}/`,
    jobTitle: "Senior Full Stack Software Engineer",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
    },
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

  const page = {
    "@type": route.kind === "profile" ? "ProfilePage" : "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: route.title,
    description: route.description,
    inLanguage: "en-CA",
    ...(route.kind === "profile" ? { mainEntity: { "@id": personId } } : {}),
  };

  const graph: Record<string, unknown>[] = [person, page];

  if (route.kind === "collection") {
    graph[1] = {
      ...page,
      "@type": "CollectionPage",
      about: { "@id": personId },
    };
  }

  if (route.kind === "project" || route.kind === "research") {
    graph.push({
      "@type": "CreativeWork",
      "@id": `${canonicalUrl}#work`,
      url: canonicalUrl,
      name: route.title.replace(" | Anurag Bhattacharjee", ""),
      description: route.description,
      creator: { "@id": personId },
      ...(route.kind === "research"
        ? { genre: "Academic research" }
        : { genre: "Software engineering project" }),
    });
    graph[1] = { ...page, mainEntity: { "@id": `${canonicalUrl}#work` } };
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = seoRoutes.find(
      (candidate) => candidate.path === normalizePath(pathname),
    );

    if (!route) {
      document.title = "Page not found | Anurag Bhattacharjee";
      setMeta('meta[name="robots"]', "content", "noindex, nofollow");
      return;
    }

    const canonicalUrl = `${siteUrl}${route.path === "/" ? "/" : `${route.path}/`}`;
    const image = getRouteImage(route);
    const ogType = route.kind === "profile" ? "profile" : "website";

    document.title = route.title;
    setCanonical(canonicalUrl);
    setMeta('meta[name="description"]', "content", route.description);
    setMeta('meta[name="robots"]', "content", "index, follow");
    setMeta('meta[name="author"]', "content", "Anurag Bhattacharjee");
    setMeta('meta[property="og:title"]', "content", route.title);
    setMeta('meta[property="og:description"]', "content", route.description);
    setMeta('meta[property="og:type"]', "content", ogType);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:site_name"]', "content", "Anurag Bhattacharjee");
    setMeta('meta[property="og:locale"]', "content", "en_CA");
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[property="og:image:alt"]', "content", image ? route.imageAlt ?? "Anurag Bhattacharjee, Senior Full Stack Software Engineer" : undefined);
    setMeta('meta[name="twitter:card"]', "content", image ? "summary_large_image" : "summary");
    setMeta('meta[name="twitter:title"]', "content", route.title);
    setMeta('meta[name="twitter:description"]', "content", route.description);
    setMeta('meta[name="twitter:image"]', "content", image);
    setMeta('meta[name="twitter:image:alt"]', "content", image ? route.imageAlt ?? "Anurag Bhattacharjee, Senior Full Stack Software Engineer" : undefined);

    const structuredData = document.querySelector<HTMLScriptElement>(
      "#structured-data",
    );
    if (structuredData) {
      structuredData.textContent = JSON.stringify(
        getStructuredData(route, canonicalUrl),
      );
    }
  }, [pathname]);

  return null;
}

export default Seo;
