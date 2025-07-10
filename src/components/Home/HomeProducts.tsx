import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import useProducts from "../../hooks/useProducts";
import type { Variants, Transition } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function HomeProducts() {
  const { data: products = [], isPending, error } = useProducts();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const navigate = useNavigate();
  if (isPending)
    return <p className="font-['Kanit'] text-center mt-20">Loading...</p>;
  if (error)
    return (
      <p className="font-['Kanit'] text-center mt-20 text-red-500">
        {error.message}
      </p>
    );

  const visibleProducts = products.slice(currentIndex, currentIndex + 3);
  const remainingProducts: number = 3 - visibleProducts.length;
  if (remainingProducts > 0) {
    visibleProducts.push(...products.slice(0, remainingProducts));
  }

  const nextProducts = () => {
    setDirection(1);
    setCurrentIndex((prevIndex: number) =>
      prevIndex + 3 >= products.length ? 0 : prevIndex + 3
    );
  };

  function prevProducts(): void {
    setDirection(-1);
    setCurrentIndex((prevIndex: number) =>
      prevIndex - 3 < 0
        ? products.length - (products.length % 3 || 3)
        : prevIndex - 3
    );
  }

  const cardVariants: Variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      } as Transition,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    }),
  };

  return (
    <div className="flex flex-col gap-1 items-center my-10 relative px-4">
      <p className="font-['Rubik'] font-bold text-cyan-950 text-xl md:text-2xl mb-4">
        OUR PRODUCTS
      </p>

      <div className="relative w-full max-w-6xl">
        <button
          onClick={prevProducts}
          className="flex items-center justify-center border-1 border-cyan-950 text-cyan-950 p-2 rounded-full cursor-pointer hover:bg-cyan-950 hover:text-white z-10 
                   absolute left-0 lg:left-16 xl:left-32 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4
                   w-8 h-8 md:w-10 md:h-10"
          aria-label="Previous products"
        >
          <FiChevronLeft className="size-5 md:size-6" />
        </button>

        <div className="overflow-hidden px-8 md:px-12">
          <AnimatePresence mode="popLayout" custom={direction}>
            <div className="flex justify-center items-center gap-3 md:gap-6 flex-nowrap">
              {visibleProducts.map((product) => (
                <motion.div
                  key={`${product.id}-${currentIndex}`}
                  custom={direction}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  layout
                  className="card bg-base-100 flex-shrink-0 w-48 sm:w-56 md:w-60 shadow-sm font-['Rubik'] flex flex-col gap-2 pb-2 border-1 border-cyan-950 rounded-lg"
                >
                  <figure className="">
                    <motion.img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full object-contain rounded-t-md"
                      whileHover={{ scale: 1.05 }}
                    />
                  </figure>
                  <div className="card-body items-center text-center flex flex-col gap-3 flex-1">
                    <p className="text-sm text-red-800">{product.price}$</p>
                    <div className="card-actions">
                      <motion.button
                        onClick={() => navigate(`products/${product.id}`)}
                        className="btn btn-primary bg-cyan-950 text-cyan-50 p-2 w-32 md:w-40 border-1 border-cyan-950 cursor-pointer hover:border-1 hover:border-cyan-950 hover:text-cyan-950 hover:bg-white text-xs md:text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        More details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>

        <button
          onClick={nextProducts}
          className="flex items-center justify-center border-1 border-cyan-950 text-cyan-950 p-2 rounded-full cursor-pointer hover:bg-cyan-950 hover:text-white z-10 
                   absolute right-0 lg:right-16 xl:right-32 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4
                   w-8 h-8 md:w-10 md:h-10"
          aria-label="Next products"
        >
          <FiChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
}
