import { Section, Split } from "@/components/blocks";
import { FadeIn } from "@/components/motion";
import { Portrait, SectionHeading, buttonVariants } from "@/components/ui";
import { ROUTES } from "@/router/routes";
import { cn } from "@/lib/utils";

/** About collage per Figma: sand card + brown square above, triple-avatar chip, main photo, gold medal w/ portrait; 1 photo on mobile. */
function AboutArt() {
  return (
    <div aria-hidden className="mx-auto w-full max-w-142.5">
      {/* Mobile: single image block. */}
      <img src="/assets/41-113.svg" alt="" className="h-85 w-full object-contain md:hidden" />

      {/* Desktop: decorative composition (570×570 frame geometry). */}
      <div className="relative hidden h-135 md:block [&>*:not(img)]:hidden">
        <img src="/assets/41-113.svg" alt="" className="absolute inset-0 h-full w-full object-contain" />
        {/* cream card, then brown backdrop square (per source z-order) */}
        <div className="absolute top-0 left-[12%] h-[56%] w-[67%] rounded-md bg-sand" />
        <div className="absolute top-[11%] left-[3%] h-[29%] w-[34%] bg-border-strong" />
        {/* white chip with three avatars */}
        <div className="motion-safe:animate-float absolute top-[7%] left-[52%] flex h-[12%] w-[38%] items-center rounded-md bg-surface px-4 shadow-xl shadow-navy/10">
          <span className="size-8 shrink-0 rounded-full bg-brand" />
          <span className="-ml-2 size-8 shrink-0 rounded-full bg-accent ring-4 ring-surface" />
          <span className="-ml-2 size-8 shrink-0 rounded-full bg-gold ring-4 ring-surface" />
        </div>
        {/* main image */}
        <Portrait className="absolute top-[24.5%] left-[17%] h-[56%] w-[82%]" />
        {/* gold medal + its portrait */}
        <div className="absolute bottom-0 left-0 aspect-square w-[38%] rounded-full bg-brand" />
        <Portrait className="absolute bottom-0 left-[5%] h-[34%] w-[28%] rounded-none" />
      </div>
    </div>
  );
}

/** من نحن on Home: art owns the desktop's first (right) column — `Split reverse`. */
function About() {
  return (
    <Section
      id="about"
      tone="background"
      containerClassName="pt-8 pb-16 md:pt-36 md:pb-24"
    >
      <Split
        className="gap-12"
        reverse
        media={
          <FadeIn>
            <AboutArt />
          </FadeIn>
        }
      >
        <FadeIn delay={0.1} className="flex flex-col items-start gap-5">
          <SectionHeading
            eyebrow="من نحن"
            title="أكاديمية تقنية واستوديو رقمي"
          />
          <p className="mt-2 text-xl leading-9 text-foreground">
            نعلّم البرمجة ونبني المنتجات الرقمية
          </p>
          <p className="max-w-117.5 text-base leading-7.5 text-muted">
            خوارزم أكاديمية تقنية عربية تعلّم الشباب الخوارزميات والبرمجة،
            وتقدّم خدمات تصميم المواقع وتطوير التطبيقات. اسمنا مستوحى من
            العالم الخوارزمي، وهدفنا أن نحوّل شغفك التقني إلى مهارة ومشروع.
          </p>
          <div className="mt-3">
            <a
              href={ROUTES.about}
              className={cn(buttonVariants({ variant: "surface", size: "lg" }))}
            >
              اعرف المزيد
            </a>
          </div>
        </FadeIn>
      </Split>
    </Section>
  );
}

export { About };
