import AppLayout from "./components/Home/AppLayout";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import type { RouteObject } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SingleProduct from "./components/Home/SingleProduct";
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
        path: "/products/:id",
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: "signin",
    element: <SignIn />,
  },
];
