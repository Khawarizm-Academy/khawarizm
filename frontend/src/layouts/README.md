# `layouts/`

`root-layout.tsx` — the single app wrapper every route renders into.

Responsibilities:

1. **Shell** — `Header` on top, `<main>` in the middle (`flex-1`),
   `Footer` below, all on a `min-h-svh` column with
   `bg-background text-foreground` (the cream canvas).
2. **Page transitions** — snapshots the current outlet with
   `useOutlet()`, then animates route swaps:
   ```tsx
   <AnimatePresence mode="wait" initial={false}>
     <motion.div key={location.pathname} {...pageTransitionProps}>
       {outlet}
     </motion.div>
   </AnimatePresence>
   ```
   `key` = pathname; the exiting page keeps rendering its own content
   while animating out (`mode="wait"`).
3. **Accessibility of motion** — wraps everything in
   `<MotionConfig reducedMotion="user">`, so all JS animations honor
   the OS reduction setting globally.

Exported through `index.ts` as `RootLayout`. Routes are attached to it
in `../router/index.tsx` — that's the place to add new nested routes if
a shared parent layout is ever needed.
