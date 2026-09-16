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
import { Footer } from '@/components/Footer'
import { CartProvider, OrderProvider } from '@/components/Providers'

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<'all' | string>('all')

  // Listen for category reset event from MenuSection
  useEffect(() => {
    const handleReset = () => setActiveCategory('all')
    window.addEventListener('reset-category', handleReset)
    return () => window.removeEventListener('reset-category', handleReset)
  }, [])

  // Scroll to category section when changed
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
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main id="main-content" className="pt-0" role="main">
            {/* Hero */}
            <Hero />

            {/* About */}
            <About />

            {/* Category Navigation */}
            <CategoryNav
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* Menu Sections */}
            <MenuSection activeCategory={activeCategory} />

            {/* Gallery */}
            <Gallery />

            {/* Testimonials */}
            <Testimonials />

            {/* Order Form */}
            <OrderForm />
          </main>

          {/* Cart Drawer */}
          <CartDrawer />

          {/* Footer */}
          <Footer />

          {/* Scroll to top button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-maroon text-cream rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </OrderProvider>
    </CartProvider>
  )
}