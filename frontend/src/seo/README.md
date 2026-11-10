# `seo/` — centralized SEO module

Everything SEO lives here; pages only render `<SEO />` with their
page-specific props:

```tsx
import { SEO } from "@/seo";

<SEO
  title="خدماتنا"
  description="…"
  canonical={ROUTES.services}
  breadcrumb={[{ name: "الرئيسية", path: ROUTES.home }, { name: "خدماتنا" }]}
/>
```

| File                   | Purpose                                                                     |
| ---------------------- | --------------------------------------------------------------------------- |
| `SEO.tsx`              | The page-level component — title, description, canonical, robots, theme-color, OG, Twitter, JSON-LD |
| `StructuredData.tsx`   | Renders JSON-LD `<script>`s through Helmet (swapped per navigation)         |
| `siteConfig.ts`        | Production origin + brand facts — the single source of truth                |
| `defaultSEO.ts`        | Default metadata every page inherits                                        |
| `generateCanonicalUrl.ts` | Site-relative path → absolute canonical URL (normalized)                  |
| `generateMetadata.ts`  | Pure merge: page props over defaults → resolved metadata; shared types      |
| `schemas/`             | Reusable Schema.org factories (Organization, WebSite, WebPage, BreadcrumbList, Article/BlogPosting) |

Behavior notes:

- The core Organization / WebSite / WebPage JSON-LD is emitted automatically;
  pass extra schemas through the `schema` prop (Article, Product, …).
- With `noindex` robots, canonical, `og:url` and all JSON-LD are omitted.
- Nothing is ever fabricated — omit unknown facts (contact details, dates,
  authorship) rather than inventing them.
- The static `index.html` head must stay free of SEO meta (Helmet owns it);
  see the comment there.
