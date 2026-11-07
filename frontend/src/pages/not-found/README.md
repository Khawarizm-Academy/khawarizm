# `pages/not-found/`

The 404 page (`ROUTE: *`).

- Identical shell to other pages (`RootLayout` wraps it: header +
  animated outlet + footer).
- Text column left on desktop (`order-last`), art right — matches the
  Home grid logic; on mobile the art stacks first.
- Content: giant `404` (`dir="ltr"`), “الصفحة غير موجودة”, supporting
  copy, then two actions: primary button **`ArrowLeft` + “العودة إلى
  الرئيسية”** (forward direction is left in RTL — keep it leftward if
  you touch this page) and a `secondary` button to the courses anchor.
- Art reuses the identity shapes — blue `Arch`, gold `Arch` holding
  the `SearchX` pictogram, `Burst text-brand`, floating `MiniCard` —
  all `aria-hidden`.

Wrapped in `PageTransition` for parity with router transitions (the
router already animates the swap; the wrapper is belt-and-braces here).

Home-style anchors (`HOME_ANCHORS.courses`) are used so the links work
from any URL.
