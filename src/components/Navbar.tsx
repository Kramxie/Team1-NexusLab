"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "./AnimatedLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/workflows", label: "Workflows" },
  { href: "/clients", label: "Clients" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Detect scroll for navbar style change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/95 shadow-[0_2px_30px_rgba(0,102,255,0.4)] border-b border-[rgba(0,102,255,0.1)]"
          : "backdrop-blur-md bg-black/90 border-b border-[rgba(0,102,255,0.1)]"
      }`}
    >
      {/* Top glowing border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />
      
      {/* Animated bottom border */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        <motion.div 
          className="h-full bg-gradient-to-r from-transparent via-[#0066ff] to-transparent"
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: '200% 100%' }}
        />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <AnimatedLogo />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {/* Hover background glow */}
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0066ff]/0 via-[#0066ff]/10 to-[#0066ff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Animated highlight box */}
                  <AnimatePresence>
                    {hoveredLink === link.href && (
                      <motion.span
                        className="absolute inset-0 rounded-lg border border-[#0066ff]/30 bg-[#0066ff]/5"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Text with glow on hover */}
                  <span className="relative z-10 group-hover:text-[#0066ff] group-hover:drop-shadow-[0_0_8px_rgba(0,102,255,0.5)] transition-all duration-300">
                    {link.label}
                  </span>
                  
                  {/* Animated underline */}
                  <motion.span 
                    className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-[#0066ff] to-[#00aaff] rounded-full"
                    initial={{ width: 0, x: '-50%' }}
                    animate={{ 
                      width: hoveredLink === link.href ? '60%' : 0,
                      x: '-50%'
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  
                  {/* Corner dots on hover */}
                  <span className="absolute top-1 left-1 w-1 h-1 rounded-full bg-[#0066ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[#00aaff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hidden md:block"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-full overflow-hidden transition-all duration-300"
            >
              {/* Animated gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#0066ff] to-[#00aaff] transition-transform duration-500 group-hover:scale-105" />
              
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(0,102,255,0.5),0_0_40px_rgba(0,102,255,0.3)]" />
              
              {/* Border glow */}
              <span className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-[#0066ff] to-[#00aaff] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00aaff]" />
              
              {/* Text */}
              <span className="relative z-10 text-white flex items-center gap-2">
                Book a Call
                <motion.svg 
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2 text-gray-400 hover:text-white transition-colors group"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {/* Button glow */}
            <span className="absolute inset-0 rounded-lg bg-[#0066ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className="absolute h-0.5 w-6 bg-current rounded-full"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 0 : -4,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute h-0.5 w-6 bg-current rounded-full"
                animate={{
                  opacity: isOpen ? 0 : 1,
                  scaleX: isOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute h-0.5 w-6 bg-current rounded-full"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? 0 : 4,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="relative px-4 py-4 space-y-1 bg-black/98 backdrop-blur-xl border-t border-[#0066ff]/20">
              {/* Mobile menu glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#0066ff]/10 rounded-full blur-3xl" />
              
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative block py-3 px-4 text-gray-300 hover:text-white rounded-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover background */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#0066ff]/10 to-[#00aaff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#0066ff] rounded-full group-hover:h-6 transition-all duration-300" />
                    
                    <span className="relative z-10 flex items-center justify-between">
                      {link.label}
                      <motion.svg 
                        className="w-4 h-4 text-[#0066ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="relative block py-3 text-center font-medium rounded-xl overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#0066ff] to-[#00aaff]" />
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10 text-white">Book a Call</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
