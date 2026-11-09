import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/layout";
import { fadeUpItem, staggerContainer } from "@/components/motion";
import { TEAM } from "@/constants/about";

export function AboutTeam() {
  return (
    <section className="bg-navy py-24 text-white md:py-28">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-heading text-base font-medium text-brand">فريقنا</p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-[56px]">فريق المعلمين والمطورين</h2>
          </div>
          <div className="hidden items-center gap-3 md:flex" aria-label="التنقل بين أعضاء الفريق">
            <button type="button" aria-label="السابق" className="flex size-12 items-center justify-center rounded-full border border-navy-border text-white transition-colors hover:bg-navy-surface"><ArrowRight className="size-5" /></button>
            <button type="button" aria-label="التالي" className="flex size-12 items-center justify-center rounded-full border border-navy-border text-white transition-colors hover:bg-navy-surface"><ArrowLeft className="size-5" /></button>
          </div>
        </div>
        <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-16 grid gap-6 md:grid-cols-4">
          {TEAM.map((member, index) => (
            <motion.li key={`${member.image}-${index}`} variants={fadeUpItem} className={`relative rounded-md border border-navy-border p-6 ${index % 2 === 0 ? "md:-top-8" : "md:top-8"}`}>
              <div className="flex h-64 items-end justify-center overflow-hidden rounded-md bg-navy-surface"><img src={member.image} alt="" className="h-full w-full object-contain object-bottom" /></div>
              <h3 className="mt-6 font-heading text-xl font-bold">{member.name}</h3>
              <p className="mt-1 text-base text-navy-muted">{member.role}</p>
            </motion.li>
          ))}
        </motion.ul>
        <div className="mt-12 flex justify-center gap-5" aria-label="صفحات الفريق"><span className="size-3 rounded-full bg-brand" /><span className="size-3 rounded-full border border-navy-border" /><span className="size-3 rounded-full border border-navy-border" /></div>
      </Container>
    </section>
  );
}
