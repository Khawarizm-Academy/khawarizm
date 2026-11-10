import { generateCanonicalUrl } from "../generateCanonicalUrl";
import { SITE_CONFIG } from "../siteConfig";
import type { JsonLdObject } from "../generateMetadata";

/** Stable `@id` anchor so other schemas can reference the Organization without duplicating it. */
export const ORGANIZATION_ID = `${SITE_CONFIG.url}/#organization`;

/**
 * The Organization behind this site — built only from verified site facts
 * (name, url, logo, description). Contact details stay out until real
 * channels replace the placeholders in `@/constants/contact`.
 */
export function createOrganizationSchema(): JsonLdObject {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_CONFIG.name,
    url: generateCanonicalUrl("/"),
    logo: generateCanonicalUrl("/favicon.svg"),
    description: SITE_CONFIG.description,
  };
}
