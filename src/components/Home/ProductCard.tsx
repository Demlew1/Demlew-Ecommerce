import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
  direction: number;
  currentIndex: number;
}

export default function ProductCard({
  product,
  direction,
  currentIndex,
}: ProductCardProps) {
  const navigate = useNavigate();

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
      },
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
  );
}
