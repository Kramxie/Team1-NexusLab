import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflow Automation",
  description: "Streamline your business with intelligent workflow automation. We design and implement solutions that eliminate manual work, reduce errors, and boost productivity.",
  keywords: ["workflow automation", "business process automation", "AI automation", "Zapier integration", "Make automation", "n8n workflows", "Philippines"],
  openGraph: {
    title: "Workflow Automation Solutions | Nexxus Lab",
    description: "Intelligent automation that eliminates manual work and lets your team focus on what matters most.",
  },
};

export default function WorkflowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
