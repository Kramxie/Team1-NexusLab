"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/workflows", label: "Workflows" },
  { href: "/clients", label: "Clients" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const socialLinks = [
  { type: "facebook", label: "Facebook", href: "https://www.facebook.com/nexxuslab/" },
  { type: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/nexxus-lab/" },
  { type: "instagram", label: "Instagram", href: "https://www.instagram.com/nexxuslab.official/" },
  { type: "github", label: "GitHub", href: "" }, // empty for now
] as const;

// Simple SVG social icons (no external libs)
const SocialIcon = ({
  type,
}: {
  type: "facebook" | "linkedin" | "github" | "instagram";
}) => {
  const paths: Record<string, React.ReactNode> = {
    facebook: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
    linkedin: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
    github: (
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    ),
    instagram: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    ),
  };

  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  );
};

export default function Footer() {
  const [toast, setToast] = useState<string | null>(null);

  // auto-hide toast
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2800);
    return () => clearTimeout(t);
  }, [toast]);

  const handleLegalClick = (label: string) => {
    console.info(`[Footer] "${label}" clicked — page under development.`);
    setToast(`${label} is under development. Coming soon!`);
  };

  return (
    <footer className="bg-black border-t border-[rgba(0,102,255,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold bg-linear-to-r from-nex-primary to-nex-secondary bg-clip-text text-transparent"
            >
              NEXXUS LAB
            </Link>

            <p className="mt-4 text-gray-400 text-sm max-w-sm">
              Leave the tech to us. We are a team of developers and advisors from
              the Philippines, building innovative software solutions.
            </p>

            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ type, label, href }) => {
                const disabled = !href;

                return (
                  <a
                    key={type}
                    href={disabled ? undefined : href}
                    target={disabled ? undefined : "_blank"}
                    rel={disabled ? undefined : "noopener noreferrer"}
                    aria-label={label}
                    aria-disabled={disabled}
                    title={disabled ? "Coming soon" : label}
                    className={`p-2 rounded-lg transition-colors ${
                      disabled
                        ? "text-gray-700 cursor-not-allowed pointer-events-none"
                        : "text-gray-500 hover:text-nex-primary hover:bg-[rgba(0,102,255,0.1)]"
                    }`}
                  >
                    <SocialIcon type={type} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-nex-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  {/* Button instead of Link so it won't 404 */}
                  <button
                    type="button"
                    onClick={() => handleLegalClick(link.label)}
                    className="text-left text-gray-400 hover:text-nex-primary text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(0,102,255,0.1)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nexxus Lab. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Leave the Tech to Us
          </p>
        </div>
      </div>

      {/* Toast / popup */}
      <div
        aria-live="polite"
        className={`fixed bottom-5 right-5 z-50 transition-all duration-200 ${
          toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="max-w-xs rounded-xl border border-[rgba(0,102,255,0.3)] bg-black/95 px-4 py-3 shadow-lg">
          <p className="text-sm text-gray-200">{toast}</p>
          <p className="text-xs text-gray-500 mt-1">We&apos;re working on it.</p>
        </div>
      </div>
    </footer>
  );
}
