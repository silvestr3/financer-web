import { queryClient } from "@/lib/query-client.ts";
import { DefaultRouter } from "@/router/index.tsx";
import "@/styles/index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={DefaultRouter} />
    </QueryClientProvider>
  </StrictMode>,
);
