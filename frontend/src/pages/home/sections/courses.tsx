import { motion } from "motion/react";
import { Container } from "@/components/layout";
import { fadeUpItem, staggerContainer } from "@/components/motion";
import { SectionHeading, TextLink, buttonVariants } from "@/components/ui";
import { COURSES } from "@/constants/home";
import { ROUTES } from "@/router/routes";
import { cn } from "@/lib/utils";

/** Navy band continuing Works. Card (Figma): index number + "دورة تقنية" + duration, divider, name/summary/link; stagger in, hover-lift. */
function Courses() {
  return (
    <section
      id="courses"
      className="bg-navy pt-16 pb-16 text-navy-foreground md:pt-40 md:pb-24"
    >
      <Container>
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="الدورات"
          title="ابدأ رحلتك في البرمجة"
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-8 md:mt-16 md:grid-cols-3"
        >
          {COURSES.map((course, i) => (
            <motion.li
              key={course.title}
              variants={fadeUpItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="flex flex-col rounded-md border border-navy-border px-6 pt-9 pb-8 md:px-12 md:pb-9"
            >
              <div className="flex items-start gap-4 md:gap-5">
                {/* Numerals read LTR; `dir` keeps "01" from flipping. */}
                <span
                  aria-label={`المرحلة ${i + 1}`}
                  dir="ltr"
                  className="text-left font-display text-[44px] font-extrabold leading-[60px] text-white md:text-[72px] md:leading-[92px]"
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

              <TextLink
                href={ROUTES.courses}
                tone="dark"
                className="mt-9"
              >
                اعرف المزيد
              </TextLink>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-12 flex justify-center">
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
