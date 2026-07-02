import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

const allInsights = [
  {
    date: "June 28, 2026",
    readTime: "5 min read",
    title: "Selecting climate-conscious materials for Central India.",
    excerpt:
      "An analysis of thermal mass properties of locally sourced stone, clay brick jaalis, and lime plasters in tempering Nagpur's dry summer heat.",
    slug: "timeless-materials-nagpur",
    category: "Materials Science"
  },
  {
    date: "May 14, 2026",
    readTime: "4 min read",
    title: "The role of natural light in luxury residential design.",
    excerpt:
      "How central courtyards, skylights, and deep overhangs act as architectural instruments to direct changing daylight throughout the day.",
    slug: "minimalist-lighting-design",
    category: "Daylight Systems"
  },
  {
    date: "April 02, 2026",
    readTime: "7 min read",
    title: "Understanding turnkey delivery in private residential builds.",
    excerpt:
      "Demystifying the design-build project model. How centralizing design and structural teams under one agency prevents cost overruns.",
    slug: "importance-of-turnkey",
    category: "Execution"
  },
];

export const metadata: Metadata = {
  title: "Insights & Design Journal",
  description:
    "Explore NSJ Studio's essays on architectural design principles, climate-responsive structures, local stone sourcing, and construction execution in Nagpur.",
  alternates: {
    canonical: "/insights",
  },
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 flex-grow bg-studio-bg font-sans">
        
        {/* Banner Section */}
        <section className="py-20 bg-studio-card border-b border-studio-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-studio-accent font-semibold block mb-3">
              Journal
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-light text-studio-heading leading-tight">
              Insights & Essays
            </h1>
          </div>
        </section>

        {/* List Section */}
        <section className="py-24 max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {allInsights.map((insight) => (
              <article key={insight.slug} className="group border-b border-studio-border/40 pb-12 flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-between">
                
                {/* Meta details */}
                <div className="w-full md:w-48 shrink-0 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-2 text-[10px] uppercase tracking-widest text-studio-body/50">
                  <span>{insight.date}</span>
                  <span className="md:hidden">•</span>
                  <span>{insight.readTime}</span>
                  <span className="hidden md:inline border border-studio-border px-2 py-0.5 mt-2 rounded-sm text-[8px] text-studio-accent font-semibold">
                    {insight.category}
                  </span>
                </div>

                {/* Content info */}
                <div className="flex-1 space-y-4">
                  <h2 className="font-serif text-2xl md:text-3xl text-studio-heading leading-tight group-hover:text-studio-accent transition-colors duration-300">
                    <Link href={`/insights/${insight.slug}`}>
                      {insight.title}
                    </Link>
                  </h2>
                  
                  <p className="text-sm text-studio-body/75 leading-relaxed">
                    {insight.excerpt}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/insights/${insight.slug}`}
                      className="text-xs uppercase tracking-wider text-studio-heading font-semibold inline-flex items-center group-hover:text-studio-accent transition-colors duration-300"
                    >
                      Read Essay
                      <ArrowUpRight size={12} className="ml-2" />
                    </Link>
                  </div>
                </div>

              </article>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
