import { ArrowLeft, SearchX } from "lucide-react";
import { Link } from "react-router";
import { PageTransition } from "@/components/motion";
import { Container } from "@/components/layout";
import { Arch, Burst, MiniCard, buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
import { HOME_ANCHORS, ROUTES } from "@/router/routes";

function NotFoundArt() {
  return (
    <div
      aria-hidden
      className="relative mx-auto h-[240px] w-full max-w-[380px] md:h-[340px]"
    >
      <Arch className="absolute top-[6%] left-0 h-[60%] w-[34%] bg-accent" />
      <Arch className="absolute bottom-0 left-[30%] flex h-[78%] w-[38%] items-center justify-center bg-brand">
        <SearchX className="size-14 text-navy md:size-20" strokeWidth={1.5} />
      </Arch>
      <Burst className="absolute top-0 right-[10%] size-20 text-brand" />
      <MiniCard className="absolute bottom-[6%] left-0 w-[44%]" />
    </div>
  );
}

function NotFoundPage() {
  return (
    <PageTransition>
      <Container className="grid min-h-[70svh] items-center gap-10 py-16 md:grid-cols-2">
        <div className="flex flex-col items-start gap-5">
          <p className="font-display text-8xl leading-none font-extrabold text-navy md:text-[10rem]">
            <span dir="ltr">404</span>
          </p>
          <h1 className="font-display text-3xl font-extrabold md:text-4xl">
            الصفحة غير موجودة
          </h1>
          <p className="max-w-md leading-loose text-muted">
            الرابط الذي تبحث عنه غير موجود أو تم نقله. عُد إلى الصفحة الرئيسية،
            أو تصفّح دوراتنا وأعمالنا.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Link
              to={ROUTES.home}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              <ArrowLeft className="size-4" />
              العودة إلى الرئيسية
            </Link>
            <a
              href={HOME_ANCHORS.courses}
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
              )}
            >
              تصفّح الدورات
            </a>
          </div>
        </div>
        <div className="order-first md:order-last">
          <NotFoundArt />
        </div>
      </Container>
    </PageTransition>
  );
}

export { NotFoundPage };
export default NotFoundPage;
