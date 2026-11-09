import type { LucideIcon } from "lucide-react";
import { TextLink } from "@/components/ui";
import { cn } from "@/lib/utils";

/** Icon-disc sizes: `lg` = the 80px chip of the services cards, `sm` = the 48px identity-word chip. */
const ICON_DISC = { lg: "size-20", sm: "size-12" } as const;
const ICON_GLYPH = { lg: "size-7", sm: "size-6" } as const;

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  body: string;
  /** Renders the trailing `اعرف المزيد` link when a destination is given. */
  href?: string;
  linkLabel?: string;
  /** Featured card: white surface + resting/deepening shadow (`تصميم المواقع`, الوسيلة/الرؤية). */
  featured?: boolean;
  iconSize?: "lg" | "sm";
  /** Which pair of corners stays rounded — the identity pair reaches inward (`rounded-r`/`rounded-l`), everything else stays fully rounded. */
  rounded?: "all" | "right" | "left";
  className?: string;
  bodyClassName?: string;
};

/** The gold-disc info card shared by the services grid, the identity word-pair and future "why us" rows: brand icon chip, heading, body, optional `TextLink`, gold hairline border, `hover` shadow wash. Pass sizing/`min-h`/radius through `className`. */
function IconCard({
  icon: Icon,
  title,
  body,
  href,
  linkLabel = "اعرف المزيد",
  featured = false,
  iconSize = "lg",
  rounded = "all",
  className,
  bodyClassName,
}: IconCardProps) {
  return (
    <article
      className={cn(
        "relative flex flex-col items-start border border-border rounded-md p-7 md:min-h-100 md:p-12",
        "transition-shadow hover:shadow-[0_32px_64px_rgba(15,31,69,0.04)]",
        featured &&
          "bg-surface shadow-[0_32px_64px_rgba(15,31,69,0.04)] hover:shadow-[0_32px_64px_rgba(15,31,69,0.10)]",
        rounded === "right" && "rounded-r-md",
        rounded === "left" && "rounded-l-md",
        className,
      )}
    >
      <span
        className={cn(
          "mb-10 flex items-center justify-center rounded-full bg-brand",
          ICON_DISC[iconSize],
          featured && "shadow-[0_3px_9px_rgba(15,31,69,0.08)]",
        )}
      >
        <Icon
          className={cn("text-navy", ICON_GLYPH[iconSize], iconSize === "lg" && "stroke-[1.5]")}
        />
      </span>
      <h3 className="font-heading text-xl font-bold leading-8 text-foreground md:text-2xl md:leading-9">
        {title}
      </h3>
      <p className={cn("mt-3.5 flex-1 text-base leading-7.5 text-muted", bodyClassName)}>
        {body}
      </p>
      {href && (
        <TextLink href={href} className="mt-9">
          {linkLabel}
        </TextLink>
      )}
    </article>
  );
}

export { IconCard, type IconCardProps };
