"use client";

import { fetchProductById } from "@/actions/queryFunctions";
import useProductCart from "@/app/hooks/useProductCart";
import EmptyState from "@/components/EmptyState";
import Loader from "@/components/Loader";
import { CartItem } from "@/types/product";
import { newCart } from "@/utils/cartUtils";
import { useQuery } from "@tanstack/react-query";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ProductClient: React.FC<{ productId: number }> = ({ productId }) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["item"],
    queryFn: () => fetchProductById(productId),
  });

  const { title, price, category, image, rating, description } = data;

  const [count, setCount] = useState<number>(1);

  const { addToCart, cart } = useProductCart();

  const handleIncrement = () => {
    setCount((p) => p + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((p) => p - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      product: data,
      count,
    };
    const updatedCart = newCart(cartItem, cart);
    addToCart(updatedCart);
  };

  if (isError) {
    return (
      <EmptyState
        title="Something went wrong"
        subtitle="Failed to load products"
      />
    );
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-2 container justify-center p-20 mx-auto gap-10">
      <figure className=" w-full object-contain  bg-white  flex justify-center items-center rounded-lg ">
        <Image src={image} alt="Shoes" width={200} height={300} />
      </figure>
      <div className=" flex flex-col gap-6 ">
        <h1 className=" text-3xl font-semibold">{title} </h1>
        <div className="badge badge-outline">{category}</div>
        <p className=" text-lg">{description}</p>
        <p className="font-bold text-lg">&#36; {price}</p>
        <div className=" flex items-center gap-2">
          <button
            className="btn btn-square  btn-accent"
            onClick={handleDecrement}
          >
            {" "}
            <Minus />
          </button>
          <input
            type="text"
            className="input  max-w-[50px] input-bordered text-lg font-medium "
            value={count}
            disabled
          />
          <button
            className="btn btn-square btn-accent "
            onClick={handleIncrement}
          >
            <Plus />
          </button>
        </div>
        <div className="flex gap-2 w-full">
          <button className=" btn btn-primary  flex-1 ">Buy Now</button>
          <button
            className=" btn btn-primary flex-1  "
            onClick={handleAddToCart}
          >
            <ShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductClient;
