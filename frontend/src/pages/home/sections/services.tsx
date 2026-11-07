import { Container } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { SERVICES } from "@/constants/home";
import { ROUTES } from "@/router/routes";
import { cn } from "@/lib/utils";

function Services() {
  return (
    <section id="services" className="bg-background pt-10 pb-16 md:pt-32 md:pb-28">
      <Container>
        <SectionHeading
          size="md"
          eyebrow="ما نقدمه"
          title="كل ما تحتاجه لرحلتك التقنية"
        />
        {/* Three separate bordered cards (400px tall in Figma); the
            middle "تصميم المواقع" card carries the featured shadow. */}
        <ul className="mt-10 grid gap-6 md:mt-16 md:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <li
              key={title}
              className={cn(
                "flex flex-col items-start rounded-md border border-border p-7 md:min-h-[400px] md:p-12",
                i === 1 && "shadow-[0_32px_64px_rgba(15,31,69,0.04)]",
              )}
            >
              <span className="flex size-20 items-center justify-center rounded-full bg-brand">
                <Icon className="size-7 text-navy" strokeWidth={1.5} />
              </span>
              <h3 className="mt-10 font-heading text-xl font-bold leading-8 md:text-2xl md:leading-9">
                {title}
              </h3>
              <p className="mt-3.5 flex-1 text-base leading-[30px] text-muted">
                {description}
              </p>
              <a
                href={ROUTES.services}
                className="mt-9 font-sans text-base leading-[30px] underline-offset-4 hover:underline"
              >
                اعرف المزيد
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export { Services };
