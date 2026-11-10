import { SITE_CONFIG } from "./siteConfig";

/**
 * Default metadata applied to every page unless the page overrides it
 * (see `generateMetadata`). Values are site facts from `SITE_CONFIG` —
 * pages only need to pass what makes them unique.
 */
export const DEFAULT_SEO = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  /** Canonical path for the default entry (Home). */
  canonical: "/",
  image: SITE_CONFIG.image,
  imageAlt: SITE_CONFIG.imageAlt,
  type: "website",
  robots: "index, follow",
  locale: SITE_CONFIG.locale,
} as const;
