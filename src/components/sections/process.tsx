"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

const steps = [
  {
    num: "01",
    phase: "Consultation",
    duration: "Week 1",
    description:
      "We begin with a thorough briefing. We analyze your site parameters in Nagpur, clarify space requirements, discuss budget projections, and outline primary project goals.",
  },
  {
    num: "02",
    phase: "Concept Design",
    duration: "Weeks 2-4",
    description:
      "We generate structural zoning options, spatial layouts, bubble diagrams, and hand-sketched visions to outline the primary architectural forms and flow.",
  },
  {
    num: "03",
    phase: "Schematic Design",
    duration: "Weeks 5-8",
    description:
      "We transition into CAD layouts. We establish exact building dimensions, elevations, 3D renderings, material pairings, and local municipal compliance files.",
  },
  {
    num: "04",
    phase: "Design Development",
    duration: "Weeks 9-12",
    description:
      "We prepare complete working drawings. This stage coordinates plumbing, electrical, and structural systems, plus bespoke interior joinery drawings.",
  },
  {
    num: "05",
    phase: "Site Execution",
    duration: "Ongoing",
    description:
      "For standard architecture, we run routine site quality audits. For turnkey contracts, our in-house civil teams construct and install everything through to key handover.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-studio-card relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          caption="Methodology"
          title="Our structured design process."
          description="A systematic phase-by-phase framework ensuring that your project transitions seamlessly from initial brief to final construction."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-16 md:mt-24">
          
          {/* Vertical central bar (absolute line) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-studio-border z-0 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.num}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Timeline indicator node */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-studio-accent rounded-full border-4 border-studio-card z-10 -translate-x-[5.5px] md:-translate-x-1.5 top-2" />

                  {/* Left Column (Phase index & title) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 text-left md:text-right flex flex-col items-start md:items-end justify-start">
                    <span className="font-serif text-sm font-light text-studio-accent tracking-widest block mb-1">
                      PHASE {step.num}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-studio-heading mb-1">
                      {step.phase}
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest text-studio-body/40 font-mono font-semibold">
                      {step.duration}
                    </span>
                  </div>

                  {/* Right Column (Phase Description) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-12 md:pr-0 mt-3 md:mt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="border border-studio-border bg-studio-bg p-6 md:p-8"
                    >
                      <p className="text-xs md:text-sm text-studio-body/80 leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
