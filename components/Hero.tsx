'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Slide {
  id: number
  title: string
  subtitle: string
  image: string
  ctaText: string
  ctaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Welcome to Kanha Sweets',
    subtitle: 'Tauru\'s No.1 Sweet Shop — Serving Sweetness Since 1990',
    image: 'https://images.unsplash.com/photo-1558961942-1a4682904a51?w=1920&q=80',
    ctaText: 'View Our Menu',
    ctaHref: '#menu',
    secondaryCtaText: 'Order Now',
    secondaryCtaHref: '#order',
  },
  {
    id: 2,
    title: '35+ Years of Tradition',
    subtitle: 'Handcrafted with Pure Desi Ghee & Love by Shri Indraj Saini',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1920&q=80',
    ctaText: 'Our Story',
    ctaHref: '#about',
    secondaryCtaText: 'Shop Sweets',
    secondaryCtaHref: '#menu',
  },
  {
    id: 3,
    title: 'Festival Specials Ready',
    subtitle: 'Diwali • Rakhi • Holi — Premium Gift Boxes & Hampers Available',
    image: 'https://images.unsplash.com/photo-1577303552983-82b8f2185b7f?w=1920&q=80',
    ctaText: 'Explore Gifts',
    ctaHref: '#menu?category=gift-boxes',
    secondaryCtaText: 'Seasonal Specials',
    secondaryCtaHref: '#menu?category=seasonal',
  },
  {
    id: 4,
    title: 'Fresh Namkeen & Snacks Daily',
    subtitle: 'Tauru Special Bhujia, Samosa, Kachori & Chaats Made Fresh Every Morning',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1920&q=80',
    ctaText: 'Try Namkeen',
    ctaHref: '#menu?category=namkeen',
    secondaryCtaText: 'Order Chaat',
    secondaryCtaHref: '#menu?category=chaat',
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Auto-play carousel
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Hero carousel"
    >
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={index === currentSlide ? { opacity: 1 } : { opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 z-0"
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-maroon/80 via-maroon/60 to-transparent" />
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 bg-mandala-pattern opacity-10" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-cream/90 backdrop-blur-sm text-maroon rounded-full shadow-lg hover:bg-cream hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold"
        aria-label="Previous slide"
        aria-controls="hero-carousel"
      >
        <ChevronLeft className="w-6 h-6" aria-hidden="true" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-cream/90 backdrop-blur-sm text-maroon rounded-full shadow-lg hover:bg-cream hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold"
        aria-label="Next slide"
        aria-controls="hero-carousel"
      >
        <ChevronRight className="w-6 h-6" aria-hidden="true" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2" role="tablist" aria-label="Slide indicators">
        {slides.map((slide, index) => (
          <motion.button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-gold w-8' : 'bg-cream/50 hover:bg-cream/80'
            }`}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-custom py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 animate-pulse" aria-hidden="true" />
              Since 1990 • 35+ Years of Trust
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream leading-tight mb-6"
            >
              {slides[currentSlide].title.split(' ').map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-xl text-cream/90 mb-10 max-w-xl leading-relaxed"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={slides[currentSlide].ctaHref}
                className="btn-primary text-lg px-10 py-4"
              >
                {slides[currentSlide].ctaText}
              </Link>
              {slides[currentSlide].secondaryCtaText && slides[currentSlide].secondaryCtaHref && (
                <Link
                  href={slides[currentSlide].secondaryCtaHref}
                  className="btn-secondary text-lg px-10 py-4 border-cream text-cream hover:bg-cream hover:text-maroon"
                >
                  {slides[currentSlide].secondaryCtaText}
                </Link>
              )}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-16 flex flex-wrap gap-6 text-cream/70 text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" aria-hidden="true" />
                100% Vegetarian
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" aria-hidden="true" />
                Pure Desi Ghee
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" aria-hidden="true" />
                Fresh Daily
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" aria-hidden="true" />
                No Preservatives
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/60"
        aria-hidden="true"
      >
        <span className="text-xs tracking-wider uppercase">Scroll to explore</span>
        <svg className="w-6 h-6 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}