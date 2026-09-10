# SEO maintenance

The portfolio's route metadata lives in `src/data/seo-routes.json`. Add an entry there whenever an indexable route is added. The production build uses that data to generate:

- a distinct title, description, canonical URL and social preview for each route;
- fully rendered route HTML for crawlers and link unfurlers;
- Person, ProfilePage, CollectionPage and CreativeWork structured data;
- `sitemap.xml` with every current canonical route.

The browser-side `Seo` component keeps metadata correct during client-side navigation. The previous portfolio remains accessible to visitors but its HTML pages use `noindex` so outdated material does not compete with the current portfolio.

## After deployment

1. Add `https://anuragbhattacharjee.github.io/` as a property in Google Search Console.
2. Complete Google's ownership verification if requested.
3. Submit `https://anuragbhattacharjee.github.io/sitemap.xml`.
4. Inspect the home page and important project/research URLs, then request indexing.
5. Revalidate the social previews after changing `public/og.png` or a project image.

Search rankings cannot be guaranteed by metadata alone. Strong, factual project content, reputable links to the portfolio, accessible performance and periodic useful writing are the durable ranking signals to keep improving.
