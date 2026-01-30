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
    website: "", // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    // honeypot
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
        setStatusMessage(
          "Sorry — we could not send your message. Please try again later."
        );
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
        title="Contact"
        titleHighlight="Nexxus Lab"
        description=""
        highlightColor="cyan"
      />

      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
          {/* LEFT: Calendly */}
          <AnimatedSlideLeft>
            <div className="space-y-3">
              <div>
                <h2 className="text-sm font-semibold text-gray-200 tracking-widest uppercase">
                  Get in Touch with Us
                </h2>
                <p className="text-gray-400 text-sm">
                  Set a Google meeting appointment with us!
                </p>
              </div>

              {/* Calendly card */}
              <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-4">
                <CalendlyWidget />
              </div>
            </div>
          </AnimatedSlideLeft>

          {/* RIGHT: Form */}
          <AnimatedSlideRight>
            <div className="space-y-3">
              <div>
                <h2 className="text-sm font-semibold text-gray-200 tracking-widest uppercase">
                  Email Us!
                </h2>
                <p className="text-gray-400 text-sm">
                  If you don’t need to book a meeting with us, email us here!
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot */}
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
                    <label className="block text-xs font-medium text-gray-300 mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Juan dela Cruz"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="juan@company.com"
                    />
                  </div>

                  {/* Optional company (keep but subtle) */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">
                      COMPANY (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      disabled={loading}
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-gray-200 text-gray-900 font-semibold hover:bg-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>

                  {statusMessage && (
                    <p className="pt-2 text-sm text-gray-300 text-center">
                      {statusMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </AnimatedSlideRight>
        </div>

        
        <div className="max-w-6xl mx-auto mt-12">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-6">
            <h3 className="text-sm font-semibold text-white mb-4">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <svg
                    className="w-5 h-5"
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
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Office Locations</p>
                  <p>Makati • Taguig • Cavite</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <svg
                    className="w-5 h-5"
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
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Email</p>
                  <a
                    href="mailto:team@nexxuslab.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    team@nexxuslab.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.4 15a7.97 7.97 0 001.6-3 8 8 0 10-3 6.4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Clients</p>
                  <p>Serving US-based & international founders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
