import { PageHero } from "@/components/blocks";
import { AboutCta } from "./sections/about-cta";
import { AboutIdentity } from "./sections/identity";
import { AboutStory } from "./sections/story";
import { AboutTeam } from "./sections/team";

export function AboutPage() {
  return (
    <>
      <PageHero
        title="من نحن"
        lead="أكاديمية تقنية عربية تعلّم البرمجة وتبني المشاريع الرقمية."
      />
      <AboutStory />
      <AboutIdentity />
      <AboutTeam />
      <AboutCta />
    </>
  );
}

export default AboutPage;
