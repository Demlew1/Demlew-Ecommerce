import { create } from "zustand";
import type { singleProduct } from "../types/singleProduct";
interface FavouriteType {
  favourites: singleProduct[];
  addToFavourites: (newFavourite: singleProduct) => void;
  removeFromFavourites: (favouriteId: number) => void;
}
export const useFavouriteStore = create<FavouriteType>((set) => ({
  favourites: [],
  addToFavourites: (newFavourite) => {
    set((state) => ({
      favourites: state.favourites.some(
        (favourite) => favourite.id === newFavourite.id
      )
        ? state.favourites
        : [...state.favourites, newFavourite],
    }));
  },
  removeFromFavourites: (favouriteId) => {
    set((state) => ({
      favourites: state.favourites.filter(
        (favourite) => favourite.id !== favouriteId
      ),
    }));
  },
}));
