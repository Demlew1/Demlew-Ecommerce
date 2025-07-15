import { useFavouriteStore } from "../store/favouriteStore";
import { Trash2, Heart } from "lucide-react";

export default function FavouritesPage() {
  const { favourites, removeFromFavourites } = useFavouriteStore();

  if (favourites.length === 0) {
    return (
      <div className="font-['Rubik'] mt-50 sm:mt-30 flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center p-4">
        <div className="bg-gray-100 p-6 rounded-full">
          <Heart className="w-8 h-8 text-pink-400" />
        </div>
        <h2 className="text-xl font-medium text-gray-700">No favourites yet</h2>
        <p className="text-gray-500 max-w-md">
          Items you save will appear here for quick access
        </p>
      </div>
    );
  }

  return (
    <div className="font-['Rubik'] container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Your Favourites</h1>
        <p className="text-gray-600 mt-1">
          {favourites.length}{" "}
          {favourites.length === 1 ? "loved item" : "loved items"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favourites.map((product) => (
          <div
            key={product.id}
            className="border border-pink-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white"
          >
            <div className="relative">
              <img
                src={product.images?.[0] || "/placeholder-product.jpg"}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={() => removeFromFavourites(product.id)}
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-pink-50 transition-colors"
                aria-label="Remove from favourites"
              >
                <Trash2 className="w-4 h-4 text-pink-500 hover:text-pink-700" />
              </button>
            </div>

            <div className="p-4">
              <h3 className="font-medium text-gray-900 truncate">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                {product.description}
              </p>
              <div className="mt-3 flex justify-between items-center">
                <span className="font-bold text-pink-900">
                  ${product.price}
                </span>
                <button className="text-sm bg-pink-900 text-white px-3 py-1 rounded hover:bg-pink-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
