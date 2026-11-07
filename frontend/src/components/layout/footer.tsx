import { AtSign, Send, Share2 } from "lucide-react";
import { Link } from "react-router";
import {
  FOOTER_LEGAL,
  FOOTER_MENU,
  FOOTER_SERVICES,
  SITE,
} from "@/constants/site";
import { ROUTES } from "@/router/routes";
import type { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Container } from "./container";

const SOCIALS = [
  { label: "البريد الإلكتروني", href: "#", icon: AtSign },
  { label: "الرسائل", href: "#", icon: Send },
  { label: "المشاركة", href: "#", icon: Share2 },
] as const;

function FooterColumn({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <nav
      aria-label={title}
      className="flex flex-col items-center gap-4 md:items-start"
    >
      <h2 className="font-heading text-base font-medium leading-7 text-brand-ink">
        {title}
      </h2>
      <ul className="flex flex-col items-center gap-2.5 md:items-start">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="font-sans text-base leading-[30px] text-foreground transition-colors hover:text-brand-ink"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Cream footer: wordmark + two link columns + gold social circles on
 * one row (stacked and centered on mobile), then a divider and legal
 * bar. */
function Footer() {
  return (
    <footer className="bg-background pt-16 md:pt-24">
      <Container className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-8">
        <Link
          to={ROUTES.home}
          aria-label={`${SITE.name} — الرئيسية`}
          className="font-heading text-xl font-bold text-foreground md:text-2xl"
        >
          {SITE.name}
        </Link>
        <FooterColumn title="القائمة" items={FOOTER_MENU} />
        <FooterColumn title="خدماتنا" items={FOOTER_SERVICES} />

        <ul className="flex items-center gap-3" aria-label="حساباتنا">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                className="flex size-12 items-center justify-center rounded-full bg-brand text-navy transition-colors hover:bg-brand-hover"
              >
                <social.icon className="size-5" strokeWidth={1.75} />
              </a>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="mt-14 pb-10 md:mt-24">
        <div className="border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-sans text-base leading-[30px] text-muted">
              © {new Date().getFullYear()} أكاديمية {SITE.name}. جميع الحقوق
              محفوظة.
            </p>
            <ul className="flex items-center gap-10 md:gap-16">
              {FOOTER_LEGAL.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={cn(
                      "font-sans text-base leading-[30px] text-foreground",
                      "transition-colors hover:text-brand-ink",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
