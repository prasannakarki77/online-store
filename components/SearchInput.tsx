"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

interface ISearchInput {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<ISearchInput> = ({ onSearch }: ISearchInput) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchQuery);
    if (searchQuery == "") {
      router.replace("/product");
    }
    router.refresh();
  };
  return (
    <form
      className=" max-w-lg flex gap-2 items-center w-full  "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-sm"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-primary" onClick={() => onSearch(searchQuery)}>
        Search
      </button>
    </form>
  );
};
export default SearchInput;
