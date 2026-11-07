import type { ComponentProps } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type TextLinkProps = ComponentProps<"a"> & {
  /** `dark` uses the navy-section palette (white → gold on hover). */
  tone?: "light" | "dark";
};

/** The Figma contexts' plain "اعرف المزيد" link. In code it gains a
 * subtle sliding arrow on hover. The arrow points LEFT because the
 * site is RTL — left is the reading direction. */
export function TextLink({
  className,
  tone = "light",
  children,
  ...props
}: TextLinkProps) {
  return (
    <a
      {...props}
      className={cn(
        "group inline-flex cursor-pointer items-center gap-2 text-base leading-[30px]",
        "text-start underline-offset-4 hover:underline",
        className,
      )}
    >
      <span
        className={cn(
          "transition-colors",
          tone === "dark"
            ? "text-white group-hover:text-gold"
            : "group-hover:text-brand-ink",
        )}
      >
        {children}
      </span>
      <ArrowLeft
        aria-hidden
        className="size-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-1"
      />
    </a>
  );
}
