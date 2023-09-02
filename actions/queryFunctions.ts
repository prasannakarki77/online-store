import { ISearchParams, Product } from "@/types/product";
import axios from "axios";

// export const fetchProductList = async () => {
//   const { data } = await axios.get(`https://fakestoreapi.com/products`);
//   return data;
// };

export const fetchFeaturedProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products?limit=5");
  return data;
};

export const fetchProductById = async (id: number) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

export const fetchProductList = async ({ title }: ISearchParams) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const { data } = await axios.get(`https://fakestoreapi.com/products`);
  if (title && title !== "") {
    const filteredData = data.filter((product: Product) =>
      product.title.toLowerCase().includes(title.toLocaleLowerCase())
    );
    return filteredData;
  }
  return data;
};
