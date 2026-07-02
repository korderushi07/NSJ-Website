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
    question: "What service areas does NSJ Studio cover?",
    answer:
      "NSJ Studio is based in Nagpur and primarily services commissions within the city and surrounding Vidarbha region. We are fully equipped to handle projects both remotely and through site-visit intervals across Maharashtra depending on the scale.",
  },
  {
    question: "How long does a typical architectural design phase take?",
    answer:
      "A standard residential or commercial design phase ranges between 8 to 16 weeks. This includes the initial conceptual zoning, schematic design layout drafts, 3D visualizations, material schedules, and working blueprints ready for site mobilization.",
  },
  {
    question: "What is the difference between standard architecture and turnkey execution?",
    answer:
      "Standard architectural services include layout planning, blueprint preparation, and structural audits during construction. Turnkey execution is a design-build model where NSJ Studio manages everything: structural excavation, material sourcing, on-site labor coordination, interior fit-outs, and quality controls under one contract.",
  },
  {
    question: "Does NSJ Studio assist with local building sanctions and municipal approvals in Nagpur?",
    answer:
      "Yes. We coordinate the submission plans, liaison documentation, and required drawings for approvals from the Nagpur Municipal Corporation (NMC), Nagpur Improvement Trust (NIT), and other local regulatory authorites as part of our schematic design phase.",
  },
  {
    question: "How do we initiate a project consultation?",
    answer:
      "You can submit an inquiry through our contact form or book a consultation online. We schedule a brief call to align on your site size, structural requirements, budget limits, and project schedule before organizing an in-person meeting at our studio.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-studio-card relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          caption="Information"
          title="Frequently asked questions."
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
    </section>
  );
}
