export interface PortfolioProject {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  category: string;
  tier: "client" | "portfolio"; // client = main clients, portfolio = NexusLab projects
}

export const portfolioProjects: PortfolioProject[] = [
  // ===== MAIN CLIENTS (Hierarchy: Big clients first) =====
  {
    id: "bamboo-spa",
    name: "Bamboo Spa NZ",
    description: "Comprehensive spa management software with CRM capabilities, appointment scheduling, and customer relationship tracking for wellness businesses.",
    image: "/images/portfolio/bambooSpa.png",
    url: "https://www.bamboospa.co.nz/",
    category: "Spa Software / CRM",
    tier: "client",
  },
  {
    id: "pfip",
    name: "PFIP.com.ph",
    description: "Dynamic website solution with modern architecture, responsive design, and seamless user experience for the Philippine market.",
    image: "/images/portfolio/pfip.jpg",
    url: "https://pfip.com.ph/",
    category: "Dynamic Website",
    tier: "client",
  },
  {
    id: "juggling-hats",
    name: "Juggling Hats",
    description: "A business leader's ideal function focused workforce management tool!",
    image: "/images/portfolio/jugglinghat.png",
    url: "",
    category: "Mobile App",
    tier: "client",
  },
  {
    id: "mavers-corp",
    name: "Mavers Corp",
    description: "Custom inventory management system designed for grocery retail operations, featuring real-time stock tracking, automated reordering, and comprehensive reporting.",
    image: "/images/portfolio/maverscorp.png",
    url: "https://maverscorp.com/",
    category: "Inventory System",
    tier: "client",
  },
  // ===== PORTFOLIO PROJECTS (NexusLab internal projects) =====
  {
    id: "fundraising-jedd",
    name: "Fundraising for Jedd",
    description: "A heartfelt fundraising platform built to support Jedd's journey with compassion and transparency.",
    image: "/images/portfolio/fundraising.png",
    url: "https://sites.google.com/view/fundraisingforjedd/home",
    category: "Web Application",
    tier: "portfolio",
  },
  {
    id: "scale-ui",
    name: "Scale UI",
    description: "Modern design system and UI component library for enterprise applications.",
    image: "/images/portfolio/Scale.png",
    url: "https://sites.google.com/view/scaleui/home",
    category: "Design System",
    tier: "portfolio",
  },
  {
    id: "tap-staffing",
    name: "TAP Staffing Solutions",
    description: "Professional staffing and recruitment solutions website for connecting businesses with top talent.",
    image: "/images/portfolio/TAP.png",
    url: "https://tapstaffingsolutions.com/#our-services",
    category: "Business Services",
    tier: "portfolio",
  },
  {
    id: "my-chapters",
    name: "MyChapters",
    description: "AI-assisted platform to write and publish your personal story as a beautifully crafted book.",
    image: "/images/portfolio/MyChapters.png",
    url: "https://sites.google.com/view/mychapters/home",
    category: "Publishing Platform",
    tier: "portfolio",
  },
];

// Helper to get main client projects (for carousel priority)
export const getClientProjects = () => portfolioProjects.filter((p) => p.tier === "client");

// Helper to get portfolio-only projects
export const getPortfolioOnlyProjects = () => portfolioProjects.filter((p) => p.tier === "portfolio");
