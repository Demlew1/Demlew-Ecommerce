import { useState } from "react";
import searchIcon from "../assets/images/search.svg";
import Menu from "../assets/images/menu.svg";
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
    <div>
      <div className="flex flex-row items-center justify-center gap mt-50 sm:mt-30 mb-6">
        <div className="flex flex-row items-center justify-center px-4">
          <img className="size-5 md:hidden" src={Menu} alt="menu" />
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <input
            className="font-['Rubik'] text-xs border-1 border-cyan-950 p-1 rounded-sm w-55 sm:w-70 pl-2 focus:outline-none"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search products"
          />
          <img
            className="size-6 p-1 rounded-full flex items-center justify-center border-1 border-emerald-900 cursor-pointer"
            src={searchIcon}
            alt="search"
            onClick={handleSearch}
          />
          {inputValue && (
            <button
              onClick={handleClear}
              className="text-xs text-cyan-900 border border-cyan-800 px-2 rounded-sm"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-4 xl:gap-2">
        <Categories />
        <ProductCards />
      </div>
    </div>
  );
}
