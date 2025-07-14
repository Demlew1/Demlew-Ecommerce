import { create } from "zustand";
import type { singleProduct } from "../types/singleProduct";
interface cartType {
  cart: singleProduct[];
  addToCart: (newCart: singleProduct) => void;
  removeFromCart: (productId: number) => void;
}
export const useCartStore = create<cartType>((set) => ({
  cart: [],
  addToCart: (newCart) => {
    set((state) => ({
      cart: state.cart.some((product) => product.id === newCart.id)
        ? state.cart
        : [...state.cart, newCart],
    }));
  },
  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    }));
  },
}));
