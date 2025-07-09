import axios from "axios";
import type { Product } from "../types/product";
import type { Categories } from "../types/categories";
export async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await axios.get<Product[]>(
      "https://api.escuelajs.co/api/v1/products"
    );
    return response.data;
  } catch {
    throw new Error("Failed to fetch products");
  }
}
export async function getCategories(): Promise<Categories[]> {
  try {
    const response = await axios.get<Categories[]>(
      "https://api.escuelajs.co/api/v1/categories"
    );
    return response.data;
  } catch {
    throw new Error("failed to fetch categories");
  }
}
