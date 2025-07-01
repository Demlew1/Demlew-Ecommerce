import heroImage from "../../assets/images/HeroImg.svg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:gap-6 lg:gap-16 sm:items-start sm:justify-center">
      <motion.div
        className="flex flex-col gap-5 justify-center items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-['Rubik'] w-70 sm:w-80 lg:w-100 text-gray-900 font-bold text-3xl text-center mx-3 mt-10 uppercase sm:text-4xl lg:text-5xl ">
          Discover top quality products at unbeatable prices.
        </p>
        <button className="bg-cyan-950 text-white font-['Rubik'] text-xs w-60 p-3 hover:bg-white hover:text-gray-900 hover:border-1 hover:border-cyan-950 hover:cursor-pointer">
          Shop Now
        </button>
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
  );
}
