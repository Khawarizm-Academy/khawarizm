import type { Stat } from "@/types";

export const ABOUT_STATS: Stat[] = [
  { value: "[00]", label: "عدد الطلاب" },
  { value: "[00]", label: "عدد المشاريع" },
  { value: "[00]", label: "عدد الخدمات" },
];

export const TEAM = [
  { image: "/assets/41-3145.webp", name: "[اسم عضو الفريق]", role: "[المسمى الوظيفي]" },
  { image: "/assets/41-3149.webp", name: "[اسم عضو الفريق]", role: "[المسمى الوظيفي]" },
  { image: "/assets/41-3153.webp", name: "[اسم عضو الفريق]", role: "[المسمى الوظيفي]" },
  { image: "/assets/41-3157.webp", name: "[اسم عضو الفريق]", role: "[المسمى الوظيفي]" },
] as const;
