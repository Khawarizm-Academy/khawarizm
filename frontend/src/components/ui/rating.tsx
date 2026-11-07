import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type RatingProps = {
  /** Number of stars (the Figma cards arrive agreed on 5). */
  count?: number;
  /** The accessible rating description, e.g. "تقييم 5 من 5". */
  label: string;
  className?: string;
};

/** Row of gold rating stars — the 24px `--shape-gold` squares of the
 * Figma testimonial cards, drawn with the real star glyph. */
export function Rating({ count = 5, label, className }: RatingProps) {
  return (
    <p role="img" aria-label={label} className={cn("flex gap-2", className)}>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} aria-hidden className="size-6 fill-gold text-gold" />
      ))}
    </p>
  );
}
