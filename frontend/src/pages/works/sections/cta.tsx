import { CtaBand, Section } from "@/components/blocks";
import { ROUTES } from "@/router/routes";

/** Gold CTA band closing the works page — the shared `CtaBand` recipe
 * on a cream tail section (same tail as services/about). */
function WorksCta() {
  return (
    <Section tone="background" containerClassName="pb-20 md:pb-24">
      <CtaBand
        title="جاهز تبدأ مشروعك؟"
        description="تواصل معنا اليوم، وسنساعدك في تحويل فكرتك إلى مشروع حقيقي."
        cta={{ href: ROUTES.contact, label: "تواصل معنا" }}
        media={<img src="/assets/41-3240.svg" alt="" className="mx-auto w-full max-w-110 object-contain" />}
        className="md:gap-16 md:py-20"
      />
    </Section>
  );
}

export { WorksCta };
