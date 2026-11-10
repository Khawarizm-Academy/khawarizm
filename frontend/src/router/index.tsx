import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout } from "@/layouts";
import { NotFoundPage } from "@/pages/not-found";
import { ROUTES } from "./routes";

const HomePage = lazy(() => import("@/pages/home").then(({ HomePage }) => ({ default: HomePage })));
const AboutPage = lazy(() => import("@/pages/about").then(({ AboutPage }) => ({ default: AboutPage })));
const ServicesPage = lazy(() => import("@/pages/services").then(({ ServicesPage }) => ({ default: ServicesPage })));
const WorksPage = lazy(() => import("@/pages/works").then(({ WorksPage }) => ({ default: WorksPage })));
const ProjectPage = lazy(() => import("@/pages/project").then(({ ProjectPage }) => ({ default: ProjectPage })));
const ContactPage = lazy(() => import("@/pages/contact").then(({ ContactPage }) => ({ default: ContactPage })));
const PrivacyPage = lazy(() => import("@/pages/privacy").then(({ PrivacyPage }) => ({ default: PrivacyPage })));
const TermsPage = lazy(() => import("@/pages/terms").then(({ TermsPage }) => ({ default: TermsPage })));

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      /** The app starts with Home. */
      { index: true, element: <HomePage /> },
      { path: ROUTES.about, element: <AboutPage /> },
      { path: ROUTES.services, element: <ServicesPage /> },
      { path: ROUTES.works, element: <WorksPage /> },
      { path: `${ROUTES.works}/:projectId`, element: <ProjectPage /> },
      { path: ROUTES.contact, element: <ContactPage /> },
      { path: ROUTES.privacy, element: <PrivacyPage /> },
      { path: ROUTES.terms, element: <TermsPage /> },
      { path: ROUTES.notFound, element: <NotFoundPage /> },
    ],
  },
]);

function AppRouter() {
  return <Suspense fallback={<div className="min-h-svh bg-navy" aria-busy="true" />}><RouterProvider router={router} /></Suspense>;
}

export { AppRouter };
