import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  scope: string[];
  deliverables: string[];
}

const servicesData: Record<string, ServiceData> = {
  "architecture": {
    title: "Architecture Design",
    subtitle: "Contextual, structural, and sustainable layout planning.",
    description: "NSJ Studio delivers architectural designs optimized for Central India's climate conditions. Our process ensures daylight orientation, passive heating/cooling control via jaali brick venting, structural resilience, and elegant spatial flows.",
    scope: [
      "Site evaluation and sun/wind path modeling",
      "Concept planning and CAD layouts",
      "Structural layout engineering integrations",
      "Nagpur local municipal permissions and filings"
    ],
    deliverables: [
      "Master layout plans & site blueprints",
      "3D volumetric elevation models",
      "Plumbing, electrical, and drainage schemas",
      "NIT / NMC sanction drawings"
    ]
  },
  "interior-design": {
    title: "Interior Design",
    subtitle: "Bespoke spatial design with tactile materials.",
    description: "We create serene interior environments characterized by clean lines, warm lighting profiles, raw material pairing, and highly custom joinery details. We design environments that feel calm, sophisticated, and unified.",
    scope: [
      "Detailed spatial layout and furniture placement planning",
      "Bespoke kitchen, wardrobe, and vanity joinery designs",
      "Luminance Lux calculations and electrical scheduling",
      "Custom surface treatment and veneer selections"
    ],
    deliverables: [
      "Mood boards and material pair palettes",
      "Sectional elevations & joinery shop drawings",
      "Lighting fixture lists and wiring routing blueprints",
      "Loose furniture curation and layout specifications"
    ]
  },
  "residential-architecture": {
    title: "Residential Architecture",
    subtitle: "Creating private residential sanctuaries in Nagpur.",
    description: "Custom residential architecture designed around your family's routine. From high-end duplex villas in Ramdaspeth to modern eco-sensitive farmhouses, we balance contemporary open layouts with traditional central courtyards.",
    scope: [
      "Bespoke single-family villa configurations",
      "Central courtyard and green ventilation designs",
      "Indoor-outdoor transition layout planning",
      "High-end penthouse interior integrations"
    ],
    deliverables: [
      "Civil excavation layout guidelines",
      "3D exterior high-fidelity elevations",
      "Finishing schedules (stone, cladding, glazing)",
      "Smart home integration infrastructure layout"
    ]
  },
  "commercial-spaces": {
    title: "Commercial Workspaces",
    subtitle: "Workspaces that optimize flow and build brand authority.",
    description: "We design high-end corporate headquarters, collaborative co-working layouts, and boutique retail showrooms in Nagpur. Our commercial layouts improve structural utility, maximize workspace daylight, and elevate human comfort.",
    scope: [
      "Corporate office floor planning and zoning",
      "Acoustic shielding and divider solutions",
      "Brand identity material integrations",
      "Boutique gallery and display layout designs"
    ],
    deliverables: [
      "Demountable partition & desk layout blueprints",
      "Acoustic panel selection and layout placements",
      "Lighting, HVAC, and fire-safety system plans",
      "Reception desk details & custom workspace details"
    ]
  },
  "turnkey-execution": {
    title: "Turnkey Execution",
    subtitle: "Seamless design-to-construction management.",
    description: "Our comprehensive turnkey delivery ensures that the design approved on paper matches the physical execution on site. We lead the entire civil construction, material sourcing, labor management, and final styling.",
    scope: [
      "Single-point contract management for site construction",
      "In-house supervision of civil foundation and masonry",
      "Sourcing of raw building materials and finishing stones",
      "Interior fit-out, joinery fabrication, and styling"
    ],
    deliverables: [
      "Comprehensive bill of quantities (BOQ) with fixed costs",
      "Phased construction scheduling (Gantt chart)",
      "On-site supervisor reports & quality check audits",
      "Final keys and occupancy checklist handover"
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} Services`,
    description: service.subtitle,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-20 flex-grow bg-studio-bg min-h-screen font-sans">
        
        {/* Banner Section */}
        <section className="py-20 md:py-28 bg-studio-card border-b border-studio-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Link
              href="/services"
              className="text-xs uppercase tracking-widest text-studio-body/60 hover:text-studio-accent inline-flex items-center gap-2 mb-8 transition-colors duration-300"
            >
              <ArrowLeft size={12} />
              Back to Services
            </Link>
            
            <div className="max-w-4xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-studio-accent font-semibold block mb-3">
                Expertise Discipline
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-light text-studio-heading leading-tight mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-studio-body/80 font-light font-sans leading-relaxed max-w-2xl">
                {service.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Detail Content Section */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Description Column */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-studio-heading">
                Methodology Overview
              </h2>
              <p className="text-sm md:text-base text-studio-body/80 leading-relaxed font-sans">
                {service.description}
              </p>
              
              <div className="pt-8">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Inquire About This Service
                  </Button>
                </Link>
              </div>
            </div>

            {/* Scope / Deliverables List Columns */}
            <div className="lg:col-span-5 space-y-12">
              {/* Scope Area */}
              <div className="border border-studio-border bg-studio-card/30 p-8">
                <h3 className="text-lg font-serif text-studio-heading mb-6">
                  Scope of Engagement
                </h3>
                <ul className="space-y-4">
                  {service.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs text-studio-body/80 leading-relaxed font-sans">
                      <Check size={14} className="text-studio-accent mr-3 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Deliverables */}
              <div className="border border-studio-border bg-studio-card/30 p-8">
                <h3 className="text-lg font-serif text-studio-heading mb-6">
                  Key Technical Deliverables
                </h3>
                <ul className="space-y-4">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs text-studio-body/80 leading-relaxed font-sans">
                      <Check size={14} className="text-studio-accent mr-3 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
