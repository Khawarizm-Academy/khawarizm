import { Section, CtaBand } from "@/components/blocks";
import { ROUTES } from "@/router/routes";

export function AboutCta() {
  return (
    <Section tone="background" containerClassName="py-20 md:py-24">
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
