'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  avatar: string
  occasion?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Tauru City',
    rating: 5,
    text: 'Kanha Sweets has been our family\'s go-to for every celebration for 20 years. Their Kaju Katli melts in your mouth and the Gulab Jamun is perfectly syrup-soaked. The consistency in quality over decades is remarkable.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    occasion: 'Diwali Gift Boxes',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Sohna',
    rating: 5,
    text: 'Ordered the Wedding Hamper for my sister\'s wedding — 5kg of assorted mithai, dry fruits, and even serveware! Everything arrived fresh, beautifully packed, and on time. The guests couldn\'t stop praising the taste.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    occasion: 'Wedding Celebration',
  },
  {
    id: 3,
    name: 'Anita Devi',
    location: 'Tauru',
    rating: 5,
    text: 'Their Tauru Special Bhujia is addictive! I send packs to my children in Delhi every month. Also love their Moong Dal Halwa in winters — reminds me of my grandmother\'s recipe. Pure desi ghee taste in every bite.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    occasion: 'Monthly Orders',
  },
  {
    id: 4,
    name: 'Dr. Vikram Singh',
    location: 'Nuh District',
    rating: 5,
    text: 'As a doctor, I\'m particular about food quality. Kanha Sweets uses pure ingredients — no artificial colors or preservatives. Their Mishti Doi is authentic Bengali style. Highly recommend for health-conscious families.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    occasion: 'Health-Conscious Choice',
  },
  {
    id: 5,
    name: 'Meera & Amit',
    location: 'Gurugram',
    rating: 5,
    text: 'We ordered their Rakhi Special Hamper for our brothers — Rakhi thread, roli-chawal, and a kilogram of assorted sweets. The packaging was so thoughtful, and the sweets were fresh. Made our festival special despite the distance.',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&q=80',
    occasion: 'Rakhi Festival',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const next = useCallback(() => setCurrentIndex((i) => (i + 1) % testimonials.length), [])
  const prev = useCallback(() => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length), [])

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [autoPlay, next])

  return (
    <section
      className="section-padding bg-cream relative"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-0 bg-mandala-pattern opacity-5" aria-hidden="true" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="testimonials-heading" className="section-title mx-auto">
            Customer Love
          </h2>
          <p className="mt-4 text-lg text-maroon/70 max-w-2xl mx-auto">
            What our Tauru family says about 35 years of sweetness.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Track */}
          <div className="overflow-hidden" role="region" aria-label="Customer testimonials carousel">
            <motion.div
              animate={{ x: -currentIndex * 100 }}
              transition={{ type: 'spring', stiffness: 100, damping: 30 }}
              className="flex"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <article className="bg-cream rounded-3xl border border-gold/20 p-8 lg:p-12 shadow-lg hover:shadow-xl hover:border-gold/40 transition-all duration-500 relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-gold/10">
                      <Quote className="w-16 h-16" aria-hidden="true" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'fill-gold text-gold' : 'text-gold/20'}`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <blockquote className="text-maroon/80 leading-relaxed mb-6 relative z-10">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold/30 flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <p className="font-display font-semibold text-maroon">{testimonial.name}</p>
                        <p className="text-sm text-maroon/60">{testimonial.location}</p>
                        {testimonial.occasion && (
                          <p className="text-xs text-gold font-medium mt-1">{testimonial.occasion}</p>
                        )}
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-cream border border-gold/30 text-maroon rounded-full hover:bg-gold hover:text-maroon hover:border-gold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to testimonial ${index + 1}`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gold w-8 shadow-lg shadow-gold/30'
                      : 'bg-gold/30 hover:bg-gold/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-cream border border-gold/30 text-maroon rounded-full hover:bg-gold hover:text-maroon hover:border-gold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </motion.button>
          </div>

          {/* Pause/Play */}
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="absolute bottom-4 right-4 p-2 bg-cream/90 backdrop-blur text-maroon rounded-full hover:bg-gold/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label={autoPlay ? 'Pause auto-play' : 'Resume auto-play'}
            aria-pressed={autoPlay}
          >
            {autoPlay ? '⏸️' : '▶️'}
          </button>
        </div>

        {/* Trust Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="p-6 bg-cream rounded-2xl border border-gold/20">
            <p className="font-display text-4xl text-gold">35+</p>
            <p className="text-maroon/70 mt-1">Years of Trust</p>
          </div>
          <div className="p-6 bg-cream rounded-2xl border border-gold/20">
            <p className="font-display text-4xl text-gold">10K+</p>
            <p className="text-maroon/70 mt-1">Happy Families</p>
          </div>
          <div className="p-6 bg-cream rounded-2xl border border-gold/20">
            <p className="font-display text-4xl text-gold">500+</p>
            <p className="text-maroon/70 mt-1">Weddings Served</p>
          </div>
          <div className="p-6 bg-cream rounded-2xl border border-gold/20">
            <p className="font-display text-4xl text-gold">100%</p>
            <p className="text-maroon/70 mt-1">Vegetarian</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}