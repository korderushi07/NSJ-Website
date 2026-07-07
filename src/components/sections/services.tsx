"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Landmark, Home, Briefcase, Key, Compass, LayoutGrid, Eye, Leaf, Ruler, ClipboardList } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const services = [
  {
    num: "01",
    title: "Architectural Design",
    description: "Complete architectural design solutions from concept to construction.",
    icon: Compass,
    details: ["Concept Development", "Space Planning", "Working Drawings", "Municipal Submission Drawings"],
    slug: "architectural-design",
  },
  {
    num: "02",
    title: "Interior Design",
    description: "Thoughtfully designed interiors that combine functionality, aesthetics, and comfort.",
    icon: LayoutGrid,
    details: ["Space Planning & Mood Boards", "Material & Finish Selection", "Detailed Working Drawings", "BOQ (Bill of Quantities)"],
    slug: "interior-design",
  },
  {
    num: "03",
    title: "Home Renovation",
    description: "Transform existing buildings into modern, functional, and efficient spaces.",
    icon: Key,
    details: ["Existing Site Assessment", "Demolition Plans & Space Replanning", "Facade Renovation", "Material Recommendations"],
    slug: "home-renovation",
  },
  {
    num: "04",
    title: "Residential Architecture",
    description: "Custom homes, villas, farmhouses, apartments, and bungalows designed around your lifestyle.",
    icon: Home,
    details: ["Personalized Home Planning", "Vastu-Based Planning", "Landscape & Interior Concepts", "Structural Coordination & Site Visits"],
    slug: "residential-architecture",
  },
  {
    num: "05",
    title: "Commercial Architecture",
    description: "Design solutions for offices, retail spaces, showrooms, hotels, restaurants, and mixed-use developments.",
    icon: Briefcase,
    details: ["Functional Space Planning", "Facade & Branding Integration", "Services Coordination", "Construction Support"],
    slug: "commercial-architecture",
  },
  {
    num: "06",
    title: "Institutional & Government Projects",
    description: "Architectural planning and design for institutional and public infrastructure projects.",
    icon: Landmark,
    details: ["Master Planning", "Functional Zoning", "BOQ & Tender Documentation Support", "Site Coordination"],
    slug: "institutional-government-projects",
  },
  {
    num: "07",
    title: "Landscape Design",
    description: "Landscape planning that complements architecture and enhances user experience.",
    icon: Leaf,
    details: ["Landscape Master Plan", "Hardscape & Planting Design", "Water Features & Lighting", "Detailed Landscape Drawings"],
    slug: "landscape-design",
  },
  {
    num: "08",
    title: "Construction Drawings",
    description: "Detailed technical drawings for constructors and developers.",
    icon: Ruler,
    details: ["Detailed Working Drawings", "Schedules & Floor Layouts", "Coordination Drawings", "GFC (Good for Construction) Drawings"],
    slug: "construction-drawings",
  },
  {
    num: "09",
    title: "Architectural Consultancy",
    description: "Professional guidance from project inception to completion.",
    icon: ClipboardList,
    details: ["Project Scheduling", "Site Supervision & Quality Checks", "Material Verification", "Client Reporting & Coordination"],
    slug: "architectural-consultancy",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-studio-card relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          caption="Our Services"
          title="Architecture & Design Services"
          description="We provide professional architecture, interior design, home renovation, planning, and 3D visualization services in Nagpur and surrounding regions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border border-studio-border bg-studio-bg p-8 flex flex-col justify-between hover:border-studio-accent transition-all duration-500 h-full relative"
              >
                <div>
                  {/* Top Line Header in Card */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-sm font-light text-studio-accent">
                      {service.num}
                    </span>
                    <Icon className="w-5 h-5 text-studio-body/40 group-hover:text-studio-accent transition-colors duration-300" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-studio-heading mb-4 group-hover:text-studio-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-studio-body/70 leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  {/* Bullet Spec List */}
                  <ul className="space-y-2 mb-8 border-t border-studio-border/50 pt-4">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-[11px] text-studio-body/60 flex items-center font-sans"
                      >
                        <span className="w-1 h-1 bg-studio-accent/40 rounded-full mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs uppercase tracking-wider text-studio-heading font-semibold inline-flex items-center group-hover:text-studio-accent transition-colors mt-auto font-sans"
                >
                  Learn More
                  <ArrowRight
                    size={12}
                    className="ml-2 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
