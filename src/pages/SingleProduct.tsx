import { useParams } from "react-router-dom";
import useSingleProduct from "../hooks/useSingleProduct";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCartStore } from "../store/cartStore";
import { toast } from "react-toastify";
import { useFavouriteStore } from "../store/favouriteStore";
import ProductImageGallery from "../components/Home/ProductImageGallery";
import ProductDetails from "../components/Home/ProductDetails";
import ProductLoadingState from "../components/Home/ProductLoadingState";

export default function SingleProduct() {
  const notify = () => toast.success("Successfully added!");
  const { addToFavourites, removeFromFavourites } = useFavouriteStore();
  const { addToCart } = useCartStore();
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id ?? "0");
  const { data: singleProduct, isPending, error } = useSingleProduct(productId);
  const [like, setLike] = useState<boolean>(false);

  if (isPending) return <ProductLoadingState />;

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

  const handleLikeToggle = () => {
    setLike((prev) => !prev);
    if (!like) {
      addToFavourites(singleProduct);
    } else {
      removeFromFavourites(singleProduct.id);
    }
  };

  const handleAddToCart = () => {
    addToCart(singleProduct);
    notify();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-['Rubik'] flex flex-col sm:flex-row gap-8 mt-40 sm:mt-30 sm:items-start items-center px-4 sm:px-8 lg:px-16 py-12 max-w-7xl mx-auto"
    >
      <ProductImageGallery
        product={singleProduct}
        isLiked={like}
        onLikeToggle={handleLikeToggle}
      />

      <ProductDetails product={singleProduct} onAddToCart={handleAddToCart} />
    </motion.div>
  );
}
