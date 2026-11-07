# `router/`

All routing truth lives here (React Router 8, data router):

- **`routes.ts`** — two registries:
  - `ROUTES`: canonical path constants — `home "/"`, plus *planned*
    `about / services / works / courses / contact` paths (they don't
    route anywhere yet — the catch-all renders 404) and `notFound "*"`.
  - `HOME_ANCHORS`: `"/#about"`-style in-page hashes. Use plain
    `<a href>` (not `<Link>`) for these so the browser hash-scrolls from
    any route (`index.css` sets `scroll-behavior: smooth` +
    `scroll-padding-top`).
- **`index.tsx`** — `createBrowserRouter` config: everything nests under
  `RootLayout`; today only the index route (`HomePage`) +
  catch-all (`NotFoundPage`). `AppRouter` wraps it in `RouterProvider`.

### Adding a route

1. Path → `ROUTES` in `routes.ts`.
2. Element → children of `RootLayout` in `index.tsx` (lazy import when
   pages get heavy).
3. Folder in `../pages/<name>/`.
4. Header/footer links: copy from nav to `ROUTES.<name>` in
   `../constants/site.ts` (currently they deliberately target
   `HOME_ANCHORS` deep links).
5. `bun run typecheck && bun run lint && bun run build`.

Page-swap animation is owned by `RootLayout` (`AnimatePresence` +
`pageTransitionProps`), not by individual routes.
