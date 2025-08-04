import { useQuery } from "@tanstack/react-query";
import { getAllProducts, filterByCategory } from "../services/api";
import type { Product } from "../types/product";

export default function useProducts(
  searchText: string = "",
  categoryId: number | null = null
) {
  return useQuery<Product[]>({
    queryKey: ["products", searchText, categoryId],
    queryFn: async () => {
      if (categoryId === null) {
        return await getAllProducts(searchText);
      } else {
        const products = await filterByCategory(categoryId);
        if (searchText) {
          return products.filter((product) =>
            product.title.toLowerCase().includes(searchText.toLowerCase())
          );
        }
        return products;
      }
    },
    staleTime: 2 * 60 * 1000, // 2 minutes
    retry: 3,
    retryDelay: 1000,
  });
}
