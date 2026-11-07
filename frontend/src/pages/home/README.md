# `pages/home/`

The landing page — 8 sections composed top-to-bottom in `index.tsx`
in exactly the order of the Figma frames:

```
Hero        navy   (self-padded, 880px zone)      # (no anchor, header links to /)
About       cream  (#about)      id anchors used by header/footer
Stats       cream  (aria-label="أرقامنا")
Services    cream  (#services)
Works       navy   (#works)  ┐ one continuous navy band
Courses     navy   (#courses)┘ (works pads bottom, courses pads top at md)
Testimonials cream
CTA         cream  (#contact)   gold card band
```

`sections/` holds one file per section — open its README for the
per-section anatomy, geometry, quirks and motion notes.

Rules:

- Sections render nothing but tokens + `@/components/*` +
  `@/constants/*` content; keep it that way when editing.
- Section ids (`#about` …) must match `@/router/routes.ts`
  `HOME_ANCHORS` — header/nav links deep-scroll into them.
- Desktop→mobile behavior is per-section: recent sections collapse
  desktop collage art to a single `Portrait` block (mobile frames).
