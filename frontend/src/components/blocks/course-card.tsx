import { TextLink } from "@/components/ui";
import { cn } from "@/lib/utils";

type CourseCardProps = {
  /** 1-based position — drawn as the big LTR index (`01`, `02`, …). */
  index: number;
  /** The level caption next to the index (typically "دورة تقنية"). */
  level: string;
  duration: string;
  title: string;
  body: string;
  href: string;
  className?: string;
};

/** Navy-band course card: oversized white index (`dir="ltr"` so digits never flip), level + duration column, hairline divider, title/description and the white→gold `TextLink tone="dark"`. Pass Figma `md:top-*` shifts via the parent's `lift()`. */
function CourseCard({
  index,
  level,
  duration,
  title,
  body,
  href,
  className,
}: CourseCardProps) {
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-md border border-navy-border px-6 pt-9 pb-8 md:px-12 md:pb-9",
        className,
      )}
    >
      <div className="flex items-start gap-4 md:gap-5">
        {/* Numerals read LTR; `dir` keeps "01" from flipping. */}
        <span
          aria-label={`المرحلة ${index}`}
          dir="ltr"
          className="text-left font-display text-[44px] font-extrabold leading-15 text-white md:text-[72px] md:leading-23"
        >
          {String(index).padStart(2, "0")}
        </span>
        <span className="flex flex-col items-start pt-1.5">
          <span className="font-heading text-xl font-bold leading-8 text-white md:text-2xl md:leading-9">
            {level}
          </span>
          <span className="font-sans text-base leading-7.5 text-white">
            {duration}
          </span>
        </span>
      </div>

      <div className="mt-8 border-t border-navy-border pt-10 md:mt-16 md:pt-10">
        <h3 className="font-heading text-xl font-bold leading-8 text-white md:text-2xl md:leading-9">
          {title}
        </h3>
        <p className="mt-3.5 text-base leading-7.5 text-navy-muted">{body}</p>
      </div>

      <TextLink href={href} tone="dark" className="mt-9">
        اعرف المزيد
      </TextLink>
    </article>
  );
}

export { CourseCard, type CourseCardProps };
