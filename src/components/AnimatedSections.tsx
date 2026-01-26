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
import { Service, Workflow, Client } from "@/content";

export function AnimatedHero({ clients }: { clients: Client[] }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gray-950">
        <GridBackground />
        <ParticleField />
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
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
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]"
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-cyan-500/30 text-sm text-gray-300 mb-8 backdrop-blur-sm"
            whileHover={{ borderColor: "rgba(34, 211, 238, 0.6)", scale: 1.02 }}
          >
            <motion.span 
              className="w-2 h-2 bg-cyan-400 rounded-full"
              animate={{ 
                boxShadow: ["0 0 0 0 rgba(34, 211, 238, 0.4)", "0 0 0 8px rgba(34, 211, 238, 0)", "0 0 0 0 rgba(34, 211, 238, 0.4)"],
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
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
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
            We are a team of developers and advisors from the Philippines, building
            custom software, AI chatbots, and automation solutions that transform businesses.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PulseGlow>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </motion.div>
            </PulseGlow>
            <motion.div 
              whileHover={{ scale: 1.02, borderColor: "rgba(34, 211, 238, 0.5)" }} 
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.5}>
          <div className="mt-16 pt-8 border-t border-gray-800/50">
            <p className="text-sm text-gray-500 mb-4">Trusted by innovative companies</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {clients.slice(0, 4).map((client, index) => (
                <motion.span 
                  key={client.id} 
                  className="text-gray-400 font-semibold tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ color: "#22d3ee", scale: 1.05 }}
                >
                  {client.name}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeInUp>
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
              className="h-full p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 transition-colors relative overflow-hidden group"
              whileHover={{
                y: -8,
                boxShadow: "0 20px 60px rgba(34, 211, 238, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <motion.div
                className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <FloatingElement amplitude={5} duration={3 + index * 0.2}>
                <span className="text-4xl block mb-4">{service.icon}</span>
              </FloatingElement>
              <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">{service.title}</h3>
              <p className="mt-2 text-gray-400 text-sm">{service.description}</p>
              <motion.div 
                className="absolute bottom-0 right-0 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl"
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
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {workflows.slice(0, 3).map((workflow, index) => (
        <StaggerItem key={workflow.id}>
          <motion.div
            className="relative p-6 rounded-2xl border border-gray-800 bg-gray-900/50 h-full overflow-hidden group"
            whileHover={{ y: -8, borderColor: "rgba(34, 211, 238, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <motion.div
              className="absolute -top-4 left-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
            >
              <motion.span 
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold shadow-lg shadow-cyan-500/30"
                animate={{
                  boxShadow: ["0 0 20px rgba(34, 211, 238, 0.3)", "0 0 40px rgba(34, 211, 238, 0.5)", "0 0 20px rgba(34, 211, 238, 0.3)"],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {index + 1}
              </motion.span>
            </motion.div>
            <div className="mt-6 relative">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {workflow.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{workflow.description}</p>
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
                      className="text-cyan-500 mt-0.5"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: stepIndex * 0.2 }}
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
                className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 text-cyan-500/30"
                animate={{ x: [0, 5, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
              className="group p-6 rounded-2xl border border-gray-800 bg-gray-900/30 hover:border-cyan-500/30 transition-all h-full relative overflow-hidden"
              whileHover={{
                y: -8,
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="flex items-center gap-4 mb-4 relative">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xl font-bold text-cyan-400 border border-gray-700 group-hover:border-cyan-500/50 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  animate={{
                    boxShadow: ["0 0 0 rgba(34, 211, 238, 0)", "0 0 20px rgba(34, 211, 238, 0.2)", "0 0 0 rgba(34, 211, 238, 0)"],
                  }}
                >
                  {client.name.charAt(0)}
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-500">{client.industry}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 relative">{client.description}</p>
              {client.testimonial && (
                <motion.blockquote 
                  className="mt-4 pt-4 border-t border-gray-800 group-hover:border-cyan-500/20 transition-colors relative"
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
              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors"
              />
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
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-gray-800 p-8 md:p-12 text-center"
        whileHover={{
          boxShadow: "0 0 80px rgba(34, 211, 238, 0.2)",
          borderColor: "rgba(34, 211, 238, 0.3)",
        }}
        transition={{ duration: 0.4 }}
      >
        <GridBackground />
        <motion.div
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"
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
              className="text-2xl md:text-3xl font-bold text-white mb-4 inline-block"
            />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Ready to transform your business with cutting-edge digital solutions?
              Let&apos;s start a conversation about your next project.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <PulseGlow className="inline-block rounded-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30"
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.05)_0%,transparent_70%)]"
      />
      <div className="max-w-4xl mx-auto text-center relative">
        <FadeInUp>
          <h2 className="text-2xl font-bold text-white mb-4">
            Have Questions? We&apos;re Here to Help
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-gray-400 mb-8">
            Chat with us in real-time or leave a message. Our team typically responds within a few hours.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <motion.button
            type="button"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gray-800/80 border border-gray-700 text-white hover:bg-gray-700 hover:border-cyan-500/30 transition-all backdrop-blur-sm"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(34, 211, 238, 0.25)" }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{
                boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.4)", "0 0 0 10px rgba(34, 197, 94, 0)", "0 0 0 0 rgba(34, 197, 94, 0.4)"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Start a Conversation</span>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </motion.button>
        </FadeInUp>
      </div>
    </section>
  );
}
