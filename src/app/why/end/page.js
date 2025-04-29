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
        {/* End-to-End Support Section */}
        <section
          className={`mx-auto max-w-7xl px-4 py-12 text-slate-800 ${inter.className}`}
          id="end-to-end-support" // Add an ID for the anchor link in the navbar
        >
          <div>
            <h2 className="max-w-4xl text-4xl font-bold md:text-5xl">
              <span
                className={`text-3xl font-semibold ${inter_thin.className} text-justify mt-20`}
              >
                Techncy <Cover>End-to-End Support</Cover>
              </span>
            </h2>
          </div>

          <div className="text-center mt-10">
            <h1
              className={`text-2xl font-semibold ${inter_thin.className} text-justify mt-20`}
            >
              At Techncy, we pride ourselves on offering{" "}
              <Cover>
                <LinkPreview
                  url={
                    "https://plus.unsplash.com/premium_vector-1714618885375-9e236df01ad1?w=800&auto=format&fit=crop&q=60"
                  }
                >
                  end-to-end support
                </LinkPreview>
              </Cover>{" "}
              throughout your entire project lifecycle. From the initial concept to the final deployment, we&apos;re with you every step of the way.

              <br />
              <br />
              Whether you&apos;re designing a new website, developing a custom application, or optimizing existing systems, our team is dedicated to providing continuous support and guidance. Our commitment is to ensure that your project stays on track, meets deadlines, and exceeds expectations.

              <br />
              <br />
              We go beyond just building and delivering a product. With{" "}
              <Cover>
                <LinkPreview
                  url={
                    "https://plus.unsplash.com/premium_vector-1720102933713-e3ad74c8b32c?w=800&auto=format&fit=crop&q=60"
                  }
                >
                  ongoing maintenance
                </LinkPreview>
              </Cover>{" "}
              and{" "}
              <Cover>
                <LinkPreview
                  url={
                    "https://images.unsplash.com/photo-1602542455914-c1ac9cf27690?w=800&auto=format&fit=crop&q=60"
                  }
                >
                  personalized customer service
                </LinkPreview>
              </Cover>
              , we ensure that your website, app, or system runs smoothly long after launch.

              <br />
              <br />
              We believe in building strong, lasting relationships with our clients. Our support doesn’t end with the final product; it continues with reliable assistance and problem-solving whenever you need it.

              <br />
              <br />
              With Techncy&apos;s end-to-end support, you&apos;re not just getting a product — you&apos;re getting a long-term partner committed to your success.
            </h1>
          </div>

          {/* Add a relevant image for the "End-to-End Support" section */}
          <img 
            src="https://plus.unsplash.com/premium_vector-1683141200177-9575262876f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D"
            alt="End-to-End Support"
            className="rounded-2xl mt-10"
          />
        </section>
      </TracingBeam>
    </div>
  );
}
