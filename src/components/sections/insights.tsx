"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const insights = [
  {
    date: "July 05, 2026",
    readTime: "5 min read",
    title: "Things to Consider Before Renovating Your Home",
    excerpt:
      "A practical guide to planning a renovation, covering budget allocation, structural checkups, space utilization, and material timelines.",
    image: "/images/insight-1.png",
    slug: "things-to-consider-before-renovating-home",
  },
  {
    date: "June 20, 2026",
    readTime: "4 min read",
    title: "How Good Space Planning Improves Everyday Living",
    excerpt:
      "Exploring how layout optimization, circulation paths, and natural light enhance the functionality and comfort of modern homes.",
    image: "/images/insight-2.png",
    slug: "how-good-space-planning-improves-living",
  },
  {
    date: "May 25, 2026",
    readTime: "6 min read",
    title: "Architecture vs Interior Design: Understanding the Difference",
    excerpt:
      "Understanding how architects and interior designers work together, and how their roles overlap to shape your built environment.",
    image: "/images/insight-3.png",
    slug: "architecture-vs-interior-design-difference",
  },
  {
    date: "May 05, 2026",
    readTime: "7 min read",
    title: "Planning a Home Renovation in Nagpur",
    excerpt:
      "Important local considerations for home renovations in Nagpur, including climate adaptability, local material sourcing, and contractor coordination.",
    image: "/images/insight-4.png",
    slug: "planning-home-renovation-nagpur",
  },
];

export function Insights() {
  return (
    <section id="insights" className="py-24 pb-32 md:py-32 md:pb-44 bg-[#F5F3EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          caption="Blog"
          title="Design Insights"
          description="Practical ideas, space planning guidance, and renovation tips for home and business owners."
          theme="light"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {insights.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.04)] border border-black/[0.01] flex flex-col justify-between hover:-translate-y-1 transition-all duration-500 group h-full relative overflow-hidden"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Top rectangular cover image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-w-768px) 100vw, 300px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  <div className="p-6">
                    {/* Article Title */}
                    <h3 className="font-sans font-bold text-base md:text-[17px] text-studio-bg leading-snug tracking-tight mb-2 group-hover:text-studio-accent transition-colors duration-300">
                      <Link href={`/insights/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-sans">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                {/* Metadata & Action */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-50 mt-4">
                  <div className="flex flex-col text-[9px] uppercase tracking-wider text-stone-500 font-sans">
                    <span>{item.date}</span>
                    <span className="text-stone-400 font-light mt-0.5">{item.readTime}</span>
                  </div>

                  <Link
                    href={`/insights/${item.slug}`}
                    className="text-[10px] uppercase tracking-wider text-studio-bg font-bold inline-flex items-center group-hover:text-studio-accent transition-colors duration-300 font-sans"
                  >
                    Read Essay
                    <ArrowUpRight
                      size={11}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom curved SVG divider transitioning to Contact bg (#0B0B0C) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-[40px] md:h-[60px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill="#0B0B0C" />
        </svg>
      </div>
    </section>
  );
}
