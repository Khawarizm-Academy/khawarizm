import { motion } from "motion/react";
import {
  BRAIN_DOODLE,
  BURST_DOODLE,
  DOODLE_ARROW,
  DOODLE_CURVE,
  DOODLE_CONNECTOR,
  DOODLE_SQUIGGLE,
  SPARKLE,
} from "./svg-paths";

/** Hand-drawn SVG ornaments rendered from `./svg-paths.ts`. Each one
 * carries its own gentle idle loop (float / sway / twinkle), is
 * decorative (`aria-hidden`), draws with `currentColor`, and takes
 * sizing + position through `className` — drop them anywhere with
 * plain Tailwind utility strings. */

type DoodleProps = {
  className?: string;
};

const OUTLINE_STROKE = {
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
} as const;

/** Four-point star (+ two satellite sparks), filled — sits on the gold
 * disc and sparkles on its own. */
export function Sparkle({ className }: DoodleProps) {
  return (
    <motion.svg
      aria-hidden
      viewBox={SPARKLE.viewBox}
      fill="none"
      className={className}
      animate={{
        scale: [1, 1.08, 1],
        rotate: [0, 4, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {SPARKLE.paths.map((d) => (
        <path key={d} d={d} fill="currentColor" />
      ))}
    </motion.svg>
  );
}

/** Curly cloud-brain doodle — bobs and tilts slowly. */
export function BrainDoodle({ className }: DoodleProps) {
  return (
    <motion.svg
      aria-hidden
      viewBox={BRAIN_DOODLE.viewBox}
      fill="none"
      className={className}
      animate={{
        y: [0, -4, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d={BRAIN_DOODLE.path}
        {...OUTLINE_STROKE}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

/** 13-spike star-burst — sways ±5° slowly. The organic
 * counterpart of the generated `Burst` in `shapes.tsx`. */
export function BurstDoodle({ className }: DoodleProps) {
  return (
    <motion.svg
      aria-hidden
      viewBox={BURST_DOODLE.viewBox}
      fill="none"
      className={className}
      animate={{ rotate: [0, 5, 0, -5, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d={BURST_DOODLE.path}
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

/** Long swooping hand-drawn arrow — throbs and nudges sideways. */
export function DoodleArrow({ className }: DoodleProps) {
  return (
    <motion.svg
      aria-hidden
      viewBox={DOODLE_ARROW.viewBox}
      fill="none"
      className={className}
      initial={{ opacity: 0.85 }}
      animate={{
        opacity: [0.75, 1, 0.75],
        x: [0, 4, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path d={DOODLE_ARROW.shaft} {...OUTLINE_STROKE} strokeWidth={1.3} />
      <path
        d={DOODLE_ARROW.head}
        {...OUTLINE_STROKE}
        strokeWidth={1.3}
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

/** Tiny floating curve with an open arrowhead — drifts diagonally. */
export function DoodleCurve({ className }: DoodleProps) {
  return (
    <motion.svg
      aria-hidden
      viewBox={DOODLE_CURVE.viewBox}
      fill="none"
      className={className}
      animate={{
        x: [0, 5, 0],
        y: [0, -3, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d={DOODLE_CURVE.shaft}
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <path
        d={DOODLE_CURVE.head}
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

/** Single swoosh "wire" — fades in and out, used to tie a device
 * block into the collage. */
export function DoodleConnector({ className }: DoodleProps) {
  return (
    <motion.svg
      aria-hidden
      viewBox={DOODLE_CONNECTOR.viewBox}
      fill="none"
      className={className}
      animate={{
        opacity: [0.4, 0.8, 0.4],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
    >
      <path d={DOODLE_CONNECTOR.path} {...OUTLINE_STROKE} />
    </motion.svg>
  );
}

/** Looping swirl arrow — rocks side to side. */
export function DoodleSquiggle({ className }: DoodleProps) {
  return (
    <motion.svg
      aria-hidden
      viewBox={DOODLE_SQUIGGLE.viewBox}
      fill="none"
      className={className}
      animate={{
        rotate: [-2, 2, -2],
        x: [0, 3, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path d={DOODLE_SQUIGGLE.path} {...OUTLINE_STROKE} strokeWidth={2.2} />
      <path
        d={DOODLE_SQUIGGLE.head}
        {...OUTLINE_STROKE}
        strokeWidth={2.2}
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
