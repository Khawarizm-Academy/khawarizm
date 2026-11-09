import { useMemo, useState } from "react";
import { Section, FilterSelect, FilterTabs, ShowcaseCard } from "@/components/blocks";
import { FadeIn } from "@/components/motion";
import { KIND_LABELS, PROJECT_FILTERS, PROJECTS } from "@/constants/home";
import type { ProjectKind } from "@/types";
import { cn } from "@/lib/utils";

type Filter = "all" | ProjectKind;

/** Placeholder pagination row — static squares (1…5, page 1 gold) rendered `dir="ltr"` so the digits read left-to-right like the Figma frame. No real paging yet; projects all render. */
const PAGES = [1, 2, 3, 4, 5];

/** «أعمالنا» gallery — the works-page filtering gets the shared
 * `FilterTabs` (cream default) + `FilterSelect` mobile swap, above a
 * featured-first grid: full-height hero tile, then the remaining
 * projects in paired rows. Content = `@/constants/home` projects
 * (sample copy). */
function WorksGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = useMemo(
    () =>
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((project) => project.kind === filter),
    [filter],
  );
  const featured = filtered[0];
  const cards = filtered.slice(1);

  return (
    <Section tone="background" containerClassName="py-16 md:py-20">
      {/* Shared filter pattern (same wiring as the home works band): native select below `md`, text tabs above. */}
      <FilterSelect
        value={filter}
        onChange={(id) => setFilter(id as Filter)}
        options={PROJECT_FILTERS}
        ariaLabel="تصفية الأعمال"
      />
      <FadeIn>
        <FilterTabs
          value={filter}
          onChange={(id) => setFilter(id as Filter)}
          options={PROJECT_FILTERS}
          ariaLabel="تصفية الأعمال"
        />
      </FadeIn>

      {featured && (
        <FadeIn className="mt-16" delay={0.08}>
          <ShowcaseCard
            title={featured.title}
            chip={KIND_LABELS[featured.kind]}
            image={featured.image}
            gradient={featured.gradient}
            className="h-120 md:h-180"
          />
        </FadeIn>
      )}

      {cards.length > 0 && (
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {cards.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.06}>
              <ShowcaseCard
                title={project.title}
                chip={KIND_LABELS[project.kind]}
                image={project.image}
                gradient={project.gradient}
              />
            </FadeIn>
          ))}
        </div>
      )}

      <FadeIn className="mt-16">
        <div dir="ltr" aria-label="تنقل الصفحات" className="flex justify-center gap-2">
          {PAGES.map((page) => (
            <button
              key={page}
              type="button"
              aria-label={`صفحة ${page}`}
              className={cn(
                "flex size-12 items-center justify-center rounded-md font-sans text-sm",
                page === 1
                  ? "bg-brand text-navy"
                  : "bg-surface text-foreground shadow-[0_3px_9px_rgba(15,31,69,0.08)]",
              )}
            >
              {page}
            </button>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}

export { WorksGallery };
