import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

import Footer from "./Footer";
export default function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
