import { motion } from "motion/react";
import { Container } from "@/components/layout";
import { fadeUpItem, staggerContainer } from "@/components/motion";
import { Rating, SectionHeading, buttonVariants } from "@/components/ui";
import { TESTIMONIALS } from "@/constants/home";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/router/routes";
import type { Testimonial } from "@/types";

/* Figma masonry quirks: every card keeps its own 1px gold border; only
   some corners are rounded, and the first (top-right) card is solid
   white with a soft shadow. */
const CARD_CORNER: Record<number, string> = {
  0: "rounded-t-md md:rounded-tr-none md:rounded-bl-none md:rounded-br-none",
  1: "rounded-md md:rounded-tl-none md:rounded-bl-none md:rounded-br-none",
  2: "rounded-md md:rounded-tl-none md:rounded-tr-none",
  3: "rounded-md md:rounded-tl-none md:rounded-tr-none md:rounded-bl-none",
};

function TestimonialCard({ testimonial: t, index }: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.li
      variants={fadeUpItem}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "flex flex-col border border-border p-6 md:p-12",
        CARD_CORNER[index],
        index === 0 &&
          "bg-surface shadow-[0_32px_64px_rgba(15,31,69,0.04)]",
      )}
    >
      <Rating label="تقييم 5 من 5" />
      <blockquote className="mt-8 flex-1 text-base leading-[30px] text-muted">
        {t.quote}
      </blockquote>
      <div className="mt-8 flex items-center gap-5">
        <span
          aria-hidden
          className="flex size-16 shrink-0 items-center justify-center rounded-full bg-navy-surface font-display text-2xl font-extrabold text-white md:size-20"
        >
          {t.name.charAt(0)}
        </span>
        <div>
          <p className="font-heading text-xl font-bold leading-8 md:text-2xl md:leading-9">
            {t.name}
          </p>
          <p className="mt-0.5 text-base leading-6 text-foreground">
            {t.role}
          </p>
        </div>
      </div>
    </motion.li>
  );
}

function Testimonials() {
  return (
    <section className="bg-background pt-16 pb-16 md:pt-40 md:pb-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="آراء العملاء والطلاب"
          title="ماذا يقول عنا عملاؤنا"
        />

        {/* Flush 2×2 masonry (zero gaps in the design); the cards rise
            in one after another on scroll. */}
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid md:mt-16 md:grid-cols-2 md:items-start"
        >
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </motion.ul>

        <div className="mt-10 flex justify-center md:mt-16">
          <a
            href={ROUTES.about}
            className={cn(buttonVariants({ variant: "surface" }))}
          >
            كل الآراء
          </a>
        </div>
      </Container>
    </section>
  );
}

export { Testimonials };
