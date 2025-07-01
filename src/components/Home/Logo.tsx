// import { MdLocalGroceryStore } from "react-icons/md";

export default function Logo() {
  return (
    <div className="flex flex-row gap-1 items-center">
      {/* <MdLocalGroceryStore className="text-gray-800 text-lg" /> */}
      <img src="src/assets/images/cart.png" alt="cart" className="size-6" />
      <p className="text-lg font-['wallpoet'] text-teal-950">DEMLEW</p>
    </div>
  );
}
