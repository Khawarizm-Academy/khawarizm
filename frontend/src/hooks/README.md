# `hooks/`

*(Reserved — currently empty.)*

Home for shared React hooks used by more than one component/page
(e.g. `useDisclosure`, `useBreakpoint`, `useLockBodyScroll`, carousel
state). Narrows to one use-case per file, `export function useX() {}`.

Patterns to follow when populating:

- Name hooks `use<Thing>`; colocate types with the hook.
- Avoid bespoke logic here that duplicates libraries the app already
  carries (e.g. media queries, observers — `../components/motion`
  already covers scroll-reveal orchestration).

The one hook-like behaviour currently in the app (mobile-menu Esc
handling, hero mount logic) is intentionally kept local inside its
component until a second consumer justifies extraction.
