/** Pure SVG geometry for the Khawarizm doodle ornaments — the
 * hand-drawn paths transcribed from the Figma frames.
 *
 * Data only (no JSX): the components in `./doodles.tsx` read from
 * here, so the drawings live in one dedicated place and stay
 * reusable wherever the doodles are dropped into a layout. */

/** Folded brain outline + its seven inner fold strokes. */
export const BRAIN_DOODLE = {
  viewBox: "0 0 120 90",
  outline:
    "M30 65C18 60 17 48 25 41C16 33 22 20 34 20C39 9 54 8 61 17C69 7 85 11 86 23C101 22 107 37 98 46C103 57 94 68 82 66C75 78 60 78 53 68C44 76 33 73 30 65Z",
  folds: [
    "M36 25C31 30 33 36 39 38",
    "M53 18C48 23 49 30 55 33",
    "M72 19C67 25 69 31 75 34",
    "M87 30C81 34 82 41 87 44",
    "M34 49C40 45 45 49 44 55",
    "M56 39C51 45 53 51 59 53",
    "M73 48C68 53 70 59 76 61",
  ],
} as const;

/** Hand-drawn 26-spike star — the organic sibling of the generated
 * `Burst` polygon in `shapes.tsx` (irregular spikes, drawn path). */
export const BURST_DOODLE = {
  viewBox: "0 0 100 100",
  path:
    "M50 3L56 25L69 8L67 30L87 17L76 36L98 34L79 46L100 55L77 57L91 75L70 66L70 89L55 69L47 97L43 70L24 87L32 65L8 71L27 54L3 45L29 42L13 24L35 32L35 8L48 29Z",
} as const;

/** Four-point star + its satellite spark, both filled. */
export const SPARKLE = {
  viewBox: "0 0 70 70",
  paths: [
    "M35 8L39 29L58 35L39 41L35 62L31 41L12 35L31 29L35 8Z",
    "M52 12L54 20L62 22L54 24L52 32L50 24L42 22L50 20L52 12Z",
  ],
} as const;

/** Long swooping hand-drawn arrow (shaft + open V head). */
export const DOODLE_ARROW = {
  viewBox: "0 0 160 80",
  shaft: "M8 30C30 8 65 12 84 28C102 43 113 52 139 48",
  head: "M130 40L141 48L129 57",
} as const;

/** Tiny floating curve with an open arrowhead. */
export const DOODLE_CURVE = {
  viewBox: "0 0 100 70",
  shaft: "M5 10C25 5 38 16 45 31C52 46 67 52 92 42",
  head: "M82 34L94 42L82 49",
} as const;

/** Single swoosh connecting the laptop chip to the collage. */
export const DOODLE_CONNECTOR = {
  viewBox: "0 0 180 120",
  path: "M8 5C30 35 45 54 78 67C108 79 133 88 165 112",
} as const;

/** Looping scribble (hand-drawn S-curve). */
export const DOODLE_SQUIGGLE = {
  viewBox: "0 0 150 100",
  path:
    "M8 72C18 42 39 36 55 50C68 61 63 75 53 73C42 70 42 53 53 41C64 28 82 31 87 43C91 53 84 62 76 59C65 55 69 40 82 31C98 20 117 26 122 40",
} as const;
