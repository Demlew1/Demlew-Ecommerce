import heroImage from "../../assets/images/HeroImg.svg";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="flex flex-col items-center mt-24 sm:mt-10 mb-4 md:mb-8">
      <div className="flex flex-col items-center sm:flex-row sm:gap-6 lg:gap-16 sm:items-start sm:justify-center">
        <motion.div
          className="flex flex-col gap-5 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="font-['Rubik'] w-70 sm:w-80 lg:w-100 text-gray-900 font-bold text-3xl text-center mx-3 mt-30 uppercase sm:text-4xl lg:text-5xl "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover top quality products at unbeatable prices.
          </motion.p>
          <Link
            to="products"
            className="bg-cyan-950 flex flex-row items-center justify-center border-1 border-white text-white font-['Rubik'] text-sm w-60 p-3 hover:bg-white hover:text-gray-900 hover:border-1 hover:border-cyan-950 hover:cursor-pointer transition duration-200"
          >
            Shop Now
          </Link>
          <div className="mt-3 flex flex-col items-center lg:flex-row lg:items-center">
            <div className="flex flex-row justify-center ">
              <div className="font-['Rubik'] flex flex-col p-4 border-r-1 border-gray-200">
                <p className="font-bold text-xl text-gray-800">
                  <CountUp end={200} duration={2} />+
                </p>
                <p className="text-[10px] text-gray-400">
                  International Brands
                </p>
              </div>
              <div className="font-['Rubik'] flex flex-col p-4">
                <p className="font-bold text-xl text-gray-800">
                  <CountUp end={2000} duration={2} />+
                </p>
                <p className="text-[10px] text-gray-400">
                  High-Quality Products
                </p>
              </div>
            </div>
            <div className="font-['Rubik'] flex flex-col mt-1">
              <p className="font-bold text-xl text-gray-800">
                <CountUp end={30000} duration={2.5} separator="," />+
              </p>
              <p className="text-[10px] text-gray-400">Happy Customers</p>
            </div>
          </div>
        </motion.div>
        <motion.img
          src={heroImage}
          alt="hero"
          className="size-100 md:size-120 lg:size-140"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </div>
  );
}
