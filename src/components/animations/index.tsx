"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, useMemo } from "react";

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

interface AnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

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

export function StaggerItem({ children, className = "" }: AnimationProps) {
  return (
    <motion.div className={className} variants={fadeInUp}>
      {children}
    </motion.div>
  );
}

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
      <motion.div
        className="absolute -inset-0.5 bg-linear-to-r from-nex-primary to-nex-secondary rounded-xl opacity-0 blur-sm -z-10"
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.div>
  );
}

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

export function PulseGlow({ children, className = "" }: AnimationProps) {
  return (
    <motion.div
      className={`${className} relative`}
      animate={{
        boxShadow: [
          "0 0 20px rgba(0, 102, 255, 0)",
          "0 0 20px rgba(0, 102, 255, 0.3)",
          "0 0 20px rgba(0, 102, 255, 0)",
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

export function GlitchText({ 
  text, 
  className = "" 
}: { 
  text: string; 
  className?: string 
}) {
  return (
    <motion.span
      className={`${className} relative inline-block`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        className="absolute inset-0 text-nex-primary"
        animate={{
          x: [0, -2, 2, 0],
          opacity: [1, 0.8, 0.8, 1],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        style={{ clipPath: "inset(0 0 50% 0)" }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-nex-secondary"
        animate={{
          x: [0, 2, -2, 0],
          opacity: [1, 0.8, 0.8, 1],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
          delay: 0.05,
        }}
        style={{ clipPath: "inset(50% 0 0 0)" }}
      >
        {text}
      </motion.span>
      <span className="relative">{text}</span>
    </motion.span>
  );
}

export function NeonBorder({ children, className = "" }: AnimationProps) {
  return (
    <motion.div
      className={`${className} relative overflow-hidden rounded-2xl`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(90deg, #0066ff, #00aaff, #0066ff, #0066ff)",
          backgroundSize: "300% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative m-[1px] rounded-2xl bg-black">
        {children}
      </div>
    </motion.div>
  );
}

export function ScanLine({ children, className = "" }: AnimationProps) {
  return (
    <motion.div className={`${className} relative overflow-hidden`}>
      {children}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(transparent 50%, rgba(0, 102, 255, 0.03) 50%)",
          backgroundSize: "100% 4px",
        }}
      />
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-nex-primary/50 to-transparent pointer-events-none"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}

export function HologramShimmer({ children, className = "" }: AnimationProps) {
  return (
    <motion.div
      className={`${className} relative`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(0, 102, 255, 0.4) 45%, rgba(0, 102, 255, 0.4) 55%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["200% 0%", "-200% 0%"],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
      />
      {children}
    </motion.div>
  );
}

export function FloatingElement({ 
  children, 
  className = "",
  amplitude = 10,
  duration = 3 
}: AnimationProps & { amplitude?: number; duration?: number }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export function TypewriterText({
  text,
  className = "",
  speed = 0.05,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  return (
    <motion.span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * speed, duration: 0.01 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-[#0066ff] ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.span>
  );
}

export function MatrixReveal({ children, className = "" }: AnimationProps) {
  return (
    <motion.div
      className={`${className} relative overflow-hidden`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 bg-linear-to-b from-nex-primary/20 via-transparent to-transparent pointer-events-none"
        initial={{ y: "-100%" }}
        whileInView={{ y: "200%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {children}
    </motion.div>
  );
}

export function CyberCard({ children, className = "" }: AnimationProps) {
  return (
    <motion.div
      className={`${className} relative group`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute -inset-[1px] bg-linear-to-r from-nex-primary via-nex-secondary to-nex-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      <div className="absolute top-0 left-4 right-4 h-[1px] bg-linear-to-r from-transparent via-nex-primary to-transparent opacity-50" />
      <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-linear-to-r from-transparent via-nex-secondary to-transparent opacity-50" />
      <div className="absolute top-4 bottom-4 left-0 w-[1px] bg-linear-to-b from-transparent via-nex-primary to-transparent opacity-50" />
      <div className="absolute top-4 bottom-4 right-0 w-[1px] bg-linear-to-b from-transparent via-nex-secondary to-transparent opacity-50" />
      <div className="relative bg-black/90 backdrop-blur-sm rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
}

export function ParticleField({ className = "" }: { className?: string }) {
  const particles = useMemo(() => {
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed * 9999) * 10000;
      return x - Math.floor(x);
    };
    
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: seededRandom(i * 1.1) * 100,
      y: seededRandom(i * 2.2) * 100,
      size: seededRandom(i * 3.3) * 3 + 1,
      duration: seededRandom(i * 4.4) * 10 + 10,
      delay: seededRandom(i * 5.5) * 5,
    }));
  }, []);

  return (
    <div className={`${className} absolute inset-0 overflow-hidden pointer-events-none`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-nex-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export function GridBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`${className} absolute inset-0 overflow-hidden pointer-events-none`}>
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 102, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 102, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0, 102, 255, 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
