"use client";

import { useQuery } from "@tanstack/react-query";
import EmptyState from "../EmptyState";
import SkeletonCard from "../skeleton/SkeletonCard";
import ProductGrid from "./ProductGrid";
import { fetchProductList } from "@/actions/queryFunctions";
import { ISearchParams } from "@/types/product";
import SearchInput from "../SearchInput";

interface IProductPage {
  searchParams: ISearchParams;
}

const ProductList = ({ searchParams }: IProductPage) => {
  const { data, error, refetch, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProductList(searchParams),
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
        {" "}
        {Array.from({ length: 10 }, (_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (data?.length === 0) {
    content = (
      <EmptyState
        title={`"${searchParams.title}" not found`}
        subtitle="Product is not available"
      />
    );
  }

  return (
    <>
      <div className=" flex justify-center  mb-10">
        <SearchInput />
      </div>

      <p className="mb-10">
        {searchParams.title && data ? (
          <span className="font-medium">
            Search results : {searchParams.title} ({data?.length})
          </span>
        ) : (
          <span className="text-base-500 text-base-300 ">-</span>
        )}
      </p>

      <div className="flex justify-center items-center"> {content}</div>
    </>
  );
};
export default ProductList;
