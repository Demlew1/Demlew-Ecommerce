import AppLayout from "./components/Home/AppLayout";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import type { RouteObject } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SingleProduct from "./components/Home/SingleProduct";
import SignUp from "./pages/SignUp";
import SellProducts from "./pages/SellProducts";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/cartPage";
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
      {
        path: "/aboutus",
        element: <AboutPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "/sell",
    element: <SellProducts />,
  },
];
