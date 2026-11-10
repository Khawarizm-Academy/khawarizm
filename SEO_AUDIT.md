# SEO and architecture update

## Implemented

- **Centralized SEO module** in `frontend/src/seo/` (imported as `@/seo`):
  `SEO` component (title, description, canonical, robots, theme-color, Open
  Graph, Twitter), `StructuredData` (JSON-LD), `siteConfig` (production
  origin `https://khawarizm.vercel.app` + brand facts), `defaultSEO`,
  `generateCanonicalUrl`, `generateMetadata`, and reusable Schema.org
  factories in `seo/schemas/` (Organization, WebSite, WebPage,
  BreadcrumbList, Article/BlogPosting).
- **Helmet integration**: `react-helmet-async` v3 (React 19 support) with
  `HelmetProvider` in `src/main.tsx`; the previous imperative `RouteSEO` in
  `components/seo.tsx` was removed — pages own their metadata via `<SEO />`.
- **Static prerendering**: `@prerenderer/rollup-plugin` +
  `@prerenderer/renderer-puppeteer` (React-snap is incompatible with
  React 19/Vite 8). All 11 public routes render real content + page-specific
  metadata into `dist/**/index.html` at build time; `postProcess` rewrites
  the render-server origin to production.
- **Sitemap generation**: `frontend/scripts/generate-sitemap.ts` derives
  `public/sitemap.xml` from the route registry + project data (absolute
  URLs, no manual maintenance); runs inside `bun run build`.
- **robots.txt**: production sitemap URL, crawl allow-all with a reserved
  `/api/` exclusion.
- **og-image**: `public/og-image.png` (1200×630, regenerate with
  `bun scripts/generate-og-image.ts`).
- Kept React, Vite, TypeScript, React Router, routing structure, and the
  existing visual system unchanged.

## Notes

- `Product`/`ContactPoint`/aggregate-rating schemas are intentionally absent:
  the site sells nothing yet and contact channels are placeholders — no data
  is fabricated. Add `Product` via the `schema` prop of `<SEO />` when
  applicable.
- Project detail pages currently share the title `[اسم المشروع] | خوارزم`
  because the project names in `@/constants/home` are placeholders; titles
  become unique automatically once real names land.
- `vite preview` resolves extensionless routes only with a trailing slash
  (`/about/`); static hosts (e.g. Vercel) map `/about` → `about/index.html`
  directly — this is a local preview quirk, not a deployment issue.

## Checks

Run `bun run typecheck`, `bun run lint`, and `bun run build` from
`frontend/`. The build generates the sitemap, builds, prerenders all public
routes, and rewrites asset URLs to the production origin.
