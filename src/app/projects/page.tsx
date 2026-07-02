import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

const allProjects = [
  {
    title: "Residential Villa",
    location: "Ramdaspeth, Nagpur",
    year: "2025",
    category: "Architecture & Interior Design",
    image: "/images/project-villa.png",
    slug: "nagpur-minimalist-villa",
    scope: "Architecture, Landscaping, Custom Furnishings",
    scale: "6,500 sq.ft."
  },
  {
    title: "Commercial Workspace",
    location: "Civil Lines, Nagpur",
    year: "2024",
    category: "Turnkey Interior Design",
    image: "/images/project-office.png",
    slug: "civil-lines-office",
    scope: "Interior Planning, Acoustic Detailing, Custom Desking",
    scale: "12,000 sq.ft."
  }
];

export const metadata: Metadata = {
  title: "Architecture & Interior Design Projects | Selected Works",
  description:
    "Explore NSJ Studio's completed residential design, home renovation, and commercial office interior projects in Nagpur.",
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
              Selected Works
            </h1>
          </div>
        </section>

        {/* Projects Listing Grid */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {allProjects.map((project) => (
              <div key={project.slug} className="group flex flex-col">
                <Link
                  href={`/projects/${project.slug}`}
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
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
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
