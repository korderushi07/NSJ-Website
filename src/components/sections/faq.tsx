"use client";

import { SectionHeader } from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you provide home renovation services?",
    answer:
      "Yes, we provide complete home renovation services in Nagpur. This includes modular kitchen design, bathroom remodeling, structural modifications, electrical, plumbing, painting, and flooring upgrades.",
  },
  {
    question: "Do you design residential and commercial spaces?",
    answer:
      "Yes, we design both residential spaces (such as bungalows, duplex homes, and apartments) and commercial spaces (including corporate offices, retail showrooms, clinics, and workspaces).",
  },
  {
    question: "Can I hire you only for interior design?",
    answer:
      "Yes, you can hire us exclusively for interior design services. We handle layout planning, custom modular cabinetry, furniture design, color coordination, and material selection.",
  },
  {
    question: "Do you provide 3D design before execution?",
    answer:
      "Yes. We create detailed 3D visualization renders before starting any work on-site. This allows you to review and confirm the space layout, furniture dimensions, colors, and lighting beforehand.",
  },
  {
    question: "Do you work outside Nagpur?",
    answer:
      "Our office is based in Nagpur, and we primarily work on projects here and across the Vidarbha region. For larger residential and commercial projects, we are happy to travel and collaborate across Maharashtra.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 pb-32 md:py-32 md:pb-44 bg-studio-card relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeader
          caption="FAQ"
          title="Common Questions"
          align="center"
          className="mb-12 md:mb-16"
        />

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Bottom curved SVG divider transitioning to Insights bg (#F5F3EF) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-[40px] md:h-[60px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill="#F5F3EF" />
        </svg>
      </div>
    </section>
  );
}
