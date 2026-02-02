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
  },
  {
    id: "mc-supplies",
    name: "Man Cave Supplies PH",
    logo: "/logos/mavers.svg",
    industry: "E-Commerce",
    description: "E-commerce platform for quality supplies and products in the Philippines.",
    website: "https://maverscorp.com/shop/",
    testimonial: {
      quote: "Our online sales increased significantly after launching the new e-commerce platform they built for us.",
      author: "Store Owner",
      role: "Man Cave Supplies PH",
    },
    isActive: true,
  },
  {
    id: "bamboo-spa",
    name: "Bamboo Spa",
    logo: "/logos/bamboospa.svg",
    industry: "Wellness",
    description: "Spa website with a clean, relaxing experience and seamless service booking flow.",
    website: "https://www.bamboospa.co.nz/",
    testimonial: {
      quote: "The website perfectly captures our brand's peaceful atmosphere. Our online bookings have doubled since launch.",
      author: "Spa Manager",
      role: "Bamboo Spa NZ",
    },
    isActive: true,
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
  },
];

// Helper to get only active clients
export const getActiveClients = () => clients.filter((c) => c.isActive);
