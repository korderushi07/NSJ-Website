import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Compass, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { getProjectSchema } from "@/lib/seo";

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

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | ${project.location}`,
    description: `Case study of NSJ Architects and Designers' ${project.title} project in ${project.location}. Completed in ${project.year}. Scale: ${project.scale}.`,
    alternates: {
      canonical: `/projects/${slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  // Schema generation
  const projectSchema = getProjectSchema({
    title: project.title,
    description: project.description,
    image: `https://nsjstudio.in${project.image}`,
    location: project.location,
    category: project.category,
    slug: slug,
  });

  return (
    <>
      {/* Project Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <Navbar />
      <main className="pt-20 flex-grow bg-studio-bg font-sans">
        
        {/* Banner Section with Large Image */}
        <section className="relative h-[60vh] w-full flex items-end bg-studio-card border-b border-studio-border">
          <div className="absolute inset-0 z-0">
            <Image
              src={project.image}
              alt={`${project.title} — ${project.location}`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-12">
            <Link
              href="/projects"
              className="text-xs uppercase tracking-widest text-studio-body/60 hover:text-studio-accent inline-flex items-center gap-2 mb-6 transition-colors duration-300"
            >
              <ArrowLeft size={12} />
              Back to Portfolio
            </Link>
            
            <span className="text-[10px] uppercase tracking-[0.25em] text-studio-accent font-semibold block mb-2">
              Completed Project
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-light text-studio-heading leading-tight mb-2">
              {project.title}
            </h1>
            <p className="text-xs md:text-sm text-studio-body/70">
              {project.location}
            </p>
          </div>
        </section>

        {/* Narrative & Specification Grid */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif font-light text-studio-heading">
                  Architectural Narrative
                </h2>
                <p className="text-sm md:text-base text-studio-body/80 leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* Material Curation */}
              <div className="pt-8">
                <h3 className="text-lg font-serif text-studio-heading mb-6 border-b border-studio-border pb-2">
                  Material Palette
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.materials.map((material, idx) => (
                    <div key={idx} className="flex items-center text-xs text-studio-body/85 bg-studio-card/30 p-4 border border-studio-border/50">
                      <span className="w-1.5 h-1.5 bg-studio-accent mr-3 rounded-full shrink-0" />
                      {material}
                    </div>
                  ))}
                </div>
              </div>

              {/* System Features */}
              <div className="pt-4">
                <h3 className="text-lg font-serif text-studio-heading mb-6 border-b border-studio-border pb-2">
                  System Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-studio-body/85 bg-studio-card/30 p-4 border border-studio-border/50">
                      <ShieldCheck size={14} className="text-studio-accent mr-3 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Specifications */}
            <div className="lg:col-span-4">
              <div className="border border-studio-border bg-studio-card/30 p-8 space-y-6">
                <h3 className="text-lg font-serif text-studio-heading border-b border-studio-border pb-4">
                  Specifications
                </h3>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-studio-body/50 block">
                      Location
                    </span>
                    <span className="text-xs font-semibold text-studio-heading flex items-center mt-1">
                      <MapPin size={12} className="mr-1 text-studio-accent" />
                      {project.location}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-studio-body/50 block">
                      Year Completed
                    </span>
                    <span className="text-xs font-semibold text-studio-heading flex items-center mt-1">
                      <Calendar size={12} className="mr-1 text-studio-accent" />
                      {project.year}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-studio-body/50 block">
                      Project Scale
                    </span>
                    <span className="text-xs font-semibold text-studio-heading flex items-center mt-1">
                      <Compass size={12} className="mr-1 text-studio-accent" />
                      {project.scale}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-studio-body/50 block">
                      Scope of Works
                    </span>
                    <p className="text-xs text-studio-body/90 mt-2 leading-relaxed bg-studio-bg p-3 border border-studio-border/40">
                      {project.scope}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
