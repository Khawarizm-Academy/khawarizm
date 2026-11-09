import type { ComponentProps, ReactNode } from "react";
import { Container } from "@/components/layout";
import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";

/** Background canvases shared by every Figma section band. */
const SECTION_TONES = {
  background: "bg-background",
  navy: "bg-navy text-navy-foreground",
  brand: "bg-brand",
  sand: "bg-sand",
} as const;

type SectionProps = ComponentProps<"section"> & {
  /** Band canvas — `background` (cream) is the default; `navy` for the dark strips (hero/works/courses, page intros); `brand` for gold fills. */
  tone?: keyof typeof SECTION_TONES;
  /** Classes for the inner `Container` (paddings, `min-h`, grids) — keeps the `<section>` focused on the background. */
  containerClassName?: string;
};

/** The repeating section shell of the design: a toned `<section>` band + the 1170px `Container`. Add `id` for in-page anchors and pass responsive paddings via `containerClassName` so every band keeps its Figma rhythm. */
function Section({
  tone = "background",
  containerClassName,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(SECTION_TONES[tone], className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

type SectionActionProps = {
  href: string;
  children: ReactNode;
  /** `light` = the white outline on navy bands (`كل الدورات`/`عرض كل الأعمال`); `surface` = the white shadowed button on cream (`كل الآراء`). */
  variant?: "light" | "surface";
  rowClassName?: string;
  className?: string;
};

/** Centered trailing action under a section's grid — the "see all" row closing navy/cream bands. */
function SectionAction({
  href,
  children,
  variant = "light",
  rowClassName,
  className,
}: SectionActionProps) {
  return (
    <div className={cn("flex justify-center", rowClassName)}>
      <a href={href} className={cn(buttonVariants({ variant }), className)}>
        {children}
      </a>
    </div>
  );
}

export { Section, SectionAction, type SectionProps, type SectionActionProps };
