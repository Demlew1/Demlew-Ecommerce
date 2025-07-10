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
  const [like, setLike] = useState(false);

  if (isPending)
    return (
      <p className="font-['Kanit'] text-center mt-20 animate-pulse">
        Loading...
      </p>
    );

  if (error)
    return (
      <p className="font-['Kanit'] text-center mt-20 text-red-500">
        {error.message}
      </p>
    );

  if (!singleProduct || !singleProduct.images?.length) {
    return (
      <p className="text-center mt-20 text-gray-500">
        No product images available.
      </p>
    );
  }

  function likeProducts() {
    setLike(!like);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="font-['Rubik'] flex flex-col sm:flex-row gap-4 lg:gap-12 items-center m-2 lg:mx-24 xl:mx-40 mt-14"
    >
      {/* Image Section */}
      <div className="w-full sm:w-1/2 space-y-2">
        <motion.img
          whileHover={{ scale: 1.05 }}
          className="rounded-xl w-full object-cover"
          src={singleProduct.images[0]}
          alt={singleProduct.title}
        />
        <div className="flex gap-2 justify-center">
          <img
            className="w-1/2 rounded-lg"
            src={singleProduct.images[1]}
            alt="thumb1"
          />
          <img
            className="w-1/2 rounded-lg"
            src={singleProduct.images[2]}
            alt="thumb2"
          />
        </div>
      </div>

      {/* Details Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center gap-4 xl:gap-6 p-4 xl:p-8 border border-cyan-900 shadow-md rounded-2xl bg-white"
      >
        <h1 className="text-center text-2xl xl:text-4xl font-bold text-cyan-900">
          {singleProduct.title}
        </h1>

        <div className="text-center">
          <p className="text-cyan-800 text-lg mb-1">Description:</p>
          <p className="font-['Montserrat'] text-sm text-gray-600 max-w-xs">
            {singleProduct.description}
          </p>
        </div>

        <p className="text-lg font-semibold text-red-800">
          Price: ${singleProduct.price}
        </p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-cyan-900 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors text-sm md:text-lg"
        >
          Add To Cart
        </motion.button>

        <motion.img
          whileTap={{ scale: 1.2 }}
          whileHover={{ rotate: [0, -10, 10, 0] }}
          onClick={likeProducts}
          src={like ? liked : heart}
          alt="heart"
          className="w-6 h-6 cursor-pointer"
        />
      </motion.div>
    </motion.div>
  );
}
