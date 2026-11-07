# `lib/`

Framework-free helpers. Currently exactly one file:

- **`utils.ts`** — `cn(...)`: `clsx` + `tailwind-merge` conditional
  class merge that resolves Tailwind conflicts (`cn("p-2", isBig &&
  "p-8")` → `p-8`). Every component's `className` prop funnels through
  it so callers can override utilities without specificity wars.

When adding more helpers here, keep them: pure, typed, unit-testable,
and decoupled from React (hooks go to `../hooks`).
