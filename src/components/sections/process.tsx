"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

const steps = [
  {
    num: "01",
    phase: "Understand",
    duration: "Phase 1",
    description:
      "Understanding the client, site, requirements, and vision.",
  },
  {
    num: "02",
    phase: "Explore",
    duration: "Phase 2",
    description:
      "Developing ideas, layouts, and design possibilities.",
  },
  {
    num: "03",
    phase: "Design",
    duration: "Phase 3",
    description:
      "Refining the selected direction through detailed planning and visualization.",
  },
  {
    num: "04",
    phase: "Develop",
    duration: "Phase 4",
    description:
      "Preparing drawings, materials, and technical details.",
  },
  {
    num: "05",
    phase: "Support",
    duration: "Phase 5",
    description:
      "Providing coordination and design support through project execution.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-studio-card relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          caption="Our Process"
          title="How We Work"
          description="A structured workflow to design and support your project from initial concept to execution."
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
