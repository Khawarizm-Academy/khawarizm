import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { buttonVariants } from "@/components/ui";
import { PageTransition } from "@/components/motion";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/router/routes";

function NotFoundPage() {
  return (
    <PageTransition className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="bg-gradient-to-r from-brand to-fuchsia-500 bg-clip-text text-8xl font-black text-transparent">
        404
      </p>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="max-w-md text-muted">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to={ROUTES.home}
        className={cn(buttonVariants({ variant: "secondary" }))}
      >
        <ArrowLeft className="size-4" />
        Back to Home
      </Link>
    </PageTransition>
  );
}

export { NotFoundPage };
export default NotFoundPage;
