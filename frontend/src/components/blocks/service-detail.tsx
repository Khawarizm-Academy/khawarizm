import { Check, ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useId, useState } from "react";
import { CollapsibleRegion } from "@/components/blocks/collapsible";
import { cn } from "@/lib/utils";

type ServiceDetailCardProps = {
  /** Eyebrow (short label like «الدورات التعليمية») — doubles as part of the toggle's accessible name. */
  title: string;
  heading: string;
  body: string;
  icon: LucideIcon;
  points: string[];
  /** Start expanded — the first row of a list usually opens. */
  defaultOpen?: boolean;
  className?: string;
};

/** The services-page row as a collapsible block: the whole header (eyebrow title + display heading + gold icon disc + chevron) is one accessible toggle; body + gold-checked bullets ease open **beneath** it — the display heading owns the full row (long Arabic titles stay on one line) and the details read under the title, stacked full-width. */
function ServiceDetailCard({
  title,
  heading,
  body,
  icon: Icon,
  points,
  defaultOpen = false,
  className,
}: ServiceDetailCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const regionId = useId();

  return (
    <div className={cn("flex flex-col gap-10", className)}>
      {/* `<h3><button…>` — the WAI-ARIA accordion pattern: text stays heading-level, the phrasing-content button keeps `aria-expanded`/`aria-controls` clean. */}
      <h3 className="w-full">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={regionId}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full cursor-pointer items-start justify-between gap-5 text-start"
        >
          <span className="flex flex-col items-start">
            <span className="font-heading text-base font-medium text-brand-ink">{title}</span>
            <span className="mt-5 font-display text-3xl font-extrabold leading-[1.45] text-foreground md:text-[40px]">
              {heading}
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-3">
            <span
              aria-hidden
              className={cn(
                "flex size-12 items-center justify-center rounded-full border transition-colors duration-300",
                open ? "border-brand bg-brand/10 text-brand-ink" : "border-border text-navy hover:bg-sand",
              )}
            >
              <ChevronDown className={cn("size-5 transition-transform duration-300", open && "rotate-180")} />
            </span>
            <span
              aria-hidden
              className="flex size-20 shrink-0 items-center justify-center rounded-full bg-brand"
            >
              <Icon className="size-8 text-navy" strokeWidth={1.5} />
            </span>
          </span>
        </button>
      </h3>

      <CollapsibleRegion open={open} id={regionId}>
        <div>
          <p className="text-base leading-8 text-muted">{body}</p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-base text-foreground">
                <span aria-hidden className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand">
                  <Check className="size-4 text-navy" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </CollapsibleRegion>
    </div>
  );
}

export { ServiceDetailCard, type ServiceDetailCardProps };
