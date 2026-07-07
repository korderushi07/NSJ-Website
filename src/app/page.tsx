import { getLocalBusinessSchema } from "@/lib/seo";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Introduction } from "@/components/sections/introduction";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Process } from "@/components/sections/process";
import { Founder } from "@/components/sections/founder";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Insights } from "@/components/sections/insights";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  const businessSchema = getLocalBusinessSchema();

  return (
    <>
      {/* Local Business Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      {/* Main Page Layout */}
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Introduction />
        <Projects />
        <Services />
        <Founder />
        <Testimonials />
        <Insights />
        <Process />
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
