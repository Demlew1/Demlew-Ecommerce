import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import useProducts from "../../hooks/useProducts";
import ProductCard from "./ProductCard";
import CarouselControls from "./CarouselControls";

export default function HomeProducts() {
  const { data: products = [], isPending, error } = useProducts();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

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

  const prevProducts = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex: number) =>
      prevIndex - 3 < 0
        ? products.length - (products.length % 3 || 3)
        : prevIndex - 3
    );
  };

  return (
    <div className="flex flex-col gap-1 items-center my-10 relative px-4">
      <p className="font-['Rubik'] font-bold text-cyan-950 text-xl md:text-2xl mb-4">
        OUR PRODUCTS
      </p>

      <div className="relative w-full max-w-6xl">
        <CarouselControls onPrevious={prevProducts} onNext={nextProducts} />

        <div className="overflow-hidden px-8 md:px-12">
          <AnimatePresence mode="popLayout" custom={direction}>
            <div className="flex justify-center items-center gap-3 md:gap-6 flex-nowrap">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={`${product.id}-${currentIndex}`}
                  product={product}
                  direction={direction}
                  currentIndex={currentIndex}
                />
              ))}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
