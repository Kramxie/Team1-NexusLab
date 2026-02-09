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

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const goToSlide = (index: number) => {
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

  // Get previous, current, and next indices
  const getPrevIndex = (index: number) => (index - 1 + projects.length) % projects.length;
  const getNextIndex = (index: number) => (index + 1) % projects.length;

  const prevIndex = getPrevIndex(currentIndex);
  const nextIndex = getNextIndex(currentIndex);

  const currentProject = projects[currentIndex];

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Carousel Container */}
      <div className="relative h-[320px] sm:h-[380px] md:h-[420px]" style={{ perspective: "1500px" }}>
        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.preventDefault();
            prevSlide();
          }}
          className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/80 backdrop-blur-sm border border-[rgba(0,102,255,0.3)] text-white hover:bg-nex-primary/80 hover:border-nex-primary transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" 
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
          className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/80 backdrop-blur-sm border border-[rgba(0,102,255,0.3)] text-white hover:bg-nex-primary/80 hover:border-nex-primary transition-all duration-300 group"
          aria-label="Next slide"
        >
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Cards Container */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false}>
            {/* Left Card */}
            <motion.div
              key={`left-${prevIndex}`}
              className="absolute w-[60%] sm:w-[50%] md:w-[40%] aspect-video cursor-pointer"
              initial={{ x: "-50%", scale: 0.7, opacity: 0.4, rotateY: 35 }}
              animate={{ x: "-75%", scale: 0.75, opacity: 0.5, rotateY: 30, zIndex: 1 }}
              exit={{ x: "-100%", scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={prevSlide}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-[rgba(0,102,255,0.2)]">
                <Image
                  src={projects[prevIndex].image}
                  alt={projects[prevIndex].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </motion.div>

            {/* Center Card (Main) */}
            <motion.div
              key={`center-${currentIndex}`}
              className="absolute w-[75%] sm:w-[65%] md:w-[55%] aspect-video z-10"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ x: "0%", scale: 1, opacity: 1, rotateY: 0, zIndex: 10 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-nex-primary/50">
                <Image
                  src={currentProject.image}
                  alt={currentProject.name}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-nex-primary/30 text-nex-secondary rounded-full mb-2 backdrop-blur-sm">
                      {currentProject.category}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">{currentProject.name}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 mb-4">{currentProject.description}</p>
                    
                    {/* Visit Button - only if URL exists */}
                    {currentProject.url && (
                      <a
                        href={currentProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-nex-primary hover:bg-nex-primary/80 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Visit Project
                      </a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              key={`right-${nextIndex}`}
              className="absolute w-[60%] sm:w-[50%] md:w-[40%] aspect-video cursor-pointer"
              initial={{ x: "50%", scale: 0.7, opacity: 0.4, rotateY: -35 }}
              animate={{ x: "75%", scale: 0.75, opacity: 0.5, rotateY: -30, zIndex: 1 }}
              exit={{ x: "100%", scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={nextSlide}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-[rgba(0,102,255,0.2)]">
                <Image
                  src={projects[nextIndex].image}
                  alt={projects[nextIndex].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "w-8 bg-nex-primary" 
                : "w-2 bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 rounded-full bg-nex-primary"
                layoutId="activeDot"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-1 bg-[rgba(0,102,255,0.1)] rounded-full overflow-hidden max-w-md mx-auto">
        <motion.div
          className="h-full bg-linear-to-r from-nex-primary to-nex-secondary"
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
            className="absolute top-4 right-4 z-30 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-xs text-gray-400 flex items-center gap-1"
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
