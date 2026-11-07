# `figma-sources/home/` — Home page design exports

Two keyframe exports of the “Home” design. Page is RTL Arabic and all
text is inline in these files.

| File               | Frame         | Notes |
| ------------------ | ------------- | ----- |
| `home-desktop.html`| **1440 × 7764** | content column `x:135 → 1305` (1170 wide) |
| `home-mobile.html` | 375-wide      | column swaps tabs for a `<select>`-like dropdown (the “البريد الإلكتروني” label inside it is a component leftover in the Figma — deliberately not reproduced) |

## Desktop section coordinate map (y-offsets)

| y-range          | Section                                                        |
| ---------------- | -------------------------------------------------------------- |
| 0 – 880          | **Hero** — navy `--bg-inverse` band (header + hero collage)    |
| 880 – 2856       | cream: **About** (collage ~1023–1480) → **Stats bar** → **Services** → (2856 = navy band opens) |
| 2856 – 5372      | **Works + Courses** — one continuous 1440×2516 navy band; works cards: two rows of 470/670 × 416 at y 3208 & 3656 (32px gaps) |
| 5372 – 6758      | cream: **Testimonials** masonry                                |
| 6758 – 7300      | **CTA** — 1170×542 gold band (`--bg-cta`) at x 135             |
| 7300 – end       | **Footer**; hairline divider (1170×1) at y 7636, legal row below |

Mobile mirrors the same order; hero/About/CTA art collapses to a single
photo block, and the footer stacks centered.

## Token map (CSS var → hex, used by the frontend)

| Figma var                        | Hex        | Frontend token            |
| -------------------------------- | ---------- | ------------------------- |
| `--bg-canvas`                    | `#fbf3e3`  | `background`              |
| `--text-primary`                 | `#0f1f45`  | `foreground`              |
| `--text-secondary`               | `#0f1f45a3`| `muted`                   |
| `--border-default`               | `#ebd9b0`  | `border`                  |
| `--border-strong`                | `#dcc593`  | `border-strong`           |
| `--bg-surface`                   | `#ffffff`  | `surface`                 |
| `--bg-section-alt` / `--cream-200` | `#f5e6c8`| `sand`                    |
| `--brand-primary` / `--bg-cta`   | `#e5b65c`  | `brand`                   |
| `--brand-primary-hover`          | `#d49b33`  | `brand-hover`             |
| `--text-on-gold`                 | `#0f1f45`  | `brand-foreground`        |
| `--text-accent`                  | `#8a5c14`  | `brand-ink`               |
| `--shape-gold`                   | `#f0cb6a`  | `gold`                    |
| `--gold-100`                     | `#fbedc4`  | `gold-100`                |
| `--bg-inverse`                   | `#0f1f45`  | `navy`                    |
| `--text-on-inverse`              | `#ffffff`  | `navy-foreground`         |
| `--text-on-inverse-secondary`    | `#ffffffa3`| `navy-muted`              |
| `--bg-inverse-surface`           | `#172b5a`  | `navy-surface`            |
| `--border-inverse`               | `#223a74`  | `navy-border`             |
| `--shape-blue`                   | `#1e86f0`  | `accent`                  |
| `--shape-navy`                   | `#0f1f45`  | portrait photo duotone    |
| `--navy-500 / 400 / 300`         | `#35508f` / `#6d82b5` / `#9aabd0` | portrait gradient |
| `--blue-300`                     | `#6eb6ff`  | `blue-300`                |

Type ramp in the frames: Cairo (700–900) display H1/H2 + numbers;
Readex Pro (400–700) headings/eyebrows/buttons/logo; Almarai body.
Buttons: 48px tall, 32px side padding, 6px radius, 15px semibold.

When the Figma changes, re-export into this folder, diff the token
fallback values against `frontend/src/index.css` first, then re-measure
the affected section blocks.
