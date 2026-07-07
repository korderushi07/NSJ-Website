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
  "things-to-consider-before-renovating-home": {
    title: "Things to Consider Before Renovating Your Home",
    date: "July 05, 2026",
    readTime: "5 min read",
    category: "Home Renovation",
    excerpt: "A practical guide to planning a renovation, covering budget allocation, structural checkups, space utilization, and material timelines.",
    paragraphs: [
      "Renovating a home is a rewarding way to align your living space with your changing lifestyle, but it requires careful preparation. Before dismantling walls or ordering modular cabinets, the first step is to establish a clear project scope and realistic budget. A well-planned renovation prevents unexpected delays and helps prioritize key structural changes over cosmetic finishes.",
      "Secondly, always evaluate the existing structure of your home. Before planning changes like removing partitions to create an open-plan layout, consult a professional to identify load-bearing walls. Modifying structural elements without proper verification can compromise structural integrity.",
      "Thirdly, prioritize layout optimization and smart storage. Think about how your family uses each room daily. In the kitchen, optimize the work triangle between the sink, stove, and refrigerator. In bedrooms and living areas, design custom built-in wardrobes and multi-functional storage units that maximize floor space.",
      "Finally, choose materials that are durable and easy to maintain. Work with a designer to select flooring, surface finishes, and hardware that fit your usage patterns. With detailed drawings and a clear timeline, your home renovation will proceed smoothly and deliver lasting value."
    ]
  },
  "how-good-space-planning-improves-living": {
    title: "How Good Space Planning Improves Everyday Living",
    date: "June 20, 2026",
    readTime: "4 min read",
    category: "Space Planning",
    excerpt: "Exploring how layout optimization, circulation paths, and natural light enhance the functionality and comfort of modern homes.",
    paragraphs: [
      "Space planning is the foundation of any successful architecture or interior project. It is the process of organizing furniture, rooms, and circulation paths to maximize usability and comfort. When a floor plan is designed thoughtfully, daily routines become smoother, and rooms feel open and inviting, regardless of their physical dimensions.",
      "A key aspect of space planning is defining clear circulation paths. People should be able to move naturally through rooms without navigating around poorly placed furniture or tight doorways. By optimizing zoning—separating quiet private areas from active social spaces—you create a balanced environment that supports both work and rest.",
      "Another crucial factor is maximizing natural daylight and air ventilation. Positioning windows and doors to facilitate cross-ventilation keeps indoor spaces fresh and reduces reliance on mechanical cooling. Designing open-plan living areas that lead into courtyards or balconies connects the interiors to the outdoors, enhancing the overall sense of space.",
      "Ultimately, good space planning is about tailoring the layout to the people who inhabit it. We combine creative layout configurations with functional utility to design spaces that simplify and enrich your everyday life."
    ]
  },
  "architecture-vs-interior-design-difference": {
    title: "Architecture vs Interior Design: Understanding the Difference",
    date: "May 25, 2026",
    readTime: "6 min read",
    category: "Design Guide",
    excerpt: "Understanding how architects and interior designers work together, and how their roles overlap to shape your built environment.",
    paragraphs: [
      "While architecture and interior design are closely related, they represent distinct professional disciplines. Understanding the difference between them is essential when planning a new building or renovation project, as both roles are critical to creating a cohesive, functional structure.",
      "Architecture focuses on the overall design, structural planning, and building envelope. Architects design the spatial volume, plan the structural grid, coordinate municipal compliance, and ensure that the building is structurally sound, ventilated, and responsive to its site conditions. They shape the external form and solve the fundamental layout organization.",
      "Interior design, on the other hand, deals with the human-scale experience within those spaces. Interior designers select material finishes, design custom woodwork, plan lighting layouts, and curate color schemes and loose furniture. They focus on the visual aesthetics, tactile qualities, and detailed functionality of the interior surfaces and storage units.",
      "A successful project requires a seamless integration of both disciplines. When architectural layout planning and interior detailing are aligned from day one, it ensures that details like electrical points, windows, plumbing lines, and modular furniture fit together perfectly without on-site modifications."
    ]
  },
  "planning-home-renovation-nagpur": {
    title: "Planning a Home Renovation in Nagpur",
    date: "May 05, 2026",
    readTime: "7 min read",
    category: "Local Guide",
    excerpt: "Important local considerations for home renovations in Nagpur, including climate adaptability, local material sourcing, and contractor coordination.",
    paragraphs: [
      "Renovating a home in Nagpur requires addressing specific regional factors, particularly the local climate and material availability. With summer temperatures in the Vidarbha region regularly exceeding 40°C, a successful renovation must prioritize climate adaptability and thermal comfort alongside aesthetic upgrades.",
      "One of the most effective strategies is updating your window glazing and insulation. During a renovation, replacing old single-glazed windows with energy-efficient glass can significantly reduce heat gain. Additionally, installing shaded projections (chajjas) or adjustable screens on west- and south-facing walls keeps direct sunlight from heating up rooms.",
      "Sourcing local materials is another key factor for durability and cost-efficiency. Using regional stones like Nagpur basalt or kota stone for flooring and outdoor deck spaces provides high thermal mass and longevity. Sourcing wood veneers, tiles, and fittings from verified local suppliers also minimizes transit times and keeps your project on schedule.",
      "Lastly, successful coordination with local contractors is vital. A professional designer can provide detailed electrical, plumbing, and structural drawings to ensure that local masonry and carpentry teams execute the work precisely. Planning your renovation with these local insights ensures a cool, comfortable, and durable home."
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
