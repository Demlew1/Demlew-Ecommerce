import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/api";
import type { Product } from "../types/product";
export default function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["Product"],
    queryFn: getAllProducts,
    staleTime: 60 * 1000,
  });
}
