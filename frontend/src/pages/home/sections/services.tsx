import { Section, IconCard, StaggerGrid, StaggerItem, lift } from "@/components/blocks";
import { SectionHeading } from "@/components/ui";
import { SERVICES } from "@/constants/home";
import { ROUTES } from "@/router/routes";

/** Figma staggering: card 1 rises, card 2 (تصميم المواقع) dips, card 3 rises a little. */
const LIFTS = ["md:-top-8", "md:top-12", "md:-top-5"];

/** Three separate bordered cards (400px tall in Figma); the middle card carries the featured shadow. */
function Services() {
  return (
    <Section
      id="services"
      tone="background"
      containerClassName="pt-10 pb-16 md:pt-32 md:pb-28"
    >
      <SectionHeading
        size="md"
        eyebrow="ما نقدمه"
        title="كل ما تحتاجه لرحلتك التقنية"
      />
      <StaggerGrid className="mt-10 gap-6 md:mt-16 md:grid-cols-3">
        {SERVICES.map(({ icon, title, description }, i) => (
          <StaggerItem key={title} className={lift(i, LIFTS)}>
            <IconCard
              icon={icon}
              title={title}
              body={description}
              href={ROUTES.services}
              featured={i === 1}
            />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </Section>
  );
}

export { Services };
