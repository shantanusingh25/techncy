"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { Inter } from "next/font/google";
const inter_thin = Inter({
  weight: "300",
  subsets: ["latin"],
});

export function Footer() {
  return (
    <div className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-2xl">
      <h1 className="md:text-[15rem] text-3xl tracking-widest font-bold text-center text-white relative z-20">
        TECHNCY
      </h1>
      <div className="w-full md:w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      {/* Footer Links */}

      {/* other content */}

      <div className="absolute bottom-4 left-0 right-0 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 z-20">
        <h1 className={`text-white ${inter_thin.className}`}>
          © 2025 Techncy Pvt. Ltd. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

// Footer Link Component
function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white text-lg transition-colors duration-300 relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-indigo-500 to-sky-500 group-hover:w-full transition-all duration-300"></span>
    </a>
  );
}
