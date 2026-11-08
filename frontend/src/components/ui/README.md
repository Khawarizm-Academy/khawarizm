# `components/ui/` — design-system components

Every piece here is transcribed from a named Figma layer. Exported
through `index.ts` — import from `@/components/ui`.

| File                   | Component(s)            | Figma source                                    | Notes |
| ---------------------- | ----------------------- | ----------------------------------------------- | ----- |
| `button.tsx`           | `Button`, `buttonVariants` | 48px CTA buttons                             | cva variants: `primary` (gold), `secondary` (white bordered), `ghost`, `outline`, `surface` (white + soft navy shadow, featured actions on cream), `light` (white/30 border on navy), `dark`; sizes `sm/md/lg/icon`; use `buttonVariants({...})` on `<a>`/`<Link>` |
| `section-heading.tsx`  | `SectionHeading`        | eyebrow + H2 pair of every section              | `tone="dark"` on navy; `size="md"` = services' smaller H2; mobile 36/50 → desktop 56/72 (md 40/56) |
| `text-link.tsx`        | `TextLink`              | plain “اعرف المزيد” links                       | RTL-safe: arrow points **left**, slides further left on hover; `tone="dark"` = white→gold for navy cards |
| `rating.tsx`           | `Rating`                | 24px gold star squares in testimonial cards     | `role="img"` + Arabic `label`; imports aligned with testimonials |
| `shapes.tsx`           | `Arch`, `Burst`, `Portrait`, `MiniCard`, `ChartCard` | hero/CTA/collage artwork | `Arch` = `rounded-t-full` brand signature; `Burst` = generated star polygon, spins via `motion-safe:animate-rotate-slow`; `Portrait` = gradient stand-in for Figma `placehold.co` photos (swap for real images later); `MiniCard`/`ChartCard` are the floating white UI illustrations and set `dir="ltr"` internally to match the frames |
| `doodles.tsx`          | `Sparkle`, `BrainDoodle`, `BurstDoodle`, `DoodleArrow`, `DoodleCurve`, `DoodleConnector`, `DoodleSquiggle` | hand-drawn ornaments across the collage frames | rendered from `svg-paths.ts`; `aria-hidden`, drawn with `currentColor`, sized/positioned purely via `className`; each carries its own idle float/sway loop (inline motion, like `MiniCard`); `BurstDoodle` is the organic twin of the generated `Burst` |
| `placeholder.tsx`      | `ImagePlaceholder`      | ghosted photo stand-ins          | soft navy box + centered label until real assets land; put `bg-transparent` on the inset so only the caption shows |
| `svg-paths.ts`         | — (data only)           | path `d` strings + viewBoxes     | **pure TS, no JSX** — the single source for every doodle's drawing; components read from it, so retouching art never touches React code |

Usage snippets:

```tsx
<a href={ROUTES.courses} className={cn(buttonVariants({ variant: "light", size: "lg" }))}>كل الدورات</a>
<TextLink href={ROUTES.services} tone="dark">اعرف المزيد</TextLink>
<Portrait className="h-[334px] w-full rounded-none md:hidden" />
<Rating count={5} label="تقييم 5 من 5" />
```
