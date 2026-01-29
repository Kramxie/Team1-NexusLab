"use client";

import { useState } from "react";
import {
  Section,
  AnimatedPageHero,
  AnimatedSlideLeft,
  AnimatedSlideRight,
} from "@/components";
import CalendlyWidget from "@/components/CalendlyWidget";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
  "https://formspree.io/f/xzdgepjj";

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
      // Formspree supports JSON submissions
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
      <AnimatedPageHero
        title="Let's"
        titleHighlight="Talk"
        description="Have a project in mind? We'd love to hear about it. Reach out and let's explore how we can work together."
        highlightColor="cyan"
      />

      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <AnimatedSlideLeft>
            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/50">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

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
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Juan dela Cruz"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="juan@company.com"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your Company"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {statusMessage && (
                  <p className="mt-3 text-sm text-gray-300 text-center">{statusMessage}</p>
                )}
              </form>
            </div>
          </AnimatedSlideLeft>

          <AnimatedSlideRight>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-400 mb-8">
                  Prefer to reach out directly? Here&apos;s how you can contact us.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Office Location</h3>
                      <p className="text-gray-400 text-sm">Makati • Taguig • Cavite</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <a
                        href="mailto:team@nexxuslab.com"
                        className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                      >
                        team@nexxuslab.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.4 15a7.97 7.97 0 001.6-3 8 8 0 10-3 6.4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">US-based Clients</h3>
                      <p className="text-gray-400 text-sm">
                        We mostly work with international clients, especially US-based businesses and founders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30">
                <h3 className="font-semibold text-white mb-4">Find Us</h3>
                <div className="aspect-video rounded-xl bg-gray-800 flex items-center justify-center">
                  <a
                    href="https://www.google.com/maps/place/Makati,+Metro+Manila/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-cyan-400 transition-colors flex flex-col items-center gap-2"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span className="text-sm">View on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSlideRight>
        </div>
      </Section>

      <Section
        title="Get in Touch with Us"
        subtitle="Set a Google meeting appointment with us!"
        dark
      >
        <CalendlyWidget />
      </Section>
    </>
  );
}
