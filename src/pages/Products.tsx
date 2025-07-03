import NavBar from "../components/Home/NavBar";
import SignUpAd from "../components/Home/SignUpAd";
import searchIcon from "../assets/images/search.svg";
import Menu from "../assets/images/menu.svg";
import Filter from "../assets/images/filter.svg";
export default function Products() {
  return (
    <div>
      <SignUpAd />
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex flex-row gap-2 items-center justify-center">
          <input
            className="font-['Rubik'] text-xs border-1 border-cyan-950 p-1 rounded-sm mt-4 w-55 focus:outline-none"
            type="text"
            placeholder="search products"
          />
          <img
            className="size-6 p-1 rounded-full flex items-center justify-center border-1 border-emerald-900 mt-4"
            src={searchIcon}
            alt="search"
          />
        </div>
        <div>
          <img className="size-5" src={Menu} alt="menu" />
          <div>
            <img src={Filter} alt="filter" />
            <select className="font-['Rubik'] text-xs w-30 focus:outline-none border-1 p-1 rounded-sm ">
              <option>Filter by</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
