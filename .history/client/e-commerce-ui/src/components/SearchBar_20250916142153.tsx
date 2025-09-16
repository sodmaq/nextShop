import { Search } from "lucide-react";
import React from "react";

export default function SearchBar() {
  return (
    <div>
      <Search />
      <input
        id="search"
        className="outline-none text-sm"
        placeholder="Search"
      />
    </div>
  );
}
