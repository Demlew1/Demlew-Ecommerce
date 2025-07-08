import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SignUpAd from "./SignUpAd";
import Footer from "./Footer";
export default function AppLayout() {
  return (
    <>
      <SignUpAd />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
