import { useCartStore } from "../../store/cartStore";
type Props = {
  item: {
    id: number;
    title: string;
    price: number;
    images?: string[];
    category?: { name: string };
  };
  quantity: number;
  increase: () => void;
  decrease: () => void;
};
export default function CartItem({
  item,
  quantity,
  increase,
  decrease,
}: Props) {
  const { removeFromCart } = useCartStore();

  return (
    <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-4 items-center p-3 md:p-6 hover:bg-cyan-50 transition-colors">
      <div className="col-span-2 md:hidden">
        {item.images?.[0] && (
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-lg border border-cyan-100"
          />
        )}
      </div>
      <div className="col-span-3 md:col-span-5 flex items-center space-x-2 md:space-x-4">
        <div className="hidden md:block">
          {item.images?.[0] && (
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-lg border border-cyan-100"
            />
          )}
        </div>
        <div className="overflow-hidden">
          <h3 className="font-['Rubik'] text-sm md:text-base font-medium text-cyan-900 truncate">
            {item.title}
          </h3>
          <p className="font-['Kanit'] text-xs md:text-sm text-cyan-600 capitalize truncate">
            {item.category?.name}
          </p>
          <p className="md:hidden font-['Kanit'] text-xs text-cyan-800">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="col-span-3 md:col-span-2 flex justify-center">
        <div className="flex items-center border border-cyan-300 rounded-lg overflow-hidden text-sm md:text-base">
          <button
            onClick={decrease}
            className="px-2 md:px-3 py-1 bg-cyan-100 text-cyan-800 hover:bg-cyan-200"
          >
            -
          </button>
          <span className="px-2 md:px-3 py-1 text-cyan-900 font-medium">
            {quantity}
          </span>
          <button
            onClick={increase}
            className="px-2 md:px-3 py-1 bg-cyan-100 text-cyan-800 hover:bg-cyan-200"
          >
            +
          </button>
        </div>
      </div>
      <div className="hidden md:block md:col-span-2 text-center font-['Kanit'] text-cyan-800">
        ${item.price.toFixed(2)}
      </div>
      <div className="hidden md:block md:col-span-2 text-right font-['Rubik'] font-bold text-cyan-900">
        ${(item.price * quantity).toFixed(2)}
      </div>
      <div className="col-span-1 text-right">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-cyan-600 hover:text-cyan-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
