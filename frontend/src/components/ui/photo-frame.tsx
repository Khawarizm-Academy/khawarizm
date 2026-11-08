import type { CSSProperties } from "react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "./placeholder";

/** Backing-plate colors, straight from the `figma-sources/home`
 * token map: gold portrait arches (`brand`), the laptop chip
 * (`accent` = `--shape-blue`), cream-section photos (`sand`), and
 * the translucent stand-in (`ghost`). */
const PHOTO_TONES = {
  brand: "bg-brand",
  accent: "bg-accent",
  navy: "bg-navy",
  sand: "bg-sand",
  /** Lighter gold of the portrait arch (`#f0cb6a`), distinct from `brand`. */
  gold: "bg-[#f0cb6a]",
  ghost: "bg-navy-400/20",
} as const;

export type PhotoTone = keyof typeof PHOTO_TONES;

/** Thickness of the colored mat around the photo, mirroring the
 * Figma insets (absolute-position percentages: `x`/left/right are
 * relative to the frame width, `top`/`bottom` to its height).
 * `false` = photo flush with the shape. String shorthand = same
 * inset on all four sides. */
export type PhotoMat =
  | string
  | {
      x?: string;
      left?: string;
      right?: string;
      top?: string;
      bottom?: string;
    }
  | false;

/** The hero-portrait mat from the frame: 5% sides + 5% top, flush
 * to the flat bottom edge. */
const DEFAULT_MAT = { x: "5%", top: "5%", bottom: "0" } as const;

function matToStyle(mat: PhotoMat): CSSProperties {
  if (mat === false) {
    return {};
  }
  if (typeof mat === "string") {
    return { left: mat, right: mat, top: mat, bottom: mat };
  }
  return {
    left: mat.left ?? mat.x ?? "0",
    right: mat.right ?? mat.x ?? "0",
    top: mat.top ?? "0",
    bottom: mat.bottom ?? "0",
  };
}

type PhotoFrameProps = ComponentProps<"div"> & {
  /** Photo to display — omit it to render the ghosted stand-in
   * (same layout, so swapping in the real asset changes nothing). */
  src?: string;
  alt?: string;
  /** Placeholder caption shown until a photo is supplied. */
  label?: string;
  /** Mat thickness around the photo (`PhotoMat` above). */
  mat?: PhotoMat;
  /** Backing-plate color (`PhotoTone` above); width/size come
   * through `className`, like every collage block. */
  tone?: PhotoTone;
  /** `arch` = the brand signature (`rounded-t-[45%] rounded-b-[6px]`,
   * the shaped photo blocks); `plain` = the 6px photo rectangle of
   * the About/CTA frames. Override any radius via `className`
   * (tailwind-merge keeps the last say, e.g. `rounded-t-[48%]`). */
  shape?: "arch" | "plain";
  /** Let the photo spill past the plate (transparent cut-outs such as
   * the laptop, which overflows its arch). Mat values may be negative. */
  bleed?: boolean;
  /** `contain` for cut-outs (never cropped), `cover` for plain photos. */
  fit?: "cover" | "contain";
};

/** The shaped photo block from the home frames — the place where
 * real images (and overlaid data via `children`) live, with a
 * colored mat behind them along the arch signature. Stand-ins look
 * identical, so sections keep their geometry while waiting for
 * assets. Sizing/positioning is ordinary Tailwind in `className`. */
export function PhotoFrame({
  src,
  alt = "",
  label = "",
  mat = DEFAULT_MAT,
  tone = "brand",
  shape = "arch",
  bleed = false,
  fit = "cover",
  className,
  children,
  ...props
}: PhotoFrameProps) {
  return (
    <div
      className={cn(
        "relative",
        !bleed && "overflow-hidden",
        PHOTO_TONES[tone],
        shape === "arch"
          ? "rounded-t-[45%] rounded-b-[6px]"
          : "rounded-[6px]",
        className,
      )}
      {...props}
    >
      <div className="absolute" style={matToStyle(mat)}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className={cn(
              "size-full",
              fit === "contain" ? "object-contain" : "object-cover",
            )}
          />
        ) : (
          label && (
            <ImagePlaceholder
              label={label}
              className="h-full w-full bg-transparent"
            />
          )
        )}
      </div>
      {children}
    </div>
  );
}
