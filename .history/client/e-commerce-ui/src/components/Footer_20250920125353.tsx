import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start justify-between bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/hairlogo.png" alt="logo" width={49} height={50} />
          <p className="hidden md:block text-md font-bold tracking-wider text-white">
            NextCom
          </p>
        </Link>
        <p className="text-sm text-gray-400"> 2025 NextCom</p>
        <p className="text-sm text-gray-400">All rights reserved</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">links</p>
        <Link href="/">HomePage</Link>
        <Link href="">Contact</Link>
        <Link href="">Terms of Service</Link>
        <Link href="">Privacy Policy</Link>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">links</p>
        <Link href="/">HomePage</Link>
        <Link href="">Contact</Link>
        <Link href="">Terms of Service</Link>
        <Link href="">Privacy Policy</Link>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">links</p>
        <Link href="/">HomePage</Link>
        <Link href="">Contact</Link>
        <Link href="">Terms of Service</Link>
        <Link href="">Privacy Policy</Link>
      </div>
    </div>
  );
}
