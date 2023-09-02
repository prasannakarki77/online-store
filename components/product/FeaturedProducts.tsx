"use client";
import { useQuery } from "@tanstack/react-query";
import EmptyState from "../EmptyState";
import SkeletonCard from "../skeleton/SkeletonCard";
import ProductGrid from "./ProductGrid";
import { fetchFeaturedProducts } from "@/actions/queryFunctions";

const FeaturedProducts = () => {
  const { data, error, refetch, isError, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: fetchFeaturedProducts,
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
    content = <ProductGrid data={data} />;
  }
  if (isLoading) {
    content = (
      <div className=" w-full grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-x-2 gap-y-8 ">
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
