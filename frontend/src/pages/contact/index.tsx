import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHero, Section } from "@/components/blocks";
import { FadeIn } from "@/components/motion";
import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";

const contactCards = [
  { title: "الهاتف", value: "[رقم الهاتف]", icon: Phone },
  { title: "البريد الإلكتروني", value: "[البريد الإلكتروني]", icon: Mail },
  { title: "العنوان", value: "[العنوان]", icon: MapPin },
];

export function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero title="تواصل معنا" lead="أخبرنا عن فكرتك أو عن الدورة التي تبحث عنها، وسنعود إليك قريبًا." />
      <Section tone="background" containerClassName="pt-0">
        <div className="relative min-h-168 overflow-hidden rounded-md bg-[radial-gradient(circle_at_20%_25%,rgba(229,182,92,0.28),transparent_30%),linear-gradient(135deg,#d8d8d8_0%,#b8c3c8_48%,#8a9ca7_100%)] md:min-h-180">
          <div aria-hidden className="absolute inset-0 opacity-30 [background-image:linear-gradient(35deg,transparent_42%,rgba(15,31,69,0.45)_43%,transparent_44%),linear-gradient(145deg,transparent_52%,rgba(255,255,255,0.5)_53%,transparent_54%)] [background-size:180px_180px]" />
          <FadeIn className="relative z-10 mx-6 mt-12 rounded-md bg-surface p-8 shadow-[0_24px_64px_rgba(15,31,69,0.12)] md:absolute md:right-12 md:top-12 md:mt-0 md:w-117.5 md:p-12">
            <form dir="rtl" onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="space-y-5">
              <h2 className="font-heading text-2xl font-bold text-foreground">أرسل رسالتك</h2>
              <label className="block"><span className="mb-2 block font-heading text-sm font-semibold text-foreground">الاسم</span><input required name="name" placeholder="اسمك الكامل" className="h-12 w-full rounded-md border border-border bg-white px-4 text-right font-sans text-base text-foreground outline-none transition focus:border-brand" /></label>
              <label className="block"><span className="mb-2 block font-heading text-sm font-semibold text-foreground">الخدمة المطلوبة</span><select name="service" defaultValue="" className="h-12 w-full rounded-md border border-border bg-white px-4 text-right font-sans text-base text-muted outline-none transition focus:border-brand"><option value="" disabled>اختر الخدمة</option><option>الدورات التعليمية</option><option>تصميم المواقع</option><option>تطوير التطبيقات</option></select></label>
              <label className="block"><span className="mb-2 block font-heading text-sm font-semibold text-foreground">البريد الإلكتروني</span><input required type="email" name="email" placeholder="name@example.com" className="h-12 w-full rounded-md border border-border bg-white px-4 text-left font-sans text-base text-foreground outline-none transition focus:border-brand" /></label>
              <label className="block"><span className="mb-2 block font-heading text-sm font-semibold text-foreground">الرسالة</span><textarea required name="message" placeholder="اكتب رسالتك" rows={4} className="w-full resize-none rounded-md border border-border bg-white px-4 py-3 text-right font-sans text-base text-foreground outline-none transition focus:border-brand" /></label>
              <button type="submit" className={cn(buttonVariants({ variant: "primary", size: "lg" }), "w-full")}><Send className="size-4" />{sent ? "تم الإرسال" : "إرسال"}</button>
            </form>
          </FadeIn>
        </div>
      </Section>
      <Section tone="background" containerClassName="py-16 md:py-20">
        <div dir="rtl" className="grid border-y border-border md:grid-cols-3">
          {contactCards.map(({ title, value, icon: Icon }, index) => <FadeIn key={title} className={cn("border-border px-8 py-10 md:px-10 md:py-12", index > 0 && "border-t md:border-r md:border-t-0")} delay={index * 0.06}><span className="flex size-16 items-center justify-center rounded-full bg-brand"><Icon className="size-7 text-navy" /></span><p className="mt-6 font-heading text-base font-medium text-brand-ink">{title}</p><p className="mt-5 text-xl text-foreground">{value}</p></FadeIn>)}
        </div>
      </Section>
    </>
  );
}
