import { Fragment } from "react";
import { cn } from "@/lib/utils";

export type FilterOption = { id: string; label: string };

type FilterProps = {
  options: FilterOption[];
  value: string;
  onChange: (id: string) => void;
  ariaLabel: string;
  className?: string;
};

/** Mobile-first filter: the native 48px dropdown the Figma mobile frame swaps the tabs for (`تصفية الأعمال`). Pair with `FilterTabs` — it renders below `md` only in the section wiring. */
function FilterSelect({ value, onChange, options, ariaLabel, className }: FilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      aria-label={ariaLabel}
      className={cn(
        "h-12 w-full rounded-md border border-border bg-surface px-4 font-sans text-base text-foreground md:hidden",
        className,
      )}
    >
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

/** Desktop filter: plain text tabs separated by Arabic dot glyphs `٠`; the active tab is plain white. */
function FilterTabs({ value, onChange, options, ariaLabel, className }: FilterProps) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn("hidden items-center justify-center md:flex", className)}
    >
      {options.map((option, i) => (
        <Fragment key={option.id}>
          {i > 0 && (
            <span aria-hidden className="mx-6 text-sm leading-6 text-navy-muted">
              ٠
            </span>
          )}
          <button
            type="button"
            aria-pressed={value === option.id}
            onClick={() => onChange(option.id)}
            className={cn(
              "cursor-pointer font-sans text-base leading-7.5 transition-colors",
              value === option.id
                ? "text-white"
                : "text-navy-muted hover:text-white/80",
            )}
          >
            {option.label}
          </button>
        </Fragment>
      ))}
    </div>
  );
}

export { FilterSelect, FilterTabs, type FilterProps };
