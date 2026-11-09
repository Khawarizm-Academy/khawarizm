import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ShowcaseCardProps = {
  title: string;
  /** Kind chip over the veil (موقع / تطبيق / …) — omit to hide. */
  chip?: string;
  /** Real artwork; a transparent cut-out keeps the gradient mat. */
  image?: string;
  /** Tailwind gradient classes standing in until real imagery lands. */
  gradient?: string;
  /** Overlay content above the veil (rare). */
  children?: ReactNode;
  className?: string;
};

/** Navy-band project tile: gradient/image plate, uniform navy veil (32%), white kind chip + oversized display title pinned to the bottom. Span/offset classes come through `className` (`md:col-span-*`). */
export function ShowcaseCard({
  title,
  chip,
  image,
  gradient,
  children,
  className,
}: ShowcaseCardProps) {
  return (
    <article
      className={cn(
        "relative flex h-104 items-end overflow-hidden rounded-md bg-gradient-to-br",
        gradient,
        className,
      )}
    >
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {/* Uniform navy veil like the Figma overlay (32%). */}
      <div aria-hidden className="absolute inset-0 bg-navy/30" />
      {children}
      <div className="relative flex flex-col items-start gap-6 px-7 pb-10 md:px-12">
        {chip && (
          <span className="rounded-full bg-surface px-5 py-1 font-sans text-base text-foreground">
            {chip}
          </span>
        )}
        <h3 className="font-display text-[36px] font-extrabold leading-12.5 text-white md:text-[40px] md:leading-14">
          {title}
        </h3>
      </div>
    </article>
  );
}

export type { ShowcaseCardProps };
