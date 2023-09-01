"use client";

import { useState } from "react";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className=" max-w-lg flex gap-2 items-center w-full  ">
      {" "}
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-sm"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-primary">Search</button>
    </div>
  );
};
export default SearchInput;
