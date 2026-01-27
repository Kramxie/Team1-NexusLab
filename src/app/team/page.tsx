"use client";

import Image from "next/image";
import { Section, CTA, AnimatedPageHero, AnimatedSection, AnimatedGrid, AnimatedGridItem } from "@/components";
import { teamSections } from "@/content";

export default function TeamPage() {
  return (
    <>
      <AnimatedPageHero
        badge={{ text: "Based in Makati City, Philippines", color: "purple" }}
        title="Meet Our"
        titleHighlight="Team"
        description="We are a passionate team of developers and advisors from the Philippines, dedicated to building innovative tech solutions that make a difference."
        highlightColor="purple"
      />

      {/* Leadership Section */}
      <Section
        title="Leadership"
        subtitle="The visionaries driving Nexxus Lab forward"
        dark
      >
        <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamSections[0].members.map((member) => (
            <AnimatedGridItem key={member.id}>
              <div className="group p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-cyan-500/50 transition-all">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-cyan-400 mb-4">{member.role}</p>

                <p className="text-sm text-gray-400 mb-6">{member.bio}</p>

                {member.socials && Object.keys(member.socials).length > 0 && (
                  <div className="flex justify-center gap-3">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-cyan-400 hover:bg-gray-800 rounded-lg transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-cyan-400 hover:bg-gray-800 rounded-lg transition-colors"
                        aria-label="GitHub"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {member.socials.facebook && (
                      <a
                        href={member.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-cyan-400 hover:bg-gray-800 rounded-lg transition-colors"
                        aria-label="Facebook"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>
      </Section>

      {/* Internship Team Section */}
      <Section
        title="Internship Team"
        subtitle="DLSUD Interns - The future of tech"
      >
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="group rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
            <div className="relative w-full aspect-video">
              <Image
                src="/images/team/internship-team.png"
                alt="Nexxus Lab Internship Team - DLSUD Interns"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                DLSUD Interns
              </h3>
              <p className="text-sm text-cyan-400 mb-4">Internship Team</p>
              <p className="text-sm text-gray-400">
                A talented group of interns from De La Salle University - Dasmariñas, 
                dedicated to learning and contributing to innovative tech solutions.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <Section
        title="Our Values"
        subtitle="What drives us every day"
      >
        <AnimatedGrid className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: "🚀",
              title: "Innovation",
              description: "We embrace new technologies and creative solutions to solve complex problems.",
            },
            {
              icon: "🤝",
              title: "Partnership",
              description: "We work alongside our clients as true partners, invested in their success.",
            },
            {
              icon: "✨",
              title: "Excellence",
              description: "We deliver high-quality work that exceeds expectations, every single time.",
            },
          ].map((value) => (
            <AnimatedGridItem key={value.title}>
              <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30 text-center">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>
      </Section>

      <Section dark>
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
          <div className="space-y-4 text-gray-400">
            <p className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Salcedo St., Legaspi Village, Makati City 1299, Philippines
            </p>
            <p className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +63 927-143-0884
            </p>
            <p className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              team@nexxuslab.com
            </p>
          </div>
        </AnimatedSection>
      </Section>

      <Section>
        <AnimatedSection>
          <CTA
            heading="Ready to Work Together?"
            subheading="Let's discuss how our team can help bring your ideas to life."
            buttonText="Contact Us"
            buttonHref="/contact"
          />
        </AnimatedSection>
      </Section>
    </>
  );
}
