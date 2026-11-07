import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/layout";
import { fadeUpItem, staggerContainer } from "@/components/motion";
import { Burst, MiniCard, Portrait, buttonVariants } from "@/components/ui";
import { SITE } from "@/constants/site";
import { HOME_ANCHORS } from "@/router/routes";
import { cn } from "@/lib/utils";

/** Hero collage — the Figma frame's geometry (navy disc, outline
 * square, blue chip, twin photo blocks, gold dot, floating card) with
 * the brand identity shapes restored: the top-rounded **arch** portrait
 * and the star **burst**, plus a slow CSS float on light ornaments.
 * Collapse to a single photo block on mobile, like the mobile frame. */
function HeroArt() {
  return (
    <div aria-hidden className="mx-auto w-full max-w-[560px]">
      {/* Mobile: single hero image block. */}
      <Portrait className="h-[334px] w-full rounded-none md:hidden" />

      {/* Desktop: decorative composition (790×520 frame geometry). */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="relative hidden h-[520px] md:block"
      >
        <div className="absolute left-[10%] top-[15%] aspect-square w-[47%] rounded-full bg-navy-surface" />
        <div className="absolute top-[3.5%] right-0 aspect-square w-[19%] border-2 border-navy-500" />
        <div className="absolute left-[55%] top-[11%] h-[16%] w-[14%] bg-navy-400" />

        <Burst
          className="motion-safe:animate-rotate-slow absolute top-[2%] left-[26%] size-14 text-white/40"
          points={12}
        />

        {/* Brand arch portrait (was here before the Figma rebuild —
            the rounded-t-top is the Khawarizm signature shape). */}
        <Portrait className="absolute top-0 left-0 h-[51%] w-[32%] rounded-t-full" />
        <Portrait className="absolute left-[38%] top-[39%] h-[52%] w-[31%]" />

        {/* Gold sparkle dot — bobs gently. */}
        <span className="motion-safe:animate-float absolute top-[3%] left-[36%] flex aspect-square w-[14%] items-center justify-center rounded-full bg-brand">
          <Sparkles className="size-6 text-navy" />
        </span>

        <MiniCard className="motion-safe:animate-float-slow absolute bottom-[2%] left-[4%] w-[27%]" />
      </motion.div>
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
