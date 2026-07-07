import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

interface ProjectDetail {
  title: string;
  location: string;
  year: string;
  category: string;
  image: string;
  scale: string;
  scope: string;
  description: string;
  materials: string[];
  features: string[];
}

const projectsData: Record<string, ProjectDetail> = {
  "nagpur-minimalist-villa": {
    title: "Residential Villa Concept",
    location: "Nagpur, Maharashtra",
    year: "2025",
    category: "Concept Design & Visualization",
    image: "/images/project-villa.png",
    scale: "6,500 sq.ft.",
    scope: "Architectural Planning, Courtyard Optimization, 3D Rendering",
    description:
      "A residential concept designed for Nagpur's hot climate. The plan features a central courtyard driving hot air upwards through ventilators, utilizing local basalt stone and brick screens to temper the summer heat.",
    materials: [
      "Local Basalt Stone",
      "Clay Brick Jaali Screens",
      "Teakwood Joinery",
      "Lime Plaster Walls"
    ],
    features: [
      "Central cooling courtyard",
      "Passive solar layout",
      "Modular kitchen layout",
      "Terrace garden space"
    ]
  },
  "civil-lines-office": {
    title: "Commercial Workspace",
    location: "Nagpur, Maharashtra",
    year: "2024",
    category: "Interior Design & Space Planning",
    image: "/images/project-office.png",
    scale: "12,000 sq.ft.",
    scope: "Space Optimization, Workstation Layouts, Lighting Design",
    description:
      "A collaborative corporate office design optimized for daylighting and space utility. The layout features open workstations, custom timber screens for privacy, and integrated planter units to improve indoor quality.",
    materials: [
      "Polished Concrete Flooring",
      "Acoustic Partition Panels",
      "Teakwood Partition Screens",
      "Brushed Aluminum Details"
    ],
    features: [
      "Optimized workstation layouts",
      "Natural daylight harvesting",
      "Custom administrative desks",
      "Indoor planters for air quality"
    ]
  }
};

export const metadata: Metadata = {
  title: "Architecture & Interior Design Projects | Selected Works",
  description:
    "Explore the detailed case studies and design explorations by NSJ Architects and Designers in Nagpur.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 flex-grow bg-studio-bg font-sans">
        
        {/* Banner Section */}
        <section className="py-20 bg-studio-card border-b border-studio-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-studio-accent font-semibold block mb-3">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-light text-studio-heading leading-tight">
              Selected Projects & Design Explorations
            </h1>
          </div>
        </section>

        {/* Projects Listing Grid */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {Object.entries(projectsData).map(([slug, project]) => (
              <div key={slug} className="group flex flex-col">
                <Link
                  href={`/projects/${slug}`}
                  className="relative block overflow-hidden aspect-[4/3] border border-studio-border"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} | ${project.location}`}
                    fill
                    sizes="(max-w-768px) 100vw, 600px"
                    className="object-cover object-center transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  
                  <div className="absolute inset-0 bg-studio-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-studio-accent bg-studio-bg flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight className="text-studio-accent w-5 h-5" />
                    </div>
                  </div>
                </Link>

                <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-studio-border/30 pb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-studio-accent font-semibold">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-2xl text-studio-heading mt-2 group-hover:text-studio-accent transition-colors duration-300">
                      <Link href={`/projects/${slug}`}>{project.title}</Link>
                    </h3>
                    <p className="text-xs text-studio-body/60 mt-1">{project.location}</p>
                  </div>
                  
                  <div className="text-left md:text-right mt-4 md:mt-0 font-sans text-xs text-studio-body/50 space-y-1">
                    <div>Scale: {project.scale}</div>
                    <div>Year: {project.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
