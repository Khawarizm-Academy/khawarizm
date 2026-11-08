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
import { HERO_IMAGES } from "@/constants/home";
import { SITE } from "@/constants/site";
import { HOME_ANCHORS } from "@/router/routes";
import type { HeroImages } from "@/types";
import { cn } from "@/lib/utils";

// Doodle ink from the Figma frame — marks `#6d82b5`, dimmer burst `#35508f`.
const INK = "text-[#6d82b5]";
const INK_DIM = "text-[#35508f]";

/** Hero collage from the Figma hero frame: fixed 790 × 520 desktop canvas (LTR) whose %-offsets are scaled ×1.15 (centers pinned), plus a one-photo mobile block; `images` flows `Hero → HeroArt → PhotoFrame`, empty paths keep ghosted placeholders. */
function HeroArt({ images }: { images: HeroImages }) {
  return (
    <div aria-hidden dir="ltr" className="w-full">
      {/* Mobile */}
      <div className="relative h-90 md:hidden">
        <img src="/assets/41-72.svg" alt="" className="absolute inset-0 h-full w-full object-contain" />
        <div className="hidden">
        <PhotoFrame
          tone="ghost"
          label="Hero image"
          mat={false}
          className="absolute left-[18%] top-[12%] h-[67%] w-[74%] rounded-t-full rounded-b-none"
        />

        <div className="absolute left-[8%] top-[8%] size-18.5 rounded-full bg-brand">
          <Sparkle className="m-auto size-12 p-2 text-navy" />
        </div>

        <BrainDoodle className="absolute right-[4%] top-[8%] w-24 text-navy-500" />

        <MiniCard className="bottom-[5%] left-[10%] w-[48%]" />
        </div>
      </div>

      {/* Desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="relative hidden h-130 w-197.5 origin-left md:block md:scale-[0.55] lg:scale-[0.8] min-[1100px]:scale-100 [&>*:not(img)]:hidden"
      >
        <img src="/assets/41-72.svg" alt="" className="absolute inset-0 h-full w-full object-contain" />
        {/* Navy disc */}
        <div className="absolute left-[13.9%] top-[17.7%] aspect-square w-[42%] rounded-full bg-navy-surface" />

        {/* Blue arch + laptop cut-out (spills past the arch on the right) */}
        <PhotoFrame
          tone="accent"
          src={images.laptop}
          label="Laptop image"
          bleed
          fit="contain"
          mat={{ left: "8.4%", right: "-12.6%", top: "7.6%", bottom: "5.1%" }}
          className="absolute left-[4.9%] top-[3.5%] h-[52.4%] w-[27.8%] rounded-t-[46%]"
        />

        {/* Gold sparkle disc */}
        <motion.div
          className="absolute left-[35.9%] top-[11.5%] flex aspect-square w-[12.6%] items-center justify-center rounded-full bg-brand"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkle className="w-[39%] text-navy" />
        </motion.div>

        <BrainDoodle className={cn("absolute left-[50.9%] top-[17.5%] w-[13.1%]", INK)} />

        <BurstDoodle className={cn("absolute left-[71.1%] top-[11.5%] w-[16.6%]", INK_DIM)} />

        {/* Gold arch portrait (cut-out sits inside the arch) */}
        <PhotoFrame
          tone="gold"
          src={images.portrait}
          label="Portrait image"
          fit="contain"
          mat={{ left: "3%", right: "1.5%", top: "16.8%", bottom: "4.6%" }}
          className="absolute left-[36.9%] top-[31.8%] h-[52.7%] w-[27.8%] rounded-t-[48%]"
        />

        <DoodleSquiggle className={cn("absolute left-[5.4%] top-[57.1%] w-[16.3%]", INK)} />

        <MiniCard className="left-[10.7%] top-[70.2%] w-[24.2%]" />

        <DoodleArrow className={cn("absolute left-[36.9%] top-[87.9%] w-[10.8%]", INK)} />
      </motion.div>
    </div>
  );
}

/** Hero content lives in `@/constants/home`; `images` defaults to `HERO_IMAGES`, where empty paths render ghosted placeholders. */
function Hero({ images = HERO_IMAGES }: { images?: HeroImages }) {
  return (
    <section className="overflow-hidden bg-navy text-navy-foreground">
      <Container className="grid gap-10 pt-2 pb-16 md:min-h-190 md:grid-cols-2 md:items-center md:gap-14 md:pt-20 md:pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="order-last flex flex-col items-start gap-4 md:order-0"
        >
          <motion.p
            variants={fadeUpItem}
            className="font-heading text-base font-medium leading-7 text-brand"
          >
            {SITE.tagline}
          </motion.p>
          <motion.h1
            variants={fadeUpItem}
            className="font-display text-[44px] font-extrabold leading-15 text-white md:text-[72px] md:leading-23"
          >
            نبني مستقبلك التقني
          </motion.h1>
          <motion.p
            variants={fadeUpItem}
            className="mt-2 max-w-100 text-base leading-7.5 text-navy-muted md:mt-6"
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

        <div className="order-first md:order-0">
          <HeroArt images={images} />
        </div>
      </Container>
    </section>
  );
}

export { Hero };
