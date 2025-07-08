import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="bg-cyan-950  mt-10">
      <div className="py-8 flex flex-row gap-6 justify-center sm:gap-16 sm:justify-between mx-14 flex-wrap font-['Montserrat']  items-start space-y-4 md:flex-row space-x-0 lg:space-x-8 md:items-start">
        <div className=" hidden lg:flex lg:flex-col space-y-2 max-w-sm items-center md:items-start">
          <Logo textColor="text-white" />
          <p className="text-gray-100 text-sm">
            Your first choice for quality products.
          </p>
        </div>
        <div className="flex flex-col space-y-2 ">
          <h4 className="font-bold text-gray-300 text-lg mb-2">
            Contact Information
          </h4>
          <p className="text-sm">
            <HiLocationMarker className="inline text-gray-100" />
            <span className="text-gray-100 px-2 py-1">
              Addis Ababa, Ethiopia
            </span>
          </p>
          <p className="text-sm flex flex-row items-center">
            <MdEmail className="inline text-gray-100" />
            <span className="text-gray-100 px-2 py-1">
              demtse.yibabe@gmail.com
            </span>
          </p>
          <p className="text-sm">
            <FaPhoneAlt className="inline text-gray-100" />
            <span className="text-gray-100 px-3 py-1">+251983334785</span>
          </p>
        </div>
        <div className="flex flex-col space-y-2 items-center md:items-start">
          <h4 className="font-bold text-lg mb-2 text-gray-300">Quick Link</h4>
          <Link
            to="/"
            className="duration-200 hover:text-gray-200 hover:font-medium text-sm text-gray-100"
          >
            Home
          </Link>

          <Link
            to="products"
            className="text-gray-100 duration-200 hover:text-gray-200 hover:font-medium text-sm"
          >
            Products
          </Link>
        </div>

        <div className="flex flex-col space-y-2 items-center  md:items-start">
          <h4 className="font-bold text-lg mb-2 text-gray-300">Follow US</h4>
          <SocialLinks />
        </div>
      </div>
      <div className="bg-cyan-950 text-gray-100 pt-8 pb-4 text-center font-['Kanit']">
        <p>Copyright © All rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
