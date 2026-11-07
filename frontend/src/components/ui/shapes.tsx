import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Decorative arch (rounded-top block): the identity shape of the
 * Khawarizm artwork. Always hidden from assistive tech. */
export function Arch({ className, ...props }: ComponentProps<"div">) {
  return (
    <div aria-hidden className={cn("rounded-t-full", className)} {...props} />
  );
}

/** Outlined star-burst, drawn with `currentColor`. */
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

/** Tiny UI-card illustration (avatar dot + two text bars). */
export function MiniCard({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex items-center gap-3 rounded-md bg-white p-3 shadow-lg shadow-navy/20",
        className,
      )}
    >
      <span className="size-6 shrink-0 rounded-full bg-brand" />
      <span className="flex-1 space-y-1.5">
        <span className="block h-1.5 rounded-full bg-brand" />
        <span className="block h-1.5 w-2/3 rounded-full bg-border" />
      </span>
    </div>
  );
}
