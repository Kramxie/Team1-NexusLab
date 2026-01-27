import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Explore Nexxus Lab's services: custom software development, AI chatbots, workflow automation, mobile apps, and UI/UX design. Flexible pricing for startups to enterprises.",
  keywords: ["software development services", "AI chatbot development", "workflow automation", "mobile app development", "UI/UX design", "tech services Philippines", "pricing"],
  openGraph: {
    title: "Services & Pricing | Nexxus Lab",
    description: "Custom software, AI chatbots, automation & more. From startups to enterprises - find the right plan for your business.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
