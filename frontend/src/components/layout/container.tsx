import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** 1170px content column (Figma canvas: 135px sides at 1440 / 23px on mobile) with responsive side padding. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-292.5 px-6 md:px-8", className)}
      {...props}
    />
  );
}
