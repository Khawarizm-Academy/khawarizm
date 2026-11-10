import { AtSign, Link as LinkIcon, Share2, Send } from "lucide-react";
import { useParams } from "react-router";
import {
  BackLink,
  CtaBand,
  MetaStrip,
  PageIntro,
  Section,
  ShareRow,
  ShowcaseCard,
  VideoTile,
} from "@/components/blocks";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { KIND_LABELS, PROJECTS } from "@/constants/home";
import { ROUTES } from "@/router/routes";
import { NotFoundPage } from "@/pages/not-found";

/** The brief strip per Figma project sheet: category / client / date. ⚠️ sample values. */
const META = (category: string): { label: string; value: string }[] => [
  { label: "الفئة", value: category },
  { label: "العميل", value: "[اسم العميل]" },
  { label: "التاريخ", value: "[التاريخ]" },
];

const SHARE_ACTIONS = [
  { label: "مشاركة الرابط", icon: Share2, onSelect: () => typeof navigator !== "undefined" && void navigator.share?.({ title: document.title, url: window.location.href }) },
  { label: "نسخ الرابط", icon: LinkIcon, onSelect: () => void navigator.clipboard?.writeText(window.location.href) },
  { label: "مشاركة عبر البريد", icon: AtSign, href: `mailto:?body=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}` },
  { label: "إرسال المشاركة", icon: Send, onSelect: () => undefined },
];

function ProjectPage() {
  const { projectId } = useParams();
  const project = PROJECTS.find((item) => item.id === projectId) ?? PROJECTS[0];
  if (!project) return <NotFoundPage />;
  const related = PROJECTS.filter((item) => item.id !== project.id).slice(0, 2);
  const gallery = [project.image, "/assets/41-316.webp", "/assets/41-325.webp", "/assets/41-334.webp", "/assets/41-307.webp"].filter(Boolean) as string[];

  return (
    <>
      <Section tone="background" containerClassName="pt-10 pb-20 md:pt-12 md:pb-28">
        <BackLink href={ROUTES.works}>العودة إلى الأعمال</BackLink>
        <FadeIn className="mx-auto mt-16 max-w-142.5">
          <PageIntro
            eyebrow={KIND_LABELS[project.kind]}
            title={project.title}
            lead="[وصف مختصر للمشروع]"
            note="[تفاصيل تُضاف لاحقًا]"
          />
        </FadeIn>
        <FadeIn className="mx-auto mt-20 max-w-142.5 md:mt-28" delay={0.08}>
          <MetaStrip items={META(KIND_LABELS[project.kind])} />
        </FadeIn>
        <FadeIn className="mt-16 md:mt-24" delay={0.12}>
          <div className={`relative h-80 overflow-hidden rounded-md bg-gradient-to-br md:h-180 ${project.gradient}`}>
            {project.image && (
              <img src={project.image} alt="" className="h-full w-full object-cover" />
            )}
            <div aria-hidden className="absolute inset-0 bg-navy/20" />
          </div>
        </FadeIn>

        <FadeIn className="mx-auto mt-20 max-w-142.5 md:mt-28" delay={0.08}>
          <SectionHeading title="التحدي" />
          <p className="mt-8 text-base leading-8 text-muted">[وصف التحدي]</p>
        </FadeIn>
        <FadeIn className="mt-16 grid gap-6 md:grid-cols-[270px_270px_570px] md:grid-rows-2" delay={0.1}>
          {gallery.slice(1).map((src) => (
            <img key={src} src={src} alt="" className="h-52 w-full rounded-md object-cover md:h-52" />
          ))}
          <VideoTile
            src={project.image ?? gallery[0]}
            duration="2:14"
            playSize="md"
            dim
            className="row-span-2 h-80 bg-navy md:col-start-3 md:row-start-1 md:h-full"
          />
        </FadeIn>

        <FadeIn className="mx-auto mt-20 max-w-142.5 md:mt-28" delay={0.08}>
          <SectionHeading title="الحل" />
          <p className="mt-8 text-base leading-8 text-muted">[وصف الحل]</p>
        </FadeIn>
        <ShareRow
          className="mt-12"
          actions={SHARE_ACTIONS}
        />
      </Section>

      <Section tone="background" containerClassName="border-t border-border py-16 md:py-20">
        <h2 className="font-heading text-2xl font-bold text-foreground">مشاريع ذات صلة</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {related.map((item) => (
            <a key={item.id} href={`${ROUTES.works}/${item.id}`}>
              <ShowcaseCard title={item.title} chip={KIND_LABELS[item.kind]} image={item.image} gradient={item.gradient} />
            </a>
          ))}
        </div>
      </Section>

      <Section tone="background" containerClassName="pb-20 md:pb-24">
        <CtaBand
          title="جاهز تبدأ مشروعك؟"
          description="تواصل معنا اليوم، وسنساعدك في تحويل فكرتك إلى مشروع حقيقي."
          cta={{ href: ROUTES.contact, label: "تواصل معنا" }}
          media={<img src="/assets/41-3240.svg" alt="" className="mx-auto w-full max-w-110 object-contain" />}
          className="md:gap-16 md:py-20"
        />
      </Section>
    </>
  );
}

export { ProjectPage };
export default ProjectPage;
