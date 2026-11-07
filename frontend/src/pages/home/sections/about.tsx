import { ArrowLeft, User } from "lucide-react";
import { Container } from "@/components/layout";
import { Arch, Burst, SectionHeading } from "@/components/ui";
import { ROUTES } from "@/router/routes";

function AboutArt() {
  return (
    <div aria-hidden className="relative mx-auto h-[300px] w-full max-w-[460px] md:h-[400px]">
      <div className="absolute top-[6%] left-[14%] h-[78%] w-[80%] rounded-md bg-sand" />
      {/* "screen" with code lines */}
      <div className="absolute top-[18%] left-[26%] w-[66%] rounded-md bg-navy p-4 shadow-xl shadow-navy/25 md:p-6">
        <div className="mb-4 flex gap-1.5">
          <span className="size-2 rounded-full bg-brand" />
          <span className="size-2 rounded-full bg-accent" />
          <span className="size-2 rounded-full bg-white/50" />
        </div>
        <div className="space-y-2.5">
          <span className="block h-2 w-3/4 rounded-full bg-brand" />
          <span className="block h-2 w-1/2 rounded-full bg-white/40" />
          <span className="block h-2 w-5/6 rounded-full bg-accent" />
          <span className="block h-2 w-2/5 rounded-full bg-white/40" />
          <span className="block h-2 w-2/3 rounded-full bg-white/40" />
        </div>
      </div>
      <Arch className="absolute bottom-0 left-0 flex h-[42%] w-[30%] items-end justify-center overflow-hidden bg-brand">
        <User className="size-20 translate-y-2 fill-navy text-navy" strokeWidth={1} />
      </Arch>
      <Burst className="absolute top-0 right-[2%] size-16 text-brand" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="bg-background py-16 md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col items-start gap-5">
          <SectionHeading eyebrow="من نحن" title="أكاديمية تقنية واستوديو رقمي" />
          <p className="font-heading text-lg text-foreground">
            نعلّم البرمجة ونبني المنتجات الرقمية
          </p>
          <p className="max-w-md leading-loose text-muted">
            خوارزم أكاديمية تقنية عربية تعلّم الشباب الخوارزميات والبرمجة،
            وتقدّم خدمات تصميم المواقع وتطوير التطبيقات. هدفنا أن نحوّل شغفك
            التقني إلى مهارة ومشروع حقيقيين.
          </p>
          <a
            href={ROUTES.about}
            className="group inline-flex items-center gap-2 font-heading text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            اعرف المزيد
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          </a>
        </div>
        <AboutArt />
      </Container>
    </section>
  );
}

export { About };
