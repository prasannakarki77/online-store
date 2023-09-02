import FeaturedProducts from "@/components/product/FeaturedProducts";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1502160348486-995f41fa55b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content  py-10">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Get the best deals</h1>
            <p className="mb-5  text-lg font-semibold">
              Electronics, clothes, and many products. Buy Now!
            </p>

            <Link className="btn btn-primary" href="/product">
              {" "}
              <Search size={20} /> Browse our store
            </Link>
          </div>
        </div>
      </div>
      <FeaturedProducts />
    </main>
  );
}
