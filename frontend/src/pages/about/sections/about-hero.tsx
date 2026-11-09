import { motion } from "motion/react";
import { Container } from "@/components/layout";
import { fadeUpItem, staggerContainer } from "@/components/motion";

export function AboutHero() {
  return (
    <section className="bg-navy text-navy-foreground">
      <Container className="flex min-h-80 flex-col items-center justify-center pb-14 pt-10 text-center md:min-h-80 md:pb-16">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1 variants={fadeUpItem} className="font-display text-5xl font-extrabold leading-tight text-white md:text-7xl">
            من نحن
          </motion.h1>
          <motion.p variants={fadeUpItem} className="mx-auto mt-6 max-w-142.5 text-base leading-7 text-navy-muted">
            أكاديمية تقنية عربية تعلّم البرمجة وتبني المشاريع الرقمية.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
