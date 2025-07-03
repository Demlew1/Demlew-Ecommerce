import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SignUpAd from "./SignUpAd";
export default function AppLayout() {
  return (
    <>
      <SignUpAd />
      <NavBar />
      <Outlet />
    </>
  );
}
