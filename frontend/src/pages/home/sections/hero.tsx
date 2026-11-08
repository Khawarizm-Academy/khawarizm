import { motion } from "motion/react";
import { Container } from "@/components/layout";
import { fadeUpItem, staggerContainer } from "@/components/motion";
import {
  BrainDoodle,
  BurstDoodle,
  DoodleArrow,
  DoodleSquiggle,
  MiniCard,
  PhotoFrame,
  Sparkle,
  buttonVariants,
} from "@/components/ui";
import { SITE } from "@/constants/site";
import { HOME_ANCHORS } from "@/router/routes";
import { cn } from "@/lib/utils";

/** Cut-outs for the two arch frames (transparent PNGs).
 * Leave a path empty to keep the ghosted placeholder. */
const HERO_IMAGES = { laptop: "", portrait: "" };

/** Doodle ink sampled from the Figma frame: `#6d82b5` for the
 * hand-drawn marks, the dimmer `#35508f` for the burst. */
const INK = "text-[#6d82b5]";
const INK_DIM = "text-[#35508f]";

/** Hero collage, matched to the Figma hero frame (1127 px wide).
 * Desktop is a fixed 790 × 520 canvas whose offsets are percentages
 * measured from that frame: navy disc, blue laptop arch, gold sparkle
 * disc, brain + burst doodles, gold portrait arch, swirl arrow, mini
 * card and the low arrow. The laptop is a transparent cut-out that
 * overflows its arch (`bleed`), like the design. The canvas is LTR so
 * it grows toward the text column, as in the frame. Mobile collapses to
 * one photo block. */
function HeroArt() {
  return (
    <div aria-hidden dir="ltr" className="w-full">
      {/* Mobile */}
      <div className="relative h-[360px] md:hidden">
        <PhotoFrame
          tone="ghost"
          label="Hero image"
          mat={false}
          className="absolute left-[18%] top-[12%] h-[58%] w-[64%] rounded-t-full rounded-b-none"
        />

        <div className="absolute left-[8%] top-[8%] size-16 rounded-full bg-brand">
          <Sparkle className="m-auto size-10 p-2 text-navy" />
        </div>

        <BrainDoodle className="absolute right-[4%] top-[8%] w-20 text-navy-500" />

        <MiniCard className="bottom-[5%] left-[10%] w-[42%]" />
      </div>

      {/* Desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="relative hidden h-[520px] w-[790px] origin-left md:block md:scale-[0.55] lg:scale-[0.8] min-[1100px]:scale-100"
      >
        {/* Navy disc */}
        <div className="absolute left-[16.6%] top-[21.9%] aspect-square w-[36.5%] rounded-full bg-navy-surface" />

        {/* Blue arch + laptop cut-out (spills past the arch on the right) */}
        <PhotoFrame
          tone="accent"
          src={HERO_IMAGES.laptop}
          label="Laptop image"
          bleed
          fit="contain"
          mat={{ left: "8.4%", right: "-12.6%", top: "7.6%", bottom: "5.1%" }}
          className="absolute left-[6.7%] top-[6.9%] h-[45.6%] w-[24.2%] rounded-t-[46%]"
        />

        {/* Gold sparkle disc */}
        <motion.div
          className="absolute left-[36.7%] top-[12.8%] flex aspect-square w-[11%] items-center justify-center rounded-full bg-brand"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkle className="w-[39%] text-navy" />
        </motion.div>

        <BrainDoodle className={cn("absolute left-[51.8%] top-[18.5%] w-[11.4%]", INK)} />

        <BurstDoodle className={cn("absolute left-[72.3%] top-[13.1%] w-[14.4%]", INK_DIM)} />

        {/* Gold arch portrait (cut-out sits inside the arch) */}
        <PhotoFrame
          tone="gold"
          src={HERO_IMAGES.portrait}
          label="Portrait image"
          fit="contain"
          mat={{ left: "3%", right: "1.5%", top: "16.8%", bottom: "4.6%" }}
          className="absolute left-[38.7%] top-[35.2%] h-[45.8%] w-[24.2%] rounded-t-[48%]"
        />

        <DoodleSquiggle className={cn("absolute left-[6.5%] top-[57.9%] w-[14.2%]", INK)} />

        <MiniCard className="left-[12.3%] top-[71.5%] w-[21%]" />

        <DoodleArrow className={cn("absolute left-[37.6%] top-[88.3%] w-[9.4%]", INK)} />
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
            className="mt-2 max-w-[400px] text-base leading-[30px] text-navy-muted md:mt-6"
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
