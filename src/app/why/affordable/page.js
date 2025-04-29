import React from "react";
import { Inter } from "next/font/google";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Cover } from "@/components/ui/cover"; // Assuming Cover is a styled wrapper
import { LinkPreview } from "@/components/ui/link-preview"; // Assuming you're using this for enhanced link styling
import Navbar from "@/app/why/Navbar";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const inter_thin = Inter({ subsets: ["latin"], weight: "400" });

export default function Page() {
  return (
    <div>
          <Navbar></Navbar>
      <TracingBeam>
        <section
          className={`mx-auto max-w-7xl px-4 py-12 text-slate-800 ${inter.className}`}
          >
            
          <div>
            <h2 className="max-w-4xl text-4xl font-bold md:text-5xl">
              <span
                className={`text-3xl font-semibold ${inter_thin.className} text-justify mt-20`}
              >
                Techncy <Cover>Affordable Solutions</Cover>
              </span>
            </h2>
          </div>

          <div className="text-center mt-10">
            <h1
              className={`text-2xl font-semibold ${inter_thin.className} text-justify mt-20`}
            >
              At Techncy, we believe that{" "}
              <Cover>
                <LinkPreview
                  url={
                    "https://plus.unsplash.com/premium_vector-1731367068054-21912e01402a?w=800&auto=format&fit=crop&q=60"
                  }
                >
                  affordability should never compromise quality
                </LinkPreview>
              </Cover>{" "}
              — no confusing packages or hidden fees. We build solutions that
              respect your budget while exceeding expectations.

              <br />
              <br />
              Whether you&apos;re a startup or a large-scale company, we craft
              tailored strategies to deliver{" "}
              <Cover>
                <LinkPreview
                  url={
                    "https://plus.unsplash.com/premium_vector-1682308884503-1aca36c07cfe?w=800&auto=format&fit=crop&q=60"
                  }
                >
                  high-performing, scalable products
                </LinkPreview>
              </Cover>{" "}
              without unnecessary costs.

              <br />
              <br />
              From{" "}
              <Cover>
                <LinkPreview
                  url={
                    "https://images.unsplash.com/file-1719664968387-83d5a3f4d758image?w=416&dpr=2&auto=format&fit=crop&q=60"
                  }
                >
                  modern website development
                </LinkPreview>
              </Cover>{" "}
              and{" "}
              <Cover>
                <LinkPreview
                  url={
                    "https://plus.unsplash.com/premium_vector-1720102933713-e3ad74c8b32c?w=800&auto=format&fit=crop&q=60"
                  }
                >
                  intuitive app design
                </LinkPreview>
              </Cover>{" "}
              to{" "}
              <Cover>
                <LinkPreview
                  url={
                    "https://plus.unsplash.com/premium_vector-1714618885375-9e236df01ad1?w=800&auto=format&fit=crop&q=60"
                  }
                >
                  SEO, security, and deployment
                </LinkPreview>
              </Cover>
              — we&apos;re here to grow your digital presence with precision.

              <br />
              <br />
              You&apos;re not just investing in code — you&apos;re investing in growth,
              design, and reliability. Let’s build your vision without breaking the bank.
            </h1>
          </div>

          <img src="https://plus.unsplash.com/premium_vector-1682311030575-37edb18c8de9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHF1YWxpdHl8ZW58MHx8MHx8fDA%3D" alt="" className="rounded-2xl mt-10" />
        </section>

      </TracingBeam>
    </div>
  );
}
