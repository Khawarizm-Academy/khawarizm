import type { PropsWithChildren } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { pageTransitionProps } from "./variants";

/** Animated container for any block that should enter/exit like a page
 * (tabs, panels, non-router swaps). The router transition itself lives in
 * RootLayout via AnimatePresence + useOutlet. */
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
