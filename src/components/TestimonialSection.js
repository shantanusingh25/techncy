"use client";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Inter } from "next/font/google";
import { LinkPreview } from "./ui/link-preview";
import { Cover } from "./ui/cover";

const inter_bold = Inter({ subsets: ["latin"], weight: "800" });
const inter_thin = Inter({ subsets: ["latin"], weight: "400" });

const testimonials = [
  {
    name: "Anuska",
    designation: "Clean MPI",
    quote:
      "Working with the Techncy team was a smooth and rewarding experience. Anuska brought exceptional clarity and organization to our project with her Clean MPI implementation.",
  },
  {
    name: "Abhishek",
    designation: "UI/UX Specialist",
    quote:
      "Abhishek’s UI/UX design elevated our product's interface to the next level. His attention to user flow and detail made the application intuitive and visually stunning.",
  },
  {
    name: "Shikhar Gupta",
    designation: "CMFIP Investment Platform",
    quote:
      "Shikhar played a key role in building the CMFIP investment platform. His strategic thinking and execution turned a complex idea into a robust digital solution.",
  },
  {
    name: "Tanmay Jha",
    designation: "Phishing Detection Model",
    quote:
      "Tanmay developed a powerful phishing detection tool that added a critical security layer to our operations. His work was technically sound and highly impactful.",
  },
  {
    name: "Divya",
    designation: "Lead Backend Developer",
    quote:
      "Divya's backend system design ensured our app handled scale and performance efficiently, without compromising security.",
  },
  {
    name: "Ravi Mehta",
    designation: "CTO at ByteCore",
    quote:
      "Techncy delivered beyond expectations. From planning to deployment, their process was smooth, and the results speak for themselves.",
  },
];

export function TestimonialSection() {
  return (
    <div className="w-full min-h-screen bg-red-300 py-16 px-4">
      <h2 className={`text-5xl font-bold text-center text-gray-400 mb-12 ${inter_bold.className}`}>
        What Our <Cover><LinkPreview url={"https://plus.unsplash.com/premium_photo-1661768507909-f961fcff0d45?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xpZW50fGVufDB8fDB8fHww"}>Clients</LinkPreview></Cover> Clients Say
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <CardSpotlight key={index} className="w-[28rem] h-[22rem] p-6 rounded-2xl">
            <p className={`text-xl relative z-20 ${inter_thin.className}`}>
              {testimonial.quote}
            </p>
            <div className="mt-6 relative z-20">
              <p className={`${inter_bold.className} text-blue-400 font-semibold text-md`}>{testimonial.name}</p>
              <p className={`${inter_bold.className} text-sm text-gray-300 `}>{testimonial.designation}</p>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
}
