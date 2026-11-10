/**
 * Website-wide SEO configuration — the single source of truth for every meta
 * tag, canonical URL and schema the site emits. Update the production origin
 * here and everything (canonicals, og:url, sitemap, robots, JSON-LD) follows.
 */

/** Production origin (no trailing slash). */
export const SITE_URL = "https://khawarizm.vercel.app";

export const SITE_CONFIG = {
  /** Production origin — canonical URLs, og:url and schema URLs are built from it. */
  url: SITE_URL,
  /** Brand name — used as the title suffix and og:site_name. */
  name: "خوارزم",
  /** Full brand title — the default (Home) page title. */
  title: "خوارزم | أكاديمية تقنية واستوديو رقمي",
  description:
    "خوارزم — أكاديمية تقنية عربية تعلّم الخوارزميات والبرمجة، واستوديو رقمي يصمم المواقع ويطور التطبيقات.",
  /** Content language — drives og:locale and `inLanguage` in schemas. */
  locale: "ar",
  /**
   * Default social-share image, relative to `url`. Should be a 1200×630
   * PNG/JPG for the widest crawler support; resolved to an absolute URL per page.
   */
  image: "/og-image.png",
  imageAlt: "خوارزم — أكاديمية تقنية واستوديو رقمي",
  /** Browser UI color (theme-color meta). Matches the `--navy` token. */
  themeColor: "#0f1f45",
  /** Twitter card layout — `summary_large_image` suits the 1200×630 og image. */
  twitterCard: "summary_large_image",
} as const;
