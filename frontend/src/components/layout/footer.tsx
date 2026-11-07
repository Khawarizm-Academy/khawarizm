import {
  FOOTER_LEGAL,
  FOOTER_MENU,
  FOOTER_SERVICES,
  SITE,
} from "@/constants/site";
import type { NavItem } from "@/types";
import { Container } from "./container";
import { Logo } from "./logo";

function FooterColumn({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="mb-4 font-heading text-sm font-semibold text-brand-ink">
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo className="text-foreground" />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            أكاديمية تقنية عربية تعلّم البرمجة وتبني المواقع والتطبيقات.
          </p>
        </div>
        <FooterColumn title="القائمة" items={FOOTER_MENU} />
        <FooterColumn title="خدماتنا" items={FOOTER_SERVICES} />
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} أكاديمية {SITE.name}. جميع الحقوق
            محفوظة.
          </p>
          <ul className="flex gap-6">
            {FOOTER_LEGAL.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}

export { Footer };
