"use client";

import { useState } from "react";

const NEWSLETTER_ENDPOINT = "https://formspree.io/f/mnjvzrgv";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot (bot trap)
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // Honeypot: if filled, silently treat as success
    if (website.trim()) {
      setEmail("");
      setWebsite("");
      setStatus("Thanks! You're subscribed.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: `New Newsletter Subscriber: ${email}`,
          source: "Website Newsletter",
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok) {
        setEmail("");
        setWebsite("");
        setStatus("Thanks! You're subscribed.");
      } else {
        console.error("Formspree error:", data);
        setStatus("Sorry — we couldn’t subscribe you. Please try again.");
      }
    } catch (err) {
      console.error("Newsletter submit failed:", err);
      setStatus("Network error — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/50">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Honeypot (hidden) */}
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
          className="hidden"
        />

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={loading}
            className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-400 hover:to-blue-500 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>

        {status ? (
          <p className="text-xs text-gray-300 text-center">{status}</p>
        ) : (
          <p className="text-xs text-gray-500 text-center">
            No spam, ever. Unsubscribe anytime.
          </p>
        )}
      </form>
    </div>
  );
}
