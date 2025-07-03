import axios from "axios";
type AllProducts = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
export async function getAllProducts(): Promise<AllProducts[]> {
  try {
    const response = await axios.get<AllProducts[]>(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  } catch {
    throw new Error("Failed to fetch products");
  }
}
