import { BookOpen, Globe, Smartphone } from "lucide-react";
import type { ServiceDetail } from "@/types";

/** ⚠️ Sample copy — placeholder text written for the layout; replace with approved content before launch. */
export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    title: "الدورات التعليمية",
    heading: "تعلّم البرمجة خطوة بخطوة",
    body: "دورات عربية تشرح الخوارزميات وأساسيات البرمجة بأسلوب عملي، وتُقدَّم عبر جلسات مباشرة تناسب مستويات مختلفة.",
    icon: BookOpen,
    points: ["خوارزميات وأساسيات البرمجة", "مشاريع تطبيقية", "متابعة ودعم"],
  },
  {
    title: "تصميم المواقع",
    heading: "موقع يعكس قيمة مشروعك",
    body: "نصمم مواقع عصرية وسريعة تساعدك على تقديم خدماتك بوضوح، وتمنح زوارك تجربة سهلة على كل الأجهزة.",
    icon: Globe,
    points: ["تصميم واجهات متجاوبة", "تجربة مستخدم واضحة", "تحسين الأداء والظهور"],
  },
  {
    title: "تطوير التطبيقات",
    heading: "حوّل فكرتك إلى تطبيق",
    body: "نبني تطبيقات عملية قابلة للنمو، من الفكرة الأولى وحتى الإطلاق، مع عناية بالتفاصيل والأداء.",
    icon: Smartphone,
    points: ["تحليل الفكرة والمتطلبات", "تطوير قابل للتوسع", "اختبار وإطلاق موثوق"],
  },
];

export const SERVICE_STEPS: string[] = ["الفكرة والتخطيط", "التصميم والتطوير", "الاختبار والإطلاق"];
