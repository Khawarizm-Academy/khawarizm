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

/** Hero collage cut-outs for the two arch frames (transparent PNGs),
 * wired as `Hero → HeroArt → PhotoFrame` — the Vite import hashes the
 * URL at build time. */
export const HERO_IMAGES: HeroImages = {
  laptop: heroLaptop,
  portrait: heroPortrait,
};

/* ⚠️ Sample content — numbers, project names, course details and
 * testimonials are placeholders written for the layout. Replace with
 * the academy's real data before launch. */

export const STATS: Stat[] = [
  { value: "1200+", label: "عدد الطلاب" },
  { value: "60+", label: "عدد المشاريع" },
  { value: "4", label: "عدد الخدمات" },
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
    id: "attendance-app",
    title: "تطبيق متابعة الطلاب",
    kind: "app",
    gradient: "from-[#d9cfc4] via-[#c9bdb0] to-[#a99d92]",
  },
  {
    id: "institute-site",
    title: "موقع معهد الريادة",
    kind: "website",
    gradient: "from-[#7f95d8] via-[#c28fb4] to-[#e7a58f]",
  },
  {
    id: "exam-platform",
    title: "منصة الاختبارات الإلكترونية",
    kind: "website",
    gradient: "from-[#9d8fd0] via-[#c7a0c9] to-[#e6b8a8]",
  },
  {
    id: "coffee-brand",
    title: "هوية مرئية لمتجر قهوة",
    kind: "other",
    gradient: "from-[#b9b1a8] via-[#a39a90] to-[#8b8279]",
  },
];

export const COURSES: Course[] = [
  {
    title: "أساسيات البرمجة بلغة JavaScript",
    level: "للمبتدئين",
    duration: "8 أسابيع",
    description: "تتعلم المتغيرات والدوال والخوارزميات الأساسية بتمارين تطبيقية.",
  },
  {
    title: "تطوير الواجهات باستخدام React",
    level: "مستوى متوسط",
    duration: "10 أسابيع",
    description: "تبني واجهات تفاعلية بمكوّنات قابلة لإعادة الاستخدام وإدارة للحالة.",
  },
  {
    title: "بناء تطبيقات الويب المتكاملة",
    level: "مستوى متقدم",
    duration: "12 أسبوعًا",
    description: "تربط الواجهة بالخادم وقاعدة البيانات وتنشر مشروعك على الإنترنت.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "شرح الخوارزميات كان مبسّطًا جدًا، وخرجت من الدورة بمشروع حقيقي أضفته إلى سيرتي الذاتية.",
    name: "أحمد السالم",
    role: "طالب في دورة React",
  },
  {
    quote:
      "سلّمونا الموقع قبل الموعد، وكان التصميم أفضل مما تخيلنا. التواصل معهم سهل وواضح.",
    name: "نورة العتيبي",
    role: "مديرة معهد تدريب",
  },
  {
    quote:
      "المدرّبون يتابعون كل طالب على حدة. شعرت أن الدورة مصمّمة لي أنا.",
    name: "خالد الحربي",
    role: "طالب في دورة JavaScript",
  },
  {
    quote:
      "حوّلوا فكرة تطبيقنا إلى منتج يعمل في أسابيع، مع شرح لكل خطوة اتخذوها.",
    name: "ريم القحطاني",
    role: "مؤسسة شركة ناشئة",
  },
];
