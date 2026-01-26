import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import FloatingChatbot from "@/components/FloatingChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nexxus Lab | Leave the Tech to Us",
    template: "%s | Nexxus Lab",
  },
  description: "We are a Philippine-based tech team building innovative software solutions, AI chatbots, and automation systems. Custom development for startups and enterprises.",
  keywords: ["software development", "AI chatbots", "automation", "web development", "mobile apps", "Philippines", "tech company", "Makati"],
  authors: [{ name: "Nexxus Lab" }],
  creator: "Nexxus Lab",
  metadataBase: new URL("https://nexxuslab.com"),
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "Nexxus Lab",
    title: "Nexxus Lab | Leave the Tech to Us",
    description: "Philippine-based tech team building innovative software solutions, AI chatbots, and automation systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexxus Lab | Leave the Tech to Us",
    description: "Philippine-based tech team building innovative software solutions, AI chatbots, and automation systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingChatbot />
      </body>
    </html>
  );
}
