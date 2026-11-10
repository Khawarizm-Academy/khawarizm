import { PageHero } from "./page-hero";
import { Section } from "./section";
import { buttonVariants } from "@/components/ui";
import { ROUTES } from "@/router/routes";
import { cn } from "@/lib/utils";
import type { DocSection } from "@/lib/markdown";

type DocRef = { href: string; title: string };

type DocLayoutProps = {
  /** This document — drives `PageHero`, the active switcher row and its `href`. */
  doc: DocRef;
  /** Hero support line. */
  lead: string;
  /** The intro header block (first `##` group of the markdown). */
  introTitle: string;
  introParagraphs: string[];
  /** Small brand-ink flags under the intro (`*…*` lines in the markdown). */
  notes: string[];
  /** Numbered body sections (the remaining `##` groups) — ids read `${anchorPrefix}-1`, …. */
  sections: DocSection[];
  /** The inquiry card copy above the contact button. */
  inquiry: string;
  /** The sibling legal document — switcher row + the trailing cross-link. */
  other: DocRef;
  /** Stable anchor prefix shared by section ids + the sticky TOC links. */
  anchorPrefix: string;
};

/** Shared chrome for the legal pages (الشروط / الخصوصية — same Figma layout): hero, intro, numbered sections with anchors, inquiry card, cross-link, and a sticky aside with the two-document switcher + on-page table of contents. Content arrives as parsed props from `@/content/*.md`. */
function DocLayout({
  doc,
  lead,
  introTitle,
  introParagraphs,
  notes,
  sections,
  inquiry,
  other,
  anchorPrefix,
}: DocLayoutProps) {
  return (
    <>
      <PageHero title={doc.title} lead={lead} />
      <Section tone="background" containerClassName="py-16 md:py-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_280px] lg:gap-20">
          <main className="order-last lg:order-first">
            <header className="pb-10">
              <h2 className="font-display text-4xl font-extrabold leading-[1.4] text-foreground md:text-[40px]">
                {introTitle}
              </h2>
              {introParagraphs.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-base leading-8 text-muted">
                  {paragraph}
                </p>
              ))}
              {notes.map((note) => (
                <p key={note} className="mt-4 text-sm leading-7 text-brand-ink">
                  {note}
                </p>
              ))}
            </header>

            {sections.map((section, index) => (
              <section
                id={`${anchorPrefix}-${index + 1}`}
                key={section.title}
                className="border-t border-border py-8"
              >
                <div className="flex items-baseline gap-3">
                  <h3 className="flex-1 font-heading text-2xl font-bold leading-9 text-foreground">
                    {section.title}
                  </h3>
                  <span className="font-heading text-base font-medium text-brand-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                {section.paragraphs.map((paragraph, i) => (
                  <p
                    key={paragraph}
                    className={cn("text-base leading-8 text-muted", i === 0 ? "mt-5" : "mt-4")}
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <div className="rounded-md bg-sand p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground">
                هل لديك استفسار؟
              </h3>
              <p className="mt-4 text-base leading-8 text-muted">{inquiry}</p>
              <a
                href={ROUTES.contact}
                className={cn(buttonVariants({ variant: "surface", size: "lg" }), "mt-5")}
              >
                تواصل معنا
              </a>
            </div>

            <a
              href={other.href}
              className="mt-8 inline-block text-base text-brand-ink"
            >
              اطّلع أيضًا على {other.title} ←
            </a>
          </main>

          <aside className="order-first lg:order-last">
            <div className="lg:sticky lg:top-8">
              <p className="font-heading text-base font-medium text-brand-ink">
                الوثائق القانونية
              </p>
              <nav aria-label="الوثائق القانونية" className="mt-4 space-y-2">
                <a
                  href={doc.href}
                  aria-current="page"
                  className="block rounded-md bg-sand px-5 py-3 font-heading text-base font-bold text-foreground"
                >
                  {doc.title}
                </a>
                <a
                  href={other.href}
                  className="block rounded-md px-5 py-3 font-heading text-base text-foreground transition-colors hover:bg-sand"
                >
                  {other.title}
                </a>
              </nav>
              <div className="mt-8 rounded-md border border-border p-6">
                <p className="font-heading text-base font-medium text-brand-ink">
                  في هذه الصفحة
                </p>
                <div className="mt-4 space-y-3">
                  {sections.map((section, index) => (
                    <a
                      key={section.title}
                      href={`#${anchorPrefix}-${index + 1}`}
                      className="flex gap-2 text-sm leading-7 text-foreground"
                    >
                      <span className="text-brand-ink">{String(index + 1).padStart(2, "0")}</span>
                      <span>{section.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

export { DocLayout, type DocLayoutProps, type DocRef };
