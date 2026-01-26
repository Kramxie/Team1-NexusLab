import type { Metadata } from "next";
import { Section, Grid, Card, PricingTier } from "@/components";
import { services } from "@/content";
import JsonLd from "@/components/JsonLd";
import { servicesSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Explore Nexxus Lab's services: custom software development, AI chatbots, workflow automation, mobile apps, and UI/UX design. Flexible pricing for startups to enterprises.",
  keywords: ["software development services", "AI chatbot development", "workflow automation", "mobile app development", "UI/UX design", "tech services Philippines", "pricing"],
  openGraph: {
    title: "Services & Pricing | Nexxus Lab",
    description: "Custom software, AI chatbots, automation & more. From startups to enterprises - find the right plan for your business.",
  },
};

const servicesBreadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://nexxuslab.com" },
  { name: "Services", url: "https://nexxuslab.com/services" },
]);

const pricingTiers = [
  {
    name: "Starter",
    price: "Let's Talk",
    period: "",
    description: "Get started fast. Perfect for SMEs and startups needing quick digital wins.",
    features: [
      "Landing page / single-page website",
      "Mobile responsive design",
      "Basic chatbot setup",
      "Simple automation (1-2 workflows)",
      "Basic SEO setup",
      "2-4 week delivery",
      "30 days post-launch support",
    ],
    highlighted: false,
    buttonText: "Get a Quote",
  },
  {
    name: "Growth",
    price: "Let's Talk",
    period: "",
    description: "Scale your operations. Best value for growing businesses ready to transform.",
    features: [
      "Multi-page website with CMS",
      "Custom AI chatbot with training",
      "Multiple workflow automations",
      "Cross-platform mobile app",
      "API integrations",
      "Analytics dashboard",
      "Full UI/UX design process",
      "1-3 month delivery",
      "90 days support + maintenance option",
    ],
    highlighted: true,
    buttonText: "Book Discovery Call",
  },
  {
    name: "Enterprise",
    price: "Let's Talk",
    period: "",
    description: "Solutions at scale. For large organizations with complex technical needs.",
    features: [
      "Custom software development",
      "Enterprise AI solutions",
      "Full system integration",
      "Dedicated project manager",
      "SLA guarantees",
      "On-site training",
      "Priority support",
      "Scalability planning",
      "Ongoing partnership",
    ],
    highlighted: false,
    buttonText: "Contact Us",
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Starter projects typically take 2-4 weeks, Growth tier projects take 1-3 months, and Enterprise solutions take 3-6+ months depending on complexity. We'll provide a detailed timeline during our discovery call.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes! Starter includes 30 days support, Growth includes 90 days plus optional maintenance plans, and Enterprise clients get ongoing partnership with priority support and SLA guarantees.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We specialize in React, Next.js, TypeScript, Node.js, Python for AI/automation, and various cloud platforms. We choose the best stack based on your project requirements.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Absolutely. Many clients start with Starter to build trust, then scale to Growth as their needs expand. We'll work with you to ensure a smooth transition.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Simply reach out via our contact form or book a discovery call. We'll discuss your requirements and provide a custom quote tailored to your project scope and timeline.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "We typically work with milestone-based payments. The exact structure depends on your project scope and will be discussed during the proposal phase.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Schema for Services */}
      <JsonLd data={servicesSchema} />
      <JsonLd data={servicesBreadcrumb} />
      
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gray-950">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Services & </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            From concept to launch, we deliver end-to-end digital solutions that
            help your business grow. Choose a package that fits your needs, or
            let&apos;s create something custom together.
          </p>
        </div>
      </section>

      <Section
        title="Choose Your Plan"
        subtitle="Transparent pricing with no hidden fees"
        dark
      >
        <Grid columns={3} gap="lg">
          {pricingTiers.map((tier) => (
            <PricingTier
              key={tier.name}
              name={tier.name}
              price={tier.price}
              period={tier.period}
              description={tier.description}
              features={tier.features}
              highlighted={tier.highlighted}
              buttonText={tier.buttonText}
            />
          ))}
        </Grid>
      </Section>

      <Section
        title="What We Offer"
        subtitle="Comprehensive digital services to power your business"
      >
        <Grid columns={2} gap="lg">
          {services.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              description={service.description}
              icon={<span className="text-3xl">{service.icon}</span>}
            />
          ))}
        </Grid>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{service.icon}</span>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                    <svg
                      className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers"
        dark
      >
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50"
            >
              <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                <span className="text-cyan-400 font-mono text-sm mt-1">
                  0{index + 1}
                </span>
                {faq.question}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            Get in touch with our team
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </Section>
    </>
  );
}
