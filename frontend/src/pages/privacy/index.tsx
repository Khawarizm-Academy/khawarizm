import { DocLayout } from "@/components/blocks";
import { SEO } from "@/seo";
import { ROUTES } from "@/router/routes";
import { parseLegalDoc } from "@/lib/markdown";
import privacyMd from "@/content/privacy.md?raw";

const doc = parseLegalDoc(privacyMd);

export function PrivacyPage() {
  return (
    <>
      <SEO
        title="سياسة الخصوصية"
        description="تعرّف على كيفية التعامل مع بياناتك عند التعلّم معنا أو طلب خدماتنا الرقمية."
        canonical={ROUTES.privacy}
        breadcrumb={[
          { name: "الرئيسية", path: ROUTES.home },
          { name: "سياسة الخصوصية" },
        ]}
      />
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
    </>
  );
}

export default PrivacyPage;
