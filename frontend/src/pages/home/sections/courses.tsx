import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout";
import { SectionHeading, buttonVariants } from "@/components/ui";
import { COURSES } from "@/constants/home";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/router/routes";

/** Continues the indigo band started by Works. The numbers are real
 * information here: the courses are a beginner → advanced path. */
function Courses() {
  return (
    <section id="courses" className="bg-navy pb-20 text-navy-foreground md:pb-28">
      <Container>
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="الدورات"
          title="ابدأ رحلتك في البرمجة"
        />

        <ol className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3">
          {COURSES.map((course, i) => (
            <li
              key={course.title}
              className="flex flex-col gap-5 rounded-md border border-white/15 bg-white/5 p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-heading text-sm text-navy-muted">
                  {course.level}
                </span>
                <span
                  aria-label={`المرحلة ${i + 1}`}
                  className="font-display text-5xl leading-none font-extrabold text-brand"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="flex items-center gap-2 text-xs text-navy-muted">
                <span aria-hidden className="size-1.5 rounded-full bg-brand" />
                مدة الدورة: {course.duration}
              </p>

              <div className="border-t border-white/15 pt-5">
                <h3 className="font-heading text-xl font-semibold text-white">
                  {course.title}
                </h3>
                <p className="mt-3 text-sm leading-loose text-navy-muted">
                  {course.description}
                </p>
              </div>

              <a
                href={ROUTES.courses}
                className="group mt-auto inline-flex items-center gap-2 pt-2 font-heading text-sm font-medium text-white underline-offset-4 hover:underline"
              >
                اعرف المزيد
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              </a>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <a
            href={ROUTES.courses}
            className={cn(buttonVariants({ variant: "light" }))}
          >
            كل الدورات
          </a>
        </div>
      </Container>
    </section>
  );
}

export { Courses };
