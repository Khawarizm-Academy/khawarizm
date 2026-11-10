import type { Variants } from "motion/react";
import { Section, SectionAction, TestimonialCard, StaggerGrid, StaggerItem, lift } from "@/components/blocks";
import { SectionHeading } from "@/components/ui";
import { TESTIMONIALS } from "@/constants/home";
import { ROUTES } from "@/router/routes";

/** Masonry art-direction: cards drop from alternating directions with a slight tilt. */
const reviewCardVariants = (index: number): Variants => ({
  hidden: {
    opacity: 0,
    y: index % 2 === 0 ? 30 : -30,
    rotate: index % 2 === 0 ? -1.2 : 1.2,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

/** Figma masonry vertical shifts (also 4 unique). */
const LIFTS = ["md:-top-10", "md:top-12", "md:-top-8", "md:top-10"];

function Testimonials() {
  return (
    <Section
      tone="background"
      containerClassName="pt-16 pb-16 md:pt-40 md:pb-24"
    >
      <SectionHeading
        align="center"
        eyebrow="آراء العملاء والطلاب"
        title="ماذا يقول عنا عملاؤنا"
      />

      {/* Flush 2×2 masonry (zero gaps in the design); the cards rise in one after another on scroll. */}
      <StaggerGrid
        className="mt-10 md:mt-16 md:grid-cols-2 md:items-start"
        viewport={{ once: true, amount: 0.15 }}
      >
        {TESTIMONIALS.map((t, i) => (
          <StaggerItem key={`${t.name}-${i}`} variants={reviewCardVariants(i)} className={lift(i, LIFTS)}>
            <TestimonialCard
              index={i}
              quote={t.quote}
              name={t.name}
              role={t.role}
              avatar={t.avatar}
            />
          </StaggerItem>
        ))}
      </StaggerGrid>

      <SectionAction
        href={ROUTES.about}
        variant="surface"
        rowClassName="mt-10 md:mt-16"
      >
        كل الآراء
      </SectionAction>
    </Section>
  );
}

export { Testimonials };
