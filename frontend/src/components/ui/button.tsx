import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* Figma buttons: 48px tall · 32px side padding · 6px radius ·
   15px Readex Pro semibold. */
const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md font-heading text-[15px] leading-6 font-semibold whitespace-nowrap transition-all outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-brand text-brand-foreground hover:bg-brand-hover",
        secondary:
          "border border-border bg-surface text-foreground hover:bg-sand",
        ghost: "text-muted hover:bg-surface hover:text-foreground",
        outline: "border border-brand text-brand-ink hover:bg-brand/10",
        /** White with a soft navy shadow — featured actions on the
         * cream canvas (`اعرف المزيد`, `كل الآراء`, gold CTA). */
        surface:
          "bg-surface text-foreground shadow-[0_3px_9px_rgba(15,31,69,0.08)] hover:bg-sand/60",
        /** On indigo sections — faint white outline (`تواصل معنا`,
         * `شاهد أعمالنا`, `عرض كل الأعمال`, `كل الدورات`)). */
        light: "border border-white/30 text-white hover:bg-white/10",
        /** Indigo fill — alternative dark action. */
        dark: "bg-navy text-navy-foreground hover:opacity-90",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

// buttonVariants is intentionally colocated with Button (shadcn-style
// factory for rendering <Link>/<a> with identical styling).
// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants, type ButtonProps };
