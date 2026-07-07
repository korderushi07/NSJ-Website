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
  "residential-architecture": {
    title: "Residential Architecture",
    subtitle: "Custom architectural planning for villas, duplexes, and bungalows in Nagpur.",
    description: "NSJ Architects and Designers designs custom residential spaces tailored around your family's routine. We prioritize open layouts, natural light integration, and climate-conscious cross-ventilation solutions.",
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
    subtitle: "Custom spatial design with natural materials and thoughtful planning.",
    description: "We design serene interior environments characterized by clean lines, functional layouts, natural materials, and custom woodwork details. We create residential and workspace interiors that balance utility and style.",
    scope: [
      "Detailed spatial layout and furniture placement planning",
      "Custom kitchen, wardrobe, and vanity carpentry designs",
      "Lighting calculations and electrical scheduling",
      "Custom surface treatment and veneer selections"
    ],
    deliverables: [
      "Mood boards and material palettes",
      "Sectional elevations & custom woodwork drawings",
      "Lighting fixture lists and wiring routing blueprints",
      "Loose furniture layouts and specifications"
    ]
  },
  "home-renovation": {
    title: "Home Renovation",
    subtitle: "Complete home and flat makeover services.",
    description: "Transform your current property into a highly functional, modern home. We handle everything from structural checkups and wall removal to modern modular kitchens, bathroom upgrades, premium flooring, and complete painting.",
    scope: [
      "Structural checks and layout modifications",
      "Modular kitchen planning and installation",
      "Bathroom layout planning and plumbing updates",
      "Flooring, wall treatments, and complete painting"
    ],
    deliverables: [
      "Before & after layout plans",
      "Material specifications (flooring, tiles, paint)",
      "Electrical layout and lighting plans",
      "Custom woodwork & modular utility details"
    ]
  },
  "commercial-spaces": {
    title: "Commercial & Office Design",
    subtitle: "Workspaces that optimize flow and improve workplace productivity.",
    description: "We design corporate offices, collaborative coworking spaces, and retail showrooms in Nagpur. Our layouts improve structural utility, maximize workspace daylight, and improve human comfort.",
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
  "institutional-architecture": {
    title: "Institutional Architecture",
    subtitle: "Functional planning and compliance-driven design for public-sector projects.",
    description: "Our experience extends to institutional and public-sector projects, drawing from Ar. Nikita Jumle's contribution to government infrastructure such as Panchayat Samiti buildings, District Courts, and PWD Rest Houses.",
    scope: [
      "Public infrastructure layout and zoning",
      "Building compliance and safety standard checks",
      "Traffic circulation and accessibility planning",
      "Administrative office space configurations"
    ],
    deliverables: [
      "Master layout plans & zoning blueprints",
      "Compliance checklist reports",
      "Detailed construction drawings",
      "Sanction-ready drawing sets"
    ]
  },
  "3d-visualization": {
    title: "3D Visualization",
    subtitle: "Visualize your space before execution begins.",
    description: "Make confident layout and material choices with our high-fidelity 3D renderings and design previews. We show you exactly how different color palettes, wood veneers, paint shades, and lighting schemes look in your actual space.",
    scope: [
      "High-resolution 3D interior design rendering",
      "3D exterior building elevations",
      "Material, texture, and color combinations previews",
      "Virtual space walkthrough animations"
    ],
    deliverables: [
      "3D interior rendering views (multiple angles)",
      "3D exterior elevation renders",
      "Material board & color code specifications",
      "Virtual walkthrough video render files"
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
