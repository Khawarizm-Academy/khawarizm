import { Star } from "lucide-react";
import { Container } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/constants/home";

function Testimonials() {
  return (
    <section className="bg-background py-16 md:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="آراء العملاء والطلاب"
          title="ماذا يقول عنا عملاؤنا"
        />

        <ul className="mt-10 grid gap-px border border-border bg-border md:mt-12 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <li
              key={t.name}
              className={cn(
                "flex flex-col gap-5 bg-background p-8",
                i === 1 && "bg-surface shadow-lg shadow-navy/10",
              )}
            >
              <p role="img" aria-label="تقييم 5 من 5" className="flex gap-1">
                {Array.from({ length: 5 }, (_, s) => (
                  <Star key={s} className="size-4 fill-brand text-brand" />
                ))}
              </p>
              <blockquote className="flex-1 leading-loose text-foreground">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex size-11 items-center justify-center rounded-full bg-navy font-display text-lg font-extrabold text-brand"
                >
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-heading text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export { Testimonials };
