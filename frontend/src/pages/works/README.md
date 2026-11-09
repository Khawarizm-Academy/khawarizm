# `pages/works/`

The works page — composed top-to-bottom in `index.tsx`:

```
PageHero      navy intro band (page shell, stays in index.tsx)
WorksGallery  cream — shared filter (tabs/md+ + select/mobile) →
              featured-first ShowcaseCard grid → static pagination row
WorksCta      cream — gold CTA band (shared `CtaBand` recipe)
```

`sections/` holds one file per section, exactly like `pages/home/` —
`sections/` owns the `<Section>` shells; `index.tsx` is only the
composition.

Rules:

- Project content lives in `@/constants/home` (`PROJECTS`,
  `PROJECT_FILTERS`, `KIND_LABELS` — sample data shared with the home
  works band) until the works-specific export lands in
  `@/constants/works`.
- Filtering uses the shared `FilterTabs` / `FilterSelect` blocks
  (same wiring as `pages/home/sections/works.tsx`; that one passes
  `tone="dark"` because it sits on the navy band, this page sits on
  cream and keeps the default).
- Featured-first: `filtered[0]` renders full-height
  (`h-120 md:h-180`), the rest in paired `md:grid-cols-2` rows.
- The pagination row is a placeholder set (PAGES `1…5`, page 1 gold)
  rendered `dir="ltr"` so digits read like the Figma frame; wire real
  paging where the map is.
