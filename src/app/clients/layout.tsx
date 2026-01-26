import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients",
  description: "Discover the innovative companies we've partnered with. From startups to enterprises, see how Nexxus Lab has helped transform businesses across industries.",
  keywords: ["Nexxus Lab clients", "case studies", "portfolio", "tech partnerships", "client testimonials", "Philippines"],
  openGraph: {
    title: "Our Clients & Case Studies | Nexxus Lab",
    description: "Trusted by innovative companies across industries. See how we've helped transform businesses with our tech solutions.",
  },
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
