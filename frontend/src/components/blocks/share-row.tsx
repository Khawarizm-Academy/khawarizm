import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ShareAction = {
  label: string;
  icon: LucideIcon;
  /** Renders an `<a>` when a destination is given, else a `<button>` with `onSelect`. */
  href?: string;
  onSelect?: () => void;
};

type ShareRowProps = {
  /** Caption above the icons — «شارك» here; pass `""` to hide it. */
  heading?: string;
  actions: ShareAction[];
  className?: string;
};

const CIRCLE =
  "flex size-12 items-center justify-center rounded-full bg-brand text-navy transition-colors hover:bg-brand-hover";

/** Centered share/action row: muted caption + gold icon circles (the footer's social circles carry the same plate). Links become anchors, callbacks become buttons — accessibility labels come from `label`. */
function ShareRow({ heading = "شارك", actions, className }: ShareRowProps) {
  return (
    <div className={cn("flex flex-col items-center gap-5", className)}>
      {heading && <p className="text-sm text-muted">{heading}</p>}
      <ul className="flex gap-3">
        {actions.map(({ label, icon: Icon, href, onSelect }) => (
          <li key={label}>
            {href ? (
              <a href={href} aria-label={label} className={CIRCLE}>
                <Icon className="size-5" strokeWidth={1.75} />
              </a>
            ) : (
              <button
                type="button"
                aria-label={label}
                onClick={onSelect}
                className={cn(CIRCLE, "cursor-pointer")}
              >
                <Icon className="size-5" />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { ShareRow, type ShareAction, type ShareRowProps };
