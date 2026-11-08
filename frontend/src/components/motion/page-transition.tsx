import type { PropsWithChildren } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { pageTransitionProps } from "./variants";

/** Animated container for page-like enter/exit (tabs, panels, non-router swaps); the router transition lives in RootLayout. */
export function PageTransition({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div className={cn(className)} {...pageTransitionProps}>
      {children}
    </motion.div>
  );
}
