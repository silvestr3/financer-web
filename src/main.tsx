import { queryClient } from "@/lib/query-client.ts"
import { DefaultRouter } from "@/router/index.tsx"
import "@/styles/index.css"
import { QueryClientProvider } from "@tanstack/react-query"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./context/theme-provider"

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RouterProvider router={DefaultRouter} />
        </ThemeProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
}
