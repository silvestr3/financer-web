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
      {
        path: "/income",
        element: (
          <div>
            <h1>Income</h1>
          </div>
        ),
      },
      {
        path: "/expenses",
        element: (
          <div>
            <h1>Expenses</h1>
          </div>
        ),
      },
      {
        path: "/investments",
        element: (
          <div>
            <h1>Investments</h1>
          </div>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
