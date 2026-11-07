import { motion } from "motion/react";
import { Container } from "@/components/layout";
import { fadeUpItem, staggerContainer } from "@/components/motion";
import { MiniCard, Portrait, buttonVariants } from "@/components/ui";
import { SITE } from "@/constants/site";
import { HOME_ANCHORS } from "@/router/routes";
import { cn } from "@/lib/utils";

/** Hero collage (Figma desktop): navy disc behind two portrait blocks,
 * with a gold dot, blue chip, outline square and a floating white card.
 * On mobile it collapses to a single full-width photo block. */
function HeroArt() {
  return (
    <div aria-hidden className="mx-auto w-full max-w-[560px]">
      {/* Mobile: single hero image block. */}
      <Portrait className="h-[334px] w-full rounded-none md:hidden" />

      {/* Desktop: decorative composition (positions from the Figma
          790×520 collage frame). */}
      <div className="relative hidden h-[520px] md:block">
        <div className="absolute left-[10%] top-[15%] aspect-square w-[47%] rounded-full bg-navy-surface" />
        <div className="absolute right-0 top-[3.5%] aspect-square w-[19%] border-2 border-navy-500" />
        <div className="absolute left-[55%] top-[11%] h-[16%] w-[14%] bg-navy-400" />
        <Portrait className="absolute left-0 top-0 h-[51%] w-[32%] rounded-none" />
        <Portrait className="absolute left-[38%] top-[39%] h-[52%] w-[31%]" />
        <div className="absolute left-[36%] top-[3%] aspect-square w-[14%] rounded-full bg-brand" />
        <MiniCard className="absolute bottom-[2%] left-[4%] w-[27%]" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden bg-navy text-navy-foreground">
      <Container className="grid gap-10 pt-2 pb-16 md:min-h-[760px] md:grid-cols-2 md:items-center md:gap-14 md:pt-20 md:pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="order-last flex flex-col items-start gap-4 md:order-none"
        >
          <motion.p
            variants={fadeUpItem}
            className="font-heading text-base font-medium leading-7 text-brand"
          >
            {SITE.tagline}
          </motion.p>
          <motion.h1
            variants={fadeUpItem}
            className="font-display text-[44px] font-extrabold leading-[60px] text-white md:text-[72px] md:leading-[92px]"
          >
            نبني مستقبلك التقني
          </motion.h1>
          <motion.p
            variants={fadeUpItem}
            className="mt-2 max-w-[560px] text-base leading-[30px] text-navy-muted md:mt-6"
          >
            نعلّمك الخوارزميات والبرمجة، ونصمم لك موقعك وتطبيقك من الفكرة
            إلى الإطلاق.
          </motion.p>
          <motion.div
            variants={fadeUpItem}
            className="mt-2 flex flex-col items-start gap-4 md:mt-4 md:flex-row md:items-center"
          >
            <a
              href={HOME_ANCHORS.courses}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              تصفح الدورات
            </a>
            <a
              href={HOME_ANCHORS.works}
              className={cn(buttonVariants({ variant: "light", size: "lg" }))}
            >
              شاهد أعمالنا
            </a>
          </motion.div>
        </motion.div>

        <div className="order-first md:order-none">
          <HeroArt />
        </div>
      </Container>
    </section>
  );
}

export { Hero };
