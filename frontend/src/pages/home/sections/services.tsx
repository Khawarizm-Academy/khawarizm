import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { SERVICES } from "@/constants/home";
import { ROUTES } from "@/router/routes";

function Services() {
  return (
    <section id="services" className="bg-background pb-20 md:pb-28">
      <Container>
        <SectionHeading eyebrow="ما نقدمه" title="كل ما تحتاجه لرحلتك التقنية" />
        <ul className="mt-10 grid divide-y divide-border border border-border bg-surface md:mt-12 md:grid-cols-3 md:divide-x md:divide-y-0">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex flex-col items-start gap-4 p-8">
              <span className="flex size-12 items-center justify-center rounded-full bg-brand text-navy">
                <Icon className="size-5" />
              </span>
              <h3 className="font-heading text-xl font-semibold">{title}</h3>
              <p className="flex-1 text-sm leading-loose text-muted">
                {description}
              </p>
              <a
                href={ROUTES.services}
                className="group inline-flex items-center gap-2 font-heading text-sm font-medium underline-offset-4 hover:underline"
              >
                اعرف المزيد
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export { Services };
