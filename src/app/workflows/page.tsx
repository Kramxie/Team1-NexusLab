"use client";

import {
  Section,
  CTA,
  AnimatedPageHero,
  AnimatedSection,
  AnimatedGrid,
  AnimatedGridItem,
} from "@/components";
import { automationSamples, workflows } from "@/content";

export default function WorkflowsPage() {
  return (
    <>
      <AnimatedPageHero
        badge={{ text: "Automation & Integration Experts", color: "purple" }}
        title="Workflows That"
        titleHighlight="Work For You"
        description="We design and implement intelligent automation solutions that eliminate manual work, reduce errors, and free your team to focus on what matters most."
        highlightColor="purple"
      />

      <Section
        title="Our Process"
        subtitle="A proven methodology for building reliable automations"
        dark
        className="overflow-visible"
      >
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,102,255,0.3)] to-transparent" />

          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflows.map((workflow, index) => (
              <AnimatedGridItem key={workflow.id}>
                <div className="p-6 rounded-2xl border border-[rgba(0,102,255,0.2)] bg-black/80 text-center relative overflow-visible">
                  {/* Badge - normal flow, always fully visible */}
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00aaff] text-white text-sm font-bold shadow-xl ring-4 ring-black">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mt-8 mb-2">
                    {workflow.title}
                  </h3>
                  <p className="text-sm text-gray-400">{workflow.description}</p>
                </div>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>
        </div>
      </Section>

      <Section
        title="Automation Samples"
        subtitle="Real-world solutions we've built for clients like you"
      >
        <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {automationSamples.map((sample) => (
            <AnimatedGridItem key={sample.id}>
              <div className="group p-6 rounded-2xl border border-[rgba(0,102,255,0.2)] bg-[rgba(255,255,255,0.03)] hover:border-[#0066ff]/50 transition-all duration-300">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#0066ff]/10 text-[#00aaff] border border-[#0066ff]/20 mb-4">
                  {sample.category}
                </span>

                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#00aaff] transition-colors">
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
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[rgba(0,102,255,0.1)] text-gray-300 border border-[rgba(0,102,255,0.2)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>
      </Section>

      <Section dark>
        <AnimatedSection>
          <CTA
            heading="Ready to Automate Your Business?"
            subheading="Let's discuss your workflows and find opportunities to save time, reduce errors, and scale your operations."
            buttonText="Schedule a Consultation"
            buttonHref="/contact"
          />
        </AnimatedSection>
      </Section>
    </>
  );
}
