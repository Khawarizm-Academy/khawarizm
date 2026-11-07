# `services/`

*(Reserved — currently empty.)*

Home for API/integration clients as the project outgrows static sample
content (see `../constants/home.ts` — all its data is marked as
sample content to be replaced before launch).

Intended shape:

- One module per external concern: `cms.ts` (_announcements/courses),
  `forms.ts` (contact submissions), `analytics.ts`, …
- Fetchers return the `@/types` DTOs (`Course`, `Project`, …) so pages
  keep consuming the same shapes; results land in a provider/hook that
  pages read.
- Keep modules dependency-light (plain `fetch` + base URL from
  `import.meta.env`) — UI stays in components.

Until populated, content is rendered synchronously from `../constants`.
