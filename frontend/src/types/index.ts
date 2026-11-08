import type { LucideIcon } from "lucide-react";

export type NavItem = { label: string; href: string };

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProjectKind = "website" | "app" | "other";

export type Project = {
  id: string;
  title: string;
  kind: ProjectKind;
  /** Tailwind gradient classes used until real project images exist. */
  gradient: string;
};

export type Course = {
  title: string;
  level: string;
  duration: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Stat = { value: string; label: string };

/** Hero collage cut-out images (transparent PNGs). An empty or
 * missing path keeps the ghosted placeholder. */
export type HeroImages = { laptop?: string; portrait?: string };
