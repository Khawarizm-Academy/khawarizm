import { Container } from "@/components/layout";
import { ChartCard, Portrait, buttonVariants } from "@/components/ui";
import { ROUTES } from "@/router/routes";
import { cn } from "@/lib/utils";

/** CTA collage (Figma gold band): rotated blue square, deep-gold disc,
 * a portrait block and a floating white chart card. On mobile it
 * collapses to the single photo block from the mobile design. */
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
        <ChartCard className="absolute top-1/2 left-0 w-1/2 max-w-[230px] -translate-y-1/2" />
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
          <div className="order-last flex flex-col items-start gap-6 md:order-none md:gap-8">
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
          </div>
          <div className="order-first md:order-none">
            <CtaArt />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Cta };
