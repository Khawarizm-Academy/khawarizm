import { Sparkles } from "lucide-react";
import { Section, CtaBand } from "@/components/blocks";
import { Burst, ChartCard, Portrait } from "@/components/ui";
import { ROUTES } from "@/router/routes";

/** CTA collage (Figma gold band): rotated blue square, gold disc, portrait, floating chart card, sparkle dot + star-burst; 1 photo on mobile. */
function CtaArt() {
  return (
    <div aria-hidden className="mx-auto w-full max-w-107.5">
      {/* Mobile: single image block. */}
      <img src="/assets/41-696.svg" alt="" className="h-66 w-full max-w-68.25 object-contain md:hidden" />

      {/* Desktop: decorative composition (430×430 frame geometry). */}
      <div className="relative hidden h-107.5 md:block [&>*:not(img)]:hidden">
        <img src="/assets/41-696.svg" alt="" className="absolute inset-0 h-full w-full object-contain" />
        <div className="absolute left-[4.5%] top-0 aspect-square w-[34%] rotate-13 bg-blue-300" />
        <div className="absolute bottom-0 left-[13%] aspect-square w-[74%] rounded-full bg-brand-hover" />
        <Portrait className="absolute top-[19%] left-[43%] h-[65%] w-[57%]" />
        <div className="absolute top-1/2 left-0 w-1/2 max-w-57.5 -translate-y-1/2">
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
    <Section id="contact" tone="background" containerClassName="pb-16 md:pb-24">
      <CtaBand
        title="جاهز تبدأ مشروعك؟"
        description="تواصل معنا اليوم، وسنساعدك في تحويل فكرتك إلى مشروع حقيقي."
        cta={{ href: ROUTES.contact, label: "تواصل معنا" }}
        media={<CtaArt />}
      />
    </Section>
  );
}

export { Cta };
