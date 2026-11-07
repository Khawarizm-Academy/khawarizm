import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout } from "@/layouts";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { ROUTES } from "./routes";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      /** The app starts with Home. */
      { index: true, element: <HomePage /> },
      { path: ROUTES.notFound, element: <NotFoundPage /> },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export { AppRouter };
