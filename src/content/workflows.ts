export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface Workflow {
  id: string;
  title: string;
  description: string;
  steps: WorkflowStep[];
}

export interface AutomationSample {
  id: string;
  title: string;
  problem: string;
  solution: string;
  tools: string[];
  category: string;
}

export const workflows: Workflow[] = [
  {
    id: "discovery",
    title: "Discovery & Planning",
    description: "We start by understanding your goals, audience, and requirements.",
    steps: [
      { step: 1, title: "Initial Consultation", description: "Meet to discuss your vision and objectives." },
      { step: 2, title: "Requirements Gathering", description: "Document functional and technical requirements." },
      { step: 3, title: "Project Roadmap", description: "Create a timeline with milestones and deliverables." },
    ],
  },
  {
    id: "design",
    title: "Design & Prototyping",
    description: "Transform ideas into visual designs and interactive prototypes.",
    steps: [
      { step: 1, title: "Wireframes", description: "Create low-fidelity layouts to map user flows." },
      { step: 2, title: "Visual Design", description: "Develop high-fidelity mockups with branding." },
      { step: 3, title: "Prototype Review", description: "Interactive prototype for stakeholder feedback." },
    ],
  },
  {
    id: "development",
    title: "Development & Testing",
    description: "Build and rigorously test your solution for quality assurance.",
    steps: [
      { step: 1, title: "Sprint Planning", description: "Break work into manageable two-week sprints." },
      { step: 2, title: "Code & Review", description: "Write clean, tested code with peer reviews." },
      { step: 3, title: "QA Testing", description: "Comprehensive testing across devices and browsers." },
    ],
  },
  {
    id: "launch",
    title: "Launch & Support",
    description: "Deploy your project and provide ongoing maintenance.",
    steps: [
      { step: 1, title: "Deployment", description: "Launch to production with zero downtime." },
      { step: 2, title: "Training", description: "Team training on content management and tools." },
      { step: 3, title: "Ongoing Support", description: "Continued maintenance and feature updates." },
    ],
  },
];

export const automationSamples: AutomationSample[] = [
  {
    id: "lead-nurturing",
    title: "Automated Lead Nurturing",
    problem: "Sales team spending hours manually following up with leads, resulting in slow response times and lost opportunities.",
    solution: "Implemented an automated email sequence that triggers based on user behavior, scoring leads and routing hot prospects directly to sales.",
    tools: ["HubSpot", "Zapier", "Slack", "Google Sheets"],
    category: "Sales & Marketing",
  },
  {
    id: "invoice-processing",
    title: "Invoice Processing Automation",
    problem: "Finance team manually processing 500+ invoices monthly, leading to delays, errors, and late payments.",
    solution: "Built an OCR-powered system that extracts invoice data, validates against POs, and auto-routes for approval with exception handling.",
    tools: ["Make", "Google Vision AI", "QuickBooks", "Airtable"],
    category: "Finance",
  },
  {
    id: "customer-onboarding",
    title: "Customer Onboarding Workflow",
    problem: "New customers waiting days for account setup, causing frustration and increasing churn during the critical first week.",
    solution: "Created a seamless onboarding flow that provisions accounts, sends personalized welcome sequences, and schedules success calls automatically.",
    tools: ["Intercom", "Stripe", "Calendly", "Notion"],
    category: "Customer Success",
  },
  {
    id: "social-content",
    title: "Content Repurposing Pipeline",
    problem: "Marketing team struggling to maintain consistent social presence across 5 platforms while creating fresh content.",
    solution: "Developed a pipeline that takes long-form content and automatically generates platform-specific posts, schedules them, and tracks performance.",
    tools: ["ChatGPT API", "Buffer", "Canva", "Airtable"],
    category: "Content & Social",
  },
  {
    id: "support-triage",
    title: "Support Ticket Triage System",
    problem: "Support tickets piling up with no prioritization, causing VIP customers to wait alongside simple FAQ questions.",
    solution: "Implemented AI-powered ticket classification that auto-responds to common questions and escalates urgent issues to the right team instantly.",
    tools: ["Zendesk", "OpenAI", "Slack", "PagerDuty"],
    category: "Customer Support",
  },
  {
    id: "reporting-dashboard",
    title: "Automated Reporting Dashboard",
    problem: "Leadership spending 10+ hours weekly compiling reports from multiple data sources, often with outdated information.",
    solution: "Built a real-time dashboard that aggregates data from all platforms, generates insights, and sends automated executive summaries.",
    tools: ["Looker", "BigQuery", "Fivetran", "Slack"],
    category: "Analytics & BI",
  },
];
