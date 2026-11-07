# خوارزم — Khawarizm

Official front-end of **خوارزم (Khawarizm)** — an Arabic tech academy
*and* digital studio. This repository currently hosts the public
landing page (Home) built to match the Figma design exports inside
`figma-sources/`.

The site is **fully RTL Arabic**: `<html lang="ar" dir="rtl">`.

## Repository layout

| Path                              | What it is                                                                 |
| --------------------------------- | -------------------------------------------------------------------------- |
| `figma-sources/`                  | Flat Figma HTML exports — the single source of truth for the visual design |
| `frontend/`                       | React + Vite application (Tailwind v4, Motion, React Router)                |
| `frontend/README.md`              | **The developer handbook** — tokens, motion system, RTL rules, checklists   |
| `figma-sources/home/README.md`    | How to read the design exports + token/section maps                          |

Every folder carries its own `README.md` explaining what lives there and
how to extend it. Start with `frontend/README.md`.

## Quick start

```bash
# requires bun >= 1.2
cd frontend
bun install
bun run dev        # dev server
bun run typecheck  # tsc -b
bun run lint       # eslint
bun run build      # production build → dist/
bun run preview    # preview the production build
```

## Status

- ✅ Home page (8 sections) — matches `figma-sources/home` (desktop + mobile)
- ✅ 404 page
- 🚧 Planned pages: About / Services / Works / Courses / Contact — the route
  paths already exist in `frontend/src/router/routes.ts`; all links point at
  Home anchors (`/#works`, …) until the pages land.
- ⚠️ All content (stats, projects, courses, testimonials) is **sample data**
  in `frontend/src/constants/home.ts` — replace before launch.

## Stack

React 19 · TypeScript (strict) · Vite 8 (rolldown) · Tailwind CSS v4 ·
motion (Framer Motion) · React Router 8 · lucide-react · bun
