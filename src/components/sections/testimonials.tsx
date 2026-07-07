"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const testimonials = [
  {
    quote:
      "Leveraging advanced Autodesk Revit (BIM) workflows to create precise digital models, ensuring seamless coordination of all architectural, structural, and service layouts before construction begins.",
    clientName: "Technical Precision",
    location: "Autodesk Revit Architecture (BIM)",
    avatar: "/images/avatar-1.png",
  },
  {
    quote:
      "Bringing planning standards from public sector and government projects—including District Courts and Panchayat Samiti buildings—to ensure structural compliance and quality across all work.",
    clientName: "Compliance & Rigor",
    location: "Residential, Commercial & Institutional",
    avatar: "/images/avatar-2.png",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 pb-32 md:py-32 md:pb-44 bg-[#F5F3EF] relative overflow-hidden"
    >
      {/* Large Translucent Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="text-[14vw] font-sans font-black text-black/[0.02] tracking-[0.25em] whitespace-nowrap">
          NSJ
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Content & Pagination arrows */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[220px]">
            <div>
              <SectionHeader
                caption="Our Approach"
                title="Professional Standards & Experience"
                theme="light"
                className="mb-6!"
              />
              <p className="text-stone-600 text-sm md:text-base leading-relaxed font-sans max-w-md">
                Discover how we combine advanced technical tools, public-sector experience, and client-focused planning to deliver reliable design solutions.
              </p>
            </div>

            {/* Micro-interactive Pagination arrows */}
            <div className="flex items-center space-x-4 mt-8 lg:mt-12">
              <button
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-stone-700 hover:bg-white hover:text-studio-accent hover:border-studio-accent transition-all duration-300 group"
              >
                <ChevronLeft size={18} className="transform group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-stone-700 hover:bg-white hover:text-studio-accent hover:border-studio-accent transition-all duration-300 group"
              >
                <ChevronRight size={18} className="transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Client Quote Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="bg-white p-8 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-black/[0.02] flex flex-col justify-between hover:shadow-[0_10px_45px_rgba(0,0,0,0.04)] transition-all duration-500 group"
              >
                {/* Quote (Serif) */}
                <p className="font-serif text-base md:text-lg italic font-light text-stone-800 leading-relaxed mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Client Info Row */}
                <div className="flex items-center space-x-4 border-t border-stone-100 pt-6">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-stone-200 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.clientName}
                      fill
                      sizes="44px"
                      className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <span className="font-sans font-bold text-stone-900 text-sm block">
                      {item.clientName}
                    </span>
                    <span className="font-sans text-[11px] text-stone-500 tracking-wide block mt-0.5">
                      {item.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom curved SVG divider transitioning to FAQ bg (#141416) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-[40px] md:h-[60px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill="#141416" />
        </svg>
      </div>
    </section>
  );
}
