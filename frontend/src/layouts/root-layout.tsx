import { AnimatePresence, motion } from "motion/react";
import { useLocation, useOutlet } from "react-router";
// Placeholder for the future shared shell:
// import { Header } from "@/components/layout/header";
// import { Footer } from "@/components/layout/footer";
import { pageTransitionProps } from "@/components/motion";

/** App-wide wrapper every route renders into. Hosts the shared shell
 * (header/footer when added) and animates between routes. */
function RootLayout() {
  const location = useLocation();
  /** Snapshot the current outlet so the exiting page keeps rendering
   * its own content while it animates out (mode="wait"). */
  const outlet = useOutlet();

  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      {/* <Header /> */}
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={location.pathname} {...pageTransitionProps}>
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export { RootLayout };
export default RootLayout;
