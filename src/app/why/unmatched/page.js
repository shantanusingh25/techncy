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
        {/* Unmatched Performance Section */}
        <section
          className={`mx-auto max-w-7xl px-4 py-12 text-slate-800 ${inter.className}`}
          id="unmatched-performance"
        >
          <div>
            <h2 className="max-w-4xl text-4xl font-bold md:text-5xl">
              <span
                className={`text-3xl font-semibold ${inter_thin.className} text-justify mt-20`}
              >
                Techncy <Cover>Unmatched Performance</Cover>
              </span>
            </h2>
          </div>

          <div className="text-center mt-10">
            <h1
              className={`text-2xl font-semibold ${inter_thin.className} text-justify mt-20`}
            >
              Speed matters. So does stability. At Techncy, we deliver{" "}
              <Cover>
                <LinkPreview url="https://images.unsplash.com/photo-1605902711622-cfb43c44367f?w=800&auto=format&fit=crop&q=60">
                  blazing-fast websites
                </LinkPreview>
              </Cover>{" "}
              and apps built to withstand scale — without sacrificing user experience.

              <br />
              <br />
              Our solutions are optimized for{" "}
              <Cover>
                <LinkPreview url="https://plus.unsplash.com/premium_vector-1682308884503-1aca36c07cfe?w=800&auto=format&fit=crop&q=60">
                  real-world performance
                </LinkPreview>
              </Cover>
              , tested under pressure, and fine-tuned to ensure users get what they need in milliseconds.

              <br />
              <br />
              We go beyond aesthetics — our development process focuses on{" "}
              <Cover>
                <LinkPreview url="https://images.unsplash.com/photo-1673284255674-62fce3cf6a59?w=800&auto=format&fit=crop&q=60">
                  lighthouse scores, Core Web Vitals, and SEO impact
                </LinkPreview>
              </Cover>{" "}
              to guarantee visibility, conversion, and retention.

              <br />
              <br />
              Whether it's handling thousands of users or powering mission-critical platforms, you can trust Techncy for consistent, unmatched performance — every single time.
            </h1>
          </div>

          <img
            src="https://plus.unsplash.com/premium_vector-1682303102478-205a13e17265?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcmZvcm1hbmNlfGVufDB8fDB8fHww"
            alt="Unmatched Performance"
            className="rounded-2xl mt-10"
          />
        </section>
      </TracingBeam>
    </div>
  );
}
