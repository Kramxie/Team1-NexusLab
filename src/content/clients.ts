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
  tier: "main" | "portfolio"; // main = featured clients, portfolio = NexusLab projects
}

export const clients: Client[] = [
  // ===== MAIN CLIENTS (Hierarchy order) =====
  {
    id: "bamboo-spa",
    name: "Bamboo Spa NZ",
    logo: "/logos/bamboospa.svg",
    industry: "Wellness & Technology",
    description: "Comprehensive spa management software with CRM capabilities, appointment scheduling, and customer relationship tracking for wellness businesses in New Zealand.",
    website: "https://www.bamboospa.co.nz/",
    testimonial: {
      quote: "The spa software and CRM system transformed how we manage our business. Online bookings have doubled and client retention improved significantly.",
      author: "Spa Director",
      role: "Bamboo Spa NZ",
    },
    isActive: true,
    tier: "main",
  },
  {
    id: "pfip",
    name: "PFIP.com.ph",
    logo: "/logos/pfip.svg",
    industry: "Finance",
    description: "Dynamic website solution with modern architecture, responsive design, and seamless user experience for the Philippine financial sector.",
    website: "https://pfip.com.ph/",
    testimonial: {
      quote: "Nexxus Lab delivered a dynamic, professional website that perfectly represents our brand and serves our clients effectively.",
      author: "Marketing Director",
      role: "PFIP",
    },
    isActive: true,
    tier: "main",
  },
  // Juggling Hats (Mobile App) - To be added with reference
  {
    id: "mavers-corp",
    name: "Mavers Corp",
    logo: "/logos/mavers.svg",
    industry: "Retail Technology",
    description: "Custom inventory management system designed for grocery retail operations, featuring real-time stock tracking, automated reordering, and comprehensive reporting.",
    website: "https://maverscorp.com/",
    testimonial: {
      quote: "The inventory system revolutionized our stock management. We've reduced waste and improved efficiency across all our grocery operations.",
      author: "Operations Manager",
      role: "Mavers Corp",
    },
    isActive: true,
    tier: "main",
  },
  // ===== PORTFOLIO PROJECTS (NexusLab internal projects) =====
  {
    id: "fundraising-jedd",
    name: "Fundraising for Jedd",
    logo: "/logos/fundraising.svg",
    industry: "Non-Profit",
    description: "A heartfelt fundraising platform built to support Jedd's journey with compassion and transparency.",
    website: "https://sites.google.com/view/fundraisingforjedd/home",
    testimonial: {
      quote: "They created a beautiful platform that helped us reach our fundraising goals and connect with supporters worldwide.",
      author: "Campaign Organizer",
      role: "Fundraising for Jedd",
    },
    isActive: true,
    tier: "portfolio",
  },
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
    tier: "portfolio",
  },
  {
    id: "tap-staffing",
    name: "TAP Staffing Solutions",
    logo: "/logos/tap.svg",
    industry: "Business Services",
    description: "Professional staffing and recruitment solutions website for connecting businesses with top talent.",
    website: "https://tapstaffingsolutions.com/#our-services",
    testimonial: {
      quote: "Nexxus Lab built us a professional platform that has streamlined our recruitment process tremendously.",
      author: "Operations Director",
      role: "TAP Staffing Solutions",
    },
    isActive: true,
    tier: "portfolio",
  },
  {
    id: "my-chapters",
    name: "MyChapters",
    logo: "/logos/mychapters.svg",
    industry: "Publishing",
    description: "AI-assisted platform to write and publish your personal story as a beautifully crafted book.",
    website: "https://sites.google.com/view/mychapters/home",
    testimonial: {
      quote: "They turned our vision into reality - a platform that makes storytelling accessible to everyone.",
      author: "Creative Director",
      role: "MyChapters",
    },
    isActive: true,
    tier: "portfolio",
  },
];

// Helper to get only active clients
export const getActiveClients = () => clients.filter((c) => c.isActive);

// Helper to get main clients (featured)
export const getMainClients = () => clients.filter((c) => c.isActive && c.tier === "main");

// Helper to get portfolio projects
export const getPortfolioClients = () => clients.filter((c) => c.isActive && c.tier === "portfolio");
