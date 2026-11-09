# خوارزم — Frontend

React SPA for the Khawarizm landing page, rebuilt pixel-level from the
Figma exports in `../figma-sources/home`. Fully RTL Arabic.

```bash
bun install        # bun >= 1.2
bun run dev        # vite dev server
bun run typecheck  # tsc -b (strict)
bun run lint       # eslint
bun run build      # → dist/
bun run preview    # serve dist/
```

---

## 1. Stack

| Tool                | Why / version                         |
| ------------------- | ------------------------------------- |
| React 19            | components, compiler via babel-plugin-react-compiler |
| TypeScript 6 strict | `tsconfig.app.json`                    |
| Vite 8 (rolldown)   | bundler; `@tailwindcss/vite` plugin    |
| Tailwind CSS v4     | tokens live in CSS — no `tailwind.config.js` |
| motion (Framer)     | `motion/react` — page + scroll animation |
| React Router 8      | `createBrowserRouter` + `AnimatePresence` fades |
| lucide-react        | icons (no brand icons exist — socials use AtSign/Send/Share2) |
| bun                 | package manager + script runner        |

Import alias: `@/…` → `src/…`.

---

## 2. Folder map

```
src/
├── components/
│   ├── layout/   header · footer · container · logo   (page shell)
│   ├── ui/       button · section-heading · shapes · text-link · rating
│   ├── blocks/   Section · Split · Stagger · cards · CtaBand · StatsBand …
│   └── motion/   variants · FadeIn · PageTransition   (animation system)
├── pages/        route pages
│   ├── home/     index.tsx + one file per section in sections/
│   └── not-found/
├── constants/    site.ts (nav/labels) · home.ts (section content)
├── router/       routes.ts (path registry) · index.tsx (router config)
├── layouts/      RootLayout (header/footer shell + page transitions)
├── types/        shared domain types
├── lib/          cn() class merge helper
├── hooks/        (reserved for shared React hooks)
├── services/     (reserved for API/integration clients)
└── assets/       static bits bundled by Vite
```

---

## 3. Design tokens (CSS)

All tokens were transcribed from the Figma **“Semantic Light”**
collection into `src/index.css` and are exposed to Tailwind via
`@theme inline` — *change values there only*. Two layers:

1. `--app-*` custom properties on `:root` (raw values),
2. mapped Tailwind colors (`--color-brand`, …) → usable as
   `bg-brand`, `text-brand-ink`, `border-navy-border`, …

### Light canvas (cream sections)

| Tailwind class      | Value      | Figma name          | Use                        |
| ------------------- | ---------- | ------------------- | -------------------------- |
| `bg-background`     | `#fbf3e3`  | `--bg-canvas`       | cream page canvas          |
| `text-foreground`   | `#0f1f45`  | `--text-primary`    | primary ink                |
| `text-muted`        | `#0f1f45a3`| `--text-secondary`  | 64 % ink body text         |
| `border-border`     | `#ebd9b0`  | `--border-default`  | soft gold hairlines        |
| `border-border-strong` | `#dcc593` | `--border-strong` | collage backdrop square    |
| `bg-surface`        | `#ffffff`  | `--bg-surface`      | cards                      |
| `bg-sand`           | `#f5e6c8`  | `--bg-section-alt`  | collage card backdrops     |

### Gold brand

| Class              | Value      | Figma name           | Use                          |
| ------------------ | ---------- | -------------------- | ---------------------------- |
| `bg-brand`         | `#e5b65c`  | `--brand-primary`    | CTA fills, icons chips, socials |
| `bg-brand-hover`   | `#d49b33`  | `--brand-primary-hover` | hover / big CTA disc (CTA art) |
| `text-brand-foreground` | `#0f1f45` | `--text-on-gold` | text on gold                 |
| `text-brand-ink`   | `#8a5c14`  | `--text-accent`      | gold-toned text readable on cream |
| `bg-gold`          | `#f0cb6a`  | `--shape-gold`       | rating stars                 |
| `bg-gold-100`      | `#fbedc4`  | `--gold-100`         | chart-card bars              |

### Navy sections (hero / works+courses band, header)

| Class                 | Value      | Figma name              | Use                    |
| --------------------- | ---------- | ----------------------- | ---------------------- |
| `bg-navy`             | `#0f1f45`  | `--bg-inverse`          | navy bands             |
| `text-navy-foreground`| `#ffffff`  | `--text-on-inverse`     | text on navy           |
| `text-navy-muted`     | `#ffffffa3`| `--text-on-inverse-secondary` | secondary on navy |
| `bg-navy-surface`     | `#172b5a`  | `--bg-inverse-surface`  | discs, avatar circles  |
| `bg-navy-border`      | `#223a74`  | `--border-inverse`      | course card borders    |

