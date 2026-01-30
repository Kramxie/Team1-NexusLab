"use client";

import { useEffect, useRef, useState } from "react";

const FORMSPREE_NEWSLETTER_ENDPOINT = "https://formspree.io/f/mnjvzrgv";

// Put your Turnstile Site Key here (safe to expose on client)
const TURNSTILE_SITE_KEY = "0x4AAAAAACVgr_quPo0x_Ta0";

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export default function NewsletterForm() {
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  const [email, setEmail] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // Load Turnstile script once and render widget
  useEffect(() => {
    const scriptSrc = "https://challenges.cloudflare.com/turnstile/v0/api.js";

    const ensureScript = () =>
      new Promise<void>((resolve) => {
        const existing = document.querySelector<HTMLScriptElement>(
          `script[src="${scriptSrc}"]`
        );
        if (existing) return resolve();

        const s = document.createElement("script");
        s.src = scriptSrc;
        s.async = true;
        s.defer = true;
        s.onload = () => resolve();
        document.body.appendChild(s);
      });

    const renderWidget = async () => {
      await ensureScript();

      // wait until turnstile is available
      const start = Date.now();
      while (!window.turnstile) {
        if (Date.now() - start > 3000) break;
        await new Promise((r) => setTimeout(r, 50));
      }

      if (!window.turnstile || !widgetRef.current) return;

      // If already rendered (HMR / route changes), don’t re-render
      if (widgetIdRef.current) return;

      widgetIdRef.current = window.turnstile.render(widgetRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: "dark",
        callback: (token) => {
          setCaptchaToken(token);
        },
        "expired-callback": () => {
          setCaptchaToken("");
        },
        "error-callback": () => {
          setCaptchaToken("");
        },
      });
    };

    renderWidget();

    return () => {
      // Cleanup widget only (don’t remove script)
      if (window.turnstile && widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // ignore
        }
        widgetIdRef.current = null;
      }
    };
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!email.trim()) {
      setStatus("Please enter your email.");
      return;
    }

    if (!captchaToken) {
      setStatus("Please complete the CAPTCHA first.");
      return;
    }

    setLoading(true);
    try {
      // We verify CAPTCHA on our server, then forward to Formspree
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          token: captchaToken,
          formspreeEndpoint: FORMSPREE_NEWSLETTER_ENDPOINT,
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.ok) {
        setStatus("Subscribed! Please check your email.");
        setEmail("");
        setCaptchaToken("");

        // reset widget for next submit
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
        }
      } else {
        setStatus(data?.message || "Subscribe failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/50">
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
            disabled={loading}
            required
          />
          <button
            type="submit"
            disabled={loading || !captchaToken}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-400 hover:to-blue-500 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>

        {/* CAPTCHA */}
        <div className="pt-2">
          <div ref={widgetRef} />
          <p className="text-xs text-gray-500 mt-2">
            Protected by Cloudflare Turnstile.
          </p>
        </div>

        {status && <p className="text-sm text-gray-300 text-center">{status}</p>}

        <p className="text-xs text-gray-500 text-center">
          No spam, ever. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
