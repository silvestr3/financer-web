import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "@/layout/home-layout";
import { DashboardPage } from "@/pages/dashboard";

export const DefaultRouter = createBrowserRouter([
  {
    Component: HomeLayout,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
