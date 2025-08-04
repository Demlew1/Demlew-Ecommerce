import { Link } from "react-router-dom";
import Logo from "./Logo";
import heart from "../../assets/images/heart.png";
import cartImage from "../../assets/images/cart2.png";
import account from "../../assets/images/account.png";
import SignUpAd from "./SignUpAd";
import { useCartStore } from "../../store/cartStore";
import { useFavouriteStore } from "../../store/favouriteStore";
import { useAuthStore } from "../../store/useAuthStore";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function NavBar() {
  const { favourites } = useFavouriteStore();
  const { cart } = useCartStore();
  const { token, logout } = useAuthStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    queryClient.clear();
    setShowProfileMenu(false);
    toast.success("Logged out successfully!");
    navigate("/signin");
  };

  const handleProfileClick = () => {
    if (token) {
      setShowProfileMenu(!showProfileMenu);
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <SignUpAd />
      <nav className="   bg-white shadow-md px-4 py-4 sm:px-8 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex justify-center sm:justify-start">
          <Logo />
        </div>
        <div className="flex gap-8 sm:gap-4 md:gap-8  sm:order-2 text-base">
          <Link
            to="/"
            className="font-['Kanit'] text-cyan-950 border-b-2 sm:text-xs md:text-sm border-transparent hover:border-cyan-950 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="font-['Kanit'] text-cyan-950 border-b-2 sm:text-xs md:text-sm border-transparent hover:border-cyan-950 transition duration-200"
          >
            Products
          </Link>
          <Link
            to="/aboutus"
            className="font-['Kanit'] text-cyan-950 border-b-2 sm:text-xs md:text-sm border-transparent hover:border-cyan-950 transition duration-200"
          >
            About us
          </Link>
        </div>
        <div className="flex items-center gap-6 sm:order-3">
          <Link
            to="/sell"
            className="font-['Kanit'] text-xs px-2 py-2 bg-cyan-950 text-white rounded hover:bg-white hover:text-cyan-950 border border-cyan-950 transition-all duration-200"
          >
            Sell on Demzon
          </Link>
          <div className="flex items-center gap-5">
            <Link to="favourites" className="relative group">
              <img
                src={heart}
                alt="Wishlist"
                className="size-6 sm:size-5   md:size-6 cursor-pointer transition-transform group-hover:scale-110"
              />
              <span className="absolute -top-2 -right-3 bg-amber-900 text-white text-[10px] size-5 md:size-5 sm:size-4 flex items-center justify-center rounded-full">
                {favourites.length}
              </span>
            </Link>
            <Link to="/cart" className="relative group">
              <img
                src={cartImage}
                alt="Cart"
                className="size-6 md:size-6 sm:size-5 cursor-pointer transition-transform group-hover:scale-110"
              />
              <span className="absolute -top-2 -right-3 bg-cyan-900 text-white text-[10px] size-5 md:size-5 sm:size-4 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            </Link>
            <div className="relative">
              <button onClick={handleProfileClick} className="group">
                <img
                  src={account}
                  alt="Account"
                  className="size-6 md:size-6 sm:size-5 cursor-pointer transition-transform group-hover:scale-110"
                />
              </button>

              {showProfileMenu && token && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
                  ref={profileMenuRef}
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-['Kanit']"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-['Kanit']"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
