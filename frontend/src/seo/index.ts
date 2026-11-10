/**
 * `@/seo` — centralized SEO module.
 *
 * Add SEO to any page with:
 *
 *   import { SEO } from "@/seo";
 *   <SEO title="…" description="…" canonical="/page" />
 *
 * Everything else (defaults, canonicals, OG/Twitter tags, JSON-LD) is handled here.
 */
export { SEO } from "./SEO";
export { StructuredData } from "./StructuredData";
export { SITE_URL, SITE_CONFIG } from "./siteConfig";
export { DEFAULT_SEO } from "./defaultSEO";
export { generateCanonicalUrl } from "./generateCanonicalUrl";
export { generateMetadata } from "./generateMetadata";
export {
  createOrganizationSchema,
  createWebSiteSchema,
  createWebPageSchema,
  createBreadcrumbListSchema,
  createArticleSchema,
} from "./schemas";
export type { SEOProps, BreadcrumbItem, JsonLdObject, ResolvedSEO } from "./generateMetadata";
