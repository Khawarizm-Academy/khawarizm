import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/layout";
import { SectionHeading, buttonVariants } from "@/components/ui";
import {
  KIND_LABELS,
  PROJECTS,
  PROJECT_FILTERS,
} from "@/constants/home";
import type { ProjectKind } from "@/types";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/router/routes";

/** Column spans repeat 5/7 · 7/5 on a 12-col grid (static strings so
 * Tailwind can see them). */
const SPANS = [
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-7",
  "md:col-span-5",
];

function Works() {
  const [filter, setFilter] = useState<"all" | ProjectKind>("all");
  const visible = PROJECTS.filter((p) => filter === "all" || p.kind === filter);

  return (
    <section id="works" className="bg-navy pt-16 text-navy-foreground md:pt-24">
      <Container>
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="معرض الأعمال"
          title="أحدث الأعمال"
        />

        <div
          role="group"
          aria-label="تصفية الأعمال"
          className="mt-8 flex justify-center gap-2"
        >
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-md px-4 py-2 font-heading text-sm transition-colors",
                filter === f.id
                  ? "bg-brand text-navy"
                  : "text-navy-muted hover:text-white",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  "relative flex h-72 items-end overflow-hidden rounded-md bg-gradient-to-br md:h-[340px]",
                  project.gradient,
                  SPANS[i % SPANS.length],
                )}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"
                />
                <div className="relative flex flex-col items-start gap-3 p-6">
                  <span className="rounded-sm bg-white px-3 py-1 font-heading text-xs text-navy">
                    {KIND_LABELS[project.kind]}
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-white md:text-3xl">
                    {project.title}
                  </h3>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        <div className="mt-10 flex justify-center pb-16 md:pb-20">
          <a
            href={ROUTES.works}
            className={cn(buttonVariants({ variant: "light" }))}
          >
            عرض كل الأعمال
          </a>
        </div>
      </Container>
    </section>
  );
}

export { Works };
