"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Cover } from "@/components/ui/cover";

import { Inter } from "next/font/google";

const inter_bold = Inter({
  weight: "800",
  subsets: ["latin"],
});

const inter_thin = Inter({
  weight: "300",
  subsets: ["latin"],
});

export function HeroSection() {
  return (
    <div className="h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-6xl mx-auto p-4 flex justify-center items-center flex-col">
        <h1
          className={`relative z-10 text-lg md:text-6xl  bg-clip-text text-transparent bg-white  text-center font-sans font-bold ${inter_bold.className} leading-[5.2rem] z-20`}
        >
          Launch your product with a cool landing page with <Cover>Techncy</Cover>
        </h1>

        <p
          className={`${inter_thin.className} text-white font-medium mx-auto my-10 text-xl text-center relative leading-8 z-20`}
        >
          Your 1-2 sentence elevator pitch for what your product does and why
          goes here. <br /> Be concise, get to the point, don't use jargon.
        </p>

        <button
          className={`cursor-pointer ${inter_thin.className} px-8 py-5  bg-blue-700 text-white text-lg rounded-md z-20`}
        >
          <span className="font-bold text-yellow-200">Get Started</span> - No
          Authentication Required
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
}
