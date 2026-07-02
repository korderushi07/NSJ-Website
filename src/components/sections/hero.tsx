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
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <div className="max-w-3xl">
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
            className="text-4xl sm:text-5xl md:text-7xl font-serif font-light text-studio-heading leading-[1.1] mb-6"
          >
            Designing spaces that <span className="italic font-normal">endure</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-lg text-studio-body/80 leading-relaxed mb-8 max-w-xl font-sans"
          >
            NSJ Studio is an architectural practice specializing in luxury residential, commercial workplace, and turnkey delivery. We balance modern minimalist forms with rich natural textures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/projects">
              <Button variant="primary" size="lg" className="group w-full sm:w-auto flex items-center justify-center gap-2">
                Explore Projects
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Book Consultation
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer hidden md:flex"
        onClick={() => {
          document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.25em] text-studio-body mb-2">Scroll</span>
        <div className="w-[1px] h-10 bg-studio-body/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-studio-accent animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
