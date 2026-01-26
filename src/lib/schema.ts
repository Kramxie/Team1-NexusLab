// JSON-LD Schema Markup for Nexxus Lab
// Structured data for better SEO and rich search results

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://nexxuslab.com/#organization",
  name: "Nexxus Lab",
  alternateName: "Nexxus Lab Philippines",
  url: "https://nexxuslab.com",
  logo: {
    "@type": "ImageObject",
    url: "https://nexxuslab.com/images/logo/nexxuslab-logo.png",
    width: 512,
    height: 512,
  },
  image: "https://nexxuslab.com/images/logo/nexxuslab-logo.png",
  description:
    "Philippine-based tech company specializing in custom software development, AI chatbots, automation systems, and digital transformation solutions.",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Chris Bautista",
      jobTitle: "Founder & Chief Executive Officer",
    },
    {
      "@type": "Person",
      name: "Loreleen Mae Sablot",
      jobTitle: "Co-Founder & Senior Software Engineer",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Salcedo St., Legaspi Village",
    addressLocality: "Makati City",
    postalCode: "1299",
    addressCountry: "PH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+63-927-143-0884",
    contactType: "customer service",
    email: "team@nexxuslab.com",
    availableLanguage: ["English", "Filipino"],
  },
  sameAs: [
    "https://facebook.com/nexxuslab",
    "https://linkedin.com/company/nexxuslab",
  ],
  areaServed: {
    "@type": "Country",
    name: "Philippines",
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 14.5547,
      longitude: 121.0244,
    },
    geoRadius: "50000",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nexxuslab.com/#website",
  name: "Nexxus Lab",
  url: "https://nexxuslab.com",
  publisher: {
    "@id": "https://nexxuslab.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://nexxuslab.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://nexxuslab.com/#localbusiness",
  name: "Nexxus Lab",
  image: "https://nexxuslab.com/images/logo/nexxuslab-logo.png",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Salcedo St., Legaspi Village",
    addressLocality: "Makati City",
    postalCode: "1299",
    addressCountry: "PH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 14.5547,
    longitude: 121.0244,
  },
  telephone: "+63-927-143-0884",
  email: "team@nexxuslab.com",
  url: "https://nexxuslab.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50",
  },
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://nexxuslab.com/services/#servicelist",
  name: "Nexxus Lab Services",
  description: "Professional tech services offered by Nexxus Lab",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Web Development",
        description:
          "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
        provider: {
          "@id": "https://nexxuslab.com/#organization",
        },
        serviceType: "Web Development",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Mobile App Development",
        description:
          "Native and cross-platform mobile apps for iOS and Android.",
        provider: {
          "@id": "https://nexxuslab.com/#organization",
        },
        serviceType: "Mobile Development",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "AI Chatbots & Automation",
        description:
          "Intelligent chatbot solutions that automate customer support and streamline operations.",
        provider: {
          "@id": "https://nexxuslab.com/#organization",
        },
        serviceType: "AI Development",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "UI/UX Design",
        description:
          "User-centered design that creates intuitive and beautiful digital experiences.",
        provider: {
          "@id": "https://nexxuslab.com/#organization",
        },
        serviceType: "Design Services",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Process Automation",
        description:
          "Automate repetitive tasks and streamline your workflows to save time and reduce errors.",
        provider: {
          "@id": "https://nexxuslab.com/#organization",
        },
        serviceType: "Business Automation",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Tech Consulting",
        description:
          "Strategic technology advice to help your business grow and stay competitive.",
        provider: {
          "@id": "https://nexxuslab.com/#organization",
        },
        serviceType: "IT Consulting",
        areaServed: "Worldwide",
      },
    },
  ],
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (
  faqs: { question: string; answer: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// Helper function to generate JSON-LD script tag content
export const generateJsonLd = (schema: object | object[]) => {
  if (Array.isArray(schema)) {
    return JSON.stringify(schema);
  }
  return JSON.stringify(schema);
};
