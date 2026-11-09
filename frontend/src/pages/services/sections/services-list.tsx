import { Section, ServiceDetailCard } from "@/components/blocks";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { SERVICES_DETAIL } from "@/constants/services";

/** «ما نقدمه» — the services accordion list: intro heading with the
 * page's positioning line, then one collapsible row per service in
 * `@/constants/services` (first row opens). Details ease open
 * beneath each heading. */
function ServicesList() {
  return (
    <Section tone="background" containerClassName="py-20 md:py-28">
      <FadeIn className="grid items-end gap-10 border-b border-border pb-16 md:grid-cols-2 md:gap-20">
        <SectionHeading
          size="md"
          eyebrow="ما نقدمه"
          title="من تعلّم الخوارزميات إلى إطلاق موقعك وتطبيقك"
        />
        <p className="max-w-142.5 text-base leading-8 text-muted">
          نجمع في مكان واحد التعليم التقني والتنفيذ الرقمي، لتتعلّم المهارة وتبني بها مشروعك، أو نبنيه معك.
        </p>
      </FadeIn>

      {/* Accordion rows: each service collects into one title behind a toggle; expand for the full brief. First row opens. */}
      <div className="mt-16">
        {SERVICES_DETAIL.map((service, index) => (
          <FadeIn
            key={service.title}
            className="border-b border-border py-12 first:pt-0 md:py-16"
            delay={index * 0.06}
          >
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
  );
}

export { ServicesList };
