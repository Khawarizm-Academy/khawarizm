import { PageHero } from "@/components/blocks";
import { ServicesCta } from "./sections/cta";
import { ServicesList } from "./sections/services-list";
import { ServiceSteps } from "./sections/steps";

/** Services: intro + accordion → steps of work → CTA. Code in `./sections`; content in `@/constants/services`. */
function ServicesPage() {
  return (
    <>
      <PageHero title="خدماتنا" lead="نقدّم الدورات التعليمية وتصميم المواقع وتطوير التطبيقات بجودة وبساطة." />
      <ServicesList />
      <ServiceSteps />
      <ServicesCta />
    </>
  );
}

export { ServicesPage };
export default ServicesPage;
