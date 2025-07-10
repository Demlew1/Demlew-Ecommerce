import { useParams } from "react-router-dom";
import useSingleProduct from "../../hooks/useSingleProduct";
import heart from "../../assets/images/heart.png";
import liked from "../../assets/images/liked.svg";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SingleProduct() {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id ?? "0");
  const { data: singleProduct, isPending, error } = useSingleProduct(productId);
  const [like, setLike] = useState<boolean>(false);

  if (isPending)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center items-center h-[60vh]"
      >
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-48"></div>
        </div>
      </motion.div>
    );

  if (error)
    return (
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-['Kanit'] text-center mt-20 text-red-500"
      >
        {error.message}
      </motion.p>
    );

  if (!singleProduct || !singleProduct.images?.length) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-20"
      >
        No product images available.
      </motion.p>
    );
  }

  function likeProducts() {
    setLike(!like);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-['Rubik'] flex flex-col sm:flex-row gap-8 items-center px-4 sm:px-8 lg:px-16 py-12 max-w-7xl mx-auto"
    >
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
            src={singleProduct.images[0]}
            alt={singleProduct.title}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={likeProducts}
            className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-lg backdrop-blur-sm"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={like ? liked : heart}
              alt="heart"
              className="size-6 transition-all duration-300 hover:scale-110"
            />
          </motion.button>
        </div>

        <div className="flex gap-3">
          {singleProduct.images.slice(0, 3).map((image, index) => (
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

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full sm:w-1/2 lg:w-3/5 bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100"
      >
        <motion.h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {singleProduct.title}
        </motion.h1>

        <motion.div className="mb-6">
          <p className="text-gray-700 font-medium md:text-lg mb-2">
            Description
          </p>
          <p className="font-['Montserrat'] text-gray-600 leading-relaxed">
            {singleProduct.description}
          </p>
        </motion.div>

        <motion.div className="mb-8 p-4 bg-gray-50 rounded-xl">
          <p className="text-3xl font-bold text-cyan-700">
            ${singleProduct.price}
            <span className="text-sm text-gray-500 ml-1">USD</span>
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-6 rounded-xl font-medium text-white bg-cyan-900 hover:bg-cyan-800 shadow-md transition-all"
        >
          Add To Cart
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
