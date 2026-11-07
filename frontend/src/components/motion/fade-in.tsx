import type { PropsWithChildren } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type FadeInProps = PropsWithChildren<{
  className?: string;
  /** Rise distance in px (0 = pure fade). */
  y?: number;
  delay?: number;
  duration?: number;
}>;

/** Fade (and optionally rise) content in when it scrolls into view. */
export function FadeIn({
  children,
  className,
  y = 0,
  delay = 0,
  duration = 0.5,
}: FadeInProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
