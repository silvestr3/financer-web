import { createBrowserRouter } from "react-router-dom"
import { HomeLayout } from "@/layout/home-layout"
import { DashboardPage } from "@/pages/dashboard"
import { NotFound } from "@/components/global/not-found"

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
    element: <NotFound />,
  },
])
