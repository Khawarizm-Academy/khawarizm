import { useState } from "react";
import { VideoTile } from "@/components/blocks";
import { Container } from "@/components/layout";
import { FadeIn } from "@/components/motion";

type AboutStoryProps = {
  staggerGallery?: boolean;
};

export function AboutStory({ staggerGallery = false }: AboutStoryProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-background pt-20 pb-20 md:pt-24 md:pb-28">
      <Container>
        <div dir="ltr">
          <FadeIn className="grid items-start gap-10 md:grid-cols-[570px_600px] md:gap-20">
            <div dir="rtl" className="order-first flex flex-col items-start gap-5 md:order-last md:pt-8">
              <p className="font-heading text-base font-medium text-brand-ink">قصتنا</p>
              <h2 className="font-display text-4xl font-extrabold leading-[1.35] text-foreground md:text-[56px] md:leading-[1.3]">
                اسمٌ مستوحى من الخوارزمي
              </h2>
            </div>
            <p dir="rtl" className="order-last max-w-142.5 self-center text-base leading-8 text-muted md:order-first">
              استلهمنا اسمنا من العالم محمد بن موسى الخوارزمي، الذي اشتُقّت من اسمه كلمة «خوارزمية». ومن هنا بدأت رحلتنا في تعليم الخوارزميات والبرمجة للشباب العربي، ثم توسّعت لتشمل تصميم المواقع وتطوير التطبيقات.
            </p>
          </FadeIn>

          <FadeIn className="mt-20" delay={0.1}>
            <div className="grid gap-7.5 md:grid-cols-[270px_270px_570px] md:grid-rows-2">
              <div className="order-first col-span-2 row-span-2 grid grid-cols-2 gap-7.5 md:order-none md:col-span-2 md:col-start-1 md:row-span-2">
                <img src="/assets/41-3096.webp" alt="" className={`h-52 w-full rounded-md object-cover ${staggerGallery ? "md:translate-y-6" : ""}`} />
                <img src="/assets/41-3100.webp" alt="" className={`h-52 w-full rounded-md object-cover ${staggerGallery ? "md:-translate-y-6" : ""}`} />
                <img src="/assets/41-3104.webp" alt="" className={`h-52 w-full rounded-md object-cover ${staggerGallery ? "md:translate-y-6" : ""}`} />
                <img src="/assets/41-3108.webp" alt="" className={`h-52 w-full rounded-md object-cover ${staggerGallery ? "md:-translate-y-6" : ""}`} />
              </div>
              <div className="order-last col-span-2 overflow-hidden rounded-md md:order-none md:col-start-3 md:row-span-2 md:col-span-1">
                <VideoTile
                  src="/assets/41-3085.webp"
                  label={playing ? "إيقاف الفيديو التعريفي" : "تشغيل الفيديو التعريفي"}
                  duration="1:45"
                  onToggle={() => setPlaying((value) => !value)}
                  pressed={playing}
                  className="h-72 md:h-full"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
