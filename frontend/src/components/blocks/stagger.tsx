import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import { fadeUpItem, staggerContainer } from "@/components/motion";
import { cn } from "@/lib/utils";

/** The shared hover spring of every card grid (`scale 1.015` from the Figma hover frames). */
const SPRING_LIFT = { type: "spring", stiffness: 260, damping: 22 } as const;

type Tag = "ul" | "ol" | "div";

type StaggerGridProps = Omit<HTMLMotionProps<"ul">, "ref" | "viewport"> & {
  /** `ol` for ordered flows (courses), `div` for plain compositions. */
  tag?: Tag;
  /** Scroll-trigger viewport tuning — defaults to the shared `once: true, amount: 0.2`. */
  viewport?: { once?: boolean; amount?: number; margin?: string };
};

/** Parent of a staggered card grid: `motion.*` list + `staggerContainer`, scrolling in once. Pair children with `StaggerItem`. */
function StaggerGrid({
  tag = "ul",
  viewport = { once: true, amount: 0.2 },
  className,
  ...props
}: StaggerGridProps) {
  const Tag = motion[tag] as typeof motion.ul;
  return (
    <Tag
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={cn("grid", className)}
      {...props}
    />
  );
}

type StaggerItemProps = Omit<HTMLMotionProps<"li">, "ref"> & {
  /** Item motion — defaults to `fadeUpItem`; pass a custom `Variants` for art-directed entries (testimonial masonry). */
  variants?: Variants;
  /** Hover scale spring — off for pieces that shouldn't react to pointer. */
  hover?: boolean;
};

/** One card slot inside `StaggerGrid`: rises with `fadeUpItem`, springs on hover, always `relative` so Figma `md:top-*` offsets from `lift()` can shift it. */
function StaggerItem({
  variants = fadeUpItem,
  hover = true,
  className,
  children,
  ...props
}: StaggerItemProps) {
  return (
    <motion.li
      variants={variants}
      whileHover={hover ? { scale: 1.015 } : undefined}
      transition={SPRING_LIFT}
      className={cn("relative", className)}
      {...props}
    >
      {children}
    </motion.li>
  );
}

/** Figma art-directs every other card a few px up/down. Pass a section's offset cycle, get the class for index `i` — cards beyond the pattern wrap around. Returns `undefined` (no class) for one-off grids. */
function lift(index: number, pattern: string[]): string | undefined {
  if (pattern.length === 0) return undefined;
  return pattern[index % pattern.length];
}

// `lift()` is colocated with the stagger system it parametrizes (like buttonVariants).
// eslint-disable-next-line react-refresh/only-export-components
export { StaggerGrid, StaggerItem, lift, type StaggerGridProps, type StaggerItemProps };
