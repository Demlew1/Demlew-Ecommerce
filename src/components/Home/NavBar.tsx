import Logo from "./Logo";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:gap-6 sm:justify-between m-3 sm:mt-6 sm:mx-3 md:mx-6 lg:mx-16">
      <div className="flex flex-row justify-center items-center sm:order-1">
        <Logo />
      </div>
      <div className="flex flex-row justify-between sm:gap-10 items-center sm:order-3">
        <button className="font-['Kanit'] bg-cyan-950 text-gray-50 text-xs p-2 rounded-sm border-1 border-white hover:border-cyan-950 hover:text-gray-900 hover:bg-white cursor-pointer">
          sell on Demzon
        </button>
        <div className="flex flex-row gap-4">
          <div className="relative">
            <img
              src="src/assets/images/heart.png"
              alt="heart"
              className="size-5 "
            />
            <p className="flex flex-row items-center justify-center text-gray-100 size-4 text-[10px] bg-amber-950 rounded-full absolute top-[-10px] right-[-14px]">
              0
            </p>
          </div>
          <div className="relative">
            <img
              src="src/assets/images/cart2.png"
              alt="cart"
              className="size-5 "
            />
            <p className="flex flex-row items-center justify-center text-gray-100 size-4 text-[10px] bg-cyan-900 rounded-full absolute top-[-10px] right-[-14px]">
              0
            </p>
          </div>
          <div>
            <img
              src="src/assets/images/account.png"
              alt="account"
              className="size-5"
            />
          </div>
        </div>
      </div>
      <div className="self-center flex flex-row gap-8 items-center sm:order-2">
        <Link
          to="/"
          className="font-['Kanit'] hover:cursor-pointer text-sm border-b-2 border-white hover:border-b-2 hover:border-cyan-950 transition delay-8 text-cyan-950"
        >
          Home
        </Link>
        <Link
          to="products"
          className="font-['Kanit'] hover:cursor-pointer text-sm border-b-2 border-white hover:border-b-2 hover:border-cyan-950 transition delay-8 text-cyan-950"
        >
          Products
        </Link>
        <Link
          to="aboutus"
          className="font-['Kanit'] hover:cursor-pointer text-sm border-b-2 border-white hover:border-b-2 hover:border-cyan-950 transition delay-8 text-cyan-950"
        >
          About us
        </Link>
      </div>
    </div>
  );
}
