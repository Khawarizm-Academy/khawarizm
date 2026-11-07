import { Container } from "@/components/layout";
import { SectionHeading, buttonVariants } from "@/components/ui";
import { COURSES } from "@/constants/home";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/router/routes";

/** Continues the navy band started by Works. Card anatomy from the
 * Figma: big white index number beside a "دورة تقنية" caption +
 * duration, hairline divider, then course name / summary / link. */
function Courses() {
  return (
    <section id="courses" className="bg-navy pt-16 pb-16 text-navy-foreground md:pt-40 md:pb-24">
      <Container>
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="الدورات"
          title="ابدأ رحلتك في البرمجة"
        />

        <ol className="mt-10 grid gap-8 md:mt-16 md:grid-cols-3">
          {COURSES.map((course, i) => (
            <li
              key={course.title}
              className="flex flex-col rounded-md border border-navy-border px-6 pt-9 pb-8 md:px-12 md:pb-9"
            >
              <div className="flex items-start gap-4 md:gap-5">
                <span
                  aria-label={`المرحلة ${i + 1}`}
                  className="font-display text-[44px] font-extrabold leading-[60px] text-white md:text-[72px] md:leading-[92px]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex flex-col items-start pt-1.5">
                  <span className="font-heading text-xl font-bold leading-8 text-white md:text-2xl md:leading-9">
                    دورة تقنية
                  </span>
                  <span className="font-sans text-base leading-[30px] text-white">
                    {course.duration}
                  </span>
                </span>
              </div>

              <div className="mt-8 border-t border-navy-border pt-10 md:mt-16 md:pt-10">
                <h3 className="font-heading text-xl font-bold leading-8 text-white md:text-2xl md:leading-9">
                  {course.title}
                </h3>
                <p className="mt-3.5 text-base leading-[30px] text-navy-muted">
                  {course.description}
                </p>
              </div>

              <a
                href={ROUTES.courses}
                className={cn(
                  "mt-9 font-sans text-base leading-[30px] text-white",
                  "underline-offset-4 hover:underline",
                )}
              >
                اعرف المزيد
              </a>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <a href={ROUTES.courses} className={cn(buttonVariants({ variant: "light" }))}>
            كل الدورات
          </a>
        </div>
      </Container>
    </section>
  );
}

export { Courses };
