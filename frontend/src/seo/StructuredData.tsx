import { Helmet } from "react-helmet-async";
import type { JsonLdObject } from "./generateMetadata";

export interface StructuredDataProps {
  /** One JSON-LD script per schema object. */
  schema: JsonLdObject | JsonLdObject[];
}

/**
 * Render Schema.org JSON-LD into the document head. Helmet manages the
 * scripts (tagged with its own attribute), so navigating between pages
 * swaps the old page's structured data out — never duplicated, never stale.
 */
export function StructuredData({ schema }: StructuredDataProps) {
  const items = Array.isArray(schema) ? schema : [schema];
  return (
    <Helmet>
      {items.map((item, index) => (
        <script key={String(item["@id"] ?? index)} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
