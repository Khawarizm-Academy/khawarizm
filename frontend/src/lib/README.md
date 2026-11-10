# `lib/`

Framework-free helpers. Currently two files:

- **`utils.ts`** — `cn(...)`: `clsx` + `tailwind-merge` conditional
  class merge that resolves Tailwind conflicts (`cn("p-2", isBig &&
  "p-8")` → `p-8`). Every component's `className` prop funnels through
  it so callers can override utilities without specificity wars.
- **`markdown.ts`** — `parseLegalDoc(raw)`: dependency-free
  markdown → typed-data parser for the legal documents in
  `../content/` (imported with Vite's `?raw` suffix). Returns the hero
  title/lead, the intro group, the `*…*` note flags and the numbered
  sections; `blocks/DocLayout` renders that data as plain React
  elements (never `dangerouslySetInnerHTML`), so the documents stay
  RTL-safe and type-checked. Syntax contract documented on the function.

When adding more helpers here, keep them: pure, typed, unit-testable,
and decoupled from React (hooks go to `../hooks`).
