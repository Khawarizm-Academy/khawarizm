import { PageHero } from "@/components/blocks";
import { WorksCta } from "./sections/cta";
import { WorksGallery } from "./sections/gallery";

/** Works: filterable gallery → CTA. Code in `./sections`; project content in `@/constants/home`. */
function WorksPage() {
  return (
    <>
      <PageHero title="أعمالنا" lead="مشاريع نفّذناها بعناية. [أعمال تُضاف لاحقًا]" />
      <WorksGallery />
      <WorksCta />
    </>
  );
}

export { WorksPage };
export default WorksPage;
