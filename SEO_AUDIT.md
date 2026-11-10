# SEO and architecture update

## Implemented

- Centralized route-aware metadata in `frontend/src/components/seo.tsx`: unique titles, descriptions, canonical URLs, robots directives, Open Graph tags, Twitter cards, and accurate Organization/WebSite/WebPage JSON-LD.
- Added crawl directives in `frontend/public/robots.txt` and a public-route sitemap in `frontend/public/sitemap.xml`.
- Added route-level lazy loading with React `lazy()` and a shared suspense boundary.
- Kept React, Vite, TypeScript, React Router, and the existing visual system unchanged.
- Preserved semantic page headings, accessible labels, local assets, and existing interaction patterns.

## Rendering decision

The project remains a Vite client-rendered application. No authenticated area or server data currently requires SSR, and adding a server renderer would add deployment complexity without a verified production origin or backend. The HTML shell now carries valid baseline metadata; route-specific metadata is applied immediately by the shared SEO manager during navigation. A production deployment can add prerendering later if crawler-facing initial HTML becomes a requirement.

## Deployment note

The sitemap currently uses public paths because the production hostname has not been provided. Before publishing to a permanent domain, replace each `<loc>` value with the final HTTPS origin and set the same origin in the SEO canonical configuration.

## Checks

Run `npm run typecheck`, `npm run build`, and `npm run lint` from `frontend/`. Public paths are declared in `frontend/public/manus-routes.json`.
