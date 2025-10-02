import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "@/layout/home-layout";
import { DashboardPage } from "@/pages/dashboard";
import { NotFound } from "@/pages/not-found";
import { IncomePage } from "@/pages/income";

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
        element: <IncomePage />,
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
]);
