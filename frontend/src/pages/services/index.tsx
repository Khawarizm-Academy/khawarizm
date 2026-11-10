import { PageHero } from "@/components/blocks";
import { SEO } from "@/seo";
import { ROUTES } from "@/router/routes";
import { ServicesCta } from "./sections/cta";
import { ServicesList } from "./sections/services-list";
import { ServiceSteps } from "./sections/steps";

/** Services: intro + accordion → steps of work → CTA. Code in `./sections`; content in `@/constants/services`. */
function ServicesPage() {
  return (
    <>
      <SEO
        title="خدماتنا"
        description="خدمات تصميم المواقع وتطوير التطبيقات والحلول الرقمية من أكاديمية خوارزم."
        canonical={ROUTES.services}
        keywords={["تصميم مواقع", "تطوير تطبيقات", "خدمات رقمية"]}
        breadcrumb={[
          { name: "الرئيسية", path: ROUTES.home },
          { name: "خدماتنا" },
        ]}
      />
      <PageHero title="خدماتنا" lead="نقدّم الدورات التعليمية وتصميم المواقع وتطوير التطبيقات بجودة وبساطة." />
      <ServicesList />
      <ServiceSteps />
      <ServicesCta />
    </>
  );
}

export { ServicesPage };
export default ServicesPage;
