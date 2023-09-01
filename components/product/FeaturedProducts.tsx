"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/types/product";
import EmptyState from "../EmptyState";
import SkeletonCard from "../skeleton/SkeletonCard";
import ProductCard from "./ProductCard";
const FeaturedProducts = () => {
  const { data, error, refetch, isError, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      return data;
    },
  });

  let content;
  if (isError) {
    content = (
      <EmptyState
        title="Something went wrong"
        subtitle="Failed to load products"
      />
    );
  }
  if (data) {
    content = (
      <div className=" w-full grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-x-2 gap-y-8 ">
        {data.slice(0, 5).map((product: Product) => (
          <ProductCard data={product} key={product.id} />
        ))}
      </div>
    );
  }
  if (isLoading) {
    content = (
      <div className=" w-full grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-x-2 gap-y-8 ">
        {" "}
        {Array.from({ length: 5 }, (_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className=" p-10 ">
      <h1 className=" text-2xl font-bold mb-4">Featured</h1>
      <div className="flex justify-center items-center"> {content}</div>
    </div>
  );
};
export default FeaturedProducts;
