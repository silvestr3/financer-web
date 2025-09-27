import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "@/layout/home-layout";

export const DefaultRouter = createBrowserRouter([
  {
    Component: HomeLayout,
    children: [
      {
        path: "/",
        element: <div>home</div>,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
