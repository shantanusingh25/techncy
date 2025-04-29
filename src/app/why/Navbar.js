import React from "react";
import Link from "next/link";  // Use Link for smooth routing
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "300" });

export default function Navbar() {
  return (
    <header className={`w-full z-30 ${inter.className } mb-20 `}>
      <nav className="bg-transparent px-6 py-4 shadow-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className=" text-2xl font-bold">
            <Link href="/">Techncy</Link> {/* You can replace this with your logo */}
          </div>
          <div className="space-x-6">
            <Link href="/why/affordable" className=" hover:text-gray-700 transition duration-300 text-lg">Affordability</Link>
            <Link href="/why/fast" className=" hover:text-gray-700 transition duration-300 text-lg">Fast & Secure</Link>
            <Link href="/why/tailored" className=" hover:text-gray-700 transition duration-300 text-lg"> Tailored</Link>
            <Link href="/why/unmatched" className=" hover:text-gray-700 transition duration-300 text-lg">Unmatched Performance</Link>
            <Link href="/why/end" className=" hover:text-gray-700 transition duration-300 text-lg">Support</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
