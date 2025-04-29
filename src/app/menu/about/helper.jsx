"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiInstagram, SiGlobus } from "react-icons/si";
import { Link } from "lucide-react";

export const RevealBento = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50 rounded-2xl mb-2">
      {/* <Logo /> */}
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=Techncy"
      alt="Techncy logo"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Welcome to Techncy.{" "}
      <span className="text-zinc-400">
        We craft modern, fast, and elegant websites for businesses.
      </span>
    </h1>
  </Block>
);

const SocialsBlock = () => (
    <>
      <Block className="col-span-6 md:col-span-3 bg-indigo-500 text-white text-center">
        <div>
          <h3 className="mb-12 text-xl font-medium leading-tight">Web Design</h3>
          <p className="mb-12 text-xl font-medium leading-tight">Modern & responsive UI</p>
        </div>
      </Block>
      <Block className="col-span-6 md:col-span-3 bg-purple-500 text-white text-center">
        <div>
          <h3 className="mb-12 text-xl font-medium leading-tight">SEO Optimization</h3>
          <p className="mb-12 text-xl font-medium leading-tight">Rank higher, faster</p>
        </div>
      </Block>
      <Block className="col-span-6 md:col-span-3 bg-emerald-600 text-white text-center">
        <div>
          <h3 className="mb-12 text-xl font-medium leading-tight">E-commerce</h3>
          <p className="mb-12 text-xl font-medium leading-tight">Sell products online easily</p>
        </div>
      </Block>
      <Block className="col-span-6 md:col-span-3 bg-yellow-500 text-black text-center">
        <div>
          <h3 className="mb-12 text-xl font-medium leading-tight">Branding</h3>
          <p className="mb-12 text-xl font-medium leading-tight">Make your identity shine</p>
        </div>
      </Block>
    </>
  );
  

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      At Techncy, we’re passionate about digital transformation.{" "}
      <span className="text-zinc-400">
        Whether you're a startup or an established business, we help you stand
        out online through fast, responsive, and elegant web solutions using the
        latest in React, Next.js, Tailwind, and Framer Motion.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">India • Remote</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Stay updated with our work</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Your business email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Subscribe
      </button>
    </form>
  </Block>
);
