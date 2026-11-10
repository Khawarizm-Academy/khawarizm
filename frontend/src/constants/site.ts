import type { NavItem } from "@/types";
import { HOME_ANCHORS, ROUTES } from "@/router/routes";

export const SITE = {
  name: "خوارزم",
  tagline: "أكاديمية تقنية · استوديو رقمي",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "الرئيسية", href: ROUTES.home },
  { label: "الخدمات", href: ROUTES.services },
  { label: "الأعمال", href: ROUTES.works },
  { label: "الدورات", href: HOME_ANCHORS.courses },
  { label: "من نحن", href: ROUTES.about },
];

export const FOOTER_MENU: NavItem[] = [
  { label: "من نحن", href: ROUTES.about },
  { label: "الخدمات", href: HOME_ANCHORS.services },
  { label: "الأعمال", href: HOME_ANCHORS.works },
  { label: "تواصل معنا", href: ROUTES.contact },
];

export const FOOTER_SERVICES: NavItem[] = [
  { label: "الدورات التعليمية", href: HOME_ANCHORS.courses },
  { label: "تصميم المواقع", href: HOME_ANCHORS.services },
  { label: "تطوير التطبيقات", href: HOME_ANCHORS.services },
  { label: "خدمات أخرى", href: HOME_ANCHORS.services },
];

export const FOOTER_LEGAL: NavItem[] = [
  { label: "سياسة الخصوصية", href: "#" },
  { label: "الشروط والأحكام", href: "#" },
];
