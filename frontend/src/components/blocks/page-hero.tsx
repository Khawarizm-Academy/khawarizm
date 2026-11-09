import { motion } from "motion/react";
import { Section } from "@/components/blocks/section";
import { fadeUpItem, staggerContainer } from "@/components/motion";

type PageHeroProps = {
  title: string;
  /** Support line under the title. */
  lead?: string;
};

/** Navy intro band for routed pages: centered oversized display title (+ optional lead) that staggers in on load. Reuse for الخدمات / الأعمال / الدورات / تواصل. */
function PageHero({ title, lead }: PageHeroProps) {
  return (
    <Section
      tone="navy"
      containerClassName="flex min-h-80 flex-col items-center justify-center pb-14 pt-10 text-center md:pb-16"
    >
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.h1
          variants={fadeUpItem}
          className="font-display text-5xl font-extrabold leading-tight text-white md:text-7xl"
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p
            variants={fadeUpItem}
            className="mx-auto mt-6 max-w-142.5 text-base leading-7 text-navy-muted"
          >
            {lead}
          </motion.p>
        )}
      </motion.div>
    </Section>
  );
}

export { PageHero, type PageHeroProps };
