import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { cn } from "@/lib/utils";

export type ContactChannel = {
  label: string;
  value: string;
  icon: LucideIcon;
  /** `tel:`/`mailto:`/`https:` when the channel is reachable. */
  href?: string;
};

type ContactCardsProps = {
  cards: ContactChannel[];
  className?: string;
};

/** The bordered channel strip (call–mail–address): gold icon disc, label, big value on a hairline three-column band. Reachable channels render as links. */
function ContactCards({ cards, className }: ContactCardsProps) {
  return (
    <div className={cn("grid border-y border-border md:grid-cols-3", className)}>
      {cards.map(({ label, value, icon: Icon, href }, index) => (
        <FadeIn
          key={label}
          delay={index * 0.06}
          className={cn(
            "border-border px-8 py-10 md:px-10 md:py-12",
            index > 0 && "border-t md:border-r md:border-t-0",
          )}
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-brand">
            <Icon className="size-7 text-navy" />
          </span>
          <p className="mt-6 font-heading text-base font-medium text-brand-ink">{label}</p>
          {href ? (
            <a
              href={href}
              className="mt-5 inline-block text-xl text-foreground transition-colors hover:text-brand-ink"
            >
              {value}
            </a>
          ) : (
            <p className="mt-5 text-xl text-foreground">{value}</p>
          )}
        </FadeIn>
      ))}
    </div>
  );
}

export { ContactCards, type ContactCardsProps };
