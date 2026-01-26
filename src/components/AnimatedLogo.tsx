"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AnimatedLogo() {
  return (
    <Link href="/" className="relative flex items-center gap-3 group">
      {/* Glow effect behind logo */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Logo container with animations */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Rotating ring effect */}
        <motion.div
          className="absolute -inset-1 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent, #00d4ff, transparent, #0066ff, transparent)",
            opacity: 0.5,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner glow pulse */}
        <motion.div
          className="absolute inset-0 bg-cyan-500/30 rounded-full blur-md"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Logo image */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <Image
            src="/images/logo/nexxuslab-logo.png"
            alt="Nexxus Lab - Philippine Tech Company"
            width={40}
            height={40}
            className="relative z-10 drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Text with gradient and glitch effect */}
      <div className="relative overflow-hidden">
        {/* Main text */}
        <motion.span
          className="relative z-10 text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            backgroundPosition: ["0% center", "200% center"],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.3 },
            x: { duration: 0.5, delay: 0.3 },
            backgroundPosition: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          NEXXUS LAB
        </motion.span>

        {/* Glitch layer 1 */}
        <motion.span
          className="absolute inset-0 text-xl font-bold tracking-tight text-cyan-400/50"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0, 0.5, 0, 0],
            x: [0, -2, 2, -1, 0],
            y: [0, 1, -1, 0, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 5,
          }}
        >
          NEXXUS LAB
        </motion.span>

        {/* Glitch layer 2 */}
        <motion.span
          className="absolute inset-0 text-xl font-bold tracking-tight text-blue-400/50"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0, 0.5, 0, 0],
            x: [0, 2, -2, 1, 0],
            y: [0, -1, 1, 0, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 5,
            delay: 0.05,
          }}
        >
          NEXXUS LAB
        </motion.span>

        {/* Scan line effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-[2px] w-full"
          initial={{ top: "-100%" }}
          animate={{ top: ["0%", "100%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "linear",
          }}
        />

        {/* Underline animation */}
        <motion.div
          className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut",
          }}
        />
      </div>

      {/* Floating particles around logo */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 20}%`,
          }}
          animate={{
            y: [-5, 5, -5],
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </Link>
  );
}
