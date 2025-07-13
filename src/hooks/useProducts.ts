import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/api";
import type { Product } from "../types/product";
export default function useProducts(searchText: string) {
  return useQuery<Product[]>({
    queryKey: ["products", searchText],
    queryFn: () => getAllProducts(searchText),
    staleTime: 60 * 1000,
  });
}
