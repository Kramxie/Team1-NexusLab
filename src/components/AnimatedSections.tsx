"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FadeInUp,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  PulseGlow,
  GlitchText,
  ParticleField,
  GridBackground,
  CyberCard,
  FloatingElement,
} from "@/components/animations";
import { HeroBackgroundEffects, ScrollIndicator, FloatingParticles } from "@/components/BackgroundEffects";
import { Service, Workflow, Client } from "@/content";

export function AnimatedHero({ clients }: { clients: Client[] }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Team3 hero background: radial pulse + conic rotation + particles */}
      <HeroBackgroundEffects />

      <div className="absolute inset-0 bg-black/30">
        <GridBackground />
        <motion.div
          className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#0066ff]/15 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#00aaff]/15 rounded-full blur-[100px]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#0066ff]/10 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <FadeInUp delay={0}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(0,102,255,0.3)] text-sm text-gray-300 mb-8 backdrop-blur-sm"
            whileHover={{ borderColor: "rgba(0, 102, 255, 0.6)", scale: 1.02 }}
          >
            <motion.span
              className="w-2 h-2 bg-[#0066ff] rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(0, 102, 255, 0.4)",
                  "0 0 0 8px rgba(0, 102, 255, 0)",
                  "0 0 0 0 rgba(0, 102, 255, 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Philippine-based Tech Team
          </motion.div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block">
              <GlitchText
                text="Leave the Tech"
                className="bg-gradient-to-r from-[#0066ff] via-[#00aaff] to-[#0066ff] bg-clip-text text-transparent"
              />
            </span>
            <motion.span
              className="text-white inline-block mt-2"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              to Us.
            </motion.span>
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            We are a team of developers and advisors from the Philippines,
            building custom software, AI chatbots, and automation solutions that
            transform businesses.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PulseGlow>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full bg-gradient-to-r from-[#0066ff] to-[#00aaff] text-white hover:shadow-[0_15px_40px_rgba(0,102,255,0.6)] transition-all duration-300 hover:-translate-y-1"
                >
                  Start Your Project
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </PulseGlow>

            <motion.div
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(0, 102, 255, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-full border border-[#0066ff] text-[#0066ff] hover:bg-[#0066ff]/10 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.5}>
          <div className="mt-16 pt-8 border-t border-[rgba(0,102,255,0.1)]">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
              Trusted by innovative companies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {clients.slice(0, 4).map((client, index) => (
                <motion.span
                  key={client.id}
                  className="text-gray-400 font-semibold tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ color: "#0066ff", scale: 1.05 }}
                >
                  {client.name}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>

      {/* Team3 scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <ScrollIndicator />
      </div>
    </section>
  );
}

export function AnimatedServiceCards({ services }: { services: Service[] }) {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.slice(0, 6).map((service, index) => (
        <StaggerItem key={service.id}>
          <CyberCard>
            <motion.div
              className="h-full p-6 rounded-3xl bg-[rgba(255,255,255,0.03)] border border-[rgba(0,102,255,0.2)] hover:border-[#0066ff] transition-colors relative overflow-hidden group"
              whileHover={{
                y: -8,
                boxShadow: "0 25px 70px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-transparent to-[#00aaff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0066ff] to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <FloatingElement amplitude={5} duration={3 + index * 0.2}>
                <span className="text-4xl block mb-4">{service.icon}</span>
              </FloatingElement>
              <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-[#0066ff] transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-[#cccccc] text-sm">{service.description}</p>
              <motion.div
                className="absolute bottom-0 right-0 w-20 h-20 bg-[#0066ff]/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            </motion.div>
          </CyberCard>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

export function AnimatedWorkflowCards({ workflows }: { workflows: Workflow[] }) {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
      {workflows.slice(0, 3).map((workflow, index) => (
        <StaggerItem key={workflow.id}>
          <motion.div
            className="relative p-8 rounded-3xl border border-[rgba(0,102,255,0.2)] bg-[rgba(255,255,255,0.03)] h-full overflow-visible group"
            whileHover={{ y: -8, borderColor: "rgba(0, 102, 255, 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-b from-[#0066ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 200,
              }}
            >
              <motion.span
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00aaff] text-white text-base font-bold shadow-lg shadow-[rgba(0,102,255,0.3)] border-4 border-black"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 102, 255, 0.3)",
                    "0 0 40px rgba(0, 102, 255, 0.5)",
                    "0 0 20px rgba(0, 102, 255, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                {index + 1}
              </motion.span>
            </motion.div>

            <div className="mt-8 relative">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#0066ff] transition-colors">
                {workflow.title}
              </h3>
              <p className="text-[#cccccc] text-sm mb-4">
                {workflow.description}
              </p>
              <ul className="space-y-2">
                {workflow.steps.slice(0, 3).map((step, stepIndex) => (
                  <motion.li
                    key={step.step}
                    className="flex items-start gap-2 text-sm text-gray-500"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + stepIndex * 0.1 }}
                  >
                    <motion.span
                      className="text-[#0066ff] mt-0.5"
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: stepIndex * 0.2,
                      }}
                    >
                      ›
                    </motion.span>
                    {step.title}
                  </motion.li>
                ))}
              </ul>
            </div>

            {index < 2 && (
              <motion.div
                className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 text-[#0066ff]/30"
                animate={{ x: [0, 5, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            )}
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

export function AnimatedClientCards({ clients }: { clients: Client[] }) {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clients.slice(0, 6).map((client) => (
        <StaggerItem key={client.id}>
          <CyberCard>
            <motion.div
              className="group p-6 rounded-3xl border border-[rgba(0,102,255,0.2)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(0,102,255,0.5)] transition-all h-full relative overflow-hidden"
              whileHover={{
                y: -8,
                boxShadow: "0 25px 70px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-transparent to-[#00aaff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-4 mb-4 relative">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[rgba(0,102,255,0.1)] to-[rgba(0,102,255,0.05)] flex items-center justify-center text-xl font-bold text-[#0066ff] border border-[rgba(0,102,255,0.2)] group-hover:border-[rgba(0,102,255,0.5)] transition-colors"
                  whileHover={{
                    rotate: [0, -10, 10, -5, 5, 0],
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.5 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(0, 102, 255, 0)",
                      "0 0 20px rgba(0, 102, 255, 0.2)",
                      "0 0 0 rgba(0, 102, 255, 0)",
                    ],
                  }}
                >
                  {client.name.charAt(0)}
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-[#0066ff] transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-500">{client.industry}</p>
                </div>
              </div>
              <p className="text-sm text-[#cccccc] relative">{client.description}</p>
              {client.testimonial && (
                <motion.blockquote
                  className="mt-4 pt-4 border-t border-[rgba(0,102,255,0.1)] group-hover:border-[rgba(0,102,255,0.3)] transition-colors relative"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  <p className="text-sm text-gray-500 italic">
                    &quot;{client.testimonial.quote.slice(0, 80)}...&quot;
                  </p>
                  <cite className="block mt-2 text-xs text-gray-600 not-italic">
                    — {client.testimonial.author}
                  </cite>
                </motion.blockquote>
              )}
              <motion.div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#0066ff]/5 rounded-full blur-2xl group-hover:bg-[#0066ff]/10 transition-colors" />
            </motion.div>
          </CyberCard>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

export function AnimatedCTA() {
  return (
    <FadeIn>
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0066ff]/10 via-[#00aaff]/10 to-[#0066ff]/10 border border-[rgba(0,102,255,0.2)] p-6 sm:p-8 md:p-12 text-center"
        whileHover={{
          boxShadow: "0 0 80px rgba(0, 102, 255, 0.2)",
          borderColor: "rgba(0, 102, 255, 0.5)",
        }}
        transition={{ duration: 0.4 }}
      >
        <GridBackground />
        <motion.div
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0066ff] to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0066ff] to-transparent"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#0066ff]/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative z-10">
          <FadeInUp>
            <GlitchText
              text="Let's Build Your Automation"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 inline-block"
            />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Ready to transform your business with cutting-edge digital
              solutions? Let&apos;s start a conversation about your next project.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <PulseGlow className="inline-block rounded-full">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-[#0066ff] to-[#00aaff] text-white hover:shadow-[0_15px_40px_rgba(0,102,255,0.6)] transition-all duration-300 hover:-translate-y-1"
                >
                  Schedule a Call
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </PulseGlow>
          </FadeInUp>
        </div>
      </motion.div>
    </FadeIn>
  );
}

export function AnimatedChatSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
      <motion.div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.05)_0%,transparent_70%)]" />
      <FloatingParticles count={15} />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeInUp>
          <h2 className="text-2xl font-bold text-white mb-4">
            Have Questions? We&apos;re Here to Help
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-gray-400 mb-8">
            Chat with us in real-time or leave a message. Our team typically
            responds within a few hours.
          </p>
        </FadeInUp>

        {/* ✅ UPDATED: clicking this triggers opening the floating chatbot */}
        <FadeInUp delay={0.2}>
          <motion.button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(new Event("open-chatbot"));
              }
            }}
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(0,102,255,0.2)] text-white hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(0,102,255,0.5)] transition-all backdrop-blur-sm"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(0, 102, 255, 0.25)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(34, 197, 94, 0.4)",
                  "0 0 0 10px rgba(34, 197, 94, 0)",
                  "0 0 0 0 rgba(34, 197, 94, 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Start a Conversation</span>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </motion.button>
        </FadeInUp>
      </div>
    </section>
  );
}
