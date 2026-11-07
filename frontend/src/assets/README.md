# `assets/`

Vite-bundled static assets — importable as modules
(`import img from "@/assets/x.png"`), which gives hashed URLs and build-
time checks.

Current contents (⚠️ **all unused by the app right now** — candidates
for the real artwork or removal):

- `hero.png` — legacy hero image from before the Figma rebuild. The
  hero is now pure CSS collage art (`../components/ui/shapes.tsx`);
  reuse/delete when real photography arrives.
- `react.svg`, `vite.svg` — framework boilerplate leftovers from the
  Vite scaffold. Safe to delete.

Guidelines for new assets:

- Optimize before commit (SVGs hand-tuned; PNG/JPG ≤ ~200KB).
- Name by section + variant (`about-portrait.png`), not `final2.png`.
- Public-facing, hash-free assets (favicon, robots) go in
  `../../public/` instead.
