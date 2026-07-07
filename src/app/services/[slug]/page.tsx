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
  "architectural-design": {
    title: "Architectural Design",
    subtitle: "Complete architectural design solutions from concept to construction.",
    description: "We provide comprehensive architectural planning and design. From site analysis and initial client requirements to working drawings, structural coordination, and site support.",
    scope: [
      "Site Analysis & Feasibility Studies",
      "Concept Development & Space Planning",
      "Structural & Services Coordination",
      "Municipal Submission Drawings"
    ],
    deliverables: [
      "Floor plans, elevations, and sections",
      "3D concept renderings",
      "Municipal submission blueprints",
      "Detailed working drawing sets"
    ]
  },
  "interior-design": {
    title: "Interior Design",
    subtitle: "Thoughtfully designed interiors that combine functionality, aesthetics, and comfort.",
    description: "Serene interior environments designed for residential, commercial, and hospitality clients. We focus on custom carpentry, color coordination, lighting optimization, and material selection.",
    scope: [
      "Space Planning & Furniture Layout",
      "Material & Finish Selection",
      "False Ceiling & Lighting Design",
      "Detailed Interior Working Drawings"
    ],
    deliverables: [
      "Concept mood boards & materials palette",
      "Custom wardrobe, kitchen & woodwork drawings",
      "Electrical layout & lighting plans",
      "Detailed Bill of Quantities (BOQ)"
    ]
  },
  "home-renovation": {
    title: "Home Renovation",
    subtitle: "Transform existing buildings into modern, functional, and efficient spaces.",
    description: "Complete renovation planning to modernize your home or office space. We check structural conditions, re-plan interior layout utility, specify upgrades, and supervise execution drawings.",
    scope: [
      "Existing Site Condition Assessment",
      "Structural layouts & demolition planning",
      "Space re-zoning and interior upgrades",
      "Facade modernization & renovations"
    ],
    deliverables: [
      "Demolition & construction layouts",
      "Upgraded interior & flooring blueprints",
      "Facade elevation drawings",
      "Material specifications & recommendations"
    ]
  },
  "residential-architecture": {
    title: "Residential Architecture",
    subtitle: "Custom homes, villas, farmhouses, apartments, and bungalows designed around your lifestyle.",
    description: "Personalized residential planning tailored around your routine, site landscape, and requirements. We integrate traditional planning guidelines (Vastu) with modern spatial requirements.",
    scope: [
      "Personalized family spatial planning",
      "Vastu-based layout optimization",
      "Landscape concept & garden styling",
      "Structural & services engineering coordination"
    ],
    deliverables: [
      "Custom floor layouts & plans",
      "3D elevation & exterior renderings",
      "Site visits & compliance monitoring",
      "GFC construction drawing sets"
    ]
  },
  "commercial-architecture": {
    title: "Commercial Architecture",
    subtitle: "Design solutions for offices, retail spaces, showrooms, hotels, and restaurants.",
    description: "Strategic commercial design that improves layout efficiency, branding representation, customer circulation paths, and work environment productivity.",
    scope: [
      "Commercial space planning & circulation",
      "Facade styling & branding integration",
      "MEP and services engineering coordination",
      "Office & retail layout planning"
    ],
    deliverables: [
      "Zoned workstation & desk layout plans",
      "Exterior facade detailing & elevation views",
      "Detailed MEP coordination drawings",
      "Site coordination & construction support"
    ]
  },
  "institutional-government-projects": {
    title: "Institutional & Government Projects",
    subtitle: "Planning and design for institutional, educational, and public infrastructure projects.",
    description: "Drawing from Ar. Nikita Jumle's extensive experience with public infrastructure (Panchayat Samiti buildings, District Courts, PWD Rest Houses), we deliver compliant plans.",
    scope: [
      "Master planning and public sector zoning",
      "Functional occupancy layouts",
      "Regulatory and security standard compliance",
      "Tender and documentation support"
    ],
    deliverables: [
      "Detailed zoning and master plans",
      "Sanction-ready submission drawings",
      "Tender detail support documents",
      "Bill of Quantities (BOQ) verification reports"
    ]
  },
  "landscape-design": {
    title: "Landscape Design",
    subtitle: "Landscape planning that complements architecture and enhances user experience.",
    description: "Cohesive landscape design to harmonize open environments with building architecture. We plan hardscapes, planting, water features, and lighting for optimal outdoor living.",
    scope: [
      "Site layout & outdoor zoning",
      "Planting schemes & species selection",
      "Hardscape styling & path mapping",
      "Lighting & irrigation system coordination"
    ],
    deliverables: [
      "Landscape master layout plan",
      "Planting plans & plant schedules",
      "Outdoor lighting & electrical layouts",
      "Hardscape construction detail drawings"
    ]
  },
  "construction-drawings": {
    title: "Construction Drawings",
    subtitle: "Detailed technical drawings for contractors, developers, and consultants.",
    description: "We produce highly accurate construction drawings (GFC) to prevent on-site calculation errors, coordinate disciplines, and simplify structural execution.",
    scope: [
      "Architectural working drawing detailing",
      "Door & window hardware scheduling",
      "Staircase, toilet, and kitchen service details",
      "Flooring layout & false ceiling plans"
    ],
    deliverables: [
      "GFC (Good for Construction) drawing sets",
      "Detailed blow-up schedules",
      "Service coordination layout plans",
      "Material and quantity lists"
    ]
  },
  "architectural-consultancy": {
    title: "Architectural Consultancy",
    subtitle: "Professional guidance from project inception to completion.",
    description: "Consultancy services to guarantee design quality, supervise schedule execution, verify material grades on-site, and coordinate specialist consultants.",
    scope: [
      "Project progress scheduling",
      "On-site quality supervision & checks",
      "Material specification verification",
      "Inter-disciplinary consultant coordination"
    ],
    deliverables: [
      "Site audit and supervision reports",
      "Consultant coordination updates",
      "Quality check validation lists",
      "Progress and scheduling charts"
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
