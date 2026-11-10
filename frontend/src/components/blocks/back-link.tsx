import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BackLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Detail pages' back affordance: right-pointing arrow (RTL back direction) + semibold caption across the whole hit area. */
function BackLink({ href, children, className }: BackLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-3 font-heading text-sm font-semibold text-foreground transition-colors hover:text-brand-ink",
        className,
      )}
    >
      <ArrowRight className="size-4" />
      {children}
    </a>
  );
}

export { BackLink, type BackLinkProps };
