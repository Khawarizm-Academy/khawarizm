import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  /** `dark` = on an indigo section. */
  tone?: "light" | "dark";
  align?: "start" | "center";
  className?: string;
};

/** Eyebrow + H2 pair shared by every Home section. */
function SectionHeading({
  eyebrow,
  title,
  tone = "light",
  align = "start",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <p
        className={cn(
          "mb-3 font-heading text-sm font-medium",
          dark ? "text-brand" : "text-brand-ink",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display text-3xl leading-snug font-extrabold md:text-5xl md:leading-snug",
          dark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
    </div>
  );
}

export { SectionHeading };
