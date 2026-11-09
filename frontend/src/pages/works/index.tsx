import { useMemo, useState } from "react";
import { PageHero, Section, CtaBand, ShowcaseCard } from "@/components/blocks";
import { FadeIn } from "@/components/motion";
import { ROUTES } from "@/router/routes";
import { KIND_LABELS, PROJECTS, PROJECT_FILTERS } from "@/constants/home";
import type { ProjectKind } from "@/types";

export function WorksPage() {
  const [filter, setFilter] = useState<"all" | ProjectKind>("all");
  const filtered = useMemo(() => filter === "all" ? PROJECTS : PROJECTS.filter((project) => project.kind === filter), [filter]);
  const featured = filtered[0];
  const cards = filtered.slice(1);

  return (
    <>
      <PageHero title="أعمالنا" lead="مشاريع نفّذناها بعناية. [أعمال تُضاف لاحقًا]" />
      <Section tone="background" containerClassName="py-16 md:py-20">
        <FadeIn>
          <div dir="rtl" className="mx-auto flex max-w-143.5 flex-wrap items-center justify-center gap-8 text-base text-muted">
            {PROJECT_FILTERS.map((item) => (
              <button key={item.id} type="button" onClick={() => setFilter(item.id)} className={filter === item.id ? "font-bold text-foreground" : "transition-colors hover:text-foreground"} aria-pressed={filter === item.id}>{item.label}</button>
            ))}
          </div>
        </FadeIn>

        {featured && (
          <FadeIn className="mt-16" delay={0.08}>
            <ShowcaseCard title={featured.title} chip={KIND_LABELS[featured.kind]} image={featured.image} gradient={featured.gradient} className="h-120 md:h-180" />
          </FadeIn>
        )}

        {cards.length > 0 && (
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {cards.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.06}>
                <ShowcaseCard title={project.title} chip={KIND_LABELS[project.kind]} image={project.image} gradient={project.gradient} />
              </FadeIn>
            ))}
          </div>
        )}

        <div dir="ltr" className="mt-16 flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((page) => <button key={page} type="button" className={`flex size-12 items-center justify-center rounded-md font-sans text-sm ${page === 1 ? "bg-brand text-navy" : "bg-surface text-foreground shadow-[0_3px_9px_rgba(15,31,69,0.08)]"}`} aria-label={`صفحة ${page}`}>{page}</button>)}
        </div>
      </Section>
      <Section tone="background" containerClassName="pb-20 md:pb-24">
        <CtaBand title="جاهز تبدأ مشروعك؟" description="تواصل معنا اليوم، وسنساعدك في تحويل فكرتك إلى مشروع حقيقي." cta={{ href: ROUTES.contact, label: "تواصل معنا" }} media={<img src="/assets/41-3240.svg" alt="" className="mx-auto w-full max-w-110 object-contain" />} className="md:gap-16 md:py-20" />
      </Section>
    </>
  );
}
