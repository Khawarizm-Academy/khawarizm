import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Container } from "@/components/layout";
import { staggerContainer } from "@/components/motion";
import { SectionHeading, buttonVariants } from "@/components/ui";
import { TESTIMONIALS } from "@/constants/home";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/router/routes";
import type { Testimonial } from "@/types";

/* Figma masonry quirks: 1px gold border per card, partial corner rounding, first (top-right) card white w/ soft shadow. */
const CARD_CORNER: Record<number, string> = {
  0: "rounded-t-md md:rounded-tr-none md:rounded-bl-none md:rounded-br-none",
  1: "rounded-md md:rounded-tl-none md:rounded-bl-none md:rounded-br-none",
  2: "rounded-md md:rounded-tl-none md:rounded-tr-none",
  3: "rounded-md md:rounded-tl-none md:rounded-tr-none md:rounded-bl-none",
};

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

function TestimonialCard({ testimonial: t, index }: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.li
      variants={reviewCardVariants(index)}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "flex flex-col border border-border p-6 md:p-12",
        CARD_CORNER[index],
        index === 0 ? "md:-top-10" : index === 1 ? "md:top-12" : index === 2 ? "md:-top-8" : "md:top-10",
        index === 0 &&
          "bg-surface shadow-[0_32px_64px_rgba(15,31,69,0.04)]",
      )}
    >
      <img src={`/assets/${["41-445.svg", "41-456.svg", "41-467.svg", "41-478.svg"][index]}`} alt="تقييم 5 من 5" className="h-6 w-38 object-contain object-right" />
      <blockquote className="mt-8 flex-1 text-base leading-7.5 text-muted">
        {t.quote}
      </blockquote>
      <div className="mt-8 flex items-center gap-5">
        {t.avatar ? (
          <img src={t.avatar} alt="" className="size-16 shrink-0 rounded-full object-cover md:size-20" />
        ) : (
          <span aria-hidden className="flex size-16 shrink-0 items-center justify-center rounded-full bg-navy-surface font-display text-2xl font-extrabold text-white md:size-20">
            {t.name.charAt(0)}
          </span>
        )}
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

        {/* Flush 2×2 masonry (zero gaps in the design); the cards rise in one after another on scroll. */}
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
