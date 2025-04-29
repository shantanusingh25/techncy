"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { useFormStatus } from 'react-dom';
import { Cover } from "@/components/ui/cover";
import { toast } from "sonner";
import { submitProjectInquiry } from "./serveraction";
import { LinkPreview } from "@/components/ui/link-preview";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const inter_thin = Inter({ subsets: ["latin"], weight: "200" });

// Server action - this should be imported from a separate file in production


// Submit button with loading state
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type="submit"
      disabled={pending}
      className="w-full bg-slate-800 text-white py-4 rounded-xl font-medium text-lg hover:bg-slate-700 transition-colors disabled:bg-slate-400"
    >
      {pending ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </div>
      ) : "Submit Inquiry"}
    </motion.button>
  );
}

export default function PricingForm() {
  const [formState, setFormState] = useState({
    success: false,
    error: null
  });

  // Client action to handle form submission
  async function clientAction(formData) {
    setFormState({ success: false, error: null });
    const result = await submitProjectInquiry(formData);
    
    if (result.error) {
      setFormState({ success: false, error: result.error });
      toast.error(result.error);
    } else if (result.success) {
      setFormState({ success: true, error: null });
      toast.success("Your inquiry has been submitted successfully!");
      document.getElementById("inquiryForm").reset();
    }
  }

  return (
    <section className={`mx-auto max-w-3xl px-4 py-12 text-slate-800 ${inter.className}`}>
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className={`text-3xl font-semibold ${inter_thin.className} mb-8`}>
          Get Your <Cover>Custom Quote</Cover>
        </h2>
        
        <form id="inquiryForm" action={clientAction}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Project Name *</label>
              <LinkPreview url={"https://plus.unsplash.com/premium_vector-1683141147347-c6aa70127df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D"}><input
                type="text"
                name="projectName"
                required
                className="w-full border border-slate-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
                placeholder="E.g. Company Website Redesign"
              />
              </LinkPreview>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Your Name *</label>
              <LinkPreview url={"https://plus.unsplash.com/premium_vector-1731919749485-ea33b0373c98?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmFtZXxlbnwwfHwwfHx8MA%3D%3D"}><input
                type="text"
                name="name"
                required
                className="w-full border border-slate-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
                placeholder="Full Name"
              />
              </LinkPreview>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
              <LinkPreview url={"https://plus.unsplash.com/premium_vector-1722152545149-4cca662de6cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFpbHxlbnwwfHwwfHx8MA%3D%3D"}><input
                type="email"
                name="email"
                required
                className="w-full border border-slate-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
                placeholder="email@example.com"
              />
              </LinkPreview>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Budget Range *</label>
              <select
                name="budget"
                required
                className="w-full border bg-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-slate-500 transition appearance-none bg-no-repeat bg-[right_1rem_center]"
                style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23475569%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')" }}
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under ₹5,000</option>
                <option value="5k-10k">₹5,000 - ₹10,000</option>
                <option value="10k-20k">₹10,000 - ₹20,000</option>
                <option value="20k-50k">₹20,000 - ₹50,000</option>
                <option value="over-50k">Over ₹50,000</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Meeting Preference *</label>
              <select
                name="meetingType"
                required
                className="w-full border bg-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-slate-500 transition appearance-none bg-no-repeat bg-[right_1rem_center]"
                style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23475569%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')" }}
              >
                <option value="">Select meeting type</option>
                <option value="video">Video Call</option>
                <option value="phone">Phone Call</option>
              </select>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Meeting Date *</label>
              <LinkPreview url={"https://plus.unsplash.com/premium_vector-1731484096838-c84a0469206d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhdGV8ZW58MHx8MHx8fDA%3D"}><input
                type="date"
                name="meetingDate"
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full border border-slate-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
              /></LinkPreview>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Additional Remarks</label>
              <LinkPreview url={"https://plus.unsplash.com/premium_vector-1736172992086-dd2ba562b351?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlbWFya3N8ZW58MHx8MHx8fDA%3D"}><textarea
                name="remarks"
                rows="4"
                className="w-full border border-slate-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
                placeholder="Tell us more about your project requirements..."
              ></textarea></LinkPreview>
            </div>
          </div>
          
          <div className="mt-8">
            <SubmitButton />
          </div>
          
          {formState.success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-50 text-green-800 rounded-lg"
            >
              Thank you for your inquiry! We'll get back to you shortly.
            </motion.div>
          )}
          
          {formState.error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-50 text-red-800 rounded-lg"
            >
              {formState.error}
            </motion.div>
          )}
        </form>
        
        <div className="mt-8 text-center text-sm text-slate-500">
          By submitting this form, you agree to our <span className="underline cursor-pointer">Privacy Policy</span> and <span className="underline cursor-pointer">Terms of Service</span>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h3 className={`text-xl font-medium ${inter.className}`}>Need immediate assistance?</h3>
        <p className="mt-2 text-slate-600">
          Contact us directly at <span className="text-slate-800 font-medium">contact@techncy.com</span> or call <span className="text-slate-800 font-medium">+91 9792182280</span>
        </p>
      </div>
    </section>
  );
}