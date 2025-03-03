"use client";

import useProductCart from "@/app/hooks/useProductCart";
import Link from "next/link";
import ProductCart from "../product/ProductCart";
import { Store } from "lucide-react";

const Navbar = () => {
  const { cart } = useProductCart();
  return (
    <div className="navbar bg-base-100 shadow-2xl  ">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href={"/"}>
          <Store className="bg-primary p-1 rounded-md text-white" /> Online{" "}
          <span>Store</span>
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cart.length !== 0 && (
                <span className="badge badge-sm indicator-item badge-primary">
                  {cart.length}
                </span>
              )}
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card  dropdown-content w-52 bg-base-100 shadow shadow-slate-500"
          >
            <ProductCart />
          </div>
        </div>
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
            <span className="text-2xl">G</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
