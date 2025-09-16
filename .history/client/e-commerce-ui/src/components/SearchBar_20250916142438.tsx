import { Search } from "lucide-react";
import React from "react";

export default function SearchBar() {
  return (
    <div className="hidden md:flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2">
      <Search className="w-4 h-4 text-gray-500" />
      <input
        id="search"
        className="outline-none text-sm"
        placeholder="Search"
      />
    </div>
  );
}
