import type { Metadata } from "next";
import { Section, Grid, CTA } from "@/components";
import { automationSamples, workflows } from "@/content";

export const metadata: Metadata = {
  title: "Workflow Automation",
  description: "Streamline your business with intelligent workflow automation. We design and implement solutions that eliminate manual work, reduce errors, and boost productivity.",
  keywords: ["workflow automation", "business process automation", "AI automation", "Zapier integration", "Make automation", "n8n workflows", "Philippines"],
  openGraph: {
    title: "Workflow Automation Solutions | Nexxus Lab",
    description: "Intelligent automation that eliminates manual work and lets your team focus on what matters most.",
  },
};

export default function WorkflowsPage() {
  return (
    <>
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gray-950">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-sm text-gray-300 mb-8">
            <span className="w-2 h-2 bg-purple-400 rounded-full" />
            Automation & Integration Experts
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Workflows That </span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Work For You
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            We design and implement intelligent automation solutions that eliminate
            manual work, reduce errors, and free your team to focus on what matters most.
          </p>
        </div>
      </section>

      <Section
        title="Our Process"
        subtitle="A proven methodology for building reliable automations"
        dark
      >
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          <Grid columns={4} gap="md">
            {workflows.map((workflow, index) => (
              <div
                key={workflow.id}
                className="relative p-6 rounded-2xl border border-gray-800 bg-gray-900/80 text-center"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">
                  {workflow.title}
                </h3>
                <p className="text-sm text-gray-400">{workflow.description}</p>
              </div>
            ))}
          </Grid>
        </div>
      </Section>

      <Section
        title="Automation Samples"
        subtitle="Real-world solutions we've built for clients like you"
      >
        <Grid columns={2} gap="lg">
          {automationSamples.map((sample) => (
            <div
              key={sample.id}
              className="group p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
                {sample.category}
              </span>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                {sample.title}
              </h3>

              <div className="mb-4">
                <div className="flex items-center gap-2 text-sm font-medium text-red-400 mb-2">
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  Problem
                </div>
                <p className="text-sm text-gray-400">{sample.problem}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm font-medium text-green-400 mb-2">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Solution
                </div>
                <p className="text-sm text-gray-400">{sample.solution}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-3">
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
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Tools Used
                </div>
                <div className="flex flex-wrap gap-2">
                  {sample.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Grid>
      </Section>

      <Section dark>
        <CTA
          heading="Ready to Automate Your Business?"
          subheading="Let's discuss your workflows and find opportunities to save time, reduce errors, and scale your operations."
          buttonText="Schedule a Consultation"
          buttonHref="/contact"
        />
      </Section>
    </>
  );
}
