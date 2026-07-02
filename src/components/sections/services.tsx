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
      "Custom architectural planning for bungalows, duplex villas, and apartments. We design functional layouts optimized for ventilation, space utility, and natural daylight.",
    icon: Home,
    details: ["Villa & Bungalow Design", "Apartment Layout Planning", "Architectural Blueprints", "Nagpur Municipal Approvals"],
    slug: "residential-architecture",
  },
  {
    num: "02",
    title: "Interior Design",
    description:
      "Elegant interior design solutions tailored to your daily routine. We coordinate color schemes, customized wood layouts, material selections, and lighting plans.",
    icon: Compass,
    details: ["Living Room & Bedroom Interiors", "Modular Kitchen Layouts", "Custom Wardrobes & Joinery", "Lighting & Ceiling Layouts"],
    slug: "interior-design",
  },
  {
    num: "03",
    title: "Home Renovation",
    description:
      "Transform your current property into a modern living space. We undertake structural modifications, bathroom remodeling, kitchen upgrades, and complete flat makeovers.",
    icon: Key,
    details: ["Complete Flat Makeovers", "Modular Kitchen Upgrades", "Bathroom Remodeling", "Flooring & Painting Work"],
    slug: "home-renovation",
  },
  {
    num: "04",
    title: "Office Interior Design",
    description:
      "Efficient and professional workspaces designed to improve collaboration and productivity. We design layout options for cabins, workstations, and reception desks.",
    icon: Briefcase,
    details: ["Corporate Workstation Layouts", "Executive Cabins & Reception", "Conference Room Layouts", "Retail Showroom Interiors"],
    slug: "commercial-spaces",
  },
  {
    num: "05",
    title: "Space Planning",
    description:
      "Smart zoning maps and flow plans that maximize the functionality of every square foot in your residential apartment or commercial office.",
    icon: LayoutGrid,
    details: ["Floor Plan Optimization", "Furniture Placement Plans", "Smart Storage Curation", "Zoning & Circulation Analysis"],
    slug: "space-planning",
  },
  {
    num: "06",
    title: "3D Design & Visualization",
    description:
      "Visualize your home or office before the actual construction begins. We offer high-fidelity 3D renders, walkthroughs, and material preview boards.",
    icon: Eye,
    details: ["High-Fidelity 3D Renders", "Interior & Exterior 3D Views", "Material & Color Previews", "Virtual Walkthroughs"],
    slug: "3d-visualization",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-studio-card relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          caption="Our Services"
          title="Our Architecture & Interior Design Services"
          description="From residential architecture to complete home and office renovations, we design spaces that reflect your lifestyle, business and vision."
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
