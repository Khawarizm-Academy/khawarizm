import type { ComponentProps } from "react";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

/** Decorative arch (rounded-top block): the identity shape of the
 * Khawarizm artwork. Always hidden from assistive tech. */
export function Arch({ className, ...props }: ComponentProps<"div">) {
  return (
    <div aria-hidden className={cn("rounded-t-full", className)} {...props} />
  );
}

/** Outlined star-burst, drawn with `currentColor`. The Khawarizm
 * signature ornament — spin it with `motion-safe:animate-rotate-slow`. */
export function Burst({
  className,
  points = 16,
}: {
  className?: string;
  points?: number;
}) {
  const coords = Array.from({ length: points * 2 }, (_, i) => {
    const r = i % 2 === 0 ? 48 : 22;
    const a = (Math.PI * i) / points;
    return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");

  return (
    <svg aria-hidden viewBox="0 0 100 100" fill="none" className={className}>
      <polygon
        points={coords}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type PortraitProps = ComponentProps<"div"> & {
  /** Pictogram drawn inside the block (defaults to a person). */
  icon?: typeof User;
};

/** Rounded portrait block standing in for a Figma photo placeholder:
 * blue-toned surface with a ghosted pictogram at its base. Pass
 * `rounded-t-full` to turn it into one of the brand arches. */
export function Portrait({
  className,
  icon: Icon = User,
  ...props
}: PortraitProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden rounded-md bg-gradient-to-br from-navy-300 via-navy-400 to-navy-500",
        className,
      )}
      {...props}
    >
      <Icon
        className="absolute bottom-[-14%] left-1/2 size-[70%] -translate-x-1/2 text-navy/20"
        strokeWidth={1}
      />
    </div>
  );
}

/* RTL note: the page is RTL, but the floating white mini-cards keep an
   LTR inner flow (avatar on the left, bars on the right) exactly like
   the Figma frames — hence `dir="ltr"` below. */

/** Tiny UI-card illustration (gold avatar dot + a couple of text bars),
 * matching the white cards in the Figma hero collages. */
export function MiniCard({ className }: { className?: string }) {
  return (
    <div
      dir="ltr"
      aria-hidden
      className={cn(
        "flex items-center gap-3 rounded-md bg-white p-4 shadow-lg shadow-navy/15",
        className,
      )}
    >
      <span className="size-10 shrink-0 rounded-full bg-brand" />
      <span className="min-w-0 flex-1 space-y-2">
        <span className="block h-3 w-full max-w-[76px] rounded-sm bg-border" />
        <span className="block h-1.5 w-full max-w-[62px] rounded-full bg-border/70" />
        <span className="block h-1.5 w-full max-w-[50px] rounded-full bg-border/70" />
      </span>
    </div>
  );
}

/** White card with a mini bar chart, lifted from the gold CTA
 * artwork (`--gold-100` bars + gold avatar dot). */
export function ChartCard({ className }: { className?: string }) {
  return (
    <div
      dir="ltr"
      aria-hidden
      className={cn(
        "flex items-center gap-4 rounded-md bg-white p-4 shadow-lg shadow-navy/15",
        className,
      )}
    >
      <span className="size-10 shrink-0 rounded-full bg-brand" />
      <span className="flex items-end gap-1.5">
        {[14, 17, 19, 15, 10, 14, 9].map((h, i) => (
          <span
            key={i}
            className="w-1 rounded-sm bg-gold-100"
            style={{ height: `${h * 2}px` }}
          />
        ))}
      </span>
    </div>
  );
}
