import { Fragment, useState } from "react";
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

/** Column spans repeat 5/7 · 7/5 on a 12-col grid (static strings so Tailwind can see them). Mobile stacks full-width. */
const SPANS = [
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-7",
  "md:col-span-5",
];

type Filter = "all" | ProjectKind;

function Works() {
  const [filter, setFilter] = useState<Filter>("all");
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

        {/* Mobile filter — the Figma mobile design swaps the tabs for a dropdown field (48px, white with gold hairline). */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value as Filter)}
          aria-label="تصفية الأعمال"
          className="mt-8 h-12 w-full rounded-md border border-border bg-surface px-4 font-sans text-base text-foreground md:hidden"
        >
          {PROJECT_FILTERS.map((f) => (
            <option key={f.id} value={f.id}>
              {f.label}
            </option>
          ))}
        </select>

        {/* Desktop filter — plain text tabs separated by Arabic dot glyphs; the active tab is plain white. */}
        <div
          role="group"
          aria-label="تصفية الأعمال"
          className="mt-8 hidden items-center justify-center md:flex"
        >
          {PROJECT_FILTERS.map((f, i) => (
            <Fragment key={f.id}>
              {i > 0 && (
                <span
                  aria-hidden
                  className="mx-6 text-sm leading-6 text-navy-muted"
                >
                  ٠
                </span>
              )}
              <button
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "font-sans text-base leading-7.5 transition-colors",
                  filter === f.id ? "text-white" : "text-navy-muted hover:text-white/80",
                )}
              >
                {f.label}
              </button>
            </Fragment>
          ))}
        </div>

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
                whileHover={{ y: -6 }}
                className={cn(
                  "relative flex h-104 items-end overflow-hidden rounded-md bg-gradient-to-br",
                  project.gradient,
                  SPANS[i % SPANS.length],
                )}
              >
                {/* Uniform navy veil like the Figma overlay (32%). */}
                <div aria-hidden className="absolute inset-0 bg-navy/30" />
                <div className="relative flex flex-col items-start gap-6 px-7 pb-10 md:px-12">
                  <span className="rounded-full bg-surface px-5 py-1 font-sans text-base text-foreground">
                    {KIND_LABELS[project.kind]}
                  </span>
                  <h3 className="font-display text-[36px] font-extrabold leading-12.5 text-white md:text-[40px] md:leading-14">
                    {project.title}
                  </h3>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        <div className="mt-12 flex justify-center pb-16 md:pb-24">
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
