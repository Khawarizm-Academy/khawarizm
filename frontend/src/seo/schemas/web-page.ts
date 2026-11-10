import type { JsonLdObject } from "../generateMetadata";
import { SITE_CONFIG } from "../siteConfig";
import { WEBSITE_ID } from "./website";

export interface WebPageInput {
  /** Full title of the page (suffix included). */
  title: string;
  description: string;
  /** Absolute canonical URL of the page. */
  url: string;
  /** Whether a BreadcrumbList with a matching `@id` is emitted alongside. */
  withBreadcrumb?: boolean;
}

/** A single page — `isPartOf` the WebSite, optionally wired to its breadcrumb. */
export function createWebPageSchema({ title, description, url, withBreadcrumb }: WebPageInput): JsonLdObject {
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: SITE_CONFIG.locale,
    isPartOf: { "@id": WEBSITE_ID },
    ...(withBreadcrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
  };
}
