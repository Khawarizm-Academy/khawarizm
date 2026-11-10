import { Mail, MapPin, Phone } from "lucide-react";
import type { ContactChannel } from "@/components/blocks/contact-cards";

/** ⚠️ Sample data — placeholders until the real channels land; add `tel:`/`mailto:` hrefs alongside the values. */
export const CONTACT_CHANNELS: ContactChannel[] = [
  { label: "الهاتف", value: "[رقم الهاتف]", icon: Phone },
  { label: "البريد الإلكتروني", value: "[البريد الإلكتروني]", icon: Mail },
  { label: "العنوان", value: "[العنوان]", icon: MapPin },
];

export const CONTACT_SERVICE_OPTIONS = ["الدورات التعليمية", "تصميم المواقع", "تطوير التطبيقات"] as const;

export type ContactService = (typeof CONTACT_SERVICE_OPTIONS)[number];
