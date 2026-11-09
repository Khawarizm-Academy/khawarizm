# `pages/services/`

The services page — composed top-to-bottom in `index.tsx`:

```
PageHero      navy intro band (page shell, stays in index.tsx)
ServicesList  cream — «ما نقدمه» intro heading + accordion per service
ServiceSteps  cream — «خطوات العمل» numbered plan (01…03 + arrows)
ServicesCta   cream — gold CTA band (shared `CtaBand` recipe)
```

`sections/` holds one file per section band, exactly like
`pages/home/` — each owns its `<Section>` shell tonal canvas and pulls
all copy from `@/constants/services` (`SERVICES_DETAIL`,
`SERVICE_STEPS` — sample content).

Rules:

- Intro heading + each accordion row share a hairline divider;
  `ServiceDetailCard` keeps the WAI-ARIA accordion toggle and the
  details easing open **beneath** the heading (full-width stack).
- Accordion rows have no in-page anchors yet (header links point at
  other pages); add `id`s only if header/footer deep-links appear.
- The CTA tail repeats the shared band recipe (same page tail as
  `works/` and `about/`).
