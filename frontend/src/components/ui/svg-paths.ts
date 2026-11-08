/** Pure SVG geometry for the Khawarizm doodles — hand-drawn Figma paths. Data only (no JSX): read by `./doodles.tsx`, keeping the drawings in one reusable place. */

/** Curly cloud-brain: one continuous outline with inward curls. */
export const BRAIN_DOODLE = {
  viewBox: "0 0 90 69.1",
  path:
    "M45 3.3C55.8 -1.3 64.7 1 71.7 10.5C71.8 25.9 57.8 17.3 71.7 10.5C82.1 12 86.9 18 85.9 28.6C75 39.6 71.2 23.7 85.9 28.6C91.3 37.1 89.7 44 80.9 49.2C65.6 47.5 75.7 34.6 80.9 49.2C77.5 59.8 70.3 64.3 59.2 62.6C47.9 52.1 63.7 47.8 59.2 62.6C49.7 69.9 40.3 69.9 30.8 62.6C26.3 47.8 42.1 52.1 30.8 62.6C19.7 64.3 12.5 59.8 9.1 49.2C14.3 34.6 24.4 47.5 9.1 49.2C0.3 44 -1.3 37.1 4.1 28.6C18.8 23.7 15 39.6 4.1 28.6C3.1 18 7.9 12 18.3 10.5C32.2 17.3 18.2 25.9 18.3 10.5C25.3 1 34.2 -1.3 45 3.3C53.2 16.4 36.8 16.4 45 3.3",
} as const;

/** 13-spike star-burst outline (top spike, flat bottom valley). */
export const BURST_DOODLE = {
  viewBox: "0 0 114 114",
  path:
    "M57 2L63.1 32.2L82.6 8.3L73.9 37.9L102.3 25.8L80.8 48L111.6 50.4L82.3 60.1L108.4 76.5L78 71.5L93.5 98.2L68.9 79.6L70.2 110.4L57 82.5L43.8 110.4L45.1 79.6L20.5 98.2L36 71.5L5.6 76.5L31.7 60.1L2.4 50.4L33.2 48L11.7 25.8L40.1 37.9L31.4 8.3L50.9 32.2Z",
} as const;

/** Four-point star + two satellite sparks (small top-left, smaller top-right), all filled. */
export const SPARKLE = {
  viewBox: "0 0 34 44",
  paths: [
    "M20.4 16.7Q22.2 28.6 34.1 30.4Q22.2 32.2 20.4 44.1Q18.6 32.2 6.7 30.4Q18.6 28.6 20.4 16.7Z",
    "M9.4 2.6Q10.5 10.2 18.1 11.3Q10.5 12.4 9.4 20Q8.3 12.4 0.7 11.3Q8.3 10.2 9.4 2.6Z",
    "M28.4 0.1Q29.1 5 34 5.7Q29.1 6.4 28.4 11.3Q27.7 6.4 22.8 5.7Q27.7 5 28.4 0.1Z",
  ],
} as const;

/** Low swooping arrow (shaft + open V head) that sags then lifts. */
export const DOODLE_ARROW = {
  viewBox: "0 0 74 27",
  shaft: "M1 1C2.3 2.8 4.7 8.5 8.6 11.8C12.5 15.1 20.2 18.9 24.7 20.6C29.2 22.3 31.8 21.6 35.4 21.8C38.9 22 41.9 22.3 46 22C50.1 21.7 55.6 21 60 20.2C64.4 19.4 70.4 17.7 72.5 17.2",
  head: "M62 11.5L73 17.2L61.5 24",
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

/** Looping swirl arrow: a curl, a long rise, a second loop, then a small head. */
export const DOODLE_SQUIGGLE = {
  viewBox: "0 0 112 58",
  path:
    "M1 57.4C1.2 55.8 1.1 51 2.4 47.5C3.7 44 6.3 39.3 9 36.7C11.7 34.1 15.1 32.6 18.5 31.9C21.9 31.2 26.2 31.2 29.2 32.7C32.2 34.2 35.6 38.2 36.7 40.7C37.8 43.2 37.1 46 35.9 47.5C34.6 49 31.6 50.1 29.2 49.6C26.8 49.1 23.2 47.2 21.2 44.8C19.2 42.4 17.9 39 17.4 35.4C16.9 31.8 16.5 27.2 18 23.3C19.5 19.4 22.4 14.9 26.5 12C30.6 9.1 37.2 7.2 42.6 5.9C48 4.6 54.8 4.2 58.7 4C62.6 3.8 65.5 3.2 66 4.9C66.5 6.6 62.3 10.8 61.9 13.9C61.5 17 61.8 20.4 63.5 23.3C65.2 26.2 69.1 30.7 72.1 31.4C75.1 32.1 79.3 29.3 81.5 27.3C83.7 25.3 85 22.2 85 19.3C85 16.4 83.4 12.4 81.5 9.9C79.6 7.5 73.3 6.1 73.5 4.6C73.7 3.1 79 1.8 82.8 1.1C86.6 0.4 92.6 -0.1 96.2 0.5C99.8 1.1 102 2.7 104.3 4.6C106.5 6.5 108.7 10.6 109.7 12.1C110.7 13.6 110.4 13.4 110.5 13.7",
  head: "M111.2 6.7L110.5 13.7L104.5 10",
} as const;
