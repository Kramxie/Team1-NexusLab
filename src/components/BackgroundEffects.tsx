"use client";

import { motion } from "framer-motion";
import { useMemo, useEffect, useState, useCallback } from "react";

/* ============================================
   Team3 Nexxus Lab Background Effects
   - FloatingParticles: Blue dots floating upward
   - HeroBackgroundEffects: Radial pulse + conic rotation + particles
   - SectionDivider: Glowing blue line at top of sections
   - ScrollIndicator: Animated scroll arrow
   - MouseTrail: Blue cursor trail (desktop only)
   ============================================ */

/**
 * FloatingParticles — Team3-style particles that float upward.
 * Renders lightweight CSS-animated dots (no heavy JS).
 */
export function FloatingParticles({
  count = 50,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Reduce particle count on mobile for performance
  const effectiveCount = isMobile ? Math.min(count, Math.ceil(count * 0.4)) : count;

  const particles = useMemo(() => {
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed * 9301 + 49297) * 233280;
      return x - Math.floor(x);
    };

    return Array.from({ length: effectiveCount }, (_, i) => ({
      id: i,
      left: seededRandom(i * 1.1) * 100,
      delay: seededRandom(i * 2.3) * 15,
      duration: seededRandom(i * 3.7) * 10 + 10,
      size: seededRandom(i * 4.9) * 4 + 2,
    }));
  }, [effectiveCount]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-particle absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: `-${p.size}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: `0 0 ${p.size * 2.5}px #0066ff`,
          }}
        />
      ))}
    </div>
  );
}

/**
 * HeroBackgroundEffects — Team3 hero section background:
 * - Radial gradient pulse centered
 * - Conic gradient rotation overlay
 * - Floating particles
 */
export function HeroBackgroundEffects({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Radial gradient pulse — Team3 .hero::before */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,102,255,0.15) 0%, transparent 70%)",
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Conic gradient rotation — Team3 .hero::after */}
      <motion.div
        className="absolute"
        style={{
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background:
            "conic-gradient(from 0deg, transparent, rgba(0,102,255,0.1), transparent)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      <FloatingParticles count={60} />
    </div>
  );
}

/**
 * SectionBackground — subtle background with optional particles and divider.
 * Use as a child inside any <section> with position:relative.
 */
export function SectionBackground({
  showParticles = true,
  particleCount = 25,
  variant = "default",
  className = "",
}: {
  showParticles?: boolean;
  particleCount?: number;
  variant?: "default" | "gradient";
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Section top divider glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0066ff] to-transparent animate-line-glow" />

      {/* Optional subtle gradient background */}
      {variant === "gradient" && (
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #000000 0%, #0a0a0a 100%)",
          }}
        />
      )}

      {/* Subtle radial accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Particles */}
      {showParticles && <FloatingParticles count={particleCount} />}
    </div>
  );
}

/**
 * ScrollIndicator — Team3-style animated scroll-down arrow for hero sections.
 */
export function ScrollIndicator({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex flex-col items-center gap-2 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <span className="text-xs text-gray-500 uppercase tracking-widest">
        Scroll
      </span>
      <div className="relative w-6 h-10 rounded-full border-2 border-[#0066ff]/40 flex justify-center">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-[#0066ff] mt-2"
          animate={{
            y: [0, 16, 0],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ boxShadow: "0 0 8px #0066ff" }}
        />
      </div>
    </motion.div>
  );
}

/**
 * MouseTrail — Team3-style cursor trail (desktop only).
 * Creates blue dots that follow mouse movement.
 */
export function MouseTrail() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Only enable on desktop
    setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (Math.random() > 0.6) return; // Only create trail 40% of the time

    const trail = document.createElement("div");
    const size = Math.random() * 6 + 2;
    trail.style.cssText = `
      position: fixed;
      width: ${size}px;
      height: ${size}px;
      background: #0066ff;
      border-radius: 50%;
      pointer-events: none;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      z-index: 9998;
      opacity: 0.7;
      box-shadow: 0 0 ${size * 3}px #0066ff;
      transition: opacity 0.6s ease, transform 0.6s ease;
    `;
    document.body.appendChild(trail);

    requestAnimationFrame(() => {
      trail.style.opacity = "0";
      trail.style.transform = "scale(2)";
    });

    setTimeout(() => trail.remove(), 700);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, handleMouseMove]);

  return null; // No visual DOM — effects are created dynamically
}

/**
 * CardHoverGlow — Radial gradient that appears on hover (Team3 service-card::before).
 * Use inside a card component with position: relative + overflow: hidden.
 */
export function CardHoverGlow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(0,102,255,0.1) 0%, transparent 70%)",
      }}
    />
  );
}
