import searchIcon from "../assets/images/search.svg";
import Menu from "../assets/images/menu.svg";

import ProductCards from "../components/Home/ProductCards";
import Categories from "../components/Home/Categories";
export default function Products() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex flex-row gap-2 items-center justify-center">
          <input
            className="font-['Rubik'] text-xs border-1 border-cyan-950 p-1 rounded-sm mt-4 w-55 sm:w-70 pl-2 focus:outline-none"
            type="text"
            placeholder="search products"
          />
          <img
            className="size-6 p-1 rounded-full flex items-center justify-center border-1 border-emerald-900 mt-4"
            src={searchIcon}
            alt="search"
          />
        </div>
        <div className="flex flex-row justify-between items-center w-full mt-4 px-6 ">
          <img className="size-5 md:hidden" src={Menu} alt="menu" />
        </div>
      </div>
      <div className="flex flex-row gap-4 xl:gap-2">
        <Categories />
        <ProductCards />
      </div>
    </div>
  );
}
