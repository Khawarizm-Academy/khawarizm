import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section, StaggerGrid, StaggerItem, MemberCard, lift } from "@/components/blocks";
import { SectionHeading } from "@/components/ui";
import { TEAM } from "@/constants/about";

const ARROW_BUTTON =
  "flex size-12 items-center justify-center rounded-full border border-navy-border text-white transition-colors hover:bg-navy-surface";

const LIFTS = ["md:-top-8", "md:top-8"];

export function AboutTeam() {
  return (
    <Section tone="navy" containerClassName="py-24 md:py-28">
      <div className="flex items-end justify-between gap-6">
        <SectionHeading
          tone="dark"
          eyebrow="فريقنا"
          title="فريق المعلمين والمطورين"
        />
        <div className="hidden items-center gap-3 md:flex" aria-label="التنقل بين أعضاء الفريق">
          <button type="button" aria-label="السابق" className={ARROW_BUTTON}><ArrowRight className="size-5" /></button>
          <button type="button" aria-label="التالي" className={ARROW_BUTTON}><ArrowLeft className="size-5" /></button>
        </div>
      </div>
      <StaggerGrid className="mt-16 gap-6 md:grid-cols-4">
        {TEAM.map((member, index) => (
          <StaggerItem key={`${member.image}-${index}`} className={lift(index, LIFTS)}>
            <MemberCard image={member.image} name={member.name} role={member.role} />
          </StaggerItem>
        ))}
      </StaggerGrid>
      <div className="mt-12 flex justify-center gap-5" aria-label="صفحات الفريق"><span className="size-3 rounded-full bg-brand" /><span className="size-3 rounded-full border border-navy-border" /><span className="size-3 rounded-full border border-navy-border" /></div>
    </Section>
  );
}
