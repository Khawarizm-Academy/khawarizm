import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Brand eyebrow above the title — omit to render the title alone (plain H2 blocks like «التحدي»/«الحل»). */
  eyebrow?: string;
  /** Omit to render the eyebrow alone (standalone `قصتنا`/`فريقنا` labels). */
  title?: string;
  /** `dark` = on a navy section. */
  tone?: "light" | "dark";
  align?: "start" | "center";
  /** Big Figma H2s are 56/72 on desktop; the services H2 is a smaller 40/56 ("md"). Both are 36/50 on mobile. */
  size?: "lg" | "md";
  className?: string;
};

/** Eyebrow + (optional) H2 pair shared by every section. */
function SectionHeading({
  eyebrow,
  title,
  tone = "light",
  align = "start",
  size = "lg",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            title ? "mb-6" : "",
            "font-heading text-base font-medium leading-7",
            dark ? "text-brand" : "text-brand-ink",
          )}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={cn(
            "font-display text-[36px] font-extrabold leading-12.5",
            size === "lg"
              ? "md:text-[56px] md:leading-18"
              : "md:text-[40px] md:leading-14",
            dark ? "text-white" : "text-foreground",
          )}
        >
          {title}
        </h2>
      )}
    </div>
  );
}

export { SectionHeading };
