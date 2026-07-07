"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

export function Introduction() {
  return (
    <section id="intro" className="py-24 pb-32 md:py-32 md:pb-44 bg-[#F5F3EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionHeader
              caption="About Us"
              title="About NSJ Architects and Designers"
              theme="light"
            />
            
            <div className="space-y-6 text-stone-700 text-sm md:text-base leading-relaxed font-sans max-w-xl">
              <p className="text-base md:text-lg font-serif italic text-studio-bg font-light border-l-2 border-studio-accent/70 pl-4 py-1">
                Thoughtful. Timeless. Innovative.
              </p>
              <p>
                NSJ stands for &ldquo;Next Space Junction&rdquo; — representing the intersection of imagination, design, and purpose. We are an emerging Nagpur-based architecture and design practice focused on creating meaningful, functional, and lasting spaces.
              </p>
              <p>
                Every project begins by understanding the client's story, site, and purpose. We combine creativity, technical knowledge, thoughtful planning, and attention to detail to design residential architecture, commercial offices, and interior environments tailored to our clients' needs.
              </p>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] w-full max-w-md mx-auto"
            >
              {/* Bronze outline frame background */}
              <div className="absolute -inset-3 border border-studio-accent/30 z-0 translate-x-1 translate-y-1" />
              
              <div className="relative w-full h-full overflow-hidden z-10 border border-stone-300">
                <Image
                  src="/images/intro.png"
                  alt="Architectural Material Textures - NSJ Architects and Designers"
                  fill
                  sizes="(max-w-768px) 100vw, 400px"
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom curved SVG divider transitioning to Services bg (#141416) */}
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
