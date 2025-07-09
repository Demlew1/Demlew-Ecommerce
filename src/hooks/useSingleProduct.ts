import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../services/api";
import type { singleProduct } from "../types/singleProduct";
export default function useSingleProduct(productId: number) {
  return useQuery<singleProduct>({
    queryKey: ["single product", productId],
    queryFn: () => {
      if (!productId) throw new Error("No Product Id is provided");
      return getSingleProduct(productId);
    },
    enabled: !!productId,
  });
}
