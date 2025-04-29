import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { Cover } from "./ui/cover";
import { TracingBeam } from "./ui/tracing-beam";
import { LinkPreview } from "./ui/link-preview";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const inter_thin = Inter({ subsets: ["latin"], weight: "400" });

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.98, rotate: "-0.5deg" }}
      className={`relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl  p-8  ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3
      className={`text-3xl font-semibold ${inter_thin.className} text-justify`}
    >
      {children}
    </h3>
  );
};

// Server Action for form submission
// export async function submitPricingForm(formData) {
// //   "use server";
//   try {
//     const data = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       projectDescription: formData.get("projectDescription"),
//       budget: parseFloat(formData.get("budget")),
//       remarks: formData.get("remarks"),
//       meetingDate: formData.get("meetingDate"),
//     };

//     // Simulate API call or database operation
//     console.log("Form submitted:", data);
//     // Example: await db.pricingRequests.insert(data);

//     return { success: true, message: "Form submitted successfully!" };
//   } catch (error) {
//     console.error("Form submission error:", error);
//     return { success: false, message: "Failed to submit form. Please try again." };
//   }
// }

export default function PricingForm() {
  return (
    <TracingBeam>
      <section
        className={`mx-auto max-w-7xl px-4 py-12 text-slate-800 ${inter.className}`}
      >
        <div className="mt-12">
          <BounceCard className="mx-auto max-w-3xl">
            <div className="relative rounded-xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-pulse shadow-xl">
              <div className="bg-white dark:bg-black rounded-xl p-6">
                <CardTitle>
                  Let’s build something <Cover>great together</Cover>
                </CardTitle>

                <form className="mt-6 flex flex-col gap-4">
                  <LinkPreview
                    url={
                      "https://plus.unsplash.com/premium_vector-1682299231845-e2ba854a2673?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmFtZXxlbnwwfHwwfHx8MA%3D%3D"
                    }
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className={`w-full rounded-lg border border-slate-300 p-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 ${inter.className}`}
                      required
                    />
                  </LinkPreview>
                  <LinkPreview
                    url={
                      "https://plus.unsplash.com/premium_vector-1710931444701-6db760ea5e36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW1haWx8ZW58MHx8MHx8fDA%3D"
                    }
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className={`w-full rounded-lg border border-slate-300 p-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 ${inter.className}`}
                      required
                    />
                  </LinkPreview>
                  <LinkPreview
                    url={
                      "https://plus.unsplash.com/premium_vector-1682298867759-1ce4ec74e5eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D"
                    }
                  >
                    <textarea
                      name="projectDescription"
                      placeholder="Describe Your Project"
                      rows="4"
                      className={`w-full rounded-lg border border-slate-300 p-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 ${inter.className}`}
                      required
                    />
                  </LinkPreview>
                  <LinkPreview
                    url={
                      "https://images.unsplash.com/vector-1738330595132-98fcf73e3c19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9uZXl8ZW58MHx8MHx8fDA%3D"
                    }
                  >
                    <input
                      type="number"
                      name="budget"
                      placeholder="Your Budget "
                      className={`w-full rounded-lg border border-slate-300 p-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 ${inter.className}`}
                      required
                    />
                  </LinkPreview>
                  <LinkPreview
                    url={
                      "https://plus.unsplash.com/premium_vector-1733055737714-152f40490759?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVtYXJrc3xlbnwwfHwwfHx8MA%3D%3D"
                    }
                  >
                    <textarea
                      name="remarks"
                      placeholder="Additional Remarks"
                      rows="3"
                      className={`w-full rounded-lg border border-slate-300 p-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 ${inter.className}`}
                    />
                  </LinkPreview>
                  <LinkPreview
                    url={
                      "https://plus.unsplash.com/premium_vector-1727956884969-a85ed8314cc0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRhdGV8ZW58MHx8MHx8fDA%3D"
                    }
                  >
                    <input
                      type="date"
                      name="meetingDate"
                      className={`w-full rounded-lg border border-slate-300 p-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 ${inter.className}`}
                      required
                      placeholder="Meeting Date"
                    />
                  </LinkPreview>
                  <LinkPreview
                    url={
                      "https://plus.unsplash.com/premium_vector-1745014048463-f41a707dbdf6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VibWl0fGVufDB8fDB8fHww"
                    }
                  >
                    <button
                      type="submit"
                      className="mt-4 w-full rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 p-3 text-white font-semibold hover:bg-gradient-to-l transition-all duration-300"
                    >
                      Submit Request
                    </button>
                  </LinkPreview>
                </form>
              </div>
            </div>
          </BounceCard>
        </div>
      </section>
    </TracingBeam>
  );
}
