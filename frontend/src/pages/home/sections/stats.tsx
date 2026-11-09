import { Section, StatsBand } from "@/components/blocks";
import { STATS } from "@/constants/home";

/** Three flush stat cards (176px tall in the Figma grid), separated by hairline gold borders; numbers rise staggered — shared `StatsBand` block. */
function Stats() {
  return (
    <Section aria-label="أرقامنا" tone="background" containerClassName="pb-16 md:pb-24">
      <StatsBand stats={STATS} />
    </Section>
  );
}

export { Stats };
