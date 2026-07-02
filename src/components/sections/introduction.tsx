"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

export function Introduction() {
  return (
    <section id="intro" className="py-24 md:py-32 bg-studio-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionHeader
              caption="Studio Introduction"
              title="Honest materials. Timeless forms. Masterful light."
            />
            
            <div className="space-y-6 text-studio-body/80 text-sm md:text-base leading-relaxed font-sans max-w-xl">
              <p>
                NSJ Studio is Nagpur’s premier architecture and interior design practice. We operate on the boundary where contemporary minimalism converges with traditional Indian craftsmanship. Every volume we outline is tailored to its local microclimate, using regional elements like vernacular jaali brick facades, central courtyards, and tactile local stone.
              </p>
              <p>
                Our philosophy prioritizes the purity of construction. We believe architecture shouldn&apos;t compete with its surroundings, nor should the UI of a building mask its structure. We design residences that serve as serene sanctuaries and commercial spaces that invite focus and productivity.
              </p>
              <p className="border-l border-studio-accent/40 pl-4 py-1 text-studio-heading italic font-serif">
                &ldquo;We do not build to follow trends. We cultivate architectural spaces that will remain as relevant, resilient, and elegant a decade from now as they are today.&rdquo;
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
              <div className="absolute -inset-3 border border-studio-accent/20 z-0 translate-x-1 translate-y-1" />
              
              <div className="relative w-full h-full overflow-hidden z-10 border border-studio-border">
                <Image
                  src="/images/intro.png"
                  alt="Architectural Material Textures - NSJ Studio"
                  fill
                  sizes="(max-w-768px) 100vw, 400px"
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
