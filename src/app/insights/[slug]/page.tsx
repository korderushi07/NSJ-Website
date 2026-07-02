import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Clock, Calendar } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { getArticleSchema } from "@/lib/seo";

interface EssayDetail {
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  paragraphs: string[];
}

const essaysData: Record<string, EssayDetail> = {
  "timeless-materials-nagpur": {
    title: "Selecting climate-conscious materials for Central India.",
    date: "June 28, 2026",
    readTime: "5 min read",
    category: "Materials Science",
    excerpt: "We examine how using regional stone, local brick layouts, and traditional wall plasters can help keep homes cool during Nagpur's dry summers.",
    paragraphs: [
      "Nagpur experiences some of the most dramatic seasonal temperature swings in Maharashtra, with summer temperatures regularly peaking beyond 45°C. Traditional modern architecture has relied heavily on active mechanical cooling (air conditioning), which imposes heavy energy loads and ignores local atmospheric dynamics. At NSJ Studio, we believe that material selection should serve as the primary defensive shield against climate exposure.",
      "The first material layer we analyze is structural masonry. Traditional concrete slabs absorb thermal energy and radiate it inwards. By implementing double-layered brick walls interspersed with geometric jaali patterns, we generate pockets of turbulent airflow. The jaali operates as a physical venturi—forcing air through small openings to reduce wind speed, block direct sunlight, and filter the ambient light entering courtyards.",
      "Additionally, we prioritize local basalt stone. Sourced from quarries within Vidarbha, basalt has high thermal mass density. Combined with internal lime plasters (which are breathable and chemically release moisture), the structure maintains cooler interior conditions during daylight hours and slowly discharges the heat during the cooler night cycles.",
      "Designing for Central India is not about sealing spaces inside glass boxes. It is about detailing breathable facades, placing deep shaded overhangs, and utilizing locally verified materials that have proven their durability over centuries."
    ]
  },
  "minimalist-lighting-design": {
    title: "The role of natural light in residential design.",
    date: "May 14, 2026",
    readTime: "4 min read",
    category: "Daylight Systems",
    excerpt: "How planning courtyards, skylights, and window overhangs helps maximize natural daylight and reduces electricity consumption in homes.",
    paragraphs: [
      "Natural daylight is not a static decorative accent—it is a core structural element. In minimalist residential architecture, how light enters a volume dictates its emotional character, visual depth, and spatial scale. Our designs avoid placing large unshaded openings that create excessive heat glare, choosing instead to filter and direct light deliberately.",
      "One of the primary devices we utilize is the central atrium or courtyard. In traditional Indian homes (wadas), the courtyard acted as the center of social interaction and ventilation. In a contemporary villa, this double-height courtyard directs ambient skylight into the core of the building. Placing high-level skylights directly above masonry walls allows light to slide down raw textured surfaces, creating changing shadows over the course of the day.",
      "Furthermore, we utilize deep architectural overhangs (chajjas) and louvers. Teakwood louvers, positioned on western and southern facades, split direct sun rays into dynamic light patterns. This filters high-intensity glare while providing internal spaces with indirect daylight suitable for reading and focus.",
      "Ultimately, lighting design is about control. By sculpting shadows and defining light pathways, we create residential spaces that feel peaceful, connected to nature, and in harmony with the day's progression."
    ]
  },
  "importance-of-turnkey": {
    title: "Understanding turnkey execution for home building.",
    date: "April 02, 2026",
    readTime: "7 min read",
    category: "Execution",
    excerpt: "A simple guide to the design-and-build model. Learn how having architecture and interior design managed by one team prevents budget overruns.",
    paragraphs: [
      "Constructing a custom residence is a complex operational task. Traditionally, clients engage an architect for layout sketches, a structural consultant for concrete details, and separate contractors for brickwork, plumbing, and interior finishings. This fragmented model frequently results in miscommunication, structural inconsistencies, and significant budget overruns.",
      "Turnkey execution, or unified design-build delivery, consolidates all project phases under a single point of responsibility. At NSJ Studio, our turnkey contracts ensure that the design approved on paper matches the physical execution on site. Our in-house designers, structural engineers, and site supervisors work as a single team.",
      "The primary advantage of turnkey execution is material and budget alignment. During the design phase, we create a detailed bill of quantities (BOQ) with fixed costs. Because we source raw stones, premium veneers, and specialized fixtures directly from verified manufacturers, we prevent unexpected material markups and delays.",
      "By eliminating the conflict between architects who draw complex shapes and contractors who struggle to build them, turnkey execution streamlines the construction process. It provides peace of mind, consistent detailing, and a home delivered precisely as visualized."
    ]
  },
  "vernacular-courtyard-cooling": {
    title: "How courtyards keep homes cool in Nagpur's summer.",
    date: "March 18, 2026",
    readTime: "6 min read",
    category: "Passive Cooling",
    excerpt: "Exploring how traditional central courtyards can be integrated into modern houses to promote natural cooling and ventilation in Vidarbha.",
    paragraphs: [
      "Courtyards have been a fundamental element of Indian architecture for centuries. In regions like Vidarbha, where summer temperatures are high, a central courtyard acts as a thermal regulator. By introducing an open sky area inside the house, we create a natural convective loop that draws hot air upward and pulls cooler air from the surrounding rooms.",
      "In modern home design, we can adapt this traditional concept to suit contemporary lifestyles. By placing high-level ventilators, double-height ceilings, and green planters within the courtyard, we create a lively center that acts as the physical and visual heart of the home.",
      "Additionally, we use local terracotta screens and water elements near the courtyard openings. This helps cool the incoming breeze through evaporation, lowering internal temperatures naturally without relying entirely on mechanical air conditioning.",
      "Integrating a courtyard into your residential design is not just a stylistic choice. It is a highly practical solution to promote natural ventilation, bring indirect daylight into every room, and create a calm family sanctuary."
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(essaysData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = essaysData[slug];

  if (!essay) {
    return {
      title: "Essay Not Found",
    };
  }

  return {
    title: essay.title,
    description: essay.excerpt,
    alternates: {
      canonical: `/insights/${slug}`,
    },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const essay = essaysData[slug];

  if (!essay) {
    notFound();
  }

  // Schema generation
  const articleSchema = getArticleSchema({
    title: essay.title,
    description: essay.excerpt,
    image: "https://nsjstudio.in/images/hero.png", // Fallback static image
    datePublished: "2026-04-01T00:00:00Z",
    dateModified: "2026-06-28T00:00:00Z",
    slug: slug,
  });

  return (
    <>
      {/* Blog posting structured schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Navbar />
      <main className="pt-20 flex-grow bg-studio-bg font-sans">
        
        {/* Banner Section */}
        <section className="py-20 md:py-28 bg-studio-card border-b border-studio-border">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              href="/insights"
              className="text-xs uppercase tracking-widest text-studio-body/60 hover:text-studio-accent inline-flex items-center gap-2 mb-8 transition-colors duration-300"
            >
              <ArrowLeft size={12} />
              Back to Journal
            </Link>
            
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-studio-accent font-semibold block mb-3">
                Design Journal Essay
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-light text-studio-heading leading-tight mb-6">
                {essay.title}
              </h1>
              
              {/* Meta metrics */}
              <div className="flex items-center space-x-6 text-[10px] uppercase tracking-widest text-studio-body/60 border-t border-studio-border/50 pt-6">
                <span className="flex items-center"><Calendar size={12} className="mr-1.5 text-studio-accent" /> {essay.date}</span>
                <span className="flex items-center"><Clock size={12} className="mr-1.5 text-studio-accent" /> {essay.readTime}</span>
                <span className="flex items-center"><BookOpen size={12} className="mr-1.5 text-studio-accent" /> {essay.category}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Essay Content Section */}
        <section className="py-24 max-w-3xl mx-auto px-6">
          <div className="space-y-6 text-sm md:text-base text-studio-body/80 leading-relaxed font-sans">
            {essay.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
