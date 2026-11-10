import { DocLayout } from "@/components/blocks";
import { SEO } from "@/seo";
import { ROUTES } from "@/router/routes";
import { parseLegalDoc } from "@/lib/markdown";
import termsMd from "@/content/terms.md?raw";

const doc = parseLegalDoc(termsMd);

export function TermsPage() {
  return (
    <>
      <SEO
        title="الشروط والأحكام"
        description="إطار واضح لاستخدام موقع خوارزم والاشتراك في الدورات والتعاون على المشاريع الرقمية."
        canonical={ROUTES.terms}
        breadcrumb={[
          { name: "الرئيسية", path: ROUTES.home },
          { name: "الشروط والأحكام" },
        ]}
      />
      <DocLayout
      doc={{ href: ROUTES.terms, title: doc.title }}
      lead={doc.lead}
      introTitle={doc.introTitle}
      introParagraphs={doc.introParagraphs}
      notes={doc.notes}
      sections={doc.sections}
      inquiry="إذا احتجت إلى توضيح بند أو تفاصيل اشتراكك أو مشروعك، يمكنك مراسلتنا قبل تأكيد طلبك."
      other={{ href: ROUTES.privacy, title: "سياسة الخصوصية" }}
      anchorPrefix="terms"
      />
    </>
  );
}

export default TermsPage;
