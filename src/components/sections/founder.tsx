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
                  src="/images/founder.png"
                  alt="Principal Architect & Founder - NSJ Studio"
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
              caption="Leadership"
              title="Design with intent."
              description="NSJ Studio is steered by a commitment to architectural rigor, spatial economy, and vernacular fusion."
            />
            
            <div className="space-y-6 text-studio-body/80 text-sm md:text-base leading-relaxed font-sans max-w-2xl">
              <p>
                Established with a vision to redefine the architectural landscape of Nagpur, NSJ Studio operates on the principles of honest construction and client alignment. We design spaces that function seamlessly, utilizing the local Maharashtra microclimate to structure passive heating and ventilation solutions.
              </p>
              <p>
                Our lead architect and founder oversees all major project phases—from initial schematic layout sketches to local Nagpur municipal filings, turnkey cost-management audits, and the final structural inspection checklist.
              </p>
              
              {/* Founder Signoff Block */}
              <div className="border-t border-studio-border/60 pt-6 mt-8">
                <span className="font-serif text-lg text-studio-heading block">
                  Lead Architect & Founder
                </span>
                <span className="text-[10px] uppercase tracking-widest text-studio-accent font-semibold block mt-1">
                  NSJ Studio Nagpur
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
