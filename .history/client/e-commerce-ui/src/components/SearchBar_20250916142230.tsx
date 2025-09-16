import { Search } from "lucide-react";
import React from "react";

export default function SearchBar() {
  return (
    <div>
      <Search className="w-4 h-4" />
      <input
        id="search"
        className="outline-none text-sm"
        placeholder="Search"
      />
    </div>
  );
}
