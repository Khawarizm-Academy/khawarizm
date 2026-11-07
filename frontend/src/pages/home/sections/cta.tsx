import { Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { Container } from "@/components/layout";
import {
  Burst,
  ChartCard,
  Portrait,
  buttonVariants,
} from "@/components/ui";
import { ROUTES } from "@/router/routes";
import { cn } from "@/lib/utils";

/** CTA collage (Figma gold band): rotated blue square, deep-gold disc,
 * a portrait block and a floating white chart card — plus the identity
 * ornaments from the earlier design, restored: a blue sparkle dot and
 * a ghosted star-burst. On mobile it collapses to the single photo
 * block from the mobile design. */
function CtaArt() {
  return (
    <div aria-hidden className="mx-auto w-full max-w-[430px]">
      {/* Mobile: single image block. */}
      <Portrait className="h-[264px] w-full max-w-[273px] rounded-none md:hidden" />

      {/* Desktop: decorative composition (430×430 frame geometry). */}
      <div className="relative hidden h-[430px] md:block">
        <div className="absolute left-[4.5%] top-0 aspect-square w-[34%] rotate-[13deg] bg-blue-300" />
        <div className="absolute bottom-0 left-[13%] aspect-square w-[74%] rounded-full bg-brand-hover" />
        <Portrait className="absolute top-[19%] left-[43%] h-[65%] w-[57%]" />
        <div className="absolute top-1/2 left-0 w-1/2 max-w-[230px] -translate-y-1/2">
          <ChartCard className="motion-safe:animate-float-slow w-full" />
        </div>

        {/* Restored identity ornaments. */}
        <Burst
          className="motion-safe:animate-rotate-slow absolute top-[4%] right-[8%] size-20 text-navy/10"
          points={12}
        />
        <span className="motion-safe:animate-float absolute bottom-[6%] right-[4%] flex size-14 items-center justify-center rounded-full bg-accent shadow-lg shadow-navy/15">
          <Sparkles className="size-6 text-white" />
        </span>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <section id="contact" className="bg-background pb-16 md:pb-24">
      <Container>
        {/* Content is first in the DOM → right column on desktop (grid
          is RTL); the art is raised above it only on mobile. */}
        <div className="grid gap-10 rounded-md bg-brand px-6 py-10 md:grid-cols-2 md:items-center md:gap-12 md:px-16 md:py-24">
          <FadeIn
            className="order-last flex flex-col items-start gap-6 md:order-none md:gap-8"
            y={24}
          >
            <h2 className="font-display text-[36px] font-extrabold leading-[50px] text-brand-foreground md:text-[56px] md:leading-[72px]">
              جاهز تبدأ مشروعك؟
            </h2>
            <p className="max-w-[470px] text-base leading-[30px] text-brand-foreground">
              تواصل معنا اليوم، وسنساعدك في تحويل فكرتك إلى مشروع حقيقي.
            </p>
            <a
              href={ROUTES.contact}
              className={cn(
                buttonVariants({ variant: "surface", size: "lg" }),
                "mt-2",
              )}
            >
              تواصل معنا
            </a>
          </FadeIn>
          <FadeIn
            className="order-first md:order-none"
            y={24}
            delay={0.1}
          >
            <CtaArt />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export { Cta };
