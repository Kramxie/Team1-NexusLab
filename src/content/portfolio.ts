export interface PortfolioProject {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  category: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "fundraising-jedd",
    name: "Fundraising for Jedd",
    description: "A heartfelt fundraising platform built to support Jedd's journey.",
    image: "/images/portfolio/fundraising.png",
    url: "https://sites.google.com/view/fundraisingforjedd/home",
    category: "Web Application",
  },
  {
    id: "mc-supplies",
    name: "Man Cave Supplies PH",
    description: "E-commerce platform for quality supplies and products in the Philippines.",
    image: "/images/portfolio/mavers.png",
    url: "https://maverscorp.com/shop/",
    category: "E-Commerce",
  },
  {
    id: "bamboo-spa",
    name: "Bamboo Spa",
    description: "Spa website with a clean, relaxing experience and clear service flow.",
    image: "/images/portfolio/bambooSpa.png",
    url: "https://www.bamboospa.co.nz/",
    category: "Website",
  },
  {
    id: "scale-ui",
    name: "Scale UI",
    description: "Modern design system and UI component library for enterprise applications.",
    image: "/images/portfolio/Scale.png",
    url: "https://sites.google.com/view/scaleui/home",
    category: "Design System",
  },
  {
    id: "tap-staffing",
    name: "TAP Staffing Solutions",
    description: "Professional staffing and recruitment solutions for businesses.",
    image: "/images/portfolio/TAP.png",
    url: "https://tapstaffingsolutions.com/#our-services",
    category: "Business Services",
  },
  {
    id: "my-chapters",
    name: "MyChapters",
    description: "AI-assisted platform to write and publish your personal story as a book.",
    image: "/images/portfolio/MyChapters.png",
    url: "https://sites.google.com/view/mychapters/home",
    category: "Publishing Platform",
  },
];
