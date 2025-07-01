import Logo from "./Logo";
import { FiGrid } from "react-icons/fi";
// import { FaSearch } from "react-icons/fa";
export default function NavBar() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:gap-6 sm:justify-between m-3 sm:mt-6 sm:mx-3 md:mx-6 lg:mx-16">
      <div className="flex flex-row justify-center items-center sm:order-1">
        <Logo />
      </div>
      <div className="flex flex-row justify-between sm:gap-10 items-center sm:order-3">
        <div className="flex flex-row gap-2 items-center">
          <FiGrid className="text-cyan-800 text-xl" />
          <p className="font-['Kanit'] text-gray-900 text-md">Categories</p>
        </div>
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
      <div className="self-center flex flex-row gap-2 items-center sm:order-2">
        <input
          className="font-['Rubik'] text-gray-900 text-xs  border-1 w-60 sm:text-[10px] md:text-xs sm:w-45 md:w-60 lg:w-70 xl:w-80  rounded-sm  border-gray-800 p-1 pr-2"
          type="text"
          placeholder="Search products"
        />
        {/* <FaSearch className=" text-white bg-cyan-800 p-1 size-6 rounded-full flex items-center justify-center" /> */}
      </div>
    </div>
  );
}
