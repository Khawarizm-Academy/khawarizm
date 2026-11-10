# `content/` — markdown documents

Plain **markdown** sources imported with Vite's `?raw` suffix and parsed
into typed data by `@/lib/markdown` (`parseLegalDoc`). Nothing is rendered
as raw HTML — the `DocLayout` block outputs real React elements, so the
content stays RTL-safe and type-checked.

| File          | Used by              | Eaten by            |
| ------------- | -------------------- | ------------------- |
| `terms.md`    | `pages/terms`        | `parseLegalDoc` → `DocLayout` |
| `privacy.md`  | `pages/privacy`      | `parseLegalDoc` → `DocLayout` |

Document convention (see `lib/markdown.ts`):

- `# Title` — hero + document-switcher title (once)
- `> Lead` — hero support line (once)
- `## Starter title` — the intro header + its paragraphs (first group)
- `*Line*` — a small brand-ink flag under the intro (e.g. «نسخة توضيحية»)
- `## Section` — a numbered body section; blank lines separate paragraphs
- `### Heading` — demoted to a new section-group

Adding a new legal/long-form page: drop an `.md` here, parse it, and
hand it to `DocLayout` — the layout (two-column chrome, sticky aside,
doc switcher, inquiry card, cross-link) comes for free.
