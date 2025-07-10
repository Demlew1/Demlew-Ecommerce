import searchIcon from "../assets/images/search.svg";
import Menu from "../assets/images/menu.svg";
import ProductCards from "../components/Home/ProductCards";
import Categories from "../components/Home/Categories";
export default function Products() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap mt-50 sm:mt-30 mb-6">
        <div className="flex flex-row  items-center justify-center   px-4 ">
          <img className="size-5 md:hidden" src={Menu} alt="menu" />
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <input
            className="font-['Rubik'] text-xs border-1 border-cyan-950 p-1 rounded-sm  w-55 sm:w-70 pl-2 focus:outline-none"
            type="text"
            placeholder="search products"
          />
          <img
            className="size-6 p-1 rounded-full flex items-center justify-center border-1 border-emerald-900"
            src={searchIcon}
            alt="search"
          />
        </div>
      </div>
      <div className="flex flex-row gap-4 xl:gap-2">
        <Categories />
        <ProductCards />
      </div>
    </div>
  );
}
