import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Nexxus Lab. Whether you have a project in mind or need a consultation, we'd love to hear from you. Based in Makati City, Philippines.",
  keywords: ["contact Nexxus Lab", "tech consultation", "project inquiry", "Makati City", "Philippines tech company", "get a quote"],
  openGraph: {
    title: "Contact Us | Nexxus Lab Philippines",
    description: "Have a project in mind? Get a free consultation. We're based in Makati City, Philippines.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
