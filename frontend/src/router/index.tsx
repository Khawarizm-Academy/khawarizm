import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout } from "@/layouts";
import { AboutPage } from "@/pages/about";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { ServicesPage } from "@/pages/services";
import { WorksPage } from "@/pages/works";
import { ProjectPage } from "@/pages/project";
import { ContactPage } from "@/pages/contact";
import { PrivacyPage } from "@/pages/privacy";
import { ROUTES } from "./routes";

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
      { path: ROUTES.notFound, element: <NotFoundPage /> },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export { AppRouter };
