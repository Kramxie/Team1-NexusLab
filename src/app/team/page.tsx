"use client";

import Image from "next/image";
import {
  Section,
  CTA,
  AnimatedPageHero,
  AnimatedSection,
  AnimatedGrid,
  AnimatedGridItem,
} from "@/components";
import { teamSections } from "@/content";

export default function TeamPage() {
  return (
    <>
      <AnimatedPageHero
        badge={{ text: "Serving US & international clients", color: "purple" }}
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
        <AnimatedGrid className="grid grid-cols-1 gap-8 max-w-4xl mx-auto place-items-center">
          {teamSections[0].members
            .filter((m) => m.name === "Chris Bautista")
            .map((member) => (
              <AnimatedGridItem key={member.id}>
                <div className="group p-6 rounded-2xl border border-[rgba(0,102,255,0.2)] bg-nex-card hover:border-nex-primary/50 transition-all duration-300 text-center w-full max-w-xl">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[rgba(0,102,255,0.3)] group-hover:border-nex-primary/50 transition-all">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-nex-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-nex-secondary mb-4">{member.role}</p>

                  <p className="text-sm text-gray-400 mb-6">{member.bio}</p>

                  {/* ✅ LinkedIn ONLY */}
                  {member.socials?.linkedin && (
                    <div className="flex justify-center">
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-nex-primary hover:bg-[rgba(0,102,255,0.1)] rounded-lg transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
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
            <div className="group rounded-2xl border border-[rgba(0,102,255,0.2)] bg-nex-card hover:border-nex-primary/50 transition-all duration-300 overflow-hidden">
            <div className="relative w-full aspect-video">
              <Image
                src="/images/team/intern-team.jfif"
                alt="Nexxus Lab Internship Team - DLSUD Interns"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-nex-primary transition-colors">
                DLSUD Interns
              </h3>
              <p className="text-sm text-nex-secondary mb-4">Internship Team</p>
              <p className="text-sm text-gray-400">
                A talented group of interns from De La Salle University -
                Dasmariñas, dedicated to learning and contributing to innovative
                tech solutions.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <Section title="Our Values" subtitle="What drives us every day">
        <AnimatedGrid className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: "🚀",
              title: "Innovation",
              description:
                "We embrace new technologies and creative solutions to solve complex problems.",
            },
            {
              icon: "🤝",
              title: "Partnership",
              description:
                "We work alongside our clients as true partners, invested in their success.",
            },
            {
              icon: "✨",
              title: "Excellence",
              description:
                "We deliver high-quality work that exceeds expectations, every single time.",
            },
          ].map((value) => (
            <AnimatedGridItem key={value.title}>
              <div className="p-6 rounded-2xl border border-[rgba(0,102,255,0.2)] bg-nex-card text-center">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>
      </Section>

      {/* Get in Touch Section */}
      <Section dark>
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
          <div className="space-y-4 text-gray-400">
            <p className="flex items-center justify-center gap-3">
              <svg
                className="w-5 h-5 text-nex-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>
                <span className="font-medium text-gray-200">Office Locations:</span>{" "}
                Makati • Taguig • Cavite
              </span>
            </p>

            <p className="flex items-center justify-center gap-3">
              <svg
                className="w-5 h-5 text-nex-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
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
