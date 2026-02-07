"use client";

import { useState } from "react";
import {
  Section,
  AnimatedPageHero,
  AnimatedSlideLeft,
  AnimatedSlideRight,
} from "@/components";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xzdgepjj";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    // simple bot trap (honeypot)
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    // Honeypot: if filled, silently stop (likely bot)
    if (formData.website.trim()) {
      setLoading(false);
      setStatusMessage("Thank you — your message was sent.");
      setFormData({ name: "", email: "", company: "", message: "", website: "" });
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: `New message from Nexxus Lab Contact Form (${formData.name})`,
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok) {
        setStatusMessage("Thank you — your message was sent.");
        setFormData({ name: "", email: "", company: "", message: "", website: "" });
      } else {
        console.error("Formspree error:", data);
        setStatusMessage("Sorry — we could not send your message. Please try again later.");
      }
    } catch (err) {
      console.error("Submit failed:", err);
      setStatusMessage("Network error — please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* ✅ KEEP THIS (Let’s Talk Hero) */}
      <AnimatedPageHero
        title="Let's"
        titleHighlight="Talk"
        description="Have a project in mind? We'd love to hear about it. Reach out and let's explore how we can work together."
        highlightColor="cyan"
      />

      <Section dark>
        {/* ✅ Layout like your screenshot: Form + Calendly side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT: Message Form */}
          <AnimatedSlideLeft>
            <div className="p-5 sm:p-8 rounded-2xl border border-[rgba(0,102,255,0.2)] bg-[rgba(255,255,255,0.03)]">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot (hidden) */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                  className="hidden"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(0,102,255,0.3)] text-white placeholder-gray-500 focus:outline-none focus:border-[#0066ff] transition-colors disabled:opacity-60"
                    placeholder="Juan dela Cruz"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(0,102,255,0.3)] text-white placeholder-gray-500 focus:outline-none focus:border-[#0066ff] transition-colors disabled:opacity-60"
                    placeholder="juan@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(0,102,255,0.3)] text-white placeholder-gray-500 focus:outline-none focus:border-[#0066ff] transition-colors disabled:opacity-60"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(0,102,255,0.3)] text-white placeholder-gray-500 focus:outline-none focus:border-[#0066ff] transition-colors resize-none disabled:opacity-60"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0066ff] to-[#00aaff] text-white font-semibold hover:from-[#0055dd] hover:to-[#0099ee] transition-all duration-300 shadow-lg shadow-[#0066ff]/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {statusMessage && (
                  <p className="mt-3 text-sm text-gray-300 text-center">
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </AnimatedSlideLeft>

          {/* RIGHT: Calendly Widget (Team3 Style) */}
          <AnimatedSlideRight>
            <div className="calendly-widget-container">
              <div className="calendly-widget-header">
                <svg className="calendar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <h3>Schedule a Meeting</h3>
              </div>
              <p className="calendly-description">
                Book a free consultation to discuss your project requirements and how we can help bring your vision to life.
              </p>

              <div className="calendly-benefits">
                <div className="benefit-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>30-minute consultation</span>
                </div>
                <div className="benefit-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Free project assessment</span>
                </div>
                <div className="benefit-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Expert technical advice</span>
                </div>
              </div>

              <button
                onClick={() => window.open('https://calendly.com/justinjavonitalla/nexxus-lab', '_blank')}
                className="calendly-btn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Book Your Call Now
              </button>

              <p className="calendly-note">You&apos;ll be redirected to our Calendly booking page</p>
            </div>
          </AnimatedSlideRight>
        </div>

        {/* ✅ Contact Info goes below, cleaner + matches your screenshot idea */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Office Location */}
            <div className="p-6 rounded-2xl border border-[rgba(0,102,255,0.2)] bg-[rgba(255,255,255,0.03)]">
              <h3 className="font-semibold text-white mb-2">Office Location</h3>
              <p className="text-gray-400 text-sm">Makati • Taguig • Cavite</p>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl border border-[rgba(0,102,255,0.2)] bg-[rgba(255,255,255,0.03)]">
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <a
                href="mailto:team@nexxuslab.com"
                className="text-[#00aaff] hover:text-[#0066ff] text-sm transition-colors"
              >
                team@nexxuslab.com
              </a>
            </div>

            {/* US / International */}
            <div className="p-6 rounded-2xl border border-[rgba(0,102,255,0.2)] bg-[rgba(255,255,255,0.03)]">
              <h3 className="font-semibold text-white mb-2">
                US & International Clients
              </h3>
              <p className="text-gray-400 text-sm">
                We mostly work with international clients, especially US-based
                businesses and founders.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
