# `constants/`

Typed, central content registries. **All copy edits happen here** —
pages/sections only read from these files, so the text is testable,
translatable and replaceable by API data later.

| File     | What's inside |
| -------- | ------------- |
| `site.ts`   | `SITE` (name/tagline), `NAV_ITEMS` (header), `FOOTER_MENU`, `FOOTER_SERVICES`, `FOOTER_LEGAL` — all as `NavItem { label, href }` referencing `@/router/routes` paths/anchors |
| `home.ts`   | per-section data: `STATS`, `SERVICES` (+ lucide `icon`), `PROJECT_FILTERS` + `KIND_LABELS`, `PROJECTS` (id/kind/`gradient` classes stand in for real screenshots), `COURSES` (incl. `level` / `duration`), `TESTIMONIALS` |

⚠️ **Sample content** — `home.ts` is explicitly marked: the numbers,
Projects, Courses and Testimonials are placeholder copy written for the
layout. Replace with the real data before launch (or wire an API client
in `../services` and keep the same exported names).

Conventions:

- Everything exported is a plain object/array typed by `@/types`.
- Gradients for project cards are **Tailwind class strings** (e.g.
  `from-[#d9cfc4] via-[#c9bdb0] to-[#a99d92]`) — kept static in source
  so Tailwind's JIT scans them; move them to safelist/CSS if data
  becomes dynamic.
- Icons are lucide components referenced, not imported, in pages
  (`const { icon: Icon } = service`).
