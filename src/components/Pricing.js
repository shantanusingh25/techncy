"use client";
import React from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { TracingBeam } from "./ui/tracing-beam";
import { Cover } from "./ui/cover";
import PricingForm from "./FormSection";
import { LinkPreview } from "./ui/link-preview";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const inter_thin = Inter({ subsets: ["latin"], weight: "400" });

export default function PricingSection() {
  return (
    <TracingBeam>
      <section
        className={`mx-auto max-w-7xl px-4 py-12 text-slate-800 ${inter.className}`}
      >
        <div>
          <h2 className="max-w-4xl text-4xl font-bold md:text-5xl">
            <span className={`text-7xl font-semibold ${inter_thin.className} text-justify mt-20`}>
              Techncy <Cover>Pricing</Cover>
            </span>
          </h2>
        </div>

        <div className="text-center mt-10">
          <h1
            className={`text-3xl font-semibold ${inter_thin.className} text-justify mt-20`}
          >
            At Techncy, we believe that <Cover><LinkPreview url={"https://plus.unsplash.com/premium_vector-1731367068054-21912e01402a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpY2luZ3xlbnwwfHwwfHx8MA%3D%3D"}>you deserve fair and flexible pricing</LinkPreview></Cover> — not confusing packages or hidden costs. 
            We offer tailor-made pricing models that align with your project's needs and budget. Whether you're a startup, a growing business, or an established enterprise, we ensure you receive <Cover ><LinkPreview url={"https://plus.unsplash.com/premium_vector-1682308884503-1aca36c07cfe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZm9ybWFuY2V8ZW58MHx8MHx8fDA%3D"}>high-performance, scalable solutions</LinkPreview></Cover> without overpaying.
            <br />
            <br />
            From <Cover><LinkPreview url={"https://images.unsplash.com/file-1719664968387-83d5a3f4d758image?w=416&dpr=2&auto=format&fit=crop&q=60"}>modern website development</LinkPreview></Cover> and <Cover ><LinkPreview url={"https://plus.unsplash.com/premium_vector-1720102933713-e3ad74c8b32c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww"}>intuitive app design</LinkPreview></Cover> to <Cover><LinkPreview url={"https://plus.unsplash.com/premium_vector-1714618885375-9e236df01ad1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VvfGVufDB8fDB8fHww"}>SEO, security, and deployment</LinkPreview></Cover> — our mission is to empower your business with world-class technology and thoughtful service.
            <br />
            <br />
            You're not just paying for code — you're investing in reliability, design, and growth. Let’s build something great together.
          </h1>
        </div>
      </section>
      <PricingForm />
    </TracingBeam>
  );
}

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};
