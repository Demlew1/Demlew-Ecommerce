import { create } from "zustand";
interface categoryStore {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}
export const useFilterStore = create<categoryStore>((set) => ({
  selectedCategory: "all",
  setSelectedCategory: (category) =>
    set({
      selectedCategory: category,
    }),
}));
