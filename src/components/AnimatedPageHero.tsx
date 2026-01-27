"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedPageHeroProps {
  badge?: {
    text: string;
    color?: "cyan" | "blue" | "purple" | "green";
  };
  title: string;
  titleHighlight: string;
  description: string;
  highlightColor?: "cyan" | "blue" | "purple" | "green";
  children?: ReactNode;
}

const colorMap = {
  cyan: {
    badge: "bg-cyan-400",
    gradient: "from-cyan-400 to-blue-500",
    glow1: "bg-cyan-500/10",
    glow2: "bg-blue-500/10",
  },
  blue: {
    badge: "bg-blue-400",
    gradient: "from-blue-400 to-cyan-400",
    glow1: "bg-blue-500/10",
    glow2: "bg-cyan-500/10",
  },
  purple: {
    badge: "bg-purple-400",
    gradient: "from-purple-400 to-cyan-400",
    glow1: "bg-purple-500/10",
    glow2: "bg-cyan-500/10",
  },
  green: {
    badge: "bg-green-400",
    gradient: "from-green-400 to-cyan-400",
    glow1: "bg-green-500/10",
    glow2: "bg-cyan-500/10",
  },
};

export default function AnimatedPageHero({
  badge,
  title,
  titleHighlight,
  description,
  highlightColor = "cyan",
  children,
}: AnimatedPageHeroProps) {
  const colors = colorMap[highlightColor];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gray-950">
        <motion.div
          className={`absolute top-1/4 right-1/3 w-[400px] h-[400px] ${colors.glow1} rounded-full blur-[100px]`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className={`absolute bottom-1/3 left-1/4 w-[300px] h-[300px] ${colors.glow2} rounded-full blur-[80px]`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-sm text-gray-300 mb-8"
          >
            <motion.span
              className={`w-2 h-2 ${colorMap[badge.color || highlightColor].badge} rounded-full`}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255, 255, 255, 0.4)",
                  "0 0 0 6px rgba(255, 255, 255, 0)",
                  "0 0 0 0 rgba(255, 255, 255, 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {badge.text}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">{title} </span>
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}
          >
            {titleHighlight}
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        {/* Optional children (buttons, etc.) */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
