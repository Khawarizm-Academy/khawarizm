import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/router/routes";
import { SITE } from "@/constants/site";

/** Wordmark from the Figma brand lockup: a gold-framed square with a
 * solid gold core, next to the (Readex Pro) wordmark. Swap the frame
 * for the final logo asset here only when the SVG file arrives. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to={ROUTES.home}
      aria-label={`${SITE.name} — الرئيسية`}
      className={cn(
        "inline-flex items-center gap-3 font-heading text-xl font-bold md:text-2xl",
        className,
      )}
    >
      <span
        aria-hidden
        className="grid size-12 shrink-0 place-items-center border-[5px] border-brand"
      >
        <span className="size-[19px] bg-brand" />
      </span>
      {SITE.name}
    </Link>
  );
}
