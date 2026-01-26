"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PortfolioProject } from "@/content/portfolio";

interface PortfolioCarouselProps {
  projects: PortfolioProject[];
  autoPlayInterval?: number;
}

export default function PortfolioCarousel({ 
  projects, 
  autoPlayInterval = 5000 
}: PortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPaused, autoPlayInterval, nextSlide]);

  const currentProject = projects[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Carousel Container */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 pointer-events-none" />
        
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.a
            key={currentIndex}
            href={currentProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 cursor-pointer group"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
          >
            <Image
              src={currentProject.image}
              alt={currentProject.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-300" />
            
            {/* Click indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <motion.div
                className="px-6 py-3 bg-cyan-500/90 backdrop-blur-sm rounded-full text-white font-medium flex items-center gap-2"
                initial={{ scale: 0.8, y: 20 }}
                whileHover={{ scale: 1.05 }}
                animate={{ scale: 1, y: 0 }}
              >
                <span>Visit Project</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.div>
            </div>
          </motion.a>
        </AnimatePresence>

        {/* Project info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent">
          <motion.div
            key={`info-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full mb-2">
              {currentProject.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-1">{currentProject.name}</h3>
            <p className="text-gray-400 text-sm">{currentProject.description}</p>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.preventDefault();
            prevSlide();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 text-white hover:bg-cyan-500/80 hover:border-cyan-500 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <svg 
            className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            nextSlide();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 text-white hover:bg-cyan-500/80 hover:border-cyan-500 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <svg 
            className="w-6 h-6 transition-transform group-hover:translate-x-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "w-8 bg-cyan-500" 
                : "w-2 bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 rounded-full bg-cyan-400"
                layoutId="activeDot"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: isPaused ? `${((currentIndex + 1) / projects.length) * 100}%` : "100%" }}
          transition={{ 
            duration: isPaused ? 0 : autoPlayInterval / 1000,
            ease: "linear",
          }}
          key={`progress-${currentIndex}-${isPaused}`}
        />
      </div>

      {/* Pause indicator */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-4 right-4 z-30 px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-xs text-gray-400 flex items-center gap-1"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
            Paused
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
