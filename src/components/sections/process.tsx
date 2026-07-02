"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

const steps = [
  {
    num: "01",
    phase: "Consultation",
    duration: "Week 1",
    description:
      "We discuss your design requirements, budget expectations, and vision for the home or office space.",
  },
  {
    num: "02",
    phase: "Site Visit & Measurements",
    duration: "Week 2",
    description:
      "Our team visits the site to take detailed measurements and analyze space conditions for planning.",
  },
  {
    num: "03",
    phase: "Concept Design",
    duration: "Weeks 3-4",
    description:
      "We create initial layout options, furniture placement plans, and space allocation drawings.",
  },
  {
    num: "04",
    phase: "Design Development",
    duration: "Weeks 5-8",
    description:
      "We develop detailed 3D designs, coordinate material lists, and prepare electrical and plumbing plans.",
  },
  {
    num: "05",
    phase: "Execution Support",
    duration: "Ongoing",
    description:
      "We provide site visits and coordination support to help contractors execute the design as planned.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-studio-card relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          caption="Our Process"
          title="How We Work"
          description="A simple step-by-step design process to help you plan, visualize, and execute your project smoothly."
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
