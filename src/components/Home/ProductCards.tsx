import Filter from "../../assets/images/filter.svg";
import useProducts from "../../hooks/useProducts";
import { useNavigate } from "react-router-dom";
import { useSearchStore } from "../../store/searchStore";
import { useFilterStore } from "../../store/filterStore";

export default function ProductCards() {
  const { searchText } = useSearchStore();
  const { selectedCategoryId } = useFilterStore();
  const navigate = useNavigate();
  const {
    data: products = [],
    isPending,
    error,
  } = useProducts(searchText, selectedCategoryId);

  if (isPending)
    return <p className="font-['Kanit'] text-center mt-20">Loading...</p>;
  if (error)
    return (
      <p className="font-['Kanit'] text-center mt-20 text-red-500">
        {error.message}
      </p>
    );
  const productsWithImages = products.filter(
    (product) =>
      product.images && product.images.length > 0 && product.images[0]
  );
  return (
    <div className="flex flex-row justify-center px-4">
      <div className="flex flex-col gap-4 w-full max-w-7xl">
        <div className="relative self-end">
          <img
            className="size-4 absolute top-1.5 left-3"
            src={Filter}
            alt="filter"
          />
          <select className="font-['Rubik'] text-xs border border-gray-300 w-40 focus:outline-none rounded-md pl-10 p-2 bg-white shadow-sm hover:border-cyan-700 transition-colors">
            <option>Filter by</option>
            <option>A-Z</option>
            <option>expensive to low</option>
          </select>
        </div>

        {productsWithImages.length === 0 ? (
          <p className="font-['Rubik'] text-center text-gray-500 mt-10 text-lg">
            No products found
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {productsWithImages.map((product) => (
              <div
                key={product.id}
                className="card bg-white shadow-md border-1 border-cyan-900 rounded-lg overflow-hidden font-['Rubik'] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
              >
                <figure className="relative pt-[100%] overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "src/assets/images/noImage.jpg";
                    }}
                  />
                </figure>
                <div className="p-4 flex flex-col flex-1">
                  {product.category && (
                    <span className="text-xs font-medium text-cyan-700 bg-cyan-50 px-2 py-1 rounded-full self-start mb-2">
                      {product.category.name}
                    </span>
                  )}
                  <h2 className="card-title text-gray-900 text-lg font-medium mb-2 line-clamp-2">
                    {product.title}
                  </h2>
                  <div className="mt-auto">
                    <p className="text-lg font-bold text-cyan-900 mb-4">
                      ${product.price}
                    </p>
                    <button
                      onClick={() => navigate(`/products/${product.id}`)}
                      className="btn w-full bg-cyan-900 text-white py-2 px-4 rounded-md hover:bg-cyan-800 transition-colors border-none text-sm font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
