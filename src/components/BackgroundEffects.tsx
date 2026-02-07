"use client";

import { motion } from "framer-motion";
import { useMemo, useEffect, useState, useCallback } from "react";

/* ============================================
   Team3 Nexxus Lab Background Effects
   ============================================ */

const MOBILE_BREAKPOINT = 768;

function getIsMobileParticles() {
  if (typeof window === "undefined") return false; // safe default for SSR
  return window.innerWidth < MOBILE_BREAKPOINT;
}

function getIsMobileTrail() {
  if (typeof window === "undefined") return true; // safe default for SSR
  return window.innerWidth < MOBILE_BREAKPOINT || "ontouchstart" in window;
}

/**
 * FloatingParticles — Team3-style particles that float upward.
 */
export function FloatingParticles({
  count = 50,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  // ✅ Set initial value WITHOUT calling setState in an effect
  const [isMobile, setIsMobile] = useState<boolean>(() => getIsMobileParticles());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
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
 * HeroBackgroundEffects — Team3 hero section background
 */
export function HeroBackgroundEffects({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
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

      <FloatingParticles count={60} />
    </div>
  );
}

/**
 * SectionBackground
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
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0066ff] to-transparent animate-line-glow" />

      {variant === "gradient" && (
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #000000 0%, #0a0a0a 100%)",
          }}
        />
      )}

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.05) 0%, transparent 70%)",
        }}
      />

      {showParticles && <FloatingParticles count={particleCount} />}
    </div>
  );
}

/**
 * ScrollIndicator
 */
export function ScrollIndicator({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex flex-col items-center gap-2 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
      <div className="relative w-6 h-10 rounded-full border-2 border-[#0066ff]/40 flex justify-center">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-[#0066ff] mt-2"
          animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ boxShadow: "0 0 8px #0066ff" }}
        />
      </div>
    </motion.div>
  );
}

/**
 * MouseTrail — desktop only
 */
export function MouseTrail() {
  // ✅ Set initial value lazily (no setState inside effect body)
  const [isMobile, setIsMobile] = useState<boolean>(() => getIsMobileTrail());

  useEffect(() => {
    const onResize = () => setIsMobile(getIsMobileTrail());
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (Math.random() > 0.6) return;

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

  return null;
}

/**
 * CardHoverGlow
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
