import { useState } from "react";
import { Play } from "lucide-react";
import { Section, Split } from "@/components/blocks";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/ui";

/** Intro-film button + the 2×2 reel of campus shots — page-specific media (an interactive video, not a decorative collage). */
function StoryMedia() {
  const [playing, setPlaying] = useState(false);

  return (
    <FadeIn className="grid grid-cols-2 gap-4" delay={0.1}>
      <div className="col-span-2 overflow-hidden rounded-md">
        <button
          type="button"
          aria-label={playing ? "إيقاف الفيديو التعريفي" : "تشغيل الفيديو التعريفي"}
          aria-pressed={playing}
          onClick={() => setPlaying((value) => !value)}
          className="group relative block h-72 w-full cursor-pointer overflow-hidden rounded-md md:h-112"
        >
          <img src="/assets/41-3085.webp" alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <span className="absolute inset-0 bg-navy/30" />
          <span className="absolute inset-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white text-white transition-transform group-hover:scale-110">
            <Play className="ml-1 size-8 fill-white" />
          </span>
          <span className="absolute bottom-4 right-4 rounded-md bg-navy/60 px-3 py-1 font-sans text-sm text-white">1:45</span>
        </button>
      </div>
      <img src="/assets/41-3096.webp" alt="" className="h-44 w-full rounded-md object-cover md:h-52" />
      <img src="/assets/41-3100.webp" alt="" className="h-44 w-full rounded-md object-cover md:h-52" />
      <img src="/assets/41-3104.webp" alt="" className="h-44 w-full rounded-md object-cover md:h-52" />
      <img src="/assets/41-3108.webp" alt="" className="h-44 w-full rounded-md object-cover md:h-52" />
    </FadeIn>
  );
}

export function AboutStory() {
  return (
    <Section
      tone="background"
      containerClassName="pt-20 pb-20 md:pt-24 md:pb-28"
    >
      <Split
        className="gap-12 md:gap-20"
        align="start"
        media={<StoryMedia />}
        mediaHidden={false}
      >
        <FadeIn className="flex flex-col items-start gap-5 md:pt-8">
          <SectionHeading eyebrow="قصتنا" title="اسمٌ مستوحى من الخوارزمي" />
          <p className="max-w-142.5 text-base leading-8 text-muted">
            استلهمنا اسمنا من العالم محمد بن موسى الخوارزمي، الذي اشتُقّت من اسمه كلمة «خوارزمية». ومن هنا بدأت رحلتنا في تعليم الخوارزميات والبرمجة للشباب العربي، ثم توسّعت لتشمل تصميم المواقع وتطوير التطبيقات.
          </p>
        </FadeIn>
      </Split>
    </Section>
  );
}
