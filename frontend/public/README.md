# `public/`

Served verbatim at the site root (`/favicon.svg`, …) — referenced from
`../index.html`; do **not** import files from here in code (that's what
`../src/assets/` is for).

| File          | Status |
| ------------- | ------ |
| `favicon.svg` | ✅ referenced by `index.html` (keep in sync with the brand square: gold framed square on navy) |
| `icons.svg`   | ⚠️ unused legacy sprite from the pre-Figma build; the app now uses lucide-react icons — safe to delete |

When adding: hash-free, referenced by absolute URL (`/…`) only.
