import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useLocation, useOutlet } from "react-router";
import { Footer, Header } from "@/components/layout";
import { pageTransitionProps } from "@/components/motion";

/** App-wide wrapper every route renders into. Hosts the shared shell
 * (header/footer) and animates between routes. */
function RootLayout() {
  const location = useLocation();
  /** Snapshot the current outlet so the exiting page keeps rendering
   * its own content while it animates out (mode="wait"). */
  const outlet = useOutlet();

  return (
    /** `reducedMotion="user"` makes every motion animation respect the
     * OS "reduce motion" setting. */
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-svh flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={location.pathname} {...pageTransitionProps}>
              {outlet}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export { RootLayout };
export default RootLayout;
