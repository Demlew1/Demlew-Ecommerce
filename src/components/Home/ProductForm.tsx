type ProductFormProps = {
  title: string;
  setTitle: (v: string) => void;
  price: number | "";
  setPrice: (v: number | "") => void;
  description: string;
  setDescription: (v: string) => void;
  categoryId: number;
  setCategoryId: (v: number) => void;
};

export default function ProductForm({
  title,
  setTitle,
  price,
  setPrice,
  description,
  setDescription,
  categoryId,
  setCategoryId,
}: ProductFormProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Premium Leather Wallet"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price ($)
        </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="e.g. 49.99"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500"
          min="0"
          step="0.01"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          placeholder="Describe your product in detail..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500"
        >
          <option value={1}>Clothes</option>
          <option value={2}>Electronics</option>
          <option value={3}>Furniture</option>
          <option value={4}>Shoes</option>
          <option value={5}>Miscellaneous</option>
        </select>
      </div>
    </div>
  );
}
