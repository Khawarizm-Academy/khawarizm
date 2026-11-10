import { Helmet } from "react-helmet-async";
import { generateMetadata } from "./generateMetadata";
import type { JsonLdObject, SEOProps } from "./generateMetadata";
import { createBreadcrumbListSchema, createOrganizationSchema, createWebPageSchema, createWebSiteSchema } from "./schemas";
import { SITE_CONFIG } from "./siteConfig";
import { StructuredData } from "./StructuredData";

export type { SEOProps } from "./generateMetadata";

/**
 * Centralized SEO component — the only place a page touches metadata.
 *
 * Renders title, description, canonical, robots, theme-color, Open Graph and
 * Twitter tags from resolved metadata, plus core JSON-LD (Organization,
 * WebSite, WebPage, optional BreadcrumbList). Pages pass extra schemas via
 * the `schema` prop. When `robots` forbids indexing (e.g. the 404 page),
 * canonical/og:url and all structured data are omitted.
 *
 * Usage:
 *   <SEO title="Our Services" description="…" canonical="/services" />
 */
export function SEO(props: SEOProps) {
  const meta = generateMetadata(props);
  const { noindex } = meta;

  const breadcrumbItems = props.breadcrumb ?? [];
  const breadcrumbSchema =
    !noindex && breadcrumbItems.length > 0
      ? createBreadcrumbListSchema({ items: breadcrumbItems, url: meta.canonicalUrl })
      : null;

  const schemas: JsonLdObject[] = noindex
    ? []
    : [
        createOrganizationSchema(),
        createWebSiteSchema(),
        createWebPageSchema({
          title: meta.title,
          description: meta.description,
          url: meta.canonicalUrl,
          withBreadcrumb: Boolean(breadcrumbSchema),
        }),
        ...(breadcrumbSchema ? [breadcrumbSchema] : []),
        ...(props.schema ? (Array.isArray(props.schema) ? props.schema : [props.schema]) : []),
      ];

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.keywords && <meta name="keywords" content={meta.keywords} />}
        <meta name="robots" content={meta.robots} />
        <meta name="theme-color" content={SITE_CONFIG.themeColor} />
        {meta.author && <meta name="author" content={meta.author} />}
        {!noindex && <link rel="canonical" href={meta.canonicalUrl} />}

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        {!noindex && <meta property="og:url" content={meta.canonicalUrl} />}
        {meta.imageUrl && <meta property="og:image" content={meta.imageUrl} />}
        {meta.imageUrl && meta.imageAlt && <meta property="og:image:alt" content={meta.imageAlt} />}
        <meta property="og:site_name" content={SITE_CONFIG.name} />
        <meta property="og:locale" content={meta.ogLocale} />

        <meta name="twitter:card" content={SITE_CONFIG.twitterCard} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {meta.imageUrl && <meta name="twitter:image" content={meta.imageUrl} />}
        {meta.imageUrl && meta.imageAlt && <meta name="twitter:image:alt" content={meta.imageAlt} />}
      </Helmet>

      {schemas.length > 0 && <StructuredData schema={schemas} />}
    </>
  );
}
