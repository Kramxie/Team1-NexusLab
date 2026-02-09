"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Section, CTA, AnimatedPageHero, AnimatedSection, AnimatedGrid, AnimatedGridItem } from "@/components";
import { getActiveClients, portfolioProjects, PortfolioProject } from "@/content";

// Image loading states tracking
function useImageLoading() {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  
  const handleImageLoad = useCallback((id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  }, []);
  
  const isLoaded = useCallback((id: string) => loadedImages.has(id), [loadedImages]);
  
  return { handleImageLoad, isLoaded };
}

// Under Development Modal Component
function UnderDevelopmentModal({ 
  project, 
  onClose 
}: { 
  project: PortfolioProject | null; 
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-md w-full bg-nex-card border border-[rgba(0,102,255,0.3)] rounded-2xl p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-nex-primary/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-nex-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white text-center mb-2">
          Under Development
        </h3>
        <p className="text-gray-400 text-center mb-4">
          <span className="text-nex-secondary font-medium">{project.name}</span> is currently being built. 
          We&apos;re working hard to bring you something amazing!
        </p>

        {/* Project Preview */}
        <div className="relative aspect-video rounded-lg overflow-hidden mb-4 border border-[rgba(0,102,255,0.2)]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <p className="text-sm text-gray-500 text-center">
          Check back soon for updates!
        </p>
      </div>
    </div>
  );
}

// Get only active/verified clients
const activeClients = getActiveClients();

// Extract unique industries from active clients
const industries = ["All", ...Array.from(new Set(activeClients.map((c) => c.industry)))];

export default function ClientsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [underDevProject, setUnderDevProject] = useState<PortfolioProject | null>(null);
  const { handleImageLoad, isLoaded } = useImageLoading();

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
                    ? "bg-nex-primary border-nex-primary text-white"
                    : "bg-transparent border-[rgba(0,102,255,0.3)] text-gray-400 hover:border-nex-primary/50 hover:text-white"
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
              <div className="group p-6 rounded-2xl border border-[rgba(0,102,255,0.2)] bg-nex-card hover:border-nex-primary/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-linear-to-br from-[rgba(0,102,255,0.2)] to-[rgba(0,170,255,0.2)] group-hover:from-nex-primary/20 group-hover:to-nex-secondary/20 transition-all">
                    {/* Loading skeleton */}
                    {!isLoaded(client.id) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
                    )}
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className={`object-cover transition-opacity duration-300 ${isLoaded(client.id) ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => handleImageLoad(client.id)}
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-nex-primary transition-colors">
                      {client.name}
                    </h3>
                    <span className="text-xs text-gray-500">{client.industry}</span>
                  </div>
                </div>

               
                <p className="text-sm text-gray-400 mb-4">{client.description}</p>

                
                {client.testimonial && (
                  <div className="p-3 rounded-lg bg-[rgba(0,102,255,0.1)] border border-[rgba(0,102,255,0.2)] mb-4">
                    <p className="text-xs text-nex-secondary font-medium mb-1">Result Highlight</p>
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
                    className="inline-flex items-center gap-2 text-sm text-nex-secondary hover:text-nex-primary transition-colors"
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
              className="mt-4 text-nex-secondary hover:text-nex-primary"
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
                <blockquote className="p-6 rounded-2xl border border-[rgba(0,102,255,0.2)] bg-nex-card">
                  <svg
                    className="w-8 h-8 text-nex-primary/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-300 mb-4">{client.testimonial!.quote}</p>
                  <footer className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-[rgba(0,102,255,0.2)] to-[rgba(0,102,255,0.1)] flex items-center justify-center text-sm font-bold text-gray-400">
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

      {/* Project Showcase Section */}
      <Section
        title="Project Showcase"
        subtitle="Explore the digital experiences we've crafted for our clients"
        dark
      >
        <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project) => {
            const isUnderDev = project.underDevelopment;
            const ProjectWrapper = isUnderDev ? 'button' : 'a';
            const wrapperProps = isUnderDev 
              ? { 
                  onClick: () => setUnderDevProject(project),
                  type: 'button' as const
                }
              : { 
                  href: project.url,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                };

            return (
            <AnimatedGridItem key={project.id}>
              <ProjectWrapper
                {...wrapperProps}
                className="group block rounded-2xl overflow-hidden border border-[rgba(0,102,255,0.2)] bg-nex-card hover:border-nex-primary/50 transition-all duration-300 text-left w-full"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-nex-primary/20 backdrop-blur-sm text-nex-secondary rounded-full border border-nex-primary/30">
                      {project.category}
                    </span>
                    {isUnderDev && (
                      <span className="px-3 py-1 text-xs font-medium bg-yellow-500/20 backdrop-blur-sm text-yellow-400 rounded-full border border-yellow-500/30">
                        Under Development
                      </span>
                    )}
                  </div>

                  {/* View Project Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`px-4 py-2 ${isUnderDev ? 'bg-yellow-500/90' : 'bg-nex-primary/90'} backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center gap-2`}>
                      {isUnderDev ? 'Coming Soon' : 'View Project'}
                      {isUnderDev ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white group-hover:text-nex-primary transition-colors mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </ProjectWrapper>
            </AnimatedGridItem>
          )})}
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

      {/* Under Development Modal */}
      <UnderDevelopmentModal 
        project={underDevProject} 
        onClose={() => setUnderDevProject(null)} 
      />
    </>
  );
}
