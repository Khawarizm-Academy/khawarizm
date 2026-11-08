import heroLaptop from "@/assets/hero-laptop.png";
import heroPortrait from "@/assets/hero-portrait.png";
import { GraduationCap, Globe, Smartphone } from "lucide-react";
import type {
  Course,
  HeroImages,
  Project,
  ProjectKind,
  Service,
  Stat,
  Testimonial,
} from "@/types";

/** Hero collage cut-outs (transparent PNGs) wired as `Hero → HeroArt → PhotoFrame` — Vite import hashes the URL at build time. */
export const HERO_IMAGES: HeroImages = {
  laptop: heroLaptop,
  portrait: heroPortrait,
};

/* ⚠️ Sample content — numbers, project names, courses, testimonials are placeholders; replace with real data before launch. */

export const STATS: Stat[] = [
  { value: "[00]", label: "عدد الطلاب" },
  { value: "[00]", label: "عدد المشاريع" },
  { value: "[00]", label: "عدد الخدمات" },
];

export const SERVICES: Service[] = [
  {
    icon: GraduationCap,
    title: "الدورات التعليمية",
    description:
      "دورات تقنية بالعربية تشرح الخوارزميات والبرمجة خطوة بخطوة عبر جلسات مباشرة ومشاريع عملية.",
  },
  {
    icon: Globe,
    title: "تصميم المواقع",
    description:
      "مواقع سريعة وجميلة تعكس هوية مشروعك وتعمل بسلاسة على كل الأجهزة.",
  },
  {
    icon: Smartphone,
    title: "تطوير التطبيقات",
    description:
      "نطوّر تطبيقات متكاملة من الفكرة إلى الإطلاق، بتجربة مستخدم واضحة وأداء موثوق.",
  },
];

export const PROJECT_FILTERS: { id: "all" | ProjectKind; label: string }[] = [
  { id: "all", label: "الكل" },
  { id: "website", label: "مواقع" },
  { id: "app", label: "تطبيقات" },
  { id: "other", label: "أخرى" },
];

export const KIND_LABELS: Record<ProjectKind, string> = {
  website: "موقع",
  app: "تطبيق",
  other: "أخرى",
};

export const PROJECTS: Project[] = [
  {
    id: "project-one",
    title: "[اسم المشروع]",
    kind: "app",
    image: "/assets/41-307.webp",
    gradient: "from-[#d9cfc4] via-[#c9bdb0] to-[#a99d92]",
  },
  {
    id: "project-two",
    title: "[اسم المشروع]",
    kind: "website",
    image: "/assets/41-316.webp",
    gradient: "from-[#7f95d8] via-[#c28fb4] to-[#e7a58f]",
  },
  {
    id: "project-three",
    title: "[اسم المشروع]",
    kind: "website",
    image: "/assets/41-325.webp",
    gradient: "from-[#9d8fd0] via-[#c7a0c9] to-[#e6b8a8]",
  },
  {
    id: "project-four",
    title: "[اسم المشروع]",
    kind: "other",
    image: "/assets/41-334.webp",
    gradient: "from-[#b9b1a8] via-[#a39a90] to-[#8b8279]",
  },
];

export const COURSES: Course[] = [
  {
    title: "[اسم الدورة ١]",
    level: "دورة تقنية",
    duration: "[مدة الدورة]",
    description: "[وصف مختصر للدورة]",
  },
  {
    title: "[اسم الدورة ٢]",
    level: "دورة تقنية",
    duration: "[مدة الدورة]",
    description: "[وصف مختصر للدورة]",
  },
  {
    title: "[اسم الدورة ٣]",
    level: "دورة تقنية",
    duration: "[مدة الدورة]",
    description: "[وصف مختصر للدورة]",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "[نص رأي مؤقت]",
    name: "[اسم العميل]",
    role: "[الجهة / الدورة]",
    avatar: "/assets/41-452.webp",
  },
  {
    quote: "[نص رأي مؤقت]",
    name: "[اسم العميل]",
    role: "[الجهة / الدورة]",
    avatar: "/assets/41-463.webp",
  },
  {
    quote: "[نص رأي مؤقت]",
    name: "[اسم العميل]",
    role: "[الجهة / الدورة]",
    avatar: "/assets/41-474.webp",
  },
  {
    quote: "[نص رأي مؤقت]",
    name: "[اسم العميل]",
    role: "[الجهة / الدورة]",
    avatar: "/assets/41-485.webp",
  },
];
