import { Search } from "lucide-react";
import React from "react";

export default function SearchBar() {
  return (
    <div>
      <Search />
      <input className="outline-none" placeholder="Search" />
    </div>
  );
}
