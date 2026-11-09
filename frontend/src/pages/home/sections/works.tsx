import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Section, SectionAction, FilterSelect, FilterTabs, ShowcaseCard, lift } from "@/components/blocks";
import { SectionHeading } from "@/components/ui";
import { KIND_LABELS, PROJECTS, PROJECT_FILTERS } from "@/constants/home";
import type { ProjectKind } from "@/types";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/router/routes";

/** Column spans repeat 5/7 · 7/5 on a 12-col grid (static strings so Tailwind can see them). Mobile stacks full-width. */
const SPANS = [
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-7",
  "md:col-span-5",
];

/** Figma column shifts cycle over four tiles: down, up, deeper, up-scale. */
const LIFTS = ["md:top-10", "md:-top-8", "md:top-12", "md:-top-6"];

type Filter = "all" | ProjectKind;

function Works() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = PROJECTS.filter((p) => filter === "all" || p.kind === filter);

  return (
    <Section id="works" tone="navy" containerClassName="pt-16 md:pt-24">
      <SectionHeading
        tone="dark"
        align="center"
        eyebrow="معرض الأعمال"
        title="أحدث الأعمال"
      />

      <FilterSelect
        value={filter}
        onChange={(id) => setFilter(id as Filter)}
        options={PROJECT_FILTERS}
        ariaLabel="تصفية الأعمال"
        className="mt-8"
      />
      {/* Desktop — plain text tabs; active tab is plain white on the navy band. */}
      <FilterTabs
        value={filter}
        onChange={(id) => setFilter(id as Filter)}
        options={PROJECT_FILTERS}
        ariaLabel="تصفية الأعمال"
        tone="dark"
        className="mt-8"
      />

      <ul className="mt-10 grid gap-8 md:grid-cols-12">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              whileHover={{ scale: 1.015 }}
              className={cn("relative", SPANS[i % SPANS.length], lift(i, LIFTS))}
            >
              <ShowcaseCard
                title={project.title}
                chip={KIND_LABELS[project.kind]}
                image={project.image}
                gradient={project.gradient}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {/* pb lives here: this action row closes the navy band. */}
      <SectionAction
        href={ROUTES.works}
        variant="light"
        rowClassName="mt-12 pb-16 md:pb-24"
      >
        عرض كل الأعمال
      </SectionAction>
    </Section>
  );
}

export { Works };
