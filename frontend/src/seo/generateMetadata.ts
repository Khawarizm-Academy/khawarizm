import { DEFAULT_SEO } from "./defaultSEO";
import { generateCanonicalUrl } from "./generateCanonicalUrl";
import { SITE_CONFIG } from "./siteConfig";

/** Page-provided SEO input — every field is optional and falls back to `DEFAULT_SEO`. */
export interface SEOProps {
  /** Page title — the site name is appended centrally (skipped if already present). */
  title?: string;
  description?: string;
  /** Canonical path relative to the site root (e.g. `"/about"`) or an absolute URL. */
  canonical?: string;
  /** Social-share image path relative to the site root (e.g. `"/og-image.png"`) or an absolute URL. */
  image?: string;
  /** Alt text for the social-share image. */
  imageAlt?: string;
  /** Open Graph object type. Defaults to `"website"`. */
  type?: string;
  /** Robots directive, e.g. `"noindex, nofollow"` for the 404 page. */
  robots?: string;
  /** Optional comma-joined keywords meta. */
  keywords?: string[];
  /** Optional author meta — only rendered when a page provides it. */
  author?: string;
  /** Content locale (BCP 47, e.g. `"ar"`). */
  locale?: string;
  /** Breadcrumb trail (first → last); renders a BreadcrumbList schema wired into the WebPage schema. */
  breadcrumb?: BreadcrumbItem[];
  /** Extra JSON-LD schemas (Article, Product, …). Core Organization/WebSite/WebPage schemas are emitted automatically. */
  schema?: JsonLdObject | JsonLdObject[];
}

export interface BreadcrumbItem {
  name: string;
  /** Site-root-relative path; omitted only for the current page. */
  path?: string;
}

/** A Schema.org JSON-LD object. Kept loose on purpose — schema.org has thousands of properties. */
export interface JsonLdObject {
  "@context"?: string;
  "@type": string | string[];
  "@id"?: string;
  [property: string]: unknown;
}

export interface ResolvedSEO {
  /** Full `<title>` (suffix included). */
  title: string;
  description: string;
  /** Absolute canonical URL. */
  canonicalUrl: string;
  /** Absolute social-share image URL, if one is configured. */
  imageUrl?: string;
  imageAlt?: string;
  type: string;
  robots: string;
  /** True when the robots directive forbids indexing — skips canonical/og:url/JSON-LD. */
  noindex: boolean;
  keywords?: string;
  author?: string;
  ogLocale: string;
}

/** Append the site name to a page title unless it is already included. */
function withSiteSuffix(title: string): string {
  return title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`;
}

/**
 * Merge page-specific SEO props over `DEFAULT_SEO` into a fully-resolved,
 * render-ready metadata object. Pure data — DOM/tag rendering lives in `SEO`.
 */
export function generateMetadata(props: SEOProps = {}): ResolvedSEO {
  const title = props.title ? withSiteSuffix(props.title) : DEFAULT_SEO.title;
  const description = props.description ?? DEFAULT_SEO.description;
  const canonicalUrl = generateCanonicalUrl(props.canonical ?? DEFAULT_SEO.canonical);
  const robots = props.robots ?? DEFAULT_SEO.robots;
  const noindex = /noindex/i.test(robots);
  const image = props.image ?? DEFAULT_SEO.image;
  const imageAlt = props.imageAlt ?? (props.title ? `${props.title} — ${SITE_CONFIG.name}` : DEFAULT_SEO.imageAlt);
  const locale = props.locale ?? DEFAULT_SEO.locale;
  const keywords = props.keywords?.length ? props.keywords.join(", ") : undefined;

  return {
    title,
    description,
    canonicalUrl,
    imageUrl: image ? generateCanonicalUrl(image) : undefined,
    imageAlt,
    type: props.type ?? DEFAULT_SEO.type,
    robots,
    noindex,
    keywords,
    author: props.author,
    ogLocale: `${locale}_${locale.toUpperCase()}`,
  };
}
