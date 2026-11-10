import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** The 48px control plate of the contact form (cream hairline on white, 6px radius, gold focus). Alignment/colour stay page-side: add `text-right` etc. */
// eslint-disable-next-line react-refresh/only-export-components
export const FIELD_CONTROL = {
  input:
    "h-12 w-full rounded-md border border-border bg-white px-4 font-sans text-base outline-none transition focus:border-brand",
  select:
    "h-12 w-full rounded-md border border-border bg-white px-4 font-sans text-base outline-none transition focus:border-brand",
  textarea:
    "w-full resize-none rounded-md border border-border bg-white px-4 py-3 font-sans text-base outline-none transition focus:border-brand",
} as const;

type FieldProps = {
  label: string;
  /** Control element — pair with the matching `FIELD_CONTROL` classes. */
  children: ReactNode;
  className?: string;
  labelClassName?: string;
};

/** Labelled form rows: semibold heading-font label over the control. */
export function Field({ label, children, className, labelClassName }: FieldProps) {
  return (
    <label className={cn("block", className)}>
      <span
        className={cn(
          "mb-2 block font-heading text-sm font-semibold text-foreground",
          labelClassName,
        )}
      >
        {label}
      </span>
      {children}
    </label>
  );
}

/** Convenience input with the shared plate already applied. */
export function FieldInput({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(FIELD_CONTROL.input, className)} {...props} />;
}

/** Convenience select with the shared plate already applied. */
export function FieldSelect({ className, children, ...props }: ComponentProps<"select">) {
  return (
    <select className={cn(FIELD_CONTROL.select, className)} {...props}>
      {children}
    </select>
  );
}

/** Convenience textarea with the shared plate already applied. */
export function FieldTextarea({ className, ...props }: ComponentProps<"textarea">) {
  return <textarea className={cn(FIELD_CONTROL.textarea, className)} {...props} />;
}
