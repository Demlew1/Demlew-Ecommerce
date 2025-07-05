import axios from "axios";
import type { Product } from "../types/product";
export async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await axios.get<Product[]>(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  } catch {
    throw new Error("Failed to fetch products");
  }
}
export async function getCategories(): Promise<string[]> {
  try {
    const response = await axios.get<string[]>(
      "https://fakestoreapi.com/products/categories"
    );
    return response.data;
  } catch {
    throw new Error("failed to fetch categories");
  }
}
