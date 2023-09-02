"use client";

import useProductCart from "@/app/hooks/useProductCart";
import { calculateTotalPrice } from "@/utils/cartUtils";
import Image from "next/image";

const ProductCart = () => {
  const { cart } = useProductCart();
  return (
    <div className="card-body">
      <span className="font-bold text-sm mb-2">{cart.length} Items</span>
      {cart.map(({ product, count }) => (
        <div
          className="flex gap-2 justify-between items-center mb-3"
          key={product.id}
        >
          <Image src={product.image} alt="item" height={20} width={30} />{" "}
          <span className="text-xl ">x</span>{" "}
          <span className="text-lg font-bold">{count}</span>
        </div>
      ))}

      <span className="text-info mb-2">
        Total: &#36;{calculateTotalPrice(cart)}
      </span>

      <div className="card-actions w-full">
        <button className="btn btn-primary btn-block btn-sm">View cart</button>
      </div>
    </div>
  );
};
export default ProductCart;
