"use client";
import React from "react";
import Link from "next/link";
import MagneticHamburgerButton from "@/components/FloatButtonNavbar";
import { usePathname } from "next/navigation";
export default function Navbar() {
  return (
    <div>
      <Link href={usePathname() === "/menu" ? "/" : "/menu"}>
        <MagneticHamburgerButton />
      </Link>
    </div>
  );
}
