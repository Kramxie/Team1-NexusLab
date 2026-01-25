"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// ============================================
// ANIMATION VARIANTS (Reusable configs)
// ============================================

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// ============================================
// ANIMATION COMPONENTS
// ============================================

interface AnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * FadeInUp - Fades in while sliding up
 * Best for: Headings, paragraphs, cards
 */
export function FadeInUp({ children, className = "", delay = 0 }: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut", delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * FadeIn - Simple fade in
 * Best for: Images, backgrounds
 */
export function FadeIn({ children, className = "", delay = 0 }: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.5, ease: "easeOut", delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * SlideIn - Slides in from left or right
 * Best for: Alternating content sections
 */
export function SlideIn({
  children,
  className = "",
  delay = 0,
  direction = "left",
}: AnimationProps & { direction?: "left" | "right" }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, ease: "easeOut", delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScaleIn - Scales up while fading in
 * Best for: Cards, images, buttons
 */
export function ScaleIn({ children, className = "", delay = 0 }: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.4, ease: "easeOut", delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer - Container that staggers children animations
 * Best for: Grid of cards, list items
 */
export function StaggerContainer({ children, className = "" }: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem - Child item for StaggerContainer
 * Must be used inside StaggerContainer
 */
export function StaggerItem({ children, className = "" }: AnimationProps) {
  return (
    <motion.div className={className} variants={fadeInUp}>
      {children}
    </motion.div>
  );
}

/**
 * GlowCard - Card with hover glow effect
 * Best for: Service cards, pricing tiers
 */
export function GlowCard({ children, className = "" }: AnimationProps) {
  return (
    <motion.div
      className={`${className} relative`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 blur-sm -z-10"
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.div>
  );
}

/**
 * HoverLift - Lifts element on hover
 * Best for: Buttons, links, small cards
 */
export function HoverLift({ children, className = "" }: AnimationProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * TextReveal - Reveals text word by word
 * Best for: Hero headlines
 */
export function TextReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * PulseGlow - Continuous subtle pulse glow
 * Best for: CTA buttons, important elements
 */
export function PulseGlow({ children, className = "" }: AnimationProps) {
  return (
    <motion.div
      className={`${className} relative`}
      animate={{
        boxShadow: [
          "0 0 20px rgba(34, 211, 238, 0)",
          "0 0 20px rgba(34, 211, 238, 0.3)",
          "0 0 20px rgba(34, 211, 238, 0)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
