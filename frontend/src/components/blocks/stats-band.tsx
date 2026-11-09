import { motion } from "motion/react";
import { fadeUpItem, staggerContainer } from "@/components/motion";
import { lift } from "@/components/blocks/stagger";
import { cn } from "@/lib/utils";
import type { Stat } from "@/types";

/** Default Figma offsets: the middle plate dips slightly lower than its neighbours. */
const DEFAULT_OFFSETS = ["md:-top-3", "md:top-5", "md:-top-2"] as const;

type StatsBandProps = {
  stats: Stat[];
  /** Per-plate Figma vertical shifts, cycled across the grid. */
  offsets?: string[];
  className?: string;
  itemClassName?: string;
};

/** The bordered stats strip (أرقامنا): one rounded grid, flush three columns at `md` behind hairline dividers, numbers `dir="ltr"` and big-first (`flex-col-reverse`). Scrolling numbers rise staggered. */
function StatsBand({
  stats,
  offsets = [...DEFAULT_OFFSETS],
  className,
  itemClassName,
}: StatsBandProps) {
  return (
    <motion.dl
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={cn(
        "grid overflow-hidden rounded-md border border-border divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0",
        className,
      )}
    >
      {stats.map((stat, i) => (
        /* dt before dd for valid markup; flex-col-reverse shows the big number first, label under it. */
        <motion.div
          key={stat.label}
          variants={fadeUpItem}
          className={cn(
            "relative flex flex-col-reverse gap-1.5 px-8 py-10 md:px-10 md:py-11",
            lift(i, offsets),
            itemClassName,
          )}
        >
          <dt className="text-xl leading-9 text-foreground">{stat.label}</dt>
          <dd
            dir="ltr"
            className="text-right font-display text-[36px] font-extrabold leading-12.5 text-foreground md:text-[40px] md:leading-14"
          >
            {stat.value}
          </dd>
        </motion.div>
      ))}
    </motion.dl>
  );
}

export { StatsBand, type StatsBandProps };
