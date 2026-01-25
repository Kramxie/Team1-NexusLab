export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your unique business needs and challenges.",
    icon: "💻",
    features: [
      "Web Applications",
      "Desktop Software",
      "API Development",
      "System Integration",
    ],
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots & Automation",
    description: "Intelligent chatbot solutions that automate customer support and streamline operations.",
    icon: "🤖",
    features: [
      "Custom AI Chatbots",
      "Process Automation",
      "Natural Language Processing",
      "24/7 Customer Support Bots",
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: "📱",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-Platform (React Native)",
      "App Store Deployment",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    icon: "🎨",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern, responsive websites built with the latest technologies and best practices.",
    icon: "🌐",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "Content Management Systems",
      "Performance Optimization",
    ],
  },
  {
    id: "tech-consulting",
    title: "Tech Consulting",
    description: "Strategic guidance to help you navigate technology decisions and digital transformation.",
    icon: "💡",
    features: [
      "Technology Audits",
      "Digital Strategy",
      "Architecture Planning",
      "Team Training",
    ],
  },
];
