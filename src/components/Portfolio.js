"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Inter } from "next/font/google";
import { TracingBeam } from "./ui/tracing-beam";

const inter_bold = Inter({ subsets: ["latin"], weight: "800" });
const inter_thin = Inter({ subsets: ["latin"], weight: "400" });

const PortfolioSection = () => {
  return (
    <div className="bg-red-300 rounded-2xl flex ">
        <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-indigo-600 rounded-2xl"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-2xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default PortfolioSection;

const cards = [
  {
    url: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3J5cHRvfGVufDB8fDB8fHww",
    title: "CMFIP",
    id: 1,
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1663091635973-dd5b3bb9f442?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhpc2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "StealthPhiser",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "E-Commerce",
    id: 3,
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1699387204388-120141c76d51?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "HealthCare",
    id: 4,
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Blog",
    id: 5,
  },
];
