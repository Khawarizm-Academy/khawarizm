import { useState } from "react";
import { Play } from "lucide-react";
import { Container } from "@/components/layout";
import { FadeIn } from "@/components/motion";

export function AboutStory() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-background pt-20 pb-20 md:pt-24 md:pb-28">
      <Container>
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
          <FadeIn className="order-last flex flex-col items-start gap-5 md:order-first md:pt-8">
            <p className="font-heading text-base font-medium text-brand-ink">قصتنا</p>
            <h2 className="font-display text-4xl font-extrabold leading-[1.35] text-foreground md:text-[56px] md:leading-[1.3]">
              اسمٌ مستوحى من الخوارزمي
            </h2>
            <p className="max-w-142.5 text-base leading-8 text-muted">
              استلهمنا اسمنا من العالم محمد بن موسى الخوارزمي، الذي اشتُقّت من اسمه كلمة «خوارزمية». ومن هنا بدأت رحلتنا في تعليم الخوارزميات والبرمجة للشباب العربي، ثم توسّعت لتشمل تصميم المواقع وتطوير التطبيقات.
            </p>
          </FadeIn>

          <FadeIn className="order-first grid grid-cols-2 gap-4 md:order-last" delay={0.1}>
            <div className="col-span-2 overflow-hidden rounded-md">
              <button
                type="button"
                aria-label={playing ? "إيقاف الفيديو التعريفي" : "تشغيل الفيديو التعريفي"}
                aria-pressed={playing}
                onClick={() => setPlaying((value) => !value)}
                className="group relative block h-72 w-full overflow-hidden rounded-md md:h-112"
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
        </div>
      </Container>
    </section>
  );
}
