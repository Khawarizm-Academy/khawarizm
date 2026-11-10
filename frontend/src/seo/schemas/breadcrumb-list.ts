import type { BreadcrumbItem } from "../generateMetadata";
import { generateCanonicalUrl } from "../generateCanonicalUrl";

export interface BreadcrumbListInput {
  /** Trail from the home page to (and including) the current page. */
  items: BreadcrumbItem[];
  /** Absolute canonical URL of the page the breadcrumb belongs to — anchors the `@id`. */
  url: string;
}

/** A BreadcrumbList — `@id`-anchored to the page so the WebPage schema can reference it. */
export function createBreadcrumbListSchema({ items, url }: BreadcrumbListInput) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      /** Link crumbs to their WebPage `@id` so Google joins them instead of duplicating. */
      ...(item.path ? { item: { "@id": `${generateCanonicalUrl(item.path)}#webpage` } } : {}),
    })),
  };
}
