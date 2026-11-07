# `types/`

Shared domain types — imported everywhere as `@/types` (re-exported by
`index.ts`).

| Type           | Shape / purpose |
| -------------- | --------------- |
| `NavItem`      | `{ label, href }` — nav/footer menus |
| `Service`      | `{ title, description, icon: LucideIcon }` — services cards |
| `ProjectKind`  | `"website" \| "app" \| "other"` — works filter taxonomy |
| `Project`      | `{ id, title, kind, gradient }` — grid card; `gradient` is a Tailwind class chain standing in for real artwork |
| `Course`       | `{ title, level, duration, description }` — courses cards |
| `Testimonial`  | `{ quote, name, role }` — testimonial cards (stars are fixed at 5 by `Rating`, matching the Figma) |
| `Stat`         | `{ value, label }` — stats band |

Conventions:

- Types describe **content**, not UI implementation ("props of a
  component" types stay inside the component file).
- Keep them pure data — no React imports beyond icon component types.
- When replacing sample content with API data, these are the DTOs to
  keep stable; `../constants` maps API results into them.
