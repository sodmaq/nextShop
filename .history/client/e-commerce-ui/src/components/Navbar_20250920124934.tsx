import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* left */}
      <Link href="/" className="flex items-center">
        <Image
          src="/hairlogo.png"
          alt="logo"
          width={40}
          height={36}
          className="cursor-pointer w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-bold tracking-wider">
          NextCom
        </p>
      </Link>
      {/* right */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/" className="flex items-center gap-2">
          <Home className="w-4 h-4 text-gray-500" />
          <Bell className="w-4 h-4 text-gray-500" />
          <ShoppingCart className="w-4 h-4 text-gray-500" />
          <Link href="/login">Sign in</Link>
        </Link>
      </div>
    </div>
  );
}
