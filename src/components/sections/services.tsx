"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Landmark, Home, Briefcase, Key, Compass, LayoutGrid, Eye } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const services = [
  {
    num: "01",
    title: "Residential Architecture",
    description:
      "Custom architectural planning for bungalow homes, duplexes, and apartments, focusing on functional layouts, ventilation, and natural daylight.",
    icon: Home,
    details: ["Villa & Bungalow Design", "Apartment Layout Planning", "Architectural Blueprints", "Space Optimization"],
    slug: "residential-architecture",
  },
  {
    num: "02",
    title: "Interior Design",
    description:
      "Serene interior solutions tailored to your routine, combining color schemes, lighting layouts, and custom woodwork details.",
    icon: Compass,
    details: ["Residential & Office Interiors", "Modular Kitchen Layouts", "Custom Wardrobes & Joinery", "Lighting & Ceiling Plans"],
    slug: "interior-design",
  },
  {
    num: "03",
    title: "Home Renovation",
    description:
      "Transform existing bungalows and flats into modern living spaces through structural changes, kitchen upgrades, and complete makeovers.",
    icon: Key,
    details: ["Complete Flat Makeovers", "Modular Kitchen Upgrades", "Bathroom Remodeling", "Flooring & Finishing Upgrades"],
    slug: "home-renovation",
  },
  {
    num: "04",
    title: "Commercial & Office Design",
    description:
      "Efficient and professional workspaces designed to improve collaboration, traffic circulation, and workplace productivity.",
    icon: Briefcase,
    details: ["Corporate Workspace Layouts", "Executive Cabins & Desks", "Retail Showroom Interiors", "Conference Room Layouts"],
    slug: "commercial-spaces",
  },
  {
    num: "05",
    title: "Institutional Architecture",
    description:
      "Functional planning and compliance-driven design for public-sector, educational, and institutional buildings.",
    icon: Landmark,
    details: ["Institutional Layouts", "Public Infrastructure Design", "Administrative Buildings", "Space Planning & Zoning"],
    slug: "institutional-architecture",
  },
  {
    num: "06",
    title: "3D Visualization",
    description:
      "High-fidelity 3D renders, walkthroughs, and material preview boards to visualize your home or office before construction starts.",
    icon: Eye,
    details: ["High-Fidelity 3D Renders", "Interior & Exterior Views", "Material & Color Previews", "Virtual Walkthroughs"],
    slug: "3d-visualization",
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
