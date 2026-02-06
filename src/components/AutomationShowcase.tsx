"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AutomationShowcaseProps {
  title?: string;
  subtitle?: string;
  videoId: string;
  description?: string;
}

export default function AutomationShowcase({
  title = "Sample of Basic Automation",
  subtitle = "See how we streamline workflows and save time",
  videoId,
  description = "Watch how our automation solutions transform manual processes into efficient, automated workflows that work 24/7.",
}: AutomationShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-[#0066ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-[#00aaff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          {/* Animated border glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0066ff] via-[#00aaff] to-[#0066ff] rounded-2xl opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-500 animate-gradient-x" />
          
          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#0066ff] rounded-tl-lg hidden sm:block" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#00aaff] rounded-tr-lg hidden sm:block" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#00aaff] rounded-bl-lg hidden sm:block" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#0066ff] rounded-br-lg hidden sm:block" />

          {/* Video wrapper */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[#0066ff]/10">
            {/* Scan line effect */}
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-30">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0066ff]/5 to-transparent animate-scan-line" />
            </div>

            {/* YouTube Embed */}
            <div className="relative aspect-video">
              {!isPlaying ? (
                // Custom Thumbnail with Play Button
                <div className="relative w-full h-full">
                  {/* YouTube Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Automation Demo Thumbnail"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to hqdefault if maxresdefault doesn't exist
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* Play Button */}
                  <motion.button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative">
                      {/* Pulsing ring */}
                      <motion.div
                        className="absolute inset-0 bg-[#0066ff]/30 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      
                      {/* Play button */}
                      <div className="relative w-20 h-20 bg-gradient-to-r from-[#0066ff] to-[#00aaff] rounded-full flex items-center justify-center shadow-lg shadow-[#0066ff]/50 group-hover:shadow-[#0066ff]/75 transition-shadow duration-300">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </motion.button>

                  {/* "Click to Play" text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium tracking-wide"
                  >
                    Click to play demo
                  </motion.p>
                </div>
              ) : (
                // YouTube iframe
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="Automation Demo"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </motion.div>

        {/* Description below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <a
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full overflow-hidden transition-all duration-300"
            >
              {/* Button background */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#0066ff] via-[#00aaff] to-[#0066ff]" />
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              {/* Button content */}
              <span className="relative z-10 text-white">Want This For Your Business?</span>
              <motion.svg
                className="relative z-10 w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Tech decoration elements */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-8 bg-gradient-to-b from-[#0066ff]/50 to-transparent rounded-full"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            />
          ))}
        </div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-8 bg-gradient-to-b from-[#00aaff]/50 to-transparent rounded-full"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
