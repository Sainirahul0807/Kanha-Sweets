'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Menu, X, Search, MapPin, Phone, Mail } from 'lucide-react'
import { Logo } from './Logo'
import { useCart } from './Providers'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { itemCount, toggleCart } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div
        className="hidden md:flex items-center justify-between px-6 py-2 bg-maroon text-cream text-sm"
        role="contentinfo"
        aria-label="Contact information"
      >
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Kanha Sweets, Tauru City, Nuh District, Haryana 122105
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-4 h-4" aria-hidden="true" />
            <a href="tel:+91XXXXXXXXXX" className="hover:text-gold transition-colors">+91 XXXXXXXXXX</a>
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="w-4 h-4" aria-hidden="true" />
            <a href="mailto:info@kanhasweets.in" className="hover:text-gold transition-colors">info@kanhasweets.in</a>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gold/80">Since 1990 • 35+ Years of Trust</span>
          <a
            href="#order"
            className="px-4 py-1.5 bg-gold text-maroon text-sm font-semibold rounded-full hover:bg-gold-light transition-colors"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-cream/95 backdrop-blur-md shadow-lg border-b border-gold/20' : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav className="container-custom" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="#home"
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream rounded-lg"
              aria-label="Kanha Sweets - Home"
            >
              <Logo size="md" />
              <div className="hidden sm:block text-left">
                <span className="block font-display font-bold text-maroon text-lg leading-tight">Kanha Sweets</span>
                <span className="block font-devanagari text-gold text-xs tracking-widest">Since 1990</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-medium text-maroon/80 hover:text-gold transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 text-maroon/60 hover:text-gold transition-colors rounded-lg hover:bg-gold/10 focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label="Search"
                  aria-expanded={searchOpen}
                >
                  <Search className="w-5 h-5" aria-hidden="true" />
                </button>
                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, width: 0 }}
                      animate={{ opacity: 1, y: 0, width: 280 }}
                      exit={{ opacity: 0, y: -10, width: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="absolute right-0 top-full mt-2 bg-cream border border-gold/30 rounded-lg shadow-xl p-2 z-50"
                    >
                      <input
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search sweets, namkeen, gifts..."
                        className="w-full px-3 py-2 bg-transparent text-maroon placeholder:text-maroon/40 focus:outline-none text-sm"
                        aria-label="Search products"
                        autoFocus
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Cart */}
              <button
                onClick={toggleCart}
                className="relative p-2 text-maroon hover:text-gold transition-colors rounded-lg hover:bg-gold/10 focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label={`Shopping cart, ${itemCount} items`}
                aria-expanded={false}
              >
                <ShoppingCart className="w-6 h-6" aria-hidden="true" />
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    key={itemCount}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-maroon text-xs font-bold rounded-full flex items-center justify-center"
                    role="status"
                    aria-live="polite"
                  >
                    {itemCount > 99 ? '99+' : itemCount}
                  </motion.span>
                )}
              </button>

              {/* Order CTA */}
              <Link
                href="#order"
                className="px-5 py-2 bg-maroon text-cream font-semibold rounded-full hover:bg-maroon-light transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream"
              >
                Order Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-maroon hover:text-gold transition-colors rounded-lg hover:bg-gold/10 focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden bg-cream border-t border-gold/20 py-4"
              >
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 text-maroon/80 hover:text-gold hover:bg-gold/10 rounded-lg font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-gold/20 flex flex-col gap-3">
                    <Link
                      href="#order"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 bg-maroon text-cream text-center font-semibold rounded-full"
                    >
                      Order Now
                    </Link>
                    <button
                      onClick={() => {
                        toggleCart()
                        setMobileMenuOpen(false)
                      }}
                      className="px-4 py-3 border-2 border-gold text-maroon font-semibold rounded-full"
                    >
                      View Cart ({itemCount})
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Search Overlay for Mobile */}
      {searchOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setSearchOpen(false)}
            aria-hidden="true"
          >
            <div className="absolute top-20 left-4 right-4 bg-cream rounded-xl shadow-2xl p-4 animate-slide-down">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sweets, namkeen, gifts..."
                className="w-full px-4 py-3 bg-cream border border-gold/30 rounded-lg text-maroon placeholder:text-maroon/40 focus:outline-none focus:ring-2 focus:ring-gold text-lg"
                aria-label="Search products"
                autoFocus
              />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}