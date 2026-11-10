/**
 * Sitemap generator — the sitemap is generated, not hand-maintained.
 *
 * Reads the route registry (`@/router/routes`) and the dynamic project data
 * (`@/constants/home`) and writes `public/sitemap.xml` with absolute canonical
 * URLs. Runs with Bun (`bun run sitemap`), which also resolves the `@/` alias
 * and asset imports used by the constants files.
 *
 * Excluded on purpose: the 404 route (not a page) and the Home anchors
 * (`/#courses` etc. — sections, not URLs).
 */
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { PROJECTS } from "@/constants/home";
import { generateCanonicalUrl } from "@/seo/generateCanonicalUrl";
import { SITE_URL } from "@/seo/siteConfig";
import { ROUTES } from "@/router/routes";

/** Public, indexable static routes. */
const STATIC_PATHS: string[] = [
  ROUTES.home,
  ROUTES.about,
  ROUTES.services,
  ROUTES.works,
  ROUTES.contact,
  ROUTES.privacy,
  ROUTES.terms,
];

/** Every project detail page — derived from the same data the router renders. */
const PROJECT_PATHS: string[] = PROJECTS.map((project) => `${ROUTES.works}/${project.id}`);

/** De-duplicate while keeping order. */
const urls = [...new Set([...STATIC_PATHS, ...PROJECT_PATHS])].map((path) => generateCanonicalUrl(path));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;

const sitemapPath = fileURLToPath(new URL("../public/sitemap.xml", import.meta.url));
await writeFile(sitemapPath, xml, "utf8");
console.log(`sitemap.xml written with ${urls.length} URLs (${SITE_URL})`);
