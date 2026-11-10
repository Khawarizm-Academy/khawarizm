import { SITE_URL } from "./siteConfig";

/**
 * Build an absolute canonical URL from a site-root-relative path
 * (`"/about"`, `"/works/project-one"`) or pass through an already-absolute URL.
 *
 * Normalizes the path: collapses duplicate slashes, drops the hash/search and
 * strips trailing slashes (except for the root, which keeps its trailing slash).
 */
export function generateCanonicalUrl(path?: string | null): string {
  if (!path) return `${SITE_URL}/`;
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(path)) return path;
  const normalized = `/${path}`
    .replace(/\/{2,}/g, "/")
    .split(/[?#]/)[0]
    .replace(/\/+$/, "");
  return `${SITE_URL}${normalized || "/"}`;
}
