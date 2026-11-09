# `pages/`

One folder per route — each is a thin composition layer: it arranges
sections/components and pulls **all** copy from `@/constants`, but
owns no design-system styling of its own.

| Folder        | Route | Entry                                   |
| ------------- | ----- | --------------------------------------- |
| `home/`       | `/`    | `index.tsx` + one file per section in `sections/` |
| `about/`      | `/about`    | `index.tsx` (`PageHero` shell) + one file per section in `sections/` |
| `services/`   | `/services` | `index.tsx` (`PageHero` shell) + `sections/` (services-list / steps / cta) |
| `works/`      | `/works`    | `index.tsx` (`PageHero` shell) + `sections/` (gallery / cta) |
| `not-found/`  | `*`   | `index.tsx`                             |

Planned pages (paths in `../router/routes.ts`, render 404 until built):
`courses`, `contact`.

Page conventions:

- Default **and** named export (`export default` keeps the router
  import terse; named export eases refactors).
- Any scroll animation uses `@/components/motion` primitives only.
- Wrapping in `PageTransition` is optional — the router itself animates
  page swaps; use it only for intra-page tab/panel swaps.
- Adding a page = route in `../router/routes.ts` + element in
  `../router/index.tsx` + folder here (checklist in the frontend README).
