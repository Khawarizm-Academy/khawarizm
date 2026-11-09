import { FadeIn } from "@/components/motion";
import { Container } from "@/components/layout";
import { buttonVariants } from "@/components/ui";
import { ROUTES } from "@/router/routes";
import { cn } from "@/lib/utils";

export function AboutCta() {
  return (
    <section className="bg-background py-20 md:py-24">
      <Container>
        <div className="grid items-center gap-10 rounded-md bg-brand px-6 py-10 md:grid-cols-2 md:gap-16 md:px-16 md:py-20">
          <FadeIn className="order-last flex flex-col items-start gap-6 md:order-first">
            <h2 className="font-display text-4xl font-extrabold leading-tight text-brand-foreground md:text-[56px]">جاهز تبدأ مشروعك؟</h2>
            <p className="max-w-117.5 text-base leading-8 text-brand-foreground">تواصل معنا اليوم، وسنساعدك في تحويل فكرتك إلى مشروع حقيقي.</p>
            <a href={ROUTES.contact} className={cn(buttonVariants({ variant: "surface", size: "lg" }))}>تواصل معنا</a>
          </FadeIn>
          <FadeIn className="order-first md:order-last" delay={0.1}><img src="/assets/41-3240.svg" alt="" className="mx-auto w-full max-w-110 object-contain" /></FadeIn>
        </div>
      </Container>
    </section>
  );
}
