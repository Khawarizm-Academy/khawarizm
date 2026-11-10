# `components/`

All reusable code lives here — four subfolders by lifetime:

| Folder     | Contents                                    | Rule                                                     |
| ---------- | ------------------------------------------- | -------------------------------------------------------- |
| `layout/`  | `Header`, `Footer`, `Container`, `Logo`     | page shell — rendered once by `RootLayout`, exported via `index.ts` |
| `ui/`      | `Button`, `SectionHeading`, `TextLink`, `Rating`, `Arch`, `Burst`, `Portrait`, `MiniCard`, `ChartCard`, doodles (`Sparkle`, `BrainDoodle`, `BurstDoodle`, `DoodleArrow`, `DoodleCurve`, `DoodleConnector`, `DoodleSquiggle`), `ImagePlaceholder`, `PhotoFrame`, form fields (`Field`, `FieldInput`, `FieldSelect`, `FieldTextarea` + `FIELD_CONTROL` plate) | design-system atoms shared by every page; variants via cva/polymorphism |
| `blocks/`  | `Section`, `SectionAction`, `Split`, `StaggerGrid`/`StaggerItem` + `lift()`, `StatsBand`, `CtaBand`, `PageHero`, `IconCard`, `CourseCard`, `TestimonialCard`, `ShowcaseCard`, `MemberCard`, `FilterTabs`/`FilterSelect`, `CollapsibleRegion`, `ServiceDetailCard`, `DocLayout`, `PageIntro`, `MetaStrip`, `VideoTile`, `ShareRow`, `BackLink`, `ContactCards` | **page-composition blocks** — the repeated section/card/band recipes extracted from Home + About, now serving all routed pages (legal docs share `DocLayout` + `@/content/*.md`); see its README |
| `motion/`  | `variants.ts`, `FadeIn`, `PageTransition`    | **the only place motion variants are defined**; `index.ts` re-exports everything |

Rules of engagement:

- Don't re-style buttons/headings/cards inline in pages — extend `ui/`
  or compose the matching `blocks/` component (e.g. new pages take
  `PageHero` + `Section` + card blocks instead of hand-rolling shells).
- Pure presentational pieces accept plain props and use `cn()` for
  class overrides; they stay state-free unless interaction demands it.
- Decorative art (`aria-hidden` collage blocks) lives with the section
  that owns it (`pages/home/sections/*.tsx`), *except* the identity
  shapes (Arch/Burst/Portrait/MiniCard/ChartCard) and the hand-drawn
  doodles (`Sparkle`, `BrainDoodle`, `BurstDoodle`, `DoodleArrow`,
  `DoodleCurve`, `DoodleConnector`, `DoodleSquiggle` — drawn from the
  pure path data in `ui/svg-paths.ts`) which live in `ui/`, ready to
  be re-composed on other pages. Blocks receive that art as slot
  content (`media=`, children).
