"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

export function Founder() {
  return (
    <section id="founder" className="py-24 pb-32 md:py-32 md:pb-44 bg-studio-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Founder Portrait Image */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] w-full max-w-sm mx-auto"
            >
              {/* Subtle accent border */}
              <div className="absolute -inset-3 border border-studio-accent/20 z-0 translate-x-1 translate-y-1" />
              
              <div className="relative w-full h-full overflow-hidden z-10 border border-studio-border">
                <Image
                  src="/images/founder.jpg"
                  alt="Principal Architect & Founder - Ar. Nikita Sandesh Jumle"
                  fill
                  sizes="(max-w-768px) 100vw, 350px"
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Manifesto and Details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionHeader
              caption="Our Team"
              title="Meet the Architect"
              description="Every project at NSJ Architects and Designers is personally guided by Ar. Nikita Sandesh Jumle to create functional, thoughtful, and compliant spaces."
            />
            
            <div className="space-y-6 text-studio-body/80 text-sm md:text-base leading-relaxed font-sans max-w-2xl">
              <p>
                Ar. Nikita Sandesh Jumle is the founder and lead architect of NSJ Architects and Designers. Sourcing inspiration from her artistic background, she combines creative spatial vision with rigorous technical planning. She graduated as a Top 10 Rank Holder with a Bachelor of Architecture from Smt. Manoramabai Mundle College of Architecture, RTM Nagpur University (Batch of 2025).
              </p>
              <p>
                Her diverse professional background spans residential, commercial, and institutional projects, including contributions to government infrastructure such as Panchayat Samiti buildings, District Courts, and PWD Rest Houses. Certified in Autodesk Revit Architecture (BIM), she utilizes detailed digital modeling to ensure structural precision and services coordination across all project phases.
              </p>
              
              {/* Founder Signoff Block */}
              <div className="border-t border-studio-border/60 pt-6 mt-8">
                <span className="font-serif text-lg text-studio-heading block">
                  Ar. Nikita Sandesh Jumle
                </span>
                <span className="text-[10px] uppercase tracking-widest text-studio-accent font-semibold block mt-1">
                  Founder & Principal Architect, NSJ Architects and Designers
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom curved SVG divider transitioning to Testimonials bg (#F5F3EF) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-[40px] md:h-[60px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill="#F5F3EF" />
        </svg>
      </div>
    </section>
  );
}
