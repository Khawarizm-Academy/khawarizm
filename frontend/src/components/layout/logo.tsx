import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/router/routes";
import { SITE } from "@/constants/site";

/** Placeholder wordmark until the final logo file (SVG, transparent)
 * is supplied. Swap the pentagon for the real mark here only. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to={ROUTES.home}
      aria-label={`${SITE.name} — الرئيسية`}
      className={cn(
        "inline-flex items-center gap-2 font-display text-2xl font-extrabold",
        className,
      )}
    >
      <svg aria-hidden viewBox="0 0 32 32" className="size-8">
        <path
          d="M16 2.5 29 12l-5 16H8L3 12 16 2.5Z"
          fill="var(--app-brand)"
        />
        <path
          d="M16 9.5 22 14l-2.3 7h-7.4L10 14l6-4.5Z"
          fill="var(--app-navy)"
        />
      </svg>
      {SITE.name}
    </Link>
  );
}
