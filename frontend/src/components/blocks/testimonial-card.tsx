import { cn } from "@/lib/utils";

/** Exact Figma rating-glyph strips shipped in `/assets` — one per card position. */
const RATING_STRIPS = ["41-445.svg", "41-456.svg", "41-467.svg", "41-478.svg"] as const;

/** Figma masonry quirks: 1px gold border per card, partial corner rounding per position. */
const CARD_CORNER: Record<number, string> = {
  0: "rounded-t-md md:rounded-tr-none md:rounded-bl-none md:rounded-br-none",
  1: "rounded-md md:rounded-tl-none md:rounded-bl-none md:rounded-br-none",
  2: "rounded-md md:rounded-tl-none md:rounded-tr-none",
  3: "rounded-md md:rounded-tl-none md:rounded-tr-none md:rounded-bl-none",
};

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  /** Real photo, else the navy initial disc from the Figma frames. */
  avatar?: string;
  /** Position in the 2×2 masonry — drives the strip art and the corner map. */
  index: number;
  className?: string;
};

/** Cream testimonial card: gold rating strip, quote, avatar-or-initial + name/role. Position 0 is the solid-white featured card with the soft navy shadow. Motion (rise/hover) stays on the parent via `StaggerItem`. */
function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  index,
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex flex-col border border-border p-6 md:p-12",
        CARD_CORNER[index],
        index === 0 && "bg-surface shadow-[0_32px_64px_rgba(15,31,69,0.04)]",
        className,
      )}
    >
      <img
        src={`/assets/${RATING_STRIPS[index % RATING_STRIPS.length]}`}
        alt="تقييم 5 من 5"
        className="h-6 w-38 object-contain object-right"
      />
      <blockquote className="mt-8 flex-1 text-base leading-7.5 text-muted">
        {quote}
      </blockquote>
      <div className="mt-8 flex items-center gap-5">
        {avatar ? (
          <img
            src={avatar}
            alt=""
            className="size-16 shrink-0 rounded-full object-cover md:size-20"
          />
        ) : (
          <span
            aria-hidden
            className="flex size-16 shrink-0 items-center justify-center rounded-full bg-navy-surface font-display text-2xl font-extrabold text-white md:size-20"
          >
            {name.charAt(0)}
          </span>
        )}
        <div>
          <figcaption className="font-heading text-xl font-bold leading-8 md:text-2xl md:leading-9">
            {name}
          </figcaption>
          <p className="mt-0.5 text-base leading-6 text-foreground">{role}</p>
        </div>
      </div>
    </figure>
  );
}

export { TestimonialCard, type TestimonialCardProps };