### Collage palette (decor only)

| Class         | Value     | Use                             |
| ------------- | --------- | ------------------------------- |
| `bg-accent`   | `#1e86f0` | blue arch (`--shape-blue`), sparkle dot, focus outline |
| `bg-blue-300` | `#6eb6ff` | rotated CTA square              |
| `bg-navy-500/400/300` | `#35508f / #6d82b5 / #9aabd0` | portrait gradient stops |

### Typography

Loaded in `index.html` (Google Fonts), mapped in `@theme`:

| Tailwind class   | Font        | Weight | Use                          |
| ---------------- | ----------- | ------ | ---------------------------- |
| `font-display`   | Cairo       | 700–900| H1/H2, big numbers, quotes   |
| `font-heading`   | Readex Pro  | 400–700| eyebrows, card titles, buttons, nav logo |
| `font-sans`      | Almarai     | 300–800| body text, links, tabs       |

### Decorative CSS animations (`@theme`)

```css
--animate-float:        float 7s  ease-in-out infinite; /* ±12px bob     */
--animate-float-slow:   float 11s ease-in-out infinite; /* out-of-phase  */
--animate-rotate-slow:  rotate-slow 80s linear infinite;/* star-burst    */
```

Always applied as **`motion-safe:animate-float`** etc., so the OS
“reduce motion” setting also stops CSS decoration.

---

## 4. Motion fundamentals

All JS motion comes from **one** shared module —
`src/components/motion` — never hand-roll ad-hoc variants.

| Primitive           | Kind                | What it does                                                            | Used by |
| ------------------- | ------------------- | ----------------------------------------------------------------------- | ------- |
| `staggerContainer`  | `Variants`          | parent; animates children 0.08 s apart with 0.1 s delay                  | hero text, stats, services, courses, testimonials |
| `fadeUpItem`        | `Variants`          | child; fade + 24 px rise, 0.5 s ease-out                                 | every staggered child |
| `pageVariants`      | `Variants`          | router-level enter/center/exit fade + y-shift                            | RootLayout |
| `FadeIn`            | component           | `whileInView` fade (optional rise) once, −64 px margin viewport          | about, CTA |
| `PageTransition`    | component           | wrap any non-router block that should animate in/out                     | 404 |
| `MotionConfig reducedMotion="user"` | provider | globally honors the OS reduce-motion setting | RootLayout |

### Patterns to copy

```tsx
// Scroll-triggered stagger (sections with lists/cards)
<motion.ul variants={staggerContainer} initial="hidden"
  whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
  {items.map(i => <motion.li key={i.id} variants={fadeUpItem}
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 260, damping: 22 }}>…)}
```

```tsx
// Simple reveal on scroll
<FadeIn y={24} delay={0.1}>…</FadeIn>
```

```tsx
// Filterable grid (works) — layout animation + AnimatePresence
<AnimatePresence mode="popLayout">…layout motion.li…</AnimatePresence>
```

Rules of thumb:

1. **Motion is decoration, never information** — content must be legible
   with all animation off.
2. Scroll reveals fire **once** (`viewport={{ once: true }}`).
3. Hover lifts are springs (`y: -6` / `-4`), not durations.
4. CSS keyframe animation + transform utilities on the same element
   **conflict** — the keyframe transform wins while running. Wrap
   (see `ChartCard` in `cta.tsx`) instead of combining
   `animate-float` with `-translate-y-1/2`.
5. `MotionConfig reducedMotion="user"` + `motion-safe:` variants cover
   accessibility end-to-end.

---

## 5. RTL conventions

The document is `dir="rtl"`; keep these rules or the layout will break:

1. **Forward arrows point LEFT** (`ArrowLeft` in `TextLink`, 404 button)
   — left is the reading direction. `ArrowRight` means “back”.
2. **Grid = DOM order on desktop (RTL columns)**. First child is the
   *right* column. Choose DOM order for mobile flow, then reorder with
   `order-first/order-last` per breakpoint when needed:
   - hero / CTA: art is `order-first` on mobile (art on top), text
     right / art left on desktop.
   - about / 404: art first in DOM → art right, text left on desktop.
