"use client";

import { useState } from "react";
import { Section, CTA, AnimatedPageHero, AnimatedSection, AnimatedGrid, AnimatedGridItem } from "@/components";
import { getActiveClients } from "@/content";

// Get only active/verified clients
const activeClients = getActiveClients();

// Extract unique industries from active clients
const industries = ["All", ...Array.from(new Set(activeClients.map((c) => c.industry)))];

export default function ClientsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredClients =
    activeFilter === "All"
      ? activeClients
      : activeClients.filter((client) => client.industry === activeFilter);

  return (
    <>
      <AnimatedPageHero
        badge={{ text: "Trusted by Industry Leaders", color: "blue" }}
        title="Our"
        titleHighlight="Clients"
        description="We're proud to partner with innovative companies across industries. Here are some of the teams we've helped transform their digital presence."
        highlightColor="blue"
      />

      <Section
        title="Client Showcase"
        subtitle="Filter by industry to explore our work"
        dark
      >
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                  activeFilter === industry
                    ? "bg-cyan-500 border-cyan-500 text-white"
                    : "bg-transparent border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <p className="text-center text-sm text-gray-500 mb-8">
          Showing {filteredClients.length} client{filteredClients.length !== 1 ? "s" : ""}
          {activeFilter !== "All" && ` in ${activeFilter}`}
        </p>

        <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client) => (
            <AnimatedGridItem key={client.id}>
              <div className="group p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-2xl font-bold text-gray-400 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all">
                    {client.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {client.name}
                    </h3>
                    <span className="text-xs text-gray-500">{client.industry}</span>
                  </div>
                </div>

               
                <p className="text-sm text-gray-400 mb-4">{client.description}</p>

                
                {client.testimonial && (
                  <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 mb-4">
                    <p className="text-xs text-cyan-400 font-medium mb-1">Result Highlight</p>
                    <p className="text-sm text-gray-300 italic">
                      &quot;{client.testimonial.quote.slice(0, 60)}...&quot;
                    </p>
                  </div>
                )}

             
                {client.website ? (
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Visit Project
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : (
                  <span className="text-sm text-gray-600">Case study coming soon</span>
                )}
              </div>
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>

        {filteredClients.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No clients found in this industry.</p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 text-cyan-400 hover:text-cyan-300"
            >
              Clear filter
            </button>
          </div>
        )}
      </Section>

      <Section
        title="What They Say"
        subtitle="Hear from the teams we've worked with"
      >
        <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {activeClients
            .filter((c) => c.testimonial)
            .slice(0, 4)
            .map((client) => (
              <AnimatedGridItem key={client.id}>
                <blockquote className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30">
                  <svg
                    className="w-8 h-8 text-cyan-500/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-300 mb-4">{client.testimonial!.quote}</p>
                  <footer className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-sm font-bold text-gray-400">
                      {client.testimonial!.author.charAt(0)}
                    </div>
                    <div>
                      <cite className="not-italic font-medium text-white text-sm">
                        {client.testimonial!.author}
                      </cite>
                      <p className="text-xs text-gray-500">{client.testimonial!.role}</p>
                    </div>
                  </footer>
                </blockquote>
              </AnimatedGridItem>
            ))}
        </AnimatedGrid>
      </Section>

      
      <Section dark>
        <AnimatedSection>
          <CTA
            heading="Want to Be Our Next Success Story?"
            subheading="Join the companies that have transformed their business with our help."
            buttonText="Start Your Project"
            buttonHref="/contact"
          />
        </AnimatedSection>
      </Section>
    </>
  );
}
