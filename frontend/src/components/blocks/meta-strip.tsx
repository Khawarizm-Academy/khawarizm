import { cn } from "@/lib/utils";

type MetaItem = { label: string; value: string };

type MetaStripProps = {
  items: MetaItem[];
  className?: string;
};

/** The bordered facts strip under a detail page intro (الفئة / العميل / التاريخ): label over value, evenly split. Keep to three items for the Figma rhythm. */
function MetaStrip({ items, className }: MetaStripProps) {
  return (
    <div
      className={cn("grid grid-cols-3 gap-8 border-y border-border py-8 text-center md:gap-20", className)}
    >
      {items.map(({ label, value }) => (
        <div key={label}>
          <p className="font-heading text-sm text-brand-ink">{label}</p>
          <p className="mt-3 text-base text-foreground">{value}</p>
        </div>
      ))}
    </div>
  );
}

export { MetaStrip, type MetaItem, type MetaStripProps };
