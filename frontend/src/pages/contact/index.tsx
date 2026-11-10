import { useState } from "react";
import { Send } from "lucide-react";
import { ContactCards, PageHero, Section } from "@/components/blocks";
import { FadeIn } from "@/components/motion";
import { Field, FieldInput, FieldSelect, FieldTextarea, buttonVariants } from "@/components/ui";
import { CONTACT_CHANNELS, CONTACT_SERVICE_OPTIONS } from "@/constants/contact";
import { SEO } from "@/seo";
import { ROUTES } from "@/router/routes";
import { cn } from "@/lib/utils";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <SEO
        title="تواصل معنا"
        description="أخبرنا عن فكرتك أو عن الدورة التي تبحث عنها، وسنعود إليك قريبًا."
        canonical={ROUTES.contact}
        breadcrumb={[
          { name: "الرئيسية", path: ROUTES.home },
          { name: "تواصل معنا" },
        ]}
      />
      <PageHero title="تواصل معنا" lead="أخبرنا عن فكرتك أو عن الدورة التي تبحث عنها، وسنعود إليك قريبًا." />
      <Section tone="background" containerClassName="pt-0">
        <div className="relative min-h-168 overflow-hidden rounded-md bg-[radial-gradient(circle_at_20%_25%,rgba(229,182,92,0.28),transparent_30%),linear-gradient(135deg,#d8d8d8_0%,#b8c3c8_48%,#8a9ca7_100%)] md:min-h-180">
          <div aria-hidden className="absolute inset-0 opacity-30 [background-image:linear-gradient(35deg,transparent_42%,rgba(15,31,69,0.45)_43%,transparent_44%),linear-gradient(145deg,transparent_52%,rgba(255,255,255,0.5)_53%,transparent_54%)] [background-size:180px_180px]" />
          <FadeIn className="relative z-10 mx-6 mt-12 rounded-md bg-surface p-8 shadow-[0_24px_64px_rgba(15,31,69,0.12)] md:absolute md:right-12 md:top-12 md:mt-0 md:w-117.5 md:p-12">
            <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="space-y-5">
              <h2 className="font-heading text-2xl font-bold text-foreground">أرسل رسالتك</h2>
              <Field label="الاسم">
                <FieldInput required name="name" placeholder="اسمك الكامل" className="text-right" />
              </Field>
              <Field label="الخدمة المطلوبة">
                <FieldSelect name="service" defaultValue="" className="text-muted">
                  <option value="" disabled>اختر الخدمة</option>
                  {CONTACT_SERVICE_OPTIONS.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </FieldSelect>
              </Field>
              <Field label="البريد الإلكتروني">
                <FieldInput required type="email" name="email" placeholder="name@example.com" className="text-left" />
              </Field>
              <Field label="الرسالة">
                <FieldTextarea required name="message" placeholder="اكتب رسالتك" rows={4} className="text-right" />
              </Field>
              <button type="submit" className={cn(buttonVariants({ variant: "primary", size: "lg" }), "w-full")}>
                <Send className="size-4" />
                {sent ? "تم الإرسال" : "إرسال"}
              </button>
            </form>
          </FadeIn>
        </div>
      </Section>
      <Section tone="background" containerClassName="py-16 md:py-20">
        <ContactCards cards={CONTACT_CHANNELS} />
      </Section>
    </>
  );
}

export { ContactPage };
export default ContactPage;
