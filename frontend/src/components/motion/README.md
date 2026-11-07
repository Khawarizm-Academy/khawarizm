# `components/motion/` — the animation system

**Single source of truth for motion.** If it animates, its variant is
defined here. Import via `@/components/motion`.

## The primitives

| Export             | Shape      | Behaviour |
| ------------------ | ---------- | --------- |
| `fadeUpItem`       | `Variants` | child preset — fade + 24px rise, 0.5s ease-out |
| `staggerContainer` | `Variants` | parent preset — staggers `fadeUpItem` children 0.08s apart, 0.1s delay |
| `pageVariants` + `pageTransitionProps` | `Variants` | router transition: enter (fade, +16px) → center → exit (fade, −12px) |
| `FadeIn`           | component  | `whileInView` reveal (props: `y`, `delay`, `duration`), fires once with a −64px viewport margin |
| `PageTransition`   | component  | wraps non-router blocks that should enter/exit like a page (used by 404) |

## How they compose

```tsx
// 1) Staggered list on scroll (stats, services, courses, testimonials)
<motion.ul variants={staggerContainer} initial="hidden"
           whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
  <motion.li variants={fadeUpItem} whileHover={{ y: -6 }}>…</motion.li>
</motion.ul>

// 2) One-shot reveal (about, CTA)
<FadeIn y={24} delay={0.1}>…</FadeIn>

// 3) Router-level transitions (in RootLayout)
<AnimatePresence mode="wait" initial={false}>
  <motion.div key={location.pathname} {...pageTransitionProps}>{outlet}</motion.div>
</AnimatePresence>

// 4) Hero entrance (visible on load, not on scroll)
<motion.div initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}>…</motion.div>
```

## Rules

1. `RootLayout` wraps the app in
   `MotionConfig reducedMotion="user"` → every JS animation above
   already respects the OS reduce-motion setting.
2. CSS-only decoration (floats, spin) lives as `--animate-*` tokens in
   `src/index.css` and **must** be applied with the `motion-safe:`
   variant (it isn't covered by MotionConfig).
3. Scroll reveals use `once: true` so content never re-animates.
4. Hover lifts are spring transitions (`stiffness ~260`, `damping ~22`).
5. Never inline a custom `variants` object in a page — extend this
   module so every page animates with the same rhythm.
6. CSS keyframes override simple transform utilities while running —
   wrap the element when both are needed (see `ChartCard` in CTA).
