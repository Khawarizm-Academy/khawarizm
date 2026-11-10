import { PageHero } from "@/components/blocks";
import { SEO } from "@/seo";
import { ROUTES } from "@/router/routes";
import { AboutCta } from "./sections/about-cta";
import { AboutIdentity } from "./sections/identity";
import { AboutStory } from "./sections/story";
import { AboutTeam } from "./sections/team";

export function AboutPage() {
  return (
    <>
      <SEO
        title="من نحن"
        description="تعرّف على أكاديمية خوارزم وفريقها ورؤيتها في التعليم التقني وصناعة المنتجات الرقمية."
        canonical={ROUTES.about}
        breadcrumb={[
          { name: "الرئيسية", path: ROUTES.home },
          { name: "من نحن" },
        ]}
      />
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
