type Props = {
  total: number;
};
export default function CartSummary({ total }: Props) {
  return (
    <div className="px-6 py-4 bg-cyan-50 border-t border-cyan-200">
      <div className="flex justify-end">
        <div className="w-full max-w-md space-y-4">
          <div className="flex justify-between">
            <span className="font-['Rubik'] font-medium text-cyan-700">
              Subtotal
            </span>
            <span className="font-['Rubik'] font-bold text-cyan-900">
              ${total.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-['Rubik'] font-medium text-cyan-700">
              Shipping
            </span>
            <span className="font-['Rubik'] text-cyan-600">Free</span>
          </div>
          <div className="pt-4 border-t border-cyan-200 flex justify-between">
            <span className="font-['Rubik'] font-medium text-lg text-cyan-800">
              Total
            </span>
            <span className="font-['Rubik'] font-bold text-lg text-cyan-900">
              ${total.toFixed(2)}
            </span>
          </div>
          <button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-['Rubik'] py-3 px-6 rounded-lg shadow-md transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
