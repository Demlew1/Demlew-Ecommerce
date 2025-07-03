import AppLayout from "./components/Home/AppLayout";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import type { RouteObject } from "react-router-dom";

export const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
    ],
  },
];
