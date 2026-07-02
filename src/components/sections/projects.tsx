"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Residential Villa",
    location: "Ramdaspeth, Nagpur",
    year: "2025",
    category: "Architecture & Interior Design",
    image: "/images/project-villa.png",
    slug: "nagpur-minimalist-villa",
    gridClass: "md:col-span-7",
  },
  {
    title: "Commercial Workspace",
    location: "Civil Lines, Nagpur",
    year: "2024",
    category: "Turnkey Interior Design",
    image: "/images/project-office.png",
    slug: "civil-lines-office",
    gridClass: "md:col-span-5",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-studio-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Header Row with Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            caption="Portfolio"
            title="Selected architectural commissions."
            description="A curated view of our recent spaces completed in Nagpur, exhibiting our focus on honest materials and spatial integrity."
            className="mb-0!"
          />
          <Link href="/projects" className="mt-6 md:mt-0">
            <Button variant="secondary">View All Projects</Button>
          </Link>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`${project.gridClass} group flex flex-col`}
            >
              <Link href={`/projects/${project.slug}`} className="relative block overflow-hidden aspect-[4/3] border border-studio-border">
                {/* Image */}
                <Image
                  src={project.image}
                  alt={`${project.title} | ${project.location}`}
                  fill
                  sizes="(max-w-768px) 100vw, 600px"
                  className="object-cover object-center transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-studio-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-studio-accent bg-studio-bg flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight className="text-studio-accent w-5 h-5" />
                  </div>
                </div>
              </Link>

              {/* Text Info */}
              <div className="mt-6 flex justify-between items-start font-sans">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-studio-accent font-semibold">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-studio-heading mt-2 group-hover:text-studio-accent transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-studio-body/60 mt-1">
                    {project.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-serif text-sm font-light text-studio-body/50">
                    {project.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
