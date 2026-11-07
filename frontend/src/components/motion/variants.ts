import type { Variants } from "motion/react";

/** Shared animation presets — reuse via `variants` + `initial/animate`. */

/** Subtle fade+rise for scroll-triggered content. Pair with `staggerContainer`. */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Parent wrapper that staggers its children (`hidden` / `visible`). */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/** Page enter/exit used by the router page transition. */
export const pageVariants: Variants = {
  enter: { opacity: 0, y: 16 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export const pageTransitionProps = {
  variants: pageVariants,
  initial: "enter",
  animate: "center",
  exit: "exit",
} as const;
