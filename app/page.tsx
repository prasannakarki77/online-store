import ItemCard from "@/components/ItemCard";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content  py-10">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Get the best deals</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>

            <button className="btn btn-primary">
              {" "}
              <Search size={20} /> Browse our store
            </button>
          </div>
        </div>
      </div>
      <div className=" p-10 ">
        <h1 className=" text-2xl font-bold mb-4">Featured</h1>
        <div className=" w-full grid grid-cols-4 gap-1 ">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </main>
  );
}
