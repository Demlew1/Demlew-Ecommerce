import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/api";
import type { Categories } from "../types/categories";

export default function useCategories() {
  return useQuery<Categories[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    retryDelay: 1000,
  });
}
