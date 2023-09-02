"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchInput = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery == "") {
      router.replace("/product");
    } else {
      router.replace(`/product?title=${searchQuery}`);
    }
    router.refresh();
  };
  return (
    <form
      className=" max-w-lg flex gap-2 items-center w-full   "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Type here"
        value={searchQuery}
        defaultValue={searchQuery}
        className="input input-bordered w-full max-w-sm"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
};
export default SearchInput;
