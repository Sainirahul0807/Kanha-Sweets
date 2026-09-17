'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { CategoryNav } from '@/components/CategoryNav'
import { MenuSection } from '@/components/MenuSection'
import { Gallery } from '@/components/Gallery'
import { Testimonials } from '@/components/Testimonials'
import { CartDrawer } from '@/components/CartDrawer'
import { OrderForm } from '@/components/OrderForm'
import { CartProvider, OrderProvider } from '@/components/Providers'

function SiteFooter() {
  return (
    <footer id="contact" className="bg-maroon text-cream" role="contentinfo">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl font-bold">Kanha Sweets</h2>
            <p className="mt-3 text-cream/70">
              Authentic Indian sweets, namkeen, and festive treats made with care.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Quick Links</h3>
            <div className="mt-3 flex flex-col gap-2 text-cream/70">
              <a href="#home" className="hover:text-gold">Home</a>
              <a href="#about" className="hover:text-gold">Our Story</a>
              <a href="#menu" className="hover:text-gold">Menu</a>
              <a href="#gallery" className="hover:text-gold">Gallery</a>
              <a href="#order" className="hover:text-gold">Order Online</a>
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Visit Us</h3>
            <p className="mt-3 text-cream/70">
              Tauru, Nuh District, Haryana 122105, India
            </p>
            <p className="mt-2 text-cream/70">Open daily: 8:00 AM - 10:00 PM</p>
          </div>
        </div>
        <div className="mt-10 border-t border-gold/20 pt-6 text-sm text-cream/50">
          © {new Date().getFullYear()} Kanha Sweets. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<'all' | string>('all')

  useEffect(() => {
    const handleReset = () => setActiveCategory('all')
    window.addEventListener('reset-category', handleReset)
    return () => window.removeEventListener('reset-category', handleReset)
  }, [])

  useEffect(() => {
    if (activeCategory !== 'all') {
      const element = document.getElementById(`menu-${activeCategory}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [activeCategory])

  return (
    <CartProvider>
      <OrderProvider>
        <div className="min-h-screen bg-cream">
          <Navbar />
          <main id="main-content" className="pt-0" role="main">
            <Hero />
            <About />
            <CategoryNav
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <MenuSection activeCategory={activeCategory} />
            <Gallery />
            <Testimonials />
            <OrderForm />
          </main>
          <CartDrawer />
          <SiteFooter />
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-cream shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </OrderProvider>
    </CartProvider>
  )
}
