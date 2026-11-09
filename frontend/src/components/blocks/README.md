# `components/blocks/` — page-composition blocks

Everything a routed page is *assembled* from: one shell + repeated card
families + the two bands shared by Home and About. Blocks are bigger
than `ui/` pieces — they own motion and data mapping — but they still
accept `className` passthrough, so Figma quirks stay resolveable at the
call site. Import everything from `@/components/blocks`.

| File                   | Block(s)                    | Replaces / used by                                                                 |
| ---------------------- | --------------------------- | ---------------------------------------------------------------------------------- |
| `section.tsx`          | `Section`, `SectionAction`  | the `<section>` + `Container` shell ×13; centered "see all" row (works/courses/testimonials) |
| `stagger.tsx`          | `StaggerGrid`, `StaggerItem`, `lift` | the `motion.ul/ol` + `staggerContainer`/`fadeUpItem` + hover-spring recipe ×5; the per-card `md:top-*` Figma offsets ×7 |
| `split.tsx`            | `Split`                     | content + art two-column compositions (hero, من نحن, قصتنا…); media tops on mobile, `reverse` flips desktop columns |
| `stats-band.tsx`       | `StatsBand`                 | bordered أرقامنا strip (was duplicated on Home stats + About identity)              |
| `cta-band.tsx`         | `CtaBand`                   | gold CTA plate (was duplicated on Home cta + About about-cta); art arrives via `media` |
| `page-hero.tsx`        | `PageHero`                  | navy page-intro band (About; planned: services/works/courses/contact)               |
| `icon-card.tsx`        | `IconCard`                  | gold-disc info card (services ×3, identity ×2, future features)                      |
| `course-card.tsx`      | `CourseCard`                | numbered navy course card (courses ×3, future courses page)                          |
| `testimonial-card.tsx` | `TestimonialCard`           | quote card with rating strips + corner map (×4, future about page)                   |
| `showcase-card.tsx`    | `ShowcaseCard`              | navy project tile (works ×4, future works page)                                      |
| `member-card.tsx`      | `MemberCard`                | navy team card (team ×4, future about page)                                          |
| `filter.tsx`           | `FilterTabs`, `FilterSelect`| works filtering (text tabs with Arabic dots on md+, 48px select below)               |

Rules of engagement (extend the `components/README.md` list):

- A new section starts as `Section` + `SectionHeading` + one of the
  above blocks — page files stay thin compositions; cards motion comes
  free from `StaggerGrid`/`StaggerItem`.
- Decorative art stays **page-side** (per the `ui/` README) and is
  handed to blocks as slot content (`media=`, children).
- Offsets from the Figma frames belong in `lift(i, pattern)` — never
  hard-code `md:-top-*` comparisons again.
- Pixel history: blocks were extracted from Home/About verbatim; the
  only unified deltas are — identity card body leading (8 vs 7.5),
  mobile icon-chip sizes/heading floor, About stats dividers + 36px
  mobile numerals, featured-card hover shadow on About — these are the
  only deltas to review in design QA.

Usage snippets:

```tsx
<Section id="services" tone="background" containerClassName="pt-10 pb-16 md:pt-32 md:pb-28">
  <SectionHeading eyebrow="ما نقدمه" title="…" />
  <StaggerGrid className="mt-10 gap-6 md:mt-16 md:grid-cols-3">
    {SERVICES.map((service, i) => (
      <StaggerItem key={service.title} className={lift(i, ["md:-top-8", "md:top-12", "md:-top-5"])}>
        <IconCard icon={service.icon} title={service.title} body={service.description} href={ROUTES.services} />
      </StaggerItem>
    ))}
  </StaggerGrid>
</Section>

<Section tone="background" containerClassName="pb-16 md:pb-24">
  <CtaBand
    title="جاهز تبدأ مشروعك؟"
    description="تواصل معنا اليوم…"
    cta={{ href: ROUTES.contact, label: "تواصل معنا" }}
    media={<CtaArt />}
  />
</Section>
```
