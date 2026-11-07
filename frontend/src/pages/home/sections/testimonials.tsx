import { Star } from "lucide-react";
import { Container } from "@/components/layout";
import { SectionHeading, buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/constants/home";

/* Figma masonry quirks: every card keeps its own 1px gold border; only
   some corners are rounded, and the first (top-right) card is solid
   white with a soft shadow. */
const CARD_CORNER = [
  "rounded-t-md md:rounded-tr-none md:rounded-bl-none md:rounded-br-none",
  "rounded-md md:rounded-tl-none md:rounded-bl-none md:rounded-br-none",
  "rounded-md md:rounded-tl-none md:rounded-tr-none",
  "rounded-md md:rounded-tl-none md:rounded-tr-none md:rounded-bl-none",
];

function Testimonials() {
  return (
    <section className="bg-background pt-16 pb-16 md:pt-40 md:pb-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="آراء العملاء والطلاب"
          title="ماذا يقول عنا عملاؤنا"
        />

        {/* Flush 2×2 masonry (zero gaps in the design). */}
        <ul className="mt-10 grid md:mt-16 md:grid-cols-2 md:items-start">
          {TESTIMONIALS.map((t, i) => (
            <li
              key={t.name}
              className={cn(
                "flex flex-col border border-border p-6 md:p-12",
                CARD_CORNER[i],
                i === 0 && "bg-surface shadow-[0_32px_64px_rgba(15,31,69,0.04)]",
              )}
            >
              <p role="img" aria-label="تقييم 5 من 5" className="flex gap-2">
                {Array.from({ length: 5 }, (_, s) => (
                  <Star key={s} className="size-6 fill-gold text-gold" />
                ))}
              </p>
              <blockquote className="mt-8 flex-1 text-base leading-[30px] text-muted">
                {t.quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-5">
                <span
                  aria-hidden
                  className="flex size-16 shrink-0 items-center justify-center rounded-full bg-navy-surface font-display text-2xl font-extrabold text-white md:size-20"
                >
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-heading text-xl font-bold leading-8 md:text-2xl md:leading-9">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-base leading-6 text-foreground">
                    {t.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center md:mt-16">
          <a
            href="#"
            className={cn(buttonVariants({ variant: "surface" }))}
            aria-label="كل الآراء (صفحة قيد الإنشاء)"
          >
            كل الآراء
          </a>
        </div>
      </Container>
    </section>
  );
}

export { Testimonials };
