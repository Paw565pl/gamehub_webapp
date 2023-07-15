import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        lazy: async () => {
          const HomePage = (await import("./pages/HomePage")).default;
          return { element: <HomePage></HomePage> };
        },
      },
      {
        path: "games/:slug",
        lazy: async () => {
          const GameDetailPage = (await import("./pages/GameDetailPage"))
            .default;
          return { element: <GameDetailPage></GameDetailPage> };
        },
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/"}></Navigate>,
  },
]);

export default router;
