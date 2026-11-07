import { Sparkles, User } from "lucide-react";
import { Container } from "@/components/layout";
import { Arch, Burst, MiniCard, buttonVariants } from "@/components/ui";
import { ROUTES } from "@/router/routes";
import { cn } from "@/lib/utils";

function CtaArt() {
  return (
    <div aria-hidden className="relative mx-auto h-[220px] w-full max-w-[380px] md:h-[300px]">
      <Burst className="absolute top-0 left-[4%] size-20 text-accent" />
      <span className="absolute top-[10%] left-[12%] flex size-10 items-center justify-center rounded-full bg-accent">
        <Sparkles className="size-5 text-white" />
      </span>
      <Arch className="absolute bottom-0 left-[34%] flex h-[88%] w-[40%] items-end justify-center overflow-hidden bg-navy">
        <User className="size-24 translate-y-3 fill-brand text-brand md:size-28" strokeWidth={1} />
      </Arch>
      <MiniCard className="absolute bottom-[8%] left-0 w-[48%]" />
    </div>
  );
}

function Cta() {
  return (
    <section id="contact" className="bg-background pb-16 md:pb-24">
      <Container>
        <div className="grid items-center gap-8 overflow-hidden rounded-md bg-brand px-6 pt-10 md:grid-cols-2 md:px-14 md:py-12">
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-display text-3xl leading-snug font-extrabold text-navy md:text-5xl md:leading-snug">
              جاهز تبدأ مشروعك؟
            </h2>
            <p className="max-w-sm leading-loose text-navy/80">
              تواصل معنا اليوم، وسنساعدك في تحويل فكرتك إلى مشروع حقيقي.
            </p>
            <a
              href={ROUTES.contact}
              className={cn(buttonVariants({ variant: "dark", size: "lg" }), "mt-2")}
            >
              تواصل معنا
            </a>
          </div>
          <CtaArt />
        </div>
      </Container>
    </section>
  );
}

export { Cta };
