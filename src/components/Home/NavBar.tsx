import { Link } from "react-router-dom";
import Logo from "./Logo";
import heart from "../../assets/images/heart.png";
import cart from "../../assets/images/cart2.png";
import account from "../../assets/images/account.png";
import SignUpAd from "./SignUpAd";
export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <SignUpAd />
      <nav className="   bg-white shadow-md px-4 py-4 sm:px-8 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex justify-center sm:justify-start">
          <Logo />
        </div>
        <div className="flex gap-8 sm:order-2 text-base">
          <Link
            to="/"
            className="font-['Kanit'] text-cyan-950 border-b-2 border-transparent hover:border-cyan-950 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="font-['Kanit'] text-cyan-950 border-b-2 border-transparent hover:border-cyan-950 transition duration-200"
          >
            Products
          </Link>
        </div>
        <div className="flex items-center gap-6 sm:order-3">
          <Link
            to="/sell"
            className="font-['Kanit'] text-sm px-4 py-2 bg-cyan-950 text-white rounded hover:bg-white hover:text-cyan-950 border border-cyan-950 transition-all duration-200"
          >
            Sell on Demzon
          </Link>
          <div className="flex items-center gap-5">
            <div className="relative group">
              <img
                src={heart}
                alt="Wishlist"
                className="w-6 h-6 cursor-pointer transition-transform group-hover:scale-110"
              />
              <span className="absolute -top-2 -right-3 bg-amber-900 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
            <div className="relative group">
              <img
                src={cart}
                alt="Cart"
                className="w-6 h-6 cursor-pointer transition-transform group-hover:scale-110"
              />
              <span className="absolute -top-2 -right-3 bg-cyan-900 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
            <div className="group">
              <img
                src={account}
                alt="Account"
                className="w-6 h-6 cursor-pointer transition-transform group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
