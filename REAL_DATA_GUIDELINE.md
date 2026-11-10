# Guideline: Replacing Mock Data with Real Data

> **For the AI agent / maintainer** — run this checklist AFTER the owner provides
> real data (project names, contact channels, stats, courses, team, testimonials…).
> Work file-by-file, then rebuild, verify, commit and push. Never invent values that
> were not provided — leave a placeholder standing rather than fabricating one.

## 0. Ground rules

- Single source of truth stays intact: route paths in `frontend/src/router/routes.ts`,
  site facts in `frontend/src/seo/siteConfig.ts`, content in `frontend/src/constants/`.
- Do not touch `frontend/index.html`'s head (the `@/seo` module owns all metadata).
- Do not add `<SEO />` props with data that does not exist yet (dates, authors, prices).
- Keep everything Arabic/RTL; no raw hex colors in JSX — use the Tailwind tokens.

## 1. Content files to edit (placeholders live here)

| File | Placeholders to replace | Follow-up after editing |
| --- | --- | --- |
| `frontend/src/constants/home.ts` | `STATS` values `[00]`, `PROJECTS` titles `[اسم المشروع]` (+ real descriptions if any), `COURSES` `[اسم الدورة ١–٣]`, `[مدة الدورة]`, `[وصف مختصر للدورة]`, `TESTIMONIALS` quote/name/role | Project page `<SEO>` titles become unique automatically. If a project **id** changes/added/removed → update `PRERENDER_ROUTES` in `frontend/vite.config.ts` (sitemap updates itself) |
| `frontend/src/constants/about.ts` | `ABOUT_STATS` `[00]`, `TEAM` names `[اسم عضو الفريق]` + roles | Nothing else |
| `frontend/src/constants/services.ts` | Sample copy in `SERVICES_DETAIL` (headings/body/points) if replaced | Keep descriptions in sync with the services page `<SEO>` description |
| `frontend/src/constants/contact.ts` | Phone `[رقم الهاتف]`, email `[البريد الإلكتروني]`, address `[العنوان]` — and add real `tel:` / `mailto:` hrefs (see the file's own comment) | Enables the Organization `ContactPoint` schema (step 3) |
| `frontend/src/pages/project/index.tsx` | `META` client `[اسم العميل]` + date `[التاريخ]`, lead `[وصف مختصر للمشروع]`, `[وصف التحدي]`, `[وصف الحل]`, note `[تفاصيل تُضاف لاحقًا]` | If a real date exists, it may now be used in schema (no fabrication rule) |
| `frontend/src/pages/works/index.tsx` | Hero lead `[أعمال تُضاف لاحقًا]` | Nothing else |
| `frontend/src/content/privacy.md`, `terms.md` | Only if the owner revises the legal text | Re-read the `<SEO>` descriptions on those pages still match |

## 2. SEO updates triggered by real data (`frontend/src/seo/`)

1. **Project pages** — once projects have real names, verify each renders a unique
   `<title>`; optionally give each project a real one-line description and pass it as
   `description` in `frontend/src/pages/project/index.tsx` (currently derived generically).
2. **Organization schema** (`frontend/src/seo/schemas/organization.ts`) — when real
   contact channels exist, extend it with `contactPoint` (phone/email from
   `CONTACT_CHANNELS`) and `sameAs` (real social profile URLs) if provided.
3. **Page `<SEO>` copy** — revisit each page's `description` in
   `frontend/src/pages/*/index.tsx` so it still summarizes the real content.
4. **og-image** — if branding changes, regenerate the default share image:
   `bun scripts/generate-og-image.ts` (or replace `frontend/public/og-image.png`
   with a designed 1200×630 PNG/JPG). Keep `siteConfig.imageAlt` accurate.
5. **Domain change (only if it happens)** — edit `SITE_URL` in
   `frontend/src/seo/siteConfig.ts` (canonicals, og:url, schema, sitemap and the
   prerender `postProcess` all read it) **and** the `Sitemap:` line in
   `frontend/public/robots.txt` (static file, not generated).

## 3. Rebuild & verify (from `frontend/`)

```bash
bun run typecheck   # tsc -b
bun run lint        # eslint
bun run build       # sitemap → tsc → vite build + prerender of all public routes
```

Then check the actual output:

- `dist/**/index.html`: unique titles (project pages must differ from each other now),
  one description/canonical/robots each, OG + Twitter present, JSON-LD parses.
- `dist/works/<id>/index.html` exists for every project id.
- `public/sitemap.xml` was regenerated with the real project routes (11 URLs → one per project).
- Spot-check a page with `bun run preview` + `curl http://localhost:4173/<route>/`.

## 4. Commit & push

```bash
git add -A
git commit -m "Replace sample content with real data"   # match the repo's plain imperative style
git push origin main
```

Split into logical commits if the data update and any SEO/code adjustments are separable.
