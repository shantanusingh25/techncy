"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

import { Inter } from "next/font/google";

const inter_bold = Inter({ subsets: ["latin"], weight: "800" });
const inter_thin = Inter({ subsets: ["latin"], weight: "400" });

export function WorldMapSection() {
  return (
    <div className=" py-40 dark:bg-black bg-white w-full rounded-2xl">
      <div className="max-w-7xl mx-auto text-center">
        <p className={`font-bold text-xl md:text-7xl dark:text-white text-black ${inter_bold.className}`}>
          Available {" "}
          <span className="text-neutral-400">
            {"Everywhere".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from location limits. Work with Techncy from anywhere in
          the world — our projects are accessible, deliverable, and supported
          globally. Perfect for modern businesses and global creators.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}
