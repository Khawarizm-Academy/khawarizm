import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion";
import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";

type CtaBandProps = {
  title: string;
  description?: string;
  cta: { href: string; label: string };
  /** Right-column artwork / photo — kept decorative (`aria-hidden` is expected inside the media). */
  media?: ReactNode;
  /** Band rhythm/gap overrides (e.g. `md:py-20 md:gap-16`). */
  className?: string;
  /** Extras on the media holder (max-w, margins). */
  mediaClassName?: string;
};

/** The gold conversion band: rounded `bg-brand` plate, big display question + support line + white `surface` button, artwork column left (art tops on mobile, supports on desktop with two `FadeIn`s). Home and About reuse it — compose collages outside and drop them in as `media`. */
function CtaBand({
  title,
  description,
  cta,
  media,
  className,
  mediaClassName,
}: CtaBandProps) {
  return (
    <div
      className={cn(
        "grid gap-10 rounded-md bg-brand px-6 py-10 md:grid-cols-2 md:items-center md:gap-12 md:px-16 md:py-24",
        className,
      )}
    >
      <FadeIn
        className="order-last flex flex-col items-start gap-6 md:order-none md:gap-8"
        y={24}
      >
        <h2 className="font-display text-[36px] font-extrabold leading-12.5 text-brand-foreground md:text-[56px] md:leading-18">
          {title}
        </h2>
        {description && (
          <p className="max-w-117.5 text-base leading-7.5 text-brand-foreground">
            {description}
          </p>
        )}
        <a
          href={cta.href}
          className={cn(buttonVariants({ variant: "surface", size: "lg" }), "mt-2")}
        >
          {cta.label}
        </a>
      </FadeIn>
      {media && (
        <FadeIn y={24} delay={0.1}>
          <div className={cn("order-none", mediaClassName)}>{media}</div>
        </FadeIn>
      )}
    </div>
  );
}

export { CtaBand, type CtaBandProps };
