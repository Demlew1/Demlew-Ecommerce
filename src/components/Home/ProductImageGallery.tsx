import { motion } from "framer-motion";
import heart from "../../assets/images/heart.png";
import liked from "../../assets/images/liked.svg";
import type { singleProduct } from "../../types/singleProduct";

interface ProductImageGalleryProps {
  product: singleProduct;
  isLiked: boolean;
  onLikeToggle: () => void;
}

export default function ProductImageGallery({
  product,
  isLiked,
  onLikeToggle,
}: ProductImageGalleryProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="w-full sm:w-1/2 lg:w-2/5 space-y-4"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-3 border border-gray-100">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full h-64 md:h-80 lg:h-96 object-contain rounded-lg"
          src={product.images[0]}
          alt={product.title}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onLikeToggle}
          className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-lg backdrop-blur-sm"
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={isLiked ? liked : heart}
            alt="heart"
            className="size-6 transition-all duration-300 hover:scale-110"
          />
        </motion.button>
      </div>

      <div className="flex gap-3">
        {product.images.slice(0, 3).map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index + 0.3 }}
            className="cursor-pointer w-1/3 h-20 md:h-28 rounded-lg overflow-hidden border-2 border-transparent hover:border-cyan-300 transition-all"
          >
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform"
              src={image}
              alt={`Thumbnail ${index + 1}`}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
