import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/blocks";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { SERVICE_STEPS } from "@/constants/services";

/** «خطوات العمل» — the numbered plan (01…03 display numerals, arrow
 * per row) read beside the section heading on `md`, stacked on
 * mobile. Content = `@/constants/services`. */
function ServiceSteps() {
  return (
    <Section tone="background" containerClassName="pb-24 md:pb-32">
      <FadeIn className="grid items-start gap-12 border-t border-border pt-16 md:grid-cols-[1fr_2fr] md:gap-20">
        <div>
          <SectionHeading eyebrow="خطوات العمل" title="من الفكرة إلى الإطلاق" />
          <p className="mt-8 text-base leading-8 text-muted">
            نرافقك في كل مرحلة بخطوات واضحة ومتدرجة.
          </p>
        </div>
        <ol className="divide-y divide-border">
          {SERVICE_STEPS.map((step, index) => (
            <li key={step} className="flex items-center gap-8 py-5 first:pt-0">
              <span className="font-display text-6xl font-extrabold leading-none text-foreground">{index + 1}</span>
              <span className="font-heading text-xl font-bold text-foreground">{step}</span>
              <ArrowLeft className="mr-auto size-5 text-brand-ink" />
            </li>
          ))}
        </ol>
      </FadeIn>
    </Section>
  );
}

export { ServiceSteps };
