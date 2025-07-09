import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/api";
import type { Categories } from "../types/categories";
export default function useCategories() {
  return useQuery<Categories[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 80 * 10000,
  });
}
