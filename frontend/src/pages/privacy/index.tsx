import { DocLayout } from "@/components/blocks";
import { ROUTES } from "@/router/routes";
import { parseLegalDoc } from "@/lib/markdown";
import privacyMd from "@/content/privacy.md?raw";

const doc = parseLegalDoc(privacyMd);

export function PrivacyPage() {
  return (
    <DocLayout
      doc={{ href: ROUTES.privacy, title: doc.title }}
      lead={doc.lead}
      introTitle={doc.introTitle}
      introParagraphs={doc.introParagraphs}
      notes={doc.notes}
      sections={doc.sections}
      inquiry="إذا رغبت في توضيح استخدام بياناتك أو تقديم طلب يخصّها، يمكنك مراسلتنا عبر نموذج التواصل."
      other={{ href: ROUTES.terms, title: "الشروط والأحكام" }}
      anchorPrefix="privacy"
    />
  );
}

export default PrivacyPage;
