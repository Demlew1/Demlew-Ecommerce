import axios from "axios";
import type { Product } from "../types/product";
import type { Categories } from "../types/categories";
import type { singleProduct } from "../types/singleProduct";
export async function getAllProducts(searchText: string): Promise<Product[]> {
  try {
    const response = await axios.get<Product[]>(
      "https://api.escuelajs.co/api/v1/products"
    );
    const allProducts = response.data;

    if (!searchText) return allProducts;

    return allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
}
export async function getCategories(): Promise<Categories[]> {
  try {
    const response = await axios.get<Categories[]>(
      "https://api.escuelajs.co/api/v1/categories"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch categories");
  }
}
export async function getSingleProduct(id: number): Promise<singleProduct> {
  try {
    const response = await axios.get<singleProduct>(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch product details");
  }
}
