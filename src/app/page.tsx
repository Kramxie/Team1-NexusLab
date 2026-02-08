import Link from "next/link";
import { Section, PortfolioCarousel, AutomationShowcase } from "@/components";
import { services, workflows, getActiveClients, portfolioProjects } from "@/content";
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
      <AnimatedHero clients={clients} />

      <Section
        title="What We Do"
        subtitle="Full-service digital solutions tailored to your business needs"
        dark
      >
        <AnimatedServiceCards services={services} />
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-nex-secondary hover:text-nex-primary font-medium transition-colors"
          >
            View all services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      <Section
        title="How We Work"
        subtitle="A proven process that delivers results, every time"
      >
        <AnimatedWorkflowCards workflows={workflows} />
        <div className="text-center mt-12">
          <Link
            href="/workflows"
            className="inline-flex items-center gap-2 text-nex-secondary hover:text-nex-primary font-medium transition-colors"
          >
            See our full process
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      <Section
        title="Who We've Helped"
        subtitle="Partnerships built on trust, innovation, and results"
        dark
      >
        <AnimatedClientCards clients={clients} />
        <div className="text-center mt-12">
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-nex-secondary hover:text-nex-primary font-medium transition-colors"
          >
            View all case studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      <Section
        title="Our Portfolio"
        subtitle="Explore the projects we've brought to life"
      >
        <PortfolioCarousel projects={portfolioProjects} autoPlayInterval={5000} />
      </Section>

      <Section
        title="Sample of Basic Automation"
        subtitle="See how we streamline workflows and save time"
        dark
      >
        <AutomationShowcase
          videoId="fIFpWeHV9Fw"
          description="This demo showcases a basic automation workflow that eliminates repetitive tasks, reduces human error, and works around the clock. Imagine what custom automation can do for your business."
        />
      </Section>

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

      <AnimatedChatSection />

      <Section>
        <AnimatedCTA />
      </Section>
    </>
  );
}
