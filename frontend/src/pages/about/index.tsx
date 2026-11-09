import { AboutCta } from "./sections/about-cta";
import { AboutHero } from "./sections/about-hero";
import { AboutIdentity } from "./sections/identity";
import { AboutStory } from "./sections/story";
import { AboutTeam } from "./sections/team";

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutIdentity />
      <AboutTeam />
      <AboutCta />
    </>
  );
}

export default AboutPage;
