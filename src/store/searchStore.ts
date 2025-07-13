import { create } from "zustand";

interface searchStore {
  searchText: string;
  setSearchText: (term: string) => void;
  clearSearchText: () => void;
}

export const useSearchStore = create<searchStore>((set) => ({
  searchText: "",
  setSearchText: (query) => {
    set({
      searchText: query,
    });
  },
  clearSearchText: () => {
    set({
      searchText: "",
    });
  },
}));
