import React from "react";
import { Inter } from "next/font/google";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Cover } from "@/components/ui/cover";
import { LinkPreview } from "@/components/ui/link-preview";
import Navbar from "@/app/why/Navbar";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const inter_thin = Inter({ subsets: ["latin"], weight: "400" });

export default function Page() {
  return (
    <div>
      <Navbar />

      <TracingBeam>
        {/* Customly Tailored Section */}
        <section
          className={`mx-auto max-w-7xl px-4 py-12 text-slate-800 ${inter.className}`}
          id="customly-tailored"
        >
          <div>
            <h2 className="max-w-4xl text-4xl font-bold md:text-5xl">
              <span
                className={`text-3xl font-semibold ${inter_thin.className} text-justify mt-20`}
              >
                Techncy <Cover>Customly Tailored Solutions</Cover>
              </span>
            </h2>
          </div>

          <div className="text-center mt-10">
            <h1
              className={`text-2xl font-semibold ${inter_thin.className} text-justify mt-20`}
            >
              At Techncy, we understand that every business is unique — and so
              are its needs. That&apos;s why we offer{" "}
              <Cover>
                <LinkPreview url="https://images.unsplash.com/photo-1573164574472-797cdf4a5839?w=800&auto=format&fit=crop&q=60">
                  customly tailored solutions
                </LinkPreview>
              </Cover>{" "}
              built specifically around your goals, challenges, and brand identity.

              <br />
              <br />
              Whether you&apos;re a startup with a bold vision or a growing enterprise
              refining your digital strategy, we take the time to learn about your
              business so we can design experiences that truly fit.

              <br />
              <br />
              From{" "}
              <Cover>
                <LinkPreview url="https://plus.unsplash.com/premium_vector-1720102966013-9289b19a7b84?w=800&auto=format&fit=crop&q=60">
                  user-centric design
                </LinkPreview>
              </Cover>{" "}
              to{" "}
              <Cover>
                <LinkPreview url="https://plus.unsplash.com/premium_vector-1719664968387-83d5a3f4d758image?w=800&auto=format&fit=crop&q=60">
                  scalable architecture
                </LinkPreview>
              </Cover>
              , our approach adapts to your specific requirements — not the other way around.

              <br />
              <br />
              We don&apos;t believe in one-size-fits-all. We build products that are as
              unique as your business, ensuring better performance, deeper user
              engagement, and long-term satisfaction.

              <br />
              <br />
              With Techncy, expect a partner that listens, adapts, and delivers —
              because your success deserves more than a template.
            </h1>
          </div>

          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop&q=60"
            alt="Customly Tailored"
            className="rounded-2xl mt-10"
          />
        </section>
      </TracingBeam>
    </div>
  );
}
