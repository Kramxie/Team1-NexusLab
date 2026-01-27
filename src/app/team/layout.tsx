import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Team",
  description: "Meet the passionate developers and advisors behind Nexxus Lab. Based in Makati City, Philippines, we're dedicated to building innovative tech solutions.",
  keywords: ["Nexxus Lab team", "Philippine developers", "tech team Makati", "software developers Philippines", "about us"],
  openGraph: {
    title: "Meet Our Team | Nexxus Lab Philippines",
    description: "Passionate developers and advisors from Makati City, Philippines, dedicated to building innovative tech solutions.",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
