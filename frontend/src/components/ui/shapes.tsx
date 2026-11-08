import type { ComponentProps } from "react";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

/** Decorative arch (rounded-top block): the identity shape of the Khawarizm artwork. Always hidden from assistive tech. */
export function Arch({ className, ...props }: ComponentProps<"div">) {
  return (
    <div aria-hidden className={cn("rounded-t-full", className)} {...props} />
  );
}

/** Outlined star-burst, drawn with `currentColor`. The Khawarizm signature ornament — spin it with `motion-safe:animate-rotate-slow`. */
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

/** Rounded portrait block standing in for a Figma photo placeholder: blue-toned surface with a ghosted pictogram at its base. Pass `rounded-t-full` to turn it into one of the brand arches. */
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

/** White profile card from the hero collage: gold avatar dot + four skeleton bars. Everything inside is placed in percentages of a fixed 166 × 87 ratio (measured from the Figma frame), so it scales with the collage. Floats on a slow idle loop. */
export function MiniCard({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      className={cn(
        "absolute aspect-166/87 rounded-[5px] bg-white shadow-sm",
        className,
      )}
      animate={{
        y: [0, -5, 0],
        rotate: [-1, 0.5, -1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="absolute left-[7.8%] top-[16%] aspect-square w-[21%] rounded-full bg-brand" />
      <span className="absolute left-[39.2%] top-[24.6%] h-[12%] w-[44.3%] rounded-[3px] bg-gold-100" />
      <span className="absolute left-[39.2%] top-[50.6%] h-[5.7%] w-[36.6%] rounded-full bg-gold-100" />
      <span className="absolute left-[39.2%] top-[63.2%] h-[5.7%] w-[44.3%] rounded-full bg-gold-100" />
      <span className="absolute left-[39.2%] top-[75.9%] h-[5.7%] w-[28.9%] rounded-full bg-gold-100" />
    </motion.div>
  );
}

/** White card with a mini bar chart, lifted from the gold CTA artwork (`--gold-100` bars + gold avatar dot). */
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
