"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
const FeaturedProducts = () => {
  const { data, error, refetch, isError, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      return data;
    },
  });
  console.log(data);

  return (
    <div className=" p-10 ">
      <h1 className=" text-2xl font-bold mb-4">Featured</h1>
      <div className=" w-full grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-x-2 gap-y-8 ">
        {!isLoading &&
          !isError &&
          data
            .slice(0, 5)
            .map((product: Product) => (
              <ProductCard data={product} key={product.id} />
            ))}
      </div>
    </div>
  );
};
export default FeaturedProducts;
