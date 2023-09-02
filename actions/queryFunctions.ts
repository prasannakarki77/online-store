import axios from "axios";

export const fetchProductList = async () => {
  const { data } = await axios.get(`https://fakestoreapi.com/products`);
  return data;
};

export const fetchFeaturedProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products?limit=5");
  return data;
};

export const fetchProductById = async (id: number) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};
