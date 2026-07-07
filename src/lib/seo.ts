export const SITE_URL = "https://nsjstudio.in";

export interface ProjectSchemaData {
  title: string;
  description: string;
  image: string;
  location: string;
  category: string;
  slug: string;
}

export interface ArticleSchemaData {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  slug: string;
}

/**
 * Generates the local business schema for NSJ Architects and Designers in Nagpur.
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ArchitecturalOffice",
    "name": "NSJ Architects and Designers",
    "description": "Nagpur-based architecture and design practice creating functional, thoughtful, and visually refined residential, commercial, and interior spaces.",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "image": `${SITE_URL}/images/hero.jpg`,
    "telephone": "+91-9876543210", // Placeholder but structured
    "email": "inquire@nsjstudio.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Civil Lines", // Nagpur premium business district placeholder
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1458,
      "longitude": 79.0882
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.instagram.com/nsjstudio",
      "https://www.linkedin.com/company/nsjstudio",
      "https://www.pinterest.com/nsjstudio"
    ],
    "priceRange": "$$$$"
  };
}

/**
 * Generates structured data for an individual architectural project.
 */
export function getProjectSchema(project: ProjectSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": project.image,
    "url": `${SITE_URL}/projects/${project.slug}`,
    "creator": {
      "@type": "Organization",
      "name": "NSJ Architects and Designers"
    },
    "locationCreated": {
      "@type": "Place",
      "name": project.location
    },
    "genre": project.category
  };
}

/**
 * Generates structured data for insights/articles.
 */
export function getArticleSchema(article: ArticleSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "url": `${SITE_URL}/insights/${article.slug}`,
    "author": {
      "@type": "Organization",
      "name": "NSJ Architects and Designers"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NSJ Architects and Designers",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    }
  };
}