3. **Numbers & inner-card flows**: the Figma shows digits (01, 12+, 404)
   and white mini-cards (avatar left, bars right) in *LTR* micro-flow.
   Use `dir="ltr"` locally (`Stats` dd, courses numerals, `MiniCard`,
   `ChartCard`) — the text alignment may need `text-right`/`text-left`
   after the flip, mirror what existing code does.
4. `divide-x` works RTL-out-of-the-box in Tailwind logical props.
5. Native `<select>` and text inputs follow the document RTL automatically.

---

## 6. Component inventory

### `components/ui` — design atoms

| Component        | Props                              | Notes                                                                 |
| ---------------- | ---------------------------------- | --------------------------------------------------------------------- |
| `Button` + `buttonVariants` | `variant`, `size`       | variants: `primary` `secondary` `ghost` `outline` `surface` `light` `dark`; sizes `sm/md/lg/icon`; collocate `buttonVariants({…})` on `<a>`/`<Link>` |
| `SectionHeading` | `eyebrow, title?, tone, align, size`| omit `title` for a standalone eyebrow; `size="md"` only for Services (40/56); H2 36/50 mobile → 56/72 desktop |
| `TextLink`       | `tone="light"/"dark"`              | the “اعرف المزيد” link; leftward arrow slides on hover                 |
| `Rating`         | `count`, `label`                   | 24 px gold stars; `role="img"` + Arabic label                          |
| `Arch`           | div props                          | rounded-top identity shape (`rounded-t-full`)                          |
| `Burst`          | `points`                           | star-burst SVG; spins via `motion-safe:animate-rotate-slow`            |
| `Portrait`       | `icon`                             | gradient photo placeholder; add `rounded-t-full` for arches            |
| `MiniCard`/`ChartCard` | –                            | white floating UI-illustrations; internally `dir="ltr"`                |

### `components/blocks` — page-composition blocks

Full catalog + examples: `src/components/blocks/README.md`. The repeatable
building blocks: `Section` (+ `SectionAction`), `Split`, `StaggerGrid`/
`StaggerItem` + `lift()` offsets, `StatsBand`, `CtaBand`, `PageHero`,
`IconCard`, `CourseCard`, `TestimonialCard`, `ShowcaseCard`, `MemberCard`,
`FilterTabs`/`FilterSelect`.

`layout/`: `Container` (1170 px column, `px-6`/`md:px-8`), `Header`,
`Footer`, `Logo` (swap for the real SVG when it arrives).

---

## 7. Layout & spacing constants

- Container **1170 px** (135 px margins at 1440; `px-6` mobile).
- Page header 80 px (`h-20`), buttons 48 px, 6 px radius (`rounded-md`).
- Section rhythm ≈ `pt-16/pb-16` mobile, `pt-24…40/pb-24` desktop —
  copy from neighbours when adding rows.
- Works navy band and Courses are **one continuous dark block**
  (`works` only bottom-pads; `courses` only top-pads at md).

---

## 8. Adding a page — checklist

1. Path in `src/router/routes.ts` (registry keeps links in sync).
2. Route element in `src/router/index.tsx` under `RootLayout`.
3. `src/pages/<name>/index.tsx` — compose `@/components/blocks` pieces
   (`PageHero`, `Section` + `SectionHeading` + card blocks with
   `StaggerGrid`); default + named export.
4. Section content → `src/constants/`; anything reused → `src/types`,
   `src/components/ui`, `src/components/blocks` (or build the missing
   piece there as a block).
5. Links pointing to its sections must use `HOME_ANCHORS`-style hashes.
6. Run `bun run typecheck && bun run lint && bun run build`.

Rules: sections import *only* via `@/…` aliases; no component outside
`components/` defines its own button/heading/card styling; no hardcoded
hex — tokens only; decorative art stays page-side and is handed to
blocks as slot content; every interactive element RTL-checked.

---

## 9. Sample content warning

`src/constants/home.ts` is explicitly marked: students/projects/course
details/testimonials are placeholders for layout. Replace with real
data (or an API client in `src/services`) before launch.

---

## 10. Known quirks

- lucide-react has **no brand icons** → footer socials use AtSign /
  Send / Share2 on gold circles.
- Old design’s desktop footer headings were gold, mobile were brown —
  unified as `text-brand-ink` for readability.
- `src/assets/hero.png`, `react.svg`, `vite.svg` and `public/icons.svg`
  are currently **unused** (see those folders’ READMEs).
- Build warns about a >500 kB JS chunk (motion + lucide); harmless
  until code-splitting is wanted.
