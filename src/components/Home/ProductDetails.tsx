import { motion } from "framer-motion";
import type { singleProduct } from "../../types/singleProduct";

interface ProductDetailsProps {
  product: singleProduct;
  onAddToCart: () => void;
}

export default function ProductDetails({
  product,
  onAddToCart,
}: ProductDetailsProps) {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="w-full sm:w-1/2 lg:w-3/5 bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100"
    >
      <motion.h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {product.title}
      </motion.h1>

      <motion.div className="mb-6">
        <p className="text-gray-700 font-medium md:text-lg mb-2">Description</p>
        <p className="font-['Montserrat'] text-gray-600 leading-relaxed">
          {product.description}
        </p>
      </motion.div>

      <motion.div className="mb-8 p-4 bg-gray-50 rounded-xl">
        <p className="text-3xl font-bold text-cyan-700">
          ${product.price}
          <span className="text-sm text-gray-500 ml-1">USD</span>
        </p>
      </motion.div>

      <motion.button
        onClick={onAddToCart}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 px-6 rounded-xl font-medium text-white bg-cyan-900 hover:bg-cyan-800 shadow-md transition-all"
      >
        Add To Cart
      </motion.button>
    </motion.div>
  );
}
