# `pages/home/sections/` — section anatomy

Each file = one Figma section group. Shared anatomy: `<section>` +
`Container` (+ id anchor), content from `@/constants/home`, motion from
`@/components/motion`, tokens only. Collage art blocks are `aria-hidden`
decorations and purely positional (`absolute` with % geometry taken
from the Figma frames).

| File               | Section       | Design notes + quirks | Motion |
| ------------------ | ------------- | --------------------- | ------ |
| `hero.tsx`         | Hero          | Navy band. Twin `Portrait` blocks incl. the **arch** (`rounded-t-full`); `Burst` (12 points, `text-white/40`) bobs `rotate-slow`; gold `Sparkles` dot floats; `MiniCard` floats slow; navy disc + outline square + blue chip behind. Mobile = single full-width portrait. Buttons: gold `lg` + `light`. | text staggers on load; art fades/scales in once |
| `about.tsx`        | من نحن        | Cream. Sand card + `border-strong` square *under* the main portrait (source z-order), triple-avatar chip floats on top; gold medal + small portrait bottom-left. Mobile = single portrait block. `surface` button. | two `FadeIn`s (art, then text +0.1s) |
| `stats.tsx`        | أرقامنا       | One bordered rounded grid, **flush 3 columns at md** (hairline `divide`), no gaps. Values are `dir="ltr"` so `1200+`/`4` don't flip; flex-col-reverse = number above label. | `staggerContainer` on the `motion.dl` |
| `services.tsx`     | ما نقدمه      | 3 separate 400px-tall bordered cards; the middle (تصميم المواقع) carries the featured shadow; 80px gold icon chips. Smaller `SectionHeading size="md"`. | stagger + `whileHover y:-6` lift, shadow deepens |
| `works.tsx`        | معرض الأعمال  | Navy band opens here (pt only — Courses continues it). Desktop: plain text tabs separated by Arabic dots `٠` (active = plain white); mobile: native `<select>` (the Figma mobile frame swaps tabs for a dropdown). Cards 416px tall, spans 5/7 · 7/5 on md:grid-cols-12, uniform `bg-navy/30` veil, white kind-chip. | tab filter: `AnimatePresence mode="popLayout"` + `layout` + scale in/out; hover y:-6 |
| `courses.tsx`      | الدورات       | Same navy band. Card anatomy: big white index `01…` (`dir="ltr"`, 44px→72px) + “دورة تقنية” caption + duration, hairline, title/description, `TextLink tone="dark"`. | stagger + hover lift |
| `testimonials.tsx` | آراء العملاء  | Cream masonry, **zero gaps**: all cards 1px gold border, per-card corner rounding (`CARD_CORNER`), first (top-right) card solid white with soft shadow; navy initial-avatars. Stars via shared `Rating`. | stagger + subtle hover lift (y:-4) |
| `cta.tsx`          | جاهز تبدأ     | Gold rounded band (`bg-brand`), text-left column right (DOM-first), art left incl. rotated blue square, deep-gold disc, portrait, floating chart card (wrapped in a `translate-y-1/2`-holder so the float doesn't clobber its centering), restored `Burst text-navy/10` + accent sparkle dot. Mobile = single portrait. | two `FadeIn`s |

Content lives in `@/constants/home` (sample data!). Percent geometries
map 1:1 to the source frames in `figma-sources/home` (see its README).
