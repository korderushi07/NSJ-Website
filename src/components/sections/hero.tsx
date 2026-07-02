"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-studio-bg">
      {/* Background Image with optimized Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Premium Architecture Nagpur - NSJ Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-75 transform scale-100 transition-transform duration-[10s] ease-out hover:scale-105"
        />
        {/* Editorial dark radial/linear gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-studio-bg/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-studio-bg/80 via-transparent to-transparent z-10 hidden md:block" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-studio-accent mb-4 block"
          >
            Nagpur, India
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-sans font-extrabold text-studio-heading leading-[1.1] mb-6 tracking-tight uppercase max-w-5xl"
          >
            EXPERIENCE ENDURING SPACES WITH NSJ STUDIO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-xl text-studio-body/90 leading-relaxed mb-10 max-w-3xl font-serif font-light italic"
          >
            Designing structures and interiors that stand the test of time, pairing modernist forms with Central India&apos;s climate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/projects">
              <Button
                variant="primary"
                size="lg"
                className="group rounded-full bg-white text-studio-bg hover:bg-white/90 border-0 px-8 py-4 font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                Explore Our Commissions
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 text-studio-bg" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer hidden md:flex"
        onClick={() => {
          document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.25em] text-studio-body mb-2">Scroll</span>
        <div className="w-[1px] h-10 bg-studio-body/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-studio-accent animate-bounce" />
        </div>
      </motion.div>

      {/* Bottom curved SVG divider dipping down into the light section */}
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
