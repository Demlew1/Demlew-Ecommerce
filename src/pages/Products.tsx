import { useState } from "react";
import searchIcon from "../assets/images/search.svg";
import ProductCards from "../components/Home/ProductCards";
import Categories from "../components/Home/Categories";
import { useSearchStore } from "../store/searchStore";

export default function Products() {
  const { searchText, setSearchText, clearSearchText } = useSearchStore();
  const [inputValue, setInputValue] = useState<string>(searchText);

  const handleSearch = () => {
    setSearchText(inputValue.trim());
  };
  const handleClear = () => {
    setInputValue("");
    clearSearchText();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen mt-20 md:mt-10 pt-20">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-12 mb-6 px-4">
        <div className="flex flex-row gap-2 items-center justify-center relative w-full max-w-md">
          <div className="relative flex-1">
            <input
              className="font-['Rubik'] text-sm border border-gray-300 p-2 pl-10 pr-8 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all shadow-sm"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search products"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img
                className="size-4 text-gray-400"
                src={searchIcon}
                alt="search"
              />
            </div>
            {inputValue && (
              <button
                onClick={handleClear}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
          <button
            onClick={handleSearch}
            className="bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded-lg flex items-center justify-center transition-colors shadow-sm"
          >
            <img className="size-4" src={searchIcon} alt="search" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 xl:gap-2 px-4">
        <Categories />
        <ProductCards />
      </div>
    </div>
  );
}
