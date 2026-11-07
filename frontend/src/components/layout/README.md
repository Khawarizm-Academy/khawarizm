# `components/layout/` — page shell

Renders exactly once around every route (from `RootLayout`), plus the
width helper pages reuse directly. Exported via `index.ts`.

| File           | Component   | What to know |
| -------------- | ----------- | ------------ |
| `container.tsx`| `Container` | The page column: **max-w 1170px** (135px margins at 1440 canvas), `px-6` mobile → `md:px-8`. Always use instead of custom paddings when starting a band. |
| `header.tsx`   | `Header`    | Navy 80px bar (`h-20`): `Logo`, `NAV_ITEMS` links (gold on hover), `light` CTA. Below `md` collapses to a 48px bordered hamburger whose panel slides open with an `AnimatePresence` height animation (Esc closes). |
| `footer.tsx`   | `Footer`    | Cream footer: wordmark + “القائمة” + “خدماتنا” columns + gold circle socials (`AtSign/Send/Share2` — lucide has no brand icons), mobile centered, then hairline + © legal row. Column titles use `text-brand-ink` (unified from the Figma's desktop-gold/mobile-brown quirk). |
| `logo.tsx`     | `Logo`      | Wordmark lockup: gold-framed square with a solid gold core + “خوارزم” in Readex Pro bold. Swap the CSS frame for the real SVG **here only** when the asset arrives. |

Direction notes:

- Hamburger sits at the flex-line end (left side in RTL) matching the
  Figma mobile frame.
- Column content is `items-start` on desktop (reads right-aligned in
  RTL), centered on mobile per the mobile design.
