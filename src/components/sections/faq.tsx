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
    question: "What architecture and design services does NSJ provide?",
    answer:
      "NSJ Architects and Designers offers a complete range of services including residential architecture, interior design, home renovation, commercial & office design, institutional architecture, and 3D visualization.",
  },
  {
    question: "Do you undertake home and flat renovation projects?",
    answer:
      "Yes, we undertake home renovation and flat makeover projects in Nagpur. We handle space planning, modular kitchen design, bathroom remodeling, structural modifications, and material selections.",
  },
  {
    question: "Do you provide interior design services in Nagpur?",
    answer:
      "Yes, we provide professional interior design services for homes and offices in Nagpur. We focus on optimizing layouts, electrical and lighting plans, modular cabinetry, and matching materials to your functional needs.",
  },
  {
    question: "Can I approach NSJ for only design and planning services?",
    answer:
      "Yes. You can engage NSJ Architects and Designers solely for layout planning, architectural drawings, 3D visualization, or municipal sanction maps, without committing to construction supervision.",
  },
  {
    question: "Do you provide 3D visualizations before project execution?",
    answer:
      "Yes, we provide high-fidelity 3D visualizations and renders. This allows clients to preview and adjust material finishes, paint colors, furniture layouts, and lighting schemes before construction begins.",
  },
  {
    question: "Which locations does NSJ Architects and Designers serve?",
    answer:
      "We are based in Nagpur, Maharashtra, and primarily serve clients in Nagpur and the Vidarbha region. We also undertake residential, commercial, and institutional projects across Maharashtra and are planning a long-term expansion across India.",
  },
  {
    question: "How can I schedule an initial consultation?",
    answer:
      "You can easily schedule a consultation by visiting our Contact page and filling out the inquiry form, or by emailing us at inquire@nsjstudio.in. We will get back to you to discuss your project requirements.",
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

      {/* Bottom curved SVG divider transitioning to Footer bg (#0B0B0C) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-[40px] md:h-[60px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill="#0B0B0C" />
        </svg>
      </div>
    </section>
  );
}
