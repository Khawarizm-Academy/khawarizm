import { cn } from "@/lib/utils";

type PageIntroProps = {
  /** Brand-ink eyebrow above the title. */
  eyebrow?: string;
  title: string;
  /** The large `text-xl` support line under the title. */
  lead?: string;
  /** The muted detail line under the lead. */
  note?: string;
  className?: string;
};

/** Centered page opener for detail pages (project brief, future course detail): eyebrow + oversized display title + lead + muted note. Vertical rhythm is owned here; the width/margins/FadeIn stay page-side. */
function PageIntro({
  eyebrow,
  title,
  lead,
  note,
  className,
}: PageIntroProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {eyebrow && (
        <p className="font-heading text-base font-medium text-brand-ink">{eyebrow}</p>
      )}
      <h1
        className={cn(
          "font-display text-5xl font-extrabold leading-[1.25] text-foreground md:text-7xl",
          eyebrow && "mt-4",
        )}
      >
        {title}
      </h1>
      {lead && (
        <p className={cn("text-xl leading-9 text-foreground", eyebrow ? "mt-8" : "mt-5")}>
          {lead}
        </p>
      )}
      {note && <p className="mt-5 text-base leading-8 text-muted">{note}</p>}
    </div>
  );
}

export { PageIntro, type PageIntroProps };
