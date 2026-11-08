import { motion } from "motion/react";
import { Container } from "@/components/layout";
import { fadeUpItem, staggerContainer } from "@/components/motion";
import {
  BrainDoodle,
  BurstDoodle,
  DoodleArrow,
  DoodleConnector,
  DoodleCurve,
  DoodleSquiggle,
  MiniCard,
  PhotoFrame,
  Sparkle,
  buttonVariants,
} from "@/components/ui";
import { SITE } from "@/constants/site";
import { HOME_ANCHORS } from "@/router/routes";
import { cn } from "@/lib/utils";

/** Hero collage — the Figma frame's geometry (navy disc, laptop
 * chip, gold disc, arch portrait, floating card) with the shared
 * doodle components from `@/components/ui` layered on top; the photo
 * blocks are `PhotoFrame` (swap in real shots via its `src` prop).
 * All ornaments float on their own idle loops. Collapse to a single
 * photo block on mobile, like the mobile frame. Purely positional
 * geometry (% offsets) — the drawings live in `ui/doodles` +
 * `ui/svg-paths`, the photo frame in `ui/photo-frame`. */
function HeroArt() {
  return (
    <div aria-hidden className="mx-auto w-full max-w-[790px]">
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
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 16,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          ease: "easeOut",
        }}
        className="relative hidden h-[520px] md:block"
      >
        {/* ─────────────────────────────
            Background organic shape
        ───────────────────────────── */}

        <div
          className="
            absolute
            left-[10%]
            top-[15%]
            aspect-square
            w-[47%]
            rounded-full
            bg-navy-surface
          "
        />

        {/* Subtle secondary blob */}
        <div
          className="
            absolute
            left-[20%]
            top-[34%]
            h-[28%]
            w-[42%]
            rounded-[45%]
            bg-navy-surface/70
          "
        />

        {/*
          Arch photo blocks straight from `figma-sources/home`:
          the blue laptop chip (`--shape-blue` → `accent`) and the
          gold arch portrait (`bg-brand`, the default tone). Drop in
          real photos later via `src`, without touching geometry. */}

        <PhotoFrame
          tone="accent"
          label="Laptop image"
          mat="8%"
          className="
            absolute
            left-[7%]
            top-[7%]
            h-[50%]
            w-[30%]
            rounded-t-[48%]
          "
        />

        <DoodleConnector className="absolute left-[20%] top-[49%] w-[24%] text-navy-500" />

        {/* ─────────────────────────────
            Gold sparkle
        ───────────────────────────── */}

        <motion.div
          className="
            absolute
            left-[37%]
            top-[7%]
            flex
            aspect-square
            w-[14%]
            items-center
            justify-center
            rounded-full
            bg-brand
          "
          animate={{
            y: [0, -7, 0],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkle className="w-[55%] text-navy" />
        </motion.div>

        {/* ─────────────────────────────
            Brain doodle
        ───────────────────────────── */}

        <BrainDoodle
          className="
            absolute
            left-[52%]
            top-[13%]
            w-[16%]
            text-navy-500
          "
        />

        {/* ─────────────────────────────
            Burst
        ───────────────────────────── */}

        <BurstDoodle
          className="
            absolute
            left-[72%]
            top-[4%]
            w-[15%]
            text-navy-500
          "
        />

        <PhotoFrame
          label="Portrait image"
          className="
            absolute
            left-[39%]
            top-[39%]
            h-[52%]
            w-[31%]
          "
        />

        {/* ─────────────────────────────
            Left hand-drawn squiggle
        ───────────────────────────── */}

        <DoodleSquiggle
          className="
            absolute
            left-[3%]
            top-[58%]
            w-[18%]
            text-navy-500
          "
        />

        {/* ─────────────────────────────
            Mini card
        ───────────────────────────── */}

        <MiniCard
          className="
            bottom-[4%]
            left-[8%]
            w-[27%]
          "
        />

        {/* ─────────────────────────────
            Bottom curved arrow
        ───────────────────────────── */}

        <DoodleArrow
          className="
            absolute
            bottom-[0%]
            left-[34%]
            w-[22%]
            text-navy-500
          "
        />

        {/* ─────────────────────────────
            Tiny floating curve
        ───────────────────────────── */}

        <DoodleCurve
          className="
            absolute
            left-[46%]
            top-[63%]
            w-[11%]
            text-navy-500
          "
        />
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
