"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Landmark, Home, Briefcase, Key, Compass } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const services = [
  {
    num: "01",
    title: "Architecture",
    description:
      "Comprehensive architectural planning, structural detailing, and site layouts. We design landmark forms that respect local site context, solar paths, and natural wind drafts.",
    icon: Landmark,
    details: ["Site Analysis & Zoning", "Concept & Structural Planning", "3D Visualization", "Liaison & Approvals"],
    slug: "architecture",
  },
  {
    num: "02",
    title: "Interior Design",
    description:
      "Bespoke interior architecture, material scheduling, and custom furniture curation. We create highly detailed, sensory spaces with muted tones and premium finishes.",
    icon: Compass,
    details: ["Space Planning & Layouts", "Bespoke Joinery & Details", "Lighting & Acoustic Design", "Material & FF&E Curation"],
    slug: "interior-design",
  },
  {
    num: "03",
    title: "Residential Architecture",
    description:
      "High-end private villas, multi-family residences, and penthouses. Designed as personal sanctuaries that reflect Nagpur's regional aesthetics and modern comfort.",
    icon: Home,
    details: ["Luxury Duplex Villas", "Modern Farmhouses", "Premium Penthouse Layouts", "Renovation & Extensions"],
    slug: "residential-architecture",
  },
  {
    num: "04",
    title: "Commercial Workspaces",
    description:
      "Premium corporate offices, collaborative workspaces, and retail showrooms. Designed to optimize workflow, build brand trust, and improve team well-being.",
    icon: Briefcase,
    details: ["Corporate Headquarters", "Co-working Layouts", "Boutique Retail Galleries", "Hospitality Interiors"],
    slug: "commercial-spaces",
  },
  {
    num: "05",
    title: "Turnkey Execution",
    description:
      "Seamless design-build services. We manage the entire project life cycle—from blueprint generation and civil excavation to custom detailing and final handover.",
    icon: Key,
    details: ["End-to-End Project Management", "Civil & Structural Execution", "Quality Audits & Cost Control", "Final Styling & Handover"],
    slug: "turnkey-execution",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-studio-card relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          caption="Expertise"
          title="Architectural disciplines shaped around luxury."
          description="We deliver a unified process from initial sketch to final furniture installation, ensuring structural integrity and refined spatial flow."
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
                  <h3 className="text-xl md:text-2xl font-serif font-light text-studio-heading mb-4 group-hover:text-studio-accent transition-colors duration-300">
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
