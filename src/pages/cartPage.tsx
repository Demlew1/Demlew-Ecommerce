import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import CartItem from "../components/Home/cartItem";
import CartSummary from "../components/Home/cartSummary";
export default function CartPage() {
  const { cart } = useCartStore();
  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});
  const getQty = (id: number) => quantities[id] ?? 1;
  const increase = (id: number) => {
    setQuantities((prev) => ({ ...prev, [id]: getQty(id) + 1 }));
  };
  const decrease = (id: number) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(getQty(id) - 1, 1) }));
  };
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * getQty(item.id),
    0
  );
  return (
    <div className="min-h-screen bg-gray-50 mt-50 sm:mt-30 md:mt-20 py-4 md:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-bold font-['Rubik'] text-cyan-800">
            Your Shopping Cart
          </h1>
          <p className="mt-1 md:mt-2 text-sm md:text-base text-cyan-600">
            {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>
        <div className="bg-white shadow-md md:shadow-xl rounded-lg overflow-hidden">
          <div className="hidden md:grid px-4 md:px-6 py-3 md:py-4 bg-cyan-700 text-white">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-5 font-['Rubik'] font-medium">
                Product
              </div>
              <div className="col-span-2 font-['Rubik'] font-medium text-center">
                Quantity
              </div>
              <div className="col-span-2 font-['Rubik'] font-medium text-center">
                Price
              </div>
              <div className="col-span-2 font-['Rubik'] font-medium text-right">
                Total
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {cart.length === 0 ? (
              <div className="p-8 md:p-12 text-center">
                <p className="text-gray-500 text-base font-['Rubik'] md:text-lg">
                  Your cart is empty
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  quantity={getQty(item.id)}
                  increase={() => increase(item.id)}
                  decrease={() => decrease(item.id)}
                />
              ))
            )}
          </div>
          {cart.length > 0 && <CartSummary total={subtotal} />}
        </div>
      </div>
    </div>
  );
}
