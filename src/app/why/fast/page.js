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
        {/* Fast & Secure Websites Section */}
        <section
          className={`mx-auto max-w-7xl px-4 py-12 text-slate-800 ${inter.className}`}
          id="fast-secure"  // Add an ID for the anchor link in the navbar
        >
          <div>
            <h2 className="max-w-4xl text-4xl font-bold md:text-5xl">
              <span
                className={`text-3xl font-semibold ${inter_thin.className} text-justify mt-20`}
              >
                Techncy <Cover>Fast & Secure Websites</Cover>
              </span>
            </h2>
          </div>

          <div className="text-center mt-10">
            <h1
              className={`text-2xl font-semibold ${inter_thin.className} text-justify mt-20`}
            >
              At Techncy, we understand the importance of speed and security in today&apos;s digital landscape. Our{" "}
              <Cover>
                <LinkPreview
                  url={
                    "https://images.unsplash.com/photo-1512099542635-67f8dcb9cd6e?w=800&auto=format&fit=crop&q=60"
                  }
                >
                  fast websites
                </LinkPreview>
              </Cover>{" "}
              are optimized to load quickly, ensuring that your customers have a seamless experience, whether they&apos;re accessing your site on a desktop or mobile device.

              <br />
              <br />
              Security is our top priority. We integrate{" "}
              <Cover>
                <LinkPreview
                  url={
                    "https://plus.unsplash.com/premium_vector-1714618885375-9e236df01ad1?w=800&auto=format&fit=crop&q=60"
                  }
                >
                  cutting-edge security protocols
                </LinkPreview>
              </Cover>{" "}
              to protect your data and users, making sure your website is always safeguarded from threats.

              <br />
              <br />
              With our fast and secure solutions, you can be sure that your website will perform flawlessly while keeping your visitors&apos; information safe. Whether you&apos;re running a small blog or a large e-commerce platform, we provide tailored strategies to optimize both speed and security.

              <br />
              <br />
              Don&apos;t let slow loading times or security breaches impact your business. Let&apos;s build a website that&apos;s not only fast but also bulletproof.
            </h1>
          </div>

          {/* Add a relevant image for the "Fast & Secure" section */}
          <img 
            src="https://plus.unsplash.com/premium_vector-1719855003886-b75b9f8ce709?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzdHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Fast and Secure Websites"
            className="rounded-2xl mt-10"
          />
        </section>
      </TracingBeam>
    </div>
  );
}
