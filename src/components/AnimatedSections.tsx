"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FadeInUp,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  PulseGlow,
} from "@/components/animations";
import { Service, Workflow, Client } from "@/content";

// ============================================
// ANIMATED HERO SECTION
// ============================================
export function AnimatedHero({ clients }: { clients: Client[] }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gray-950">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <FadeInUp delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-sm text-gray-300 mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Philippine-based Tech Team
          </div>
        </FadeInUp>

        {/* Main Heading */}
        <FadeInUp delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <TextReveal
              text="Leave the Tech"
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            />
            <br />
            <motion.span
              className="text-white inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              to Us.
            </motion.span>
          </h1>
        </FadeInUp>

        {/* Subheadline */}
        <FadeInUp delay={0.3}>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            We are a team of developers and advisors from the Philippines, building
            custom software, AI chatbots, and automation solutions that transform businesses.
          </p>
        </FadeInUp>

        {/* CTA Buttons */}
        <FadeInUp delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PulseGlow>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
              >
                Start Your Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </PulseGlow>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </FadeInUp>

        {/* Trust Indicators */}
        <FadeInUp delay={0.5}>
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500 mb-4">Trusted by innovative companies</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {clients.slice(0, 4).map((client) => (
                <span key={client.id} className="text-gray-400 font-semibold tracking-wide">
                  {client.name}
                </span>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================
// ANIMATED SERVICE CARDS
// ============================================
export function AnimatedServiceCards({ services }: { services: Service[] }) {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.slice(0, 6).map((service) => (
        <StaggerItem key={service.id}>
          <motion.div
            className="h-full p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 transition-colors"
            whileHover={{
              y: -5,
              boxShadow: "0 10px 40px rgba(34, 211, 238, 0.1)",
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-3xl">{service.icon}</span>
            <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-2 text-gray-400 text-sm">{service.description}</p>
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

// ============================================
// ANIMATED WORKFLOW CARDS
// ============================================
export function AnimatedWorkflowCards({ workflows }: { workflows: Workflow[] }) {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {workflows.slice(0, 3).map((workflow, index) => (
        <StaggerItem key={workflow.id}>
          <motion.div
            className="relative p-6 rounded-2xl border border-gray-800 bg-gray-900/50 h-full"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {/* Step Number */}
            <motion.div
              className="absolute -top-4 left-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold">
                {index + 1}
              </span>
            </motion.div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {workflow.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{workflow.description}</p>
              <ul className="space-y-2">
                {workflow.steps.slice(0, 3).map((step) => (
                  <li key={step.step} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-cyan-500 mt-1">›</span>
                    {step.title}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

// ============================================
// ANIMATED CLIENT CARDS
// ============================================
export function AnimatedClientCards({ clients }: { clients: Client[] }) {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clients.slice(0, 6).map((client) => (
        <StaggerItem key={client.id}>
          <motion.div
            className="group p-6 rounded-2xl border border-gray-800 bg-gray-900/30 hover:border-gray-700 transition-all h-full"
            whileHover={{
              y: -5,
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xl font-bold text-gray-400"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
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
            <p className="text-sm text-gray-400">{client.description}</p>
            {client.testimonial && (
              <blockquote className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-500 italic">
                  &quot;{client.testimonial.quote.slice(0, 80)}...&quot;
                </p>
                <cite className="block mt-2 text-xs text-gray-600 not-italic">
                  — {client.testimonial.author}
                </cite>
              </blockquote>
            )}
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

// ============================================
// ANIMATED CTA SECTION
// ============================================
export function AnimatedCTA() {
  return (
    <FadeIn>
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-gray-800 p-8 md:p-12 text-center"
        whileHover={{
          boxShadow: "0 0 60px rgba(34, 211, 238, 0.15)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />

        <div className="relative">
          <FadeInUp>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Let&apos;s Build Your Automation
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Ready to transform your business with cutting-edge digital solutions?
              Let&apos;s start a conversation about your next project.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <PulseGlow className="inline-block rounded-full">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
              >
                Schedule a Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </PulseGlow>
          </FadeInUp>
        </div>
      </motion.div>
    </FadeIn>
  );
}

// ============================================
// ANIMATED CHATBOT SECTION
// ============================================
export function AnimatedChatSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
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
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
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
