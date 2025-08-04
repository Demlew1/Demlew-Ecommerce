import axios from "axios";
import type { Product } from "../types/product";
import type { Categories } from "../types/categories";
import type { singleProduct } from "../types/singleProduct";
const BASE_URL = "https://api.escuelajs.co/api/v1";
export async function getAllProducts(searchText: string): Promise<Product[]> {
  try {
    const response = await axios.get<Product[]>(`${BASE_URL}`);
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
    const response = await axios.get<Categories[]>(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch categories");
  }
}
export async function getSingleProduct(id: number): Promise<singleProduct> {
  try {
    const response = await axios.get<singleProduct>(
      `${BASE_URL}/products/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch product details");
  }
}
export async function filterByCategory(categoryId: number): Promise<Product[]> {
  try {
    const response = await axios.get<Product[]>(
      `${BASE_URL}/categories/${categoryId}/products`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch products for category ${categoryId}`);
  }
}
export async function postProduct(productData: {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}) {
  try {
    const response = await axios.post(`${BASE_URL}/products`, productData);
    return response.data;
  } catch (error) {
    console.error("Error posting product:", error);
    throw new Error("Failed to post product");
  }
}
export async function loginUser(
  email: string,
  password: string
): Promise<string> {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data.access_token;
  } catch (error: any) {
    console.error("Login error:", error);
    throw new Error(error.response?.data?.message || "Login failed");
  }
}
export async function signUpUser(userData: {
  name: string;
  email: string;
  password: string;
  avatar: string;
}) {
  try {
    const response = await axios.post(`${BASE_URL}/users/`, {
      ...userData,
      role: "customer",
    });
    return response.data;
  } catch (error: any) {
    console.error("Signup error:", error);
    throw new Error(error.response?.data?.message || "Signup failed");
  }
}
export async function getUserProfile(token: string) {
  try {
    const response = await axios.get(`${BASE_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Profile fetch error:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch profile");
  }
}
