import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "@/layout/home-layout";
import { DashboardPage } from "@/pages/(app)/dashboard";
import { NotFound } from "@/pages/not-found";
import { IncomePage } from "@/pages/(app)/income";
import { AuthLayout } from "@/layout/auth-layout";
import { SignInPage } from "@/pages/(auth)/sign-in";
import { SignUpPage } from "@/pages/(auth)/sign-up";

export const DefaultRouter = createBrowserRouter([
	{
		Component: HomeLayout,
		middleware: [],
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
		Component: AuthLayout,
		path: "/auth",
		children: [
			{
				path: "/auth/sign-in",
				element: <SignInPage />,
			},
			{
				path: "/auth/sign-up",
				element: <SignUpPage />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);
