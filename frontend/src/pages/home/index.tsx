import { ArrowRight, Code2, Rocket, Zap } from "lucide-react";
import { motion } from "motion/react";
import { FadeIn, fadeUpItem, staggerContainer } from "@/components/motion";
import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Zap,
    title: "Bun + Vite",
    description:
      "Builds run through Bun with Vite 8 — dev server ready in milliseconds.",
  },
  {
    icon: Code2,
    title: "Type-safe routing",
    description:
      "File-based pages rendered through a typed route registry starting at Home.",
  },
  {
    icon: Rocket,
    title: "Design system ready",
    description:
      "Tailwind v4 tokens, shared composables and motion presets out of the box.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32">
        {/* decorative glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-[-320px] left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <FadeIn y={12} duration={0.4}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-muted uppercase">
              Bun · Vite · React · Tailwind
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Khawarizm
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-xl text-lg text-muted">
              A multi-page React app wired with routing, shared Tailwind
              design tokens, reusable components and animations — served
              entirely through Bun.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="#features" className={cn(buttonVariants({ size: "lg" }))}>
                Explore features
                <ArrowRight className="size-4" />
              </a>
              <a
                href="https://vite.dev"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                )}
              >
                Vite docs
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-16 border-t border-border px-6 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-64px" }}
          className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <motion.article
              key={title}
              variants={fadeUpItem}
              className="rounded-xl border border-border bg-surface p-6 text-left transition-colors hover:bg-border/20"
            >
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-brand/15 text-brand">
                <Icon className="size-5" />
              </div>
              <h2 className="mb-2 font-semibold">{title}</h2>
              <p className="text-sm text-muted">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <FadeIn
          y={16}
          className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-xl border border-brand/30 bg-brand/10 px-8 py-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight">Start building</h2>
          <p className="text-muted">
            Pages live in <code className="text-foreground">src/pages</code>,
            hooks and shared logic are already scaffolded.
          </p>
          {/* Demo of dead-link handling → renders the 404 page */}
          <a
            href="/this-page-does-not-exist"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            See 404 handling
          </a>
        </FadeIn>
      </section>
    </>
  );
}

export { HomePage };
export default HomePage;
