import { Section, SectionAction, CourseCard, StaggerGrid, StaggerItem, lift } from "@/components/blocks";
import { SectionHeading } from "@/components/ui";
import { COURSES } from "@/constants/home";
import { ROUTES } from "@/router/routes";

/** Figma staggering on the ordered course trio. */
const LIFTS = ["md:-top-10", "md:top-8", "md:-top-6"];

/** Navy band continuing Works. Card anatomy: index + level/duration, divider, name/summary/link; stagger in, hover-lift. */
function Courses() {
  return (
    <Section
      id="courses"
      tone="navy"
      containerClassName="pt-16 pb-16 md:pt-40 md:pb-24"
    >
      <SectionHeading
        tone="dark"
        align="center"
        eyebrow="الدورات"
        title="ابدأ رحلتك في البرمجة"
      />

      <StaggerGrid tag="ol" className="mt-10 gap-8 md:mt-16 md:grid-cols-3">
        {COURSES.map((course, i) => (
          <StaggerItem key={course.title} className={lift(i, LIFTS)}>
            <CourseCard
              index={i + 1}
              level={course.level}
              duration={course.duration}
              title={course.title}
              body={course.description}
              href={ROUTES.courses}
            />
          </StaggerItem>
        ))}
      </StaggerGrid>

      <SectionAction href={ROUTES.courses} variant="light" rowClassName="mt-12">
        كل الدورات
      </SectionAction>
    </Section>
  );
}

export { Courses };
