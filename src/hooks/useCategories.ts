import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/api";

export default function useCategories() {
  return useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
}
