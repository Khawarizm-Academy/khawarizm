import { SITE_CONFIG } from "../siteConfig";
import type { JsonLdObject } from "../generateMetadata";

export interface ArticleInput {
  /** `"Article"` (default) or `"BlogPosting"`. */
  type?: "Article" | "BlogPosting";
  /** Absolute canonical URL of the article. */
  url: string;
  headline: string;
  description?: string;
  /** Absolute image URL. */
  image?: string;
  /** ISO 8601 dates — omit rather than guess; nothing is fabricated. */
  datePublished?: string;
  dateModified?: string;
  /** Author name, when the article credits one. */
  authorName?: string;
}

/**
 * An Article / BlogPosting for editorial content. Only the fields a page
 * actually provides are emitted — dates, authors and images are never invented.
 */
export function createArticleSchema({
  type = "Article",
  url,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
}: ArticleInput): JsonLdObject {
  return {
    "@type": type,
    "@id": `${url}#article`,
    url,
    headline,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    inLanguage: SITE_CONFIG.locale,
    ...(description ? { description } : {}),
    ...(image ? { image } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(authorName ? { author: { "@type": "Person", name: authorName } } : {}),
    publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
  };
}
