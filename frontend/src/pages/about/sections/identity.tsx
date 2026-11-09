import { Lightbulb, Rocket } from "lucide-react";
import { motion } from "motion/react";
import { Section, IconCard, StatsBand, lift } from "@/components/blocks";
import { SectionHeading } from "@/components/ui";
import { fadeUpItem, staggerContainer } from "@/components/motion";
import { ABOUT_STATS } from "@/constants/about";
import { cn } from "@/lib/utils";

const cards = [
  { title: "الرسالة", text: "تمكين الشباب بمهارات تقنية عملية، وتقديم خدمات رقمية تحوّل الأفكار إلى مشاريع.", icon: Rocket, featured: false },
  { title: "الرؤية", text: "أن نكون وجهة عربية موثوقة لتعلّم البرمجة وصناعة المنتجات الرقمية.", icon: Lightbulb, featured: true },
];

/** The pair reaches inward: الرسالة rounds its right pair, الرؤية its left. */
const ROUNDED = ["right", "left"] as const;

export function AboutIdentity() {
  return (
    <Section tone="background" containerClassName="pb-24">
      <div className="grid items-start gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
        <div className="order-first flex flex-col gap-5 md:order-last md:pt-4">
          <SectionHeading eyebrow="رؤيتنا ورسالتنا" />
          <p className="text-xl leading-9 text-foreground">نؤمن أن التقنية تُتعلَّم بالممارسة، وأن المشروع الجيد يبدأ بفكرة واضحة.</p>
          <p className="text-base leading-8 text-muted">نقدّم تعليمًا تقنيًا بالعربية، ونبني مواقع وتطبيقات بجودة حقيقية تلبّي احتياج أصحابها.</p>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="order-last grid gap-0 md:order-first md:grid-cols-2"
        >
          {cards.map(({ title, text, icon, featured }, index) => (
            <motion.article
              key={title}
              variants={fadeUpItem}
              className={cn("relative", lift(index, ["md:-top-7", "md:top-8"]))}
            >
              <IconCard
                icon={icon}
                title={title}
                body={text}
                featured={featured}
                iconSize={featured ? "lg" : "sm"}
                // `md:min-h-68` explicitly retires the default `md:min-h-100` (separate variant groups).
                rounded={ROUNDED[index]}
                className="min-h-68 md:min-h-68 p-8 md:p-12"
                bodyClassName="mt-4 leading-8"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
      <StatsBand stats={ABOUT_STATS} className="mt-20" />
    </Section>
  );
}
