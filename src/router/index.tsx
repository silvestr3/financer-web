import { createBrowserRouter } from "react-router-dom";

export const DefaultRouter = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
