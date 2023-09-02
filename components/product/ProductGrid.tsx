"use client";

import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

const ProductGrid: React.FC<{ data: Product[] }> = ({ data }) => {
  return (
    <div className=" container  grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-10 justify-center ">
      {data.map((product: Product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </div>
  );
};
export default ProductGrid;
