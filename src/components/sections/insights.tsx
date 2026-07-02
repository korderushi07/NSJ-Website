"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const insights = [
  {
    date: "June 28, 2026",
    readTime: "5 min read",
    title: "Selecting climate-conscious materials for Central India.",
    excerpt:
      "An analysis of thermal mass properties of locally sourced stone, clay brick jaalis, and lime plasters in tempering Nagpur's dry summer heat.",
    slug: "timeless-materials-nagpur",
  },
  {
    date: "May 14, 2026",
    readTime: "4 min read",
    title: "The role of natural light in luxury residential design.",
    excerpt:
      "How central courtyards, skylights, and deep overhangs act as architectural instruments to direct changing daylight throughout the day.",
    slug: "minimalist-lighting-design",
  },
  {
    date: "April 02, 2026",
    readTime: "7 min read",
    title: "Understanding turnkey delivery in private residential builds.",
    excerpt:
      "Demystifying the design-build project model. How centralizing design and structural teams under one agency prevents cost overruns.",
    slug: "importance-of-turnkey",
  },
];

export function Insights() {
  return (
    <section id="insights" className="py-24 md:py-32 bg-studio-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          caption="Journal"
          title="Insights on architecture and design."
          description="Read our essays on construction methodology, materials research, and layout planning in Nagpur."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {insights.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-studio-border bg-studio-card/35 p-8 flex flex-col justify-between hover:border-studio-accent transition-all duration-500 group h-full relative"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-studio-body/50 mb-6 font-sans">
                  <span>{item.date}</span>
                  <span className="w-1.5 h-1.5 bg-studio-border rounded-full" />
                  <span>{item.readTime}</span>
                </div>

                {/* Article Title */}
                <h3 className="font-serif text-xl md:text-2xl text-studio-heading leading-tight mb-4 group-hover:text-studio-accent transition-colors duration-300">
                  <Link href={`/insights/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs md:text-sm text-studio-body/70 leading-relaxed mb-8 font-sans">
                  {item.excerpt}
                </p>
              </div>

              {/* Action Link */}
              <Link
                href={`/insights/${item.slug}`}
                className="text-xs uppercase tracking-wider text-studio-heading font-semibold inline-flex items-center group-hover:text-studio-accent transition-colors duration-300 font-sans mt-auto"
              >
                Read Essay
                <ArrowUpRight
                  size={12}
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
