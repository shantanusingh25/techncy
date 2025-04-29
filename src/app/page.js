import React from "react";
import { ImageTrial } from "@/components/hover-dev/MovingTrailImages";
import ServicesSection from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Cover } from "@/components/ui/cover";
import PortfolioSection from "@/components/Portfolio";
import { WorldMapSection } from "@/components/WorldMapSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import PricingSection from "@/components/Pricing";
import CursorFollower from "@/components/CursorFollower";

import { Inter } from "next/font/google";

const inter_bold = Inter({ subsets: ["latin"], weight: "800" });
const inter_thin = Inter({ subsets: ["latin"], weight: "400" });

export default function page() {
  return (
    <div className="rounded-2xl">
      <ImageTrial />
      <ServicesSection />

      <WhyChooseUs />

      <PortfolioSection />
      <TestimonialSection />
      <PricingSection />
      <WorldMapSection />
    </div>
  );
}
