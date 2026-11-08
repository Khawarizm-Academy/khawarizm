# `components/`

All reusable code lives here — three subfolders by lifetime:

| Folder     | Contents                                    | Rule                                                     |
| ---------- | ------------------------------------------- | -------------------------------------------------------- |
| `layout/`  | `Header`, `Footer`, `Container`, `Logo`     | page shell — rendered once by `RootLayout`, exported via `index.ts` |
| `ui/`      | `Button`, `SectionHeading`, `TextLink`, `Rating`, `Arch`, `Burst`, `Portrait`, `MiniCard`, `ChartCard`, doodles (`Sparkle`, `BrainDoodle`, `BurstDoodle`, `DoodleArrow`, `DoodleCurve`, `DoodleConnector`, `DoodleSquiggle`), `ImagePlaceholder`, `PhotoFrame` | design-system blocks shared by every page; variants via cva/polymorphism |
| `motion/`  | `variants.ts`, `FadeIn`, `PageTransition`    | **the only place motion variants are defined**; `index.ts` re-exports everything |

Rules of engagement:

- Don't re-style buttons/headings inline in pages — extend the `ui/`
  component (e.g. `TextLink` gained a `tone="dark"` variant for navy).
- Pure presentational pieces accept plain props and use `cn()` for
  class overrides; they stay state-free unless interaction demands it.
- Decorative art (`aria-hidden` collage blocks) lives with the section
  that owns it (`pages/home/sections/*.tsx`), *except* the identity
  shapes (Arch/Burst/Portrait/MiniCard/ChartCard) and the hand-drawn
  doodles (`Sparkle`, `BrainDoodle`, `BurstDoodle`, `DoodleArrow`,
  `DoodleCurve`, `DoodleConnector`, `DoodleSquiggle` — drawn from the
  pure path data in `ui/svg-paths.ts`) which live in `ui/`, ready to
  be re-composed on other pages.
