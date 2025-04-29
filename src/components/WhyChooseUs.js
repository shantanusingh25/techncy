"use client";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
// import { motion } from "motion/react";
import { FiArrowRight } from "react-icons/fi";
import { Inter } from "next/font/google";
import { TracingBeam } from "./ui/tracing-beam";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Cover } from "./ui/cover";
import { LinkPreview } from "./ui/link-preview";

const inter_bold = Inter({ subsets: ["latin"], weight: "800" });
const inter_thin = Inter({ subsets: ["latin"], weight: "400" });

export const WhyChooseUs = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8 rounded-2xl">
      <div className="mx-auto max-w-5xl">
        <h1
          className={`text-3xl md:text-7xl font-bold text-white ${inter_bold.className} relative left-1/2 -translate-x-1/2 z-20 mt-16 mb-20`}
        >
          Why Choose <Cover>Techncy</Cover>
        </h1>
        <TracingBeam>
          <Link
            heading="Affordable Excellence"
            subheading="Premium quality at reasonable pricing"
            imgSrc="https://plus.unsplash.com/premium_photo-1674374442634-70c4cd7864e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVzdHxlbnwwfHwwfHx8MA%3D%3D"
            href="/why/affordable"
            slug="affordable-excellence"
          />
          <Link
            heading="Tailored Solutions"
            subheading="Solutions made to fit your needs"
            imgSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29sdXRpb258ZW58MHx8MHx8fDA%3D"
            href="/why/tailored"
            slug="tailored-solutions"
          />
          <Link
            heading="Unmatched Quality"
            subheading="Delivering industry-leading products"
            imgSrc="https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVhbGl0eXxlbnwwfHwwfHx8MA%3D%3D"
            href="/why/unmatched"
            slug="unmatched-quality"
          />
          <Link
            heading="End-to-End Support"
            subheading="Supporting you at every step"
            imgSrc="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww"
            href="/why/end"
            slug="end-to-end-support"
          />
          <Link
            heading="Fast and Reliable Delivery"
            subheading="Timely delivery without compromise"
            imgSrc="https://plus.unsplash.com/premium_photo-1673371093333-0da9ad6b2e32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzdHxlbnwwfHwwfHx8MA%3D%3D"
            href="/why/fast-reliable-delivery"
            slug="fast-reliable-delivery"
          />
        </TracingBeam>

        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            <Cover>Techncy</Cover> offers premium <LinkPreview url={"https://www.jotform.com/blog/wp-content/uploads/2019/10/how-to-make-a-website-featured-01.png"}>websites</LinkPreview> at budget-friendly prices, delivering  {" "}
            <Highlight className="text-black dark:text-white">
            quality without compromise.
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href, slug }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className={`group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8 `}
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-5xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
