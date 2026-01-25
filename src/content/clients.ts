export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  website?: string;
  testimonial?: Testimonial;
  isActive: boolean;
}

export const clients: Client[] = [
  {
    id: "scale-ui",
    name: "Scale UI",
    logo: "/logos/scaleui.svg",
    industry: "Technology",
    description: "Design system and UI component library for enterprise applications.",
    website: "https://sites.google.com/view/scaleui/home",
    testimonial: {
      quote: "Nexxus Lab delivered exactly what we needed - a scalable solution that our team loves using every day.",
      author: "Project Lead",
      role: "Scale UI Team",
    },
    isActive: true,
  },
  {
    id: "top100ai",
    name: "Top 100 AI",
    logo: "/logos/top100ai.svg",
    industry: "Technology",
    description: "AI directory and resource platform showcasing leading artificial intelligence tools.",
    website: "https://sites.google.com/view/top100ai/home",
    testimonial: {
      quote: "Their expertise in AI integration helped us build a platform that truly stands out in the market.",
      author: "Founder",
      role: "Top 100 AI",
    },
    isActive: true,
  },
];

// Helper to get only active clients
export const getActiveClients = () => clients.filter((c) => c.isActive);
