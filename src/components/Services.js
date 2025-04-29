"use client";
import React from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { Cover } from "./ui/cover";
import { LinkPreview } from "@/components/ui/link-preview";
import { TracingBeam } from "./ui/tracing-beam";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const inter_thin = Inter({ subsets: ["latin"], weight: "400" });

export default function ServicesSection() {
  return (
    <TracingBeam>
      <section
        className={`mx-auto max-w-7xl px-4 py-12 text-slate-800 ${inter.className}`}
      >
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
          <h2 className="max-w-4xl text-4xl font-bold md:text-5xl">
            <Cover>Techncy Services</Cover>
            <span className="text-indigo-950"> Grow Faster with us.</span>
          </h2>
        </div>
        <br /> <br />
        <div className="mb-4 grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-4">
            <CardTitle>App Devlopment</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span
                className={`block text-center font-semibold text-indigo-50 ${inter_thin.className}`}
              >
                We craft innovative mobile applications that provide smooth user
                experiences across platforms, driving engagement and enhancing
                your business reach.
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-8">
            <CardTitle>Web Devlopment</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span
                className={`block text-center font-semibold text-indigo-50 ${inter_thin.className}`}
              >
                At Techncy, we specialize in building fast, modern websites
                tailored to your unique needs, ensuring optimal user experience
                and seamless performance.
              </span>
            </div>
          </BounceCard>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-8">
            <CardTitle>Seo and Security</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span
                className={`block text-center font-semibold text-indigo-50 ${inter_thin.className}`}
              >
                Our SEO strategies boost your online visibility, driving organic
                traffic and helping you convert visitors into loyal customers
                while improving your brand presence.
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-4">
            <CardTitle>Deployment and Hosting.</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span
                className={`block text-center font-semibold text-indigo-50 ${inter_thin.className}`}
              >
                We provide hassle-free deployment and hosting services,
                optimizing your website or app for high performance,
                scalability, and reliability.
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-4">
            <CardTitle>UI/UX Design</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-300 to-red-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span
                className={`block text-center font-semibold text-indigo-50 ${inter_thin.className}`}
              >
                Techncy offers intuitive and visually appealing design services,
                ensuring your digital product is not only user-friendly but also
                aligns with your brand.
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-8">
            <CardTitle>E-commerce Solutions</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-blue-200 to-blue-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span
                className={`block text-center font-semibold text-indigo-50 ${inter_thin.className}`}
              >
                We build secure, high-converting e-commerce platforms that offer
                smooth shopping experiences, driving sales and business growth.
              </span>
            </div>
          </BounceCard>
        </div>
        <div className="text-center mt-10">
          <h1
            className={`text-3xl font-semibold ${inter_thin.className} text-justify mt-20`}
          >
            At Techncy, we provide comprehensive{" "}
            <Cover>
              <LinkPreview
                url={`https://plus.unsplash.com/premium_photo-1661340603772-1ae4ff9afcb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMHNvbHV0aW9ufGVufDB8fDB8fHww`}
              >
                digital solutions
              </LinkPreview>
            </Cover>
            , including{" "}
            <Cover>
              <LinkPreview
                url={`https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww`}
              >
                Web development
              </LinkPreview>
            </Cover>
            ,{" "}
            <Cover>
              <LinkPreview
                url={`https://plus.unsplash.com/premium_photo-1661593486413-d279b1a02e28?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwJTIwZGVzaWdufGVufDB8fDB8fHww`}
              >
                app development
              </LinkPreview>
            </Cover>
            , and a wide range of additional services such as{" "}
            <Cover>
              <LinkPreview
                url={`https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VvfGVufDB8fDB8fHww`}
              >
                SEO , security, and deployment
              </LinkPreview>
            </Cover>{" "}
            . Our goal is to deliver high-performance, scalable solutions
            tailored to your business needs. With a focus on innovation,
            security, and user experience, we help you build a strong online
            presence. Let us transform your digital ideas into reality with
            cutting-edge technology and exceptional service.
          </h1>
        </div>
      </section>
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
