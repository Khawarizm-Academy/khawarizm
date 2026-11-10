import { generateCanonicalUrl } from "../generateCanonicalUrl";
import { SITE_CONFIG } from "../siteConfig";
import type { JsonLdObject } from "../generateMetadata";
import { ORGANIZATION_ID } from "./organization";

/** Stable `@id` anchor for the WebSite node. */
export const WEBSITE_ID = `${SITE_CONFIG.url}/#website`;

/** The WebSite this content belongs to — linked to the Organization as publisher. */
export function createWebSiteSchema(): JsonLdObject {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: generateCanonicalUrl("/"),
    name: SITE_CONFIG.title,
    inLanguage: SITE_CONFIG.locale,
    publisher: { "@id": ORGANIZATION_ID },
  };
}
