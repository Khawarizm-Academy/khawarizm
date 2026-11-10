import { ArrowRight, AtSign, Link as LinkIcon, Play, Send, Share2 } from "lucide-react";
import { useParams } from "react-router";
import { CtaBand, Section, ShowcaseCard } from "@/components/blocks";
import { FadeIn } from "@/components/motion";
import { KIND_LABELS, PROJECTS } from "@/constants/home";
import { ROUTES } from "@/router/routes";
import { NotFoundPage } from "@/pages/not-found";

function ProjectPage() {
  const { projectId } = useParams();
  const project = PROJECTS.find((item) => item.id === projectId) ?? PROJECTS[0];
  if (!project) return <NotFoundPage />;
  const related = PROJECTS.filter((item) => item.id !== project.id).slice(0, 2);
  const gallery = [project.image, "/assets/41-316.webp", "/assets/41-325.webp", "/assets/41-334.webp", "/assets/41-307.webp"].filter(Boolean) as string[];

  return (
    <>
      <Section tone="background" containerClassName="pt-10 pb-20 md:pt-12 md:pb-28">
        <a href={ROUTES.works} dir="rtl" className="inline-flex items-center gap-3 font-heading text-sm font-semibold text-foreground"><ArrowRight className="size-4" />العودة إلى الأعمال</a>
        <FadeIn className="mx-auto mt-16 max-w-142.5 text-center">
          <p className="font-heading text-base font-medium text-brand-ink">{KIND_LABELS[project.kind]}</p>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1.25] text-foreground md:text-7xl">{project.title}</h1>
          <p className="mt-8 text-xl leading-9 text-foreground">[وصف مختصر للمشروع]</p>
          <p className="mt-5 text-base leading-8 text-muted">[تفاصيل تُضاف لاحقًا]</p>
        </FadeIn>
        <FadeIn className="mx-auto mt-20 grid max-w-142.5 grid-cols-3 gap-8 border-y border-border py-8 text-center md:mt-28 md:gap-20" delay={0.08}>
          <div><p className="font-heading text-sm text-brand-ink">الفئة</p><p className="mt-3 text-base text-foreground">{KIND_LABELS[project.kind]}</p></div>
          <div><p className="font-heading text-sm text-brand-ink">العميل</p><p className="mt-3 text-base text-foreground">[اسم العميل]</p></div>
          <div><p className="font-heading text-sm text-brand-ink">التاريخ</p><p className="mt-3 text-base text-foreground">[التاريخ]</p></div>
        </FadeIn>
        <FadeIn className="mt-16 md:mt-24" delay={0.12}><div className={`relative h-80 overflow-hidden rounded-md bg-gradient-to-br md:h-180 ${project.gradient}`}>{project.image && <img src={project.image} alt="" className="h-full w-full object-cover" />}<div className="absolute inset-0 bg-navy/20" /></div></FadeIn>

        <FadeIn className="mx-auto mt-20 max-w-142.5 text-right md:mt-28" delay={0.08}>
          <h2 className="font-display text-4xl font-extrabold text-foreground md:text-[40px]">التحدي</h2>
          <p className="mt-8 text-base leading-8 text-muted">[وصف التحدي]</p>
        </FadeIn>
        <FadeIn className="mt-16 grid gap-6 md:grid-cols-[270px_270px_570px] md:grid-rows-2" delay={0.1}>
          {gallery.slice(1).map((src) => <img key={src} src={src} alt="" className="h-52 w-full rounded-md object-cover md:h-52" />)}
          <div className="group relative row-span-2 h-80 overflow-hidden rounded-md bg-navy md:col-start-3 md:row-start-1 md:h-full"><img src={project.image ?? gallery[0]} alt="" className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" /><span className="absolute inset-0 bg-navy/30" /><span className="absolute inset-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white text-white"><Play className="ml-1 size-7 fill-white" /></span><span className="absolute bottom-4 right-4 rounded-md bg-navy/60 px-3 py-1 text-sm text-white">2:14</span></div>
        </FadeIn>

        <FadeIn className="mx-auto mt-20 max-w-142.5 text-right md:mt-28" delay={0.08}><h2 className="font-display text-4xl font-extrabold text-foreground md:text-[40px]">الحل</h2><p className="mt-8 text-base leading-8 text-muted">[وصف الحل]</p></FadeIn>
        <div className="mt-12 flex flex-col items-center gap-5"><p className="text-sm text-muted">شارك</p><div className="flex gap-3"><button type="button" aria-label="مشاركة الرابط" className="flex size-12 items-center justify-center rounded-full bg-brand"><Share2 className="size-5 text-navy" /></button><button type="button" aria-label="نسخ الرابط" className="flex size-12 items-center justify-center rounded-full bg-brand"><LinkIcon className="size-5 text-navy" /></button><button type="button" aria-label="مشاركة عبر البريد" className="flex size-12 items-center justify-center rounded-full bg-brand"><AtSign className="size-5 text-navy" /></button><button type="button" aria-label="إرسال المشاركة" className="flex size-12 items-center justify-center rounded-full bg-brand"><Send className="size-5 text-navy" /></button></div></div>
      </Section>

      <Section tone="background" containerClassName="border-t border-border py-16 md:py-20"><h2 dir="rtl" className="font-heading text-2xl font-bold text-foreground">مشاريع ذات صلة</h2><div className="mt-10 grid gap-8 md:grid-cols-2">{related.map((item) => <a key={item.id} href={`${ROUTES.works}/${item.id}`}><ShowcaseCard title={item.title} chip={KIND_LABELS[item.kind]} image={item.image} gradient={item.gradient} /></a>)}</div></Section>
      <Section tone="background" containerClassName="pb-20 md:pb-24"><CtaBand title="جاهز تبدأ مشروعك؟" description="تواصل معنا اليوم، وسنساعدك في تحويل فكرتك إلى مشروع حقيقي." cta={{ href: ROUTES.contact, label: "تواصل معنا" }} media={<img src="/assets/41-3240.svg" alt="" className="mx-auto w-full max-w-110 object-contain" />} className="md:gap-16 md:py-20" /></Section>
    </>
  );
}

export { ProjectPage };
export default ProjectPage;
