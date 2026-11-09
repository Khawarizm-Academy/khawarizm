import { Lightbulb, Rocket } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/layout";
import { fadeUpItem, staggerContainer } from "@/components/motion";
import { ABOUT_STATS } from "@/constants/about";
import { cn } from "@/lib/utils";

const cards = [
  { title: "الرسالة", text: "تمكين الشباب بمهارات تقنية عملية، وتقديم خدمات رقمية تحوّل الأفكار إلى مشاريع.", icon: Rocket, featured: false },
  { title: "الرؤية", text: "أن نكون وجهة عربية موثوقة لتعلّم البرمجة وصناعة المنتجات الرقمية.", icon: Lightbulb, featured: true },
];

export function AboutIdentity() {
  return (
    <section className="bg-background pb-24">
      <Container>
        <div className="grid items-start gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <div className="order-first flex flex-col gap-5 md:order-last md:pt-4">
            <p className="font-heading text-base font-medium text-brand-ink">رؤيتنا ورسالتنا</p>
            <p className="text-xl leading-9 text-foreground">نؤمن أن التقنية تُتعلَّم بالممارسة، وأن المشروع الجيد يبدأ بفكرة واضحة.</p>
            <p className="text-base leading-8 text-muted">نقدّم تعليمًا تقنيًا بالعربية، ونبني مواقع وتطبيقات بجودة حقيقية تلبّي احتياج أصحابها.</p>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="order-last grid gap-0 md:order-first md:grid-cols-2">
            {cards.map(({ title, text, icon: Icon, featured }, index) => (
              <motion.article key={title} variants={fadeUpItem} className={cn("relative flex min-h-68 flex-col items-start border border-border p-8 md:p-12", index === 0 ? "rounded-r-md md:-top-7" : "rounded-l-md md:top-8", featured && "bg-surface shadow-[0_32px_64px_rgba(15,31,69,0.04)]")}>
                {featured && <span className="mb-10 flex size-20 items-center justify-center rounded-full bg-brand shadow-[0_3px_9px_rgba(15,31,69,0.08)]"><Icon className="size-8 text-navy" /></span>}
                {!featured && <span className="mb-10 flex size-12 items-center justify-center rounded-full bg-brand"><Icon className="size-6 text-navy" /></span>}
                <h3 className="font-heading text-2xl font-bold text-foreground">{title}</h3>
                <p className="mt-4 text-base leading-8 text-muted">{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
        <motion.dl variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mt-20 grid overflow-hidden rounded-md border border-border md:grid-cols-3">
          {ABOUT_STATS.map((stat, index) => (
            <motion.div key={stat.label} variants={fadeUpItem} className={cn("relative flex flex-col-reverse gap-1.5 border-border px-8 py-10 md:px-10 md:py-11 md:border-l", index === 0 ? "md:-top-3" : index === 1 ? "md:top-6" : "md:-top-2")}>
              <dt className="text-xl leading-9 text-foreground">{stat.label}</dt>
              <dd dir="ltr" className="text-right font-display text-[40px] font-extrabold leading-14 text-foreground">{stat.value}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
