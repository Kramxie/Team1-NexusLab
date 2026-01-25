import Link from "next/link";
import { Section } from "@/components";
import { services, workflows, getActiveClients } from "@/content";
import NewsletterForm from "@/components/NewsletterForm";
import {
  AnimatedHero,
  AnimatedServiceCards,
  AnimatedWorkflowCards,
  AnimatedClientCards,
  AnimatedCTA,
  AnimatedChatSection,
} from "@/components/AnimatedSections";
import { FadeInUp } from "@/components/animations";

// Get only verified active clients
const clients = getActiveClients();

export default function Home() {
  return (
    <>
      {/* ============================================
          HERO SECTION (Animated)
          ============================================ */}
      <AnimatedHero clients={clients} />

      {/* ============================================
          SERVICES PREVIEW SECTION
          ============================================ */}
      <Section
        title="What We Do"
        subtitle="Full-service digital solutions tailored to your business needs"
        dark
      >
        <AnimatedServiceCards services={services} />
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            View all services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* ============================================
          WORKFLOWS PREVIEW SECTION
          ============================================ */}
      <Section
        title="How We Work"
        subtitle="A proven process that delivers results, every time"
      >
        <AnimatedWorkflowCards workflows={workflows} />
        <div className="text-center mt-12">
          <Link
            href="/workflows"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            See our full process
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* ============================================
          CLIENTS PREVIEW SECTION
          ============================================ */}
      <Section
        title="Who We've Helped"
        subtitle="Partnerships built on trust, innovation, and results"
        dark
      >
        <AnimatedClientCards clients={clients} />
        <div className="text-center mt-12">
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            View all case studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* ============================================
          NEWSLETTER SECTION
          ============================================ */}
      <Section
        title="Stay in the Loop"
        subtitle="Get insights on digital transformation, automation, and growth strategies"
      >
        <div className="max-w-xl mx-auto">
          <FadeInUp>
            <NewsletterForm />
          </FadeInUp>
        </div>
      </Section>

      {/* ============================================
          CHATBOT / LIVE CHAT SECTION (Animated)
          ============================================ */}
      <AnimatedChatSection />

      {/* ============================================
          FINAL CTA SECTION (Animated)
          ============================================ */}
      <Section>
        <AnimatedCTA />
      </Section>
    </>
  );
}
