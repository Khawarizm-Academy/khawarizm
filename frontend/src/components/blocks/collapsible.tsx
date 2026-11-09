import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";

type CollapsibleRegionProps = {
  /** Controlled by the parent's toggle button (`aria-expanded`/`aria-controls` stay there). */
  open: boolean;
  /** Wire to the toggle's `aria-controls`. */
  id?: string;
  /** Classes for the padded wrapper inside the measured box — NOT for the animating element itself (inner padding keeps the height easing smooth). */
  className?: string;
  children: ReactNode;
};

/** Height-animated disclosure region: eases 0 → auto with a soft opacity wash, removes itself when closed. Pair with a plain `<button aria-expanded>` — the accordion logic stays page-side. */
function CollapsibleRegion({ open, id, className, children }: CollapsibleRegionProps) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="region"
          id={id}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            height: { duration: 0.35, ease: [0.32, 0.72, 0, 1] },
            opacity: { duration: 0.25, ease: "easeOut" },
          }}
          className="overflow-hidden"
        >
          <div className={className}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { CollapsibleRegion, type CollapsibleRegionProps };
