# `src/` — application source

Entry chain: `index.html` → `main.tsx` → `App.tsx` → `router` →
`RootLayout` → route pages.

Folder map:

| Folder        | Purpose                                                        |
| ------------- | -------------------------------------------------------------- |
| `components/` | reusable code in 4 groups: `layout/` (page shell), `ui/` (design-system atoms), `blocks/` (page-composition blocks), `motion/` (animation primitives) |
| `pages/`      | one folder per routed page (`home/`, `not-found/`) — thin wrappers that compose `sections` |
| `constants/`  | typed content registries (`site.ts` nav + labels, `home.ts` section data — sample data, see its README) |
| `router/`     | `routes.ts` single source of path truth + `index.tsx` router config |
| `layouts/`    | `RootLayout` — header/footer shell + page-transition animation  |
| `types/`      | shared domain types (`Service`, `Project`, `Course`, …)         |
| `lib/`        | `cn()` — clsx + tailwind-merge class helper                     |
| `hooks/`      | reserved for shared hooks                                       |
| `services/`   | reserved for API/integration clients                            |
| `assets/`     | Vite-bundled static bits (currently unused files — see folder README) |
| `index.css`   | **design tokens + fonts + global base + CSS animations** — the visual foundation; start reading here |

Conventions used across `src/`:

- Imports only through the `@/` alias (`@/components/ui`, …).
- Colors/fonts/animations only via Tailwind token classes — no raw hex.
- Reusable pieces belong in `components/`; page-specific markup stays in
  the page folder.
- Full developer handbook: `../README.md` (tokens, motion, RTL rules).
