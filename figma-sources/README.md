# `figma-sources/` — design exports

Flat **HTML exports of the Figma file** — the visual source of truth
the frontend is rebuilt against. Read them before adding or changing a
section.

- They are one big absolutely-positioned `<div style="…">` soup (left/
  top px + inline CSS variables) — *not* meant to be served or reused
  as code. They are a measurement reference.
- The design system uses CSS custom properties
  (`--bg-canvas`, `--brand-primary`, …); wherever a style references
  `var(--x, fallback)`, that fallback value (hex) is authoritative.

## Layout

| Folder | Contents                              |
| ------ | ------------------------------------- |
| `home/` | desktop (1440w) + mobile (375w) keyframe pages — see its README for the token map and section coordinates |

How to use them:

1. Locate the section block, note its left/top/width/height and the
   CSS vars/hex it uses.
2. Map values to tokens in `frontend/src/index.css` (frontend README §3
   has the full var → Tailwind table).
3. Implement with Tailwind utilities + tokens, positioning collage art
   as % of the section frame — see existing sections
   (`frontend/src/pages/home/sections/README.md`), which all cite
   their source geometry.
