'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export const RevealLinks = () => {
  return (
    <section className="h-screen grid place-content-center gap-2 bg-green-300 px-8 py-24 text-black rounded-2xl">
      <FlipLink href="/">Techncy</FlipLink>
      <div className="mt-10"></div>
      <FlipLink href="/menu/about">About</FlipLink>
      <FlipLink href="/menu/pricing">Pricing</FlipLink>
      <FlipLink href="/menu/projec">Project_Idea</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault(); // Prevent full page reload
    router.push(href);  // Trigger client-side navigation
  };

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      onClick={handleClick}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{ lineHeight: 1 }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-110%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={`top-${i}`}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "110%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={`bottom-${i}`}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
