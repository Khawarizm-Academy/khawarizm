import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SplitProps = {
  /** Decorative media column (collage art, photos, video) — pair with `aria-hidden` inside. */
  media: ReactNode;
  children: ReactNode;
  /** Desktop (RTL grid): `false` (default) = content in the first/right column, `true` = media takes the first column. */
  reverse?: boolean;
  /** Mobile stack order: `true` (default) = media on top; `false` = content first. Desktop columns come from `reverse`. */
  mediaMobileFirst?: boolean;
  /** `aria-hidden` on the media column — `true` for decorative collages (default); `false` when the media is interactive (e.g. a video button). */
  mediaHidden?: boolean;
  align?: "center" | "start";
  /** Mobile-to-desktop gap classes — default `gap-10 md:gap-14`. */
  gap?: string;
  className?: string;
  contentClassName?: string;
  mediaClassName?: string;
};

/** The repeating content + art two-column composition (hero/من نحن/قصتنا/CTA…): content is first in the DOM, the media column swaps to the top on mobile. Desktop columns are resolved by the RTL grid — `reverse` flips which side owns the content. */
function Split({
  media,
  children,
  reverse = false,
  mediaMobileFirst = true,
  mediaHidden = true,
  align = "center",
  gap = "gap-10 md:gap-14",
  className,
  contentClassName,
  mediaClassName,
}: SplitProps) {
  return (
    <div
      className={cn(
        "grid md:grid-cols-2",
        gap,
        align === "center" ? "md:items-center" : "md:items-start",
        className,
      )}
    >
      <div
        className={cn(
          contentMobileOrder(mediaMobileFirst),
          contentDesktopOrder(reverse),
          contentClassName,
        )}
      >
        {children}
      </div>
      <div
        aria-hidden={mediaHidden || undefined}
        className={cn(
          mediaMobileFirst ? "order-first" : "order-last",
          reverse ? "md:order-first" : "md:order-none",
          mediaClassName,
        )}
      >
        {media}
      </div>
    </div>
  );
}

const contentMobileOrder = (mediaFirst: boolean) =>
  mediaFirst ? "order-last" : "order-first";

const contentDesktopOrder = (reverse: boolean) =>
  reverse ? "md:order-last" : "md:order-none";

export { Split, type SplitProps };
