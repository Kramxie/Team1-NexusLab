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
    image: "/images/portfolio/mancave.png",
    url: "https://sites.google.com/view/mcsuppliesph/home",
    category: "E-Commerce",
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
    id: "ai-defendbot",
    name: "AI DefendBot",
    description: "AI-powered security bot for automated threat detection and defense.",
    image: "/images/portfolio/AIDefendBot.png",
    url: "https://sites.google.com/view/ai-defendbot/home",
    category: "AI / Security",
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
    id: "top100-ai",
    name: "Top 100 AI",
    description: "Directory showcasing the world's best AI assistants and tools.",
    image: "/images/portfolio/top100.png",
    url: "https://sites.google.com/view/top100ai/home",
    category: "AI Directory",
  },
  {
    id: "my-chapters",
    name: "MyChapters",
    description: "AI-assisted platform to write and publish your personal story as a book.",
    image: "/images/portfolio/MyChapters.png",
    url: "https://sites.google.com/view/mychapters/home",
    category: "Publishing Platform",
  },
  {
    id: "bonnie-factor",
    name: "Bonnie Factor",
    description: "Lifestyle and personal branding platform.",
    image: "/images/portfolio/bonnieFactor.png",
    url: "https://sites.google.com/view/bonniefactor/home",
    category: "Lifestyle",
  },
];
