import { ArrowLeft } from "lucide-react";
import { PageHero, Section, CtaBand, ServiceDetailCard } from "@/components/blocks";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { ROUTES } from "@/router/routes";
import { SERVICES_DETAIL, SERVICE_STEPS } from "@/constants/services";

export function ServicesPage() {
  return (
    <>
      <PageHero title="خدماتنا" lead="نقدّم الدورات التعليمية وتصميم المواقع وتطوير التطبيقات بجودة وبساطة." />

      <Section tone="background" containerClassName="py-20 md:py-28">
        <FadeIn className="grid items-end gap-10 border-b border-border pb-16 md:grid-cols-2 md:gap-20">
          <SectionHeading
            size="md"
            eyebrow="ما نقدمه"
            title="من تعلّم الخوارزميات إلى إطلاق موقعك وتطبيقك"
          />
          <p className="max-w-142.5 text-base leading-8 text-muted">نجمع في مكان واحد التعليم التقني والتنفيذ الرقمي، لتتعلّم المهارة وتبني بها مشروعك، أو نبنيه معك.</p>
        </FadeIn>

        {/* Accordion rows: each service collects into one title behind a toggle; expand for the full brief. First row opens. */}
        <div className="mt-16">
          {SERVICES_DETAIL.map((service, index) => (
            <FadeIn key={service.title} className="border-b border-border py-12 first:pt-0 md:py-16" delay={index * 0.06}>
              <ServiceDetailCard
                title={service.title}
                heading={service.heading}
                body={service.body}
                icon={service.icon}
                points={service.points}
                defaultOpen={index === 0}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="background" containerClassName="pb-24 md:pb-32">
        <FadeIn className="grid items-start gap-12 border-t border-border pt-16 md:grid-cols-[1fr_2fr] md:gap-20">
          <div>
            <SectionHeading eyebrow="خطوات العمل" title="من الفكرة إلى الإطلاق" />
            <p className="mt-8 text-base leading-8 text-muted">نرافقك في كل مرحلة بخطوات واضحة ومتدرجة.</p>
          </div>
          <ol className="divide-y divide-border">
            {SERVICE_STEPS.map((step, index) => <li key={step} className="flex items-center gap-8 py-5 first:pt-0"><span className="font-display text-6xl font-extrabold leading-none text-foreground">{index + 1}</span><span className="font-heading text-xl font-bold text-foreground">{step}</span><ArrowLeft className="mr-auto size-5 text-brand-ink" /></li>)}
          </ol>
        </FadeIn>
      </Section>

      <Section tone="background" containerClassName="pb-20 md:pb-24">
        <CtaBand title="جاهز تبدأ مشروعك؟" description="تواصل معنا اليوم، وسنساعدك في تحويل فكرتك إلى مشروع حقيقي." cta={{ href: ROUTES.contact, label: "تواصل معنا" }} media={<img src="/assets/41-3240.svg" alt="" className="mx-auto w-full max-w-110 object-contain" />} className="md:gap-16 md:py-20" />
      </Section>
    </>
  );
}

export default ServicesPage;
