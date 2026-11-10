import { PageHero } from "@/components/blocks";
import { SEO } from "@/seo";
import { ROUTES } from "@/router/routes";
import { WorksCta } from "./sections/cta";
import { WorksGallery } from "./sections/gallery";

/** Works: filterable gallery → CTA. Code in `./sections`; project content in `@/constants/home`. */
function WorksPage() {
  return (
    <>
      <SEO
        title="أعمالنا"
        description="استعرض مشاريع خوارزم الرقمية في تصميم المواقع وتطوير التطبيقات."
        canonical={ROUTES.works}
        breadcrumb={[
          { name: "الرئيسية", path: ROUTES.home },
          { name: "أعمالنا" },
        ]}
      />
      <PageHero title="أعمالنا" lead="مشاريع نفّذناها بعناية. [أعمال تُضاف لاحقًا]" />
      <WorksGallery />
      <WorksCta />
    </>
  );
}

export { WorksPage };
export default WorksPage;
