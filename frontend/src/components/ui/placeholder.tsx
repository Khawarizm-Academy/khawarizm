import { cn } from "@/lib/utils";

/** Ghosted box standing in for a Figma photo until the real assets land: soft navy surface + centered caption. Pair it with a shaped parent (arch / arch-topped block) and use `bg-transparent` on the inset to keep only the label visible. `Portrait` covers the gradient-block flavor of the same idea. */
export function ImagePlaceholder({
  className,
  label,
}: {
  className?: string;
  label: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex items-center justify-center overflow-hidden bg-navy-400/20 text-center text-xs font-medium text-white/40",
        className,
      )}
    >
      {label}
    </div>
  );
}
