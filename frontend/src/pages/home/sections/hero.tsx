import { Laptop, Sparkles, User } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/layout";
import { fadeUpItem, staggerContainer } from "@/components/motion";
import { Arch, Burst, MiniCard, buttonVariants } from "@/components/ui";
import { SITE } from "@/constants/site";
import { HOME_ANCHORS } from "@/router/routes";
import { cn } from "@/lib/utils";

function HeroArt() {
  return (
    <div
      aria-hidden
      className="relative mx-auto h-[280px] w-full max-w-[440px] md:h-[400px]"
    >
      <Arch className="absolute top-[8%] left-0 flex h-[58%] w-[34%] items-center justify-center bg-accent">
        <Laptop className="size-12 text-white md:size-16" strokeWidth={1.5} />
      </Arch>
      <span className="absolute top-0 left-[44%] flex size-12 items-center justify-center rounded-full bg-brand md:size-14">
        <Sparkles className="size-6 text-navy" />
      </span>
      <Arch className="absolute top-[26%] left-[34%] flex h-[66%] w-[36%] items-end justify-center overflow-hidden bg-brand">
        <User
          className="size-24 translate-y-3 fill-navy text-navy md:size-32"
          strokeWidth={1}
        />
      </Arch>
      <Burst className="absolute top-[2%] right-[6%] size-20 text-white/40 md:size-24" />
      <MiniCard className="absolute bottom-[4%] left-0 w-[44%]" />
    </div>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden bg-navy text-navy-foreground">
      <Container className="grid items-center gap-8 pt-4 pb-16 md:grid-cols-2 md:pt-8 md:pb-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-5"
        >
          <motion.p
            variants={fadeUpItem}
            className="font-heading text-sm text-brand"
          >
            {SITE.tagline}
          </motion.p>
          <motion.h1
            variants={fadeUpItem}
            className="font-display text-5xl leading-[1.3] font-extrabold text-white md:text-7xl md:leading-[1.25]"
          >
            نبني مستقبلك التقني
          </motion.h1>
          <motion.p
            variants={fadeUpItem}
            className="max-w-md text-base leading-loose text-navy-muted md:text-lg"
          >
            نعلّمك الخوارزميات والبرمجة، ونصمّم لك مواقعك وتطبيقاتك من الفكرة
            إلى الإطلاق.
          </motion.p>
          <motion.div variants={fadeUpItem} className="mt-2">
            <a
              href={HOME_ANCHORS.works}
              className={cn(buttonVariants({ variant: "light", size: "lg" }))}
            >
              شاهد أعمالنا
            </a>
          </motion.div>
        </motion.div>

        <div className="order-first md:order-last">
          <HeroArt />
        </div>
      </Container>
    </section>
  );
}

export { Hero };
