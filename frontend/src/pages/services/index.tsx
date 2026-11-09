import { ArrowLeft, BookOpen, Check, Globe, Smartphone } from "lucide-react";
import { PageHero, Section, CtaBand } from "@/components/blocks";
import { FadeIn } from "@/components/motion";
import { ROUTES } from "@/router/routes";

const services = [
  {
    title: "الدورات التعليمية",
    heading: "تعلّم البرمجة خطوة بخطوة",
    body: "دورات عربية تشرح الخوارزميات وأساسيات البرمجة بأسلوب عملي، وتُقدَّم عبر جلسات مباشرة تناسب مستويات مختلفة.",
    icon: BookOpen,
    points: ["خوارزميات وأساسيات البرمجة", "مشاريع تطبيقية", "متابعة ودعم"],
  },
  {
    title: "تصميم المواقع",
    heading: "موقع يعكس قيمة مشروعك",
    body: "نصمم مواقع عصرية وسريعة تساعدك على تقديم خدماتك بوضوح، وتمنح زوارك تجربة سهلة على كل الأجهزة.",
    icon: Globe,
    points: ["تصميم واجهات متجاوبة", "تجربة مستخدم واضحة", "تحسين الأداء والظهور"],
  },
  {
    title: "تطوير التطبيقات",
    heading: "حوّل فكرتك إلى تطبيق",
    body: "نبني تطبيقات عملية قابلة للنمو، من الفكرة الأولى وحتى الإطلاق، مع عناية بالتفاصيل والأداء.",
    icon: Smartphone,
    points: ["تحليل الفكرة والمتطلبات", "تطوير قابل للتوسع", "اختبار وإطلاق موثوق"],
  },
];

const process = ["الفكرة والتخطيط", "التصميم والتطوير", "الاختبار والإطلاق"];

export function ServicesPage() {
  return (
    <>
      <PageHero title="خدماتنا" lead="نقدّم الدورات التعليمية وتصميم المواقع وتطوير التطبيقات بجودة وبساطة." />

      <Section tone="background" containerClassName="py-20 md:py-28">
        <FadeIn className="grid items-end gap-10 border-b border-border pb-16 md:grid-cols-2 md:gap-20">
          <div dir="rtl">
            <p className="font-heading text-base font-medium text-brand-ink">ما نقدمه</p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.35] text-foreground md:text-[40px] md:leading-[1.4]">من تعلّم الخوارزميات إلى إطلاق موقعك وتطبيقك</h2>
          </div>
          <p dir="rtl" className="max-w-142.5 text-base leading-8 text-muted">نجمع في مكان واحد التعليم التقني والتنفيذ الرقمي، لتتعلّم المهارة وتبني بها مشروعك، أو نبنيه معك.</p>
        </FadeIn>

        <div className="mt-16">
          {services.map(({ title, heading, body, icon: Icon, points }, index) => (
            <FadeIn key={title} className="border-b border-border py-12 first:pt-0 md:py-16" delay={index * 0.06}>
              <div dir="rtl" className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start md:gap-24">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-heading text-base font-medium text-brand-ink">{title}</p>
                    <h3 className="mt-5 font-display text-3xl font-extrabold leading-[1.45] text-foreground md:text-[40px]">{heading}</h3>
                  </div>
                  <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-brand"><Icon className="size-8 text-navy" strokeWidth={1.5} /></span>
                </div>
                <div>
                  <p className="text-base leading-8 text-muted">{body}</p>
                  <ul className="mt-8 space-y-3">
                    {points.map((point) => <li key={point} className="flex items-center gap-3 text-base text-foreground"><span className="flex size-8 items-center justify-center rounded-full bg-brand"><Check className="size-4 text-navy" /></span>{point}</li>)}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="background" containerClassName="pb-24 md:pb-32">
        <FadeIn className="grid items-start gap-12 border-t border-border pt-16 md:grid-cols-[1fr_2fr] md:gap-20">
          <div dir="rtl">
            <p className="font-heading text-base font-medium text-brand-ink">خطوات العمل</p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.35] text-foreground md:text-[40px]">من الفكرة إلى الإطلاق</h2>
            <p className="mt-8 text-base leading-8 text-muted">نرافقك في كل مرحلة بخطوات واضحة ومتدرجة.</p>
          </div>
          <ol dir="rtl" className="divide-y divide-border">
            {process.map((step, index) => <li key={step} className="flex items-center gap-8 py-5 first:pt-0"><span className="font-display text-6xl font-extrabold leading-none text-foreground">{index + 1}</span><span className="font-heading text-xl font-bold text-foreground">{step}</span><ArrowLeft className="mr-auto size-5 text-brand-ink" /></li>)}
          </ol>
        </FadeIn>
      </Section>

      <Section tone="background" containerClassName="pb-20 md:pb-24">
        <CtaBand title="جاهز تبدأ مشروعك؟" description="تواصل معنا اليوم، وسنساعدك في تحويل فكرتك إلى مشروع حقيقي." cta={{ href: ROUTES.contact, label: "تواصل معنا" }} media={<img src="/assets/41-3240.svg" alt="" className="mx-auto w-full max-w-110 object-contain" />} className="md:gap-16 md:py-20" />
      </Section>
    </>
  );
}
