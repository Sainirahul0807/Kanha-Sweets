'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, YouTube, WhatsApp, Heart } from 'lucide-react'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Our Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#order', label: 'Order Online' },
  { href: '#contact', label: 'Contact Us' },
]

const openingHours = [
  { day: 'Monday - Saturday', time: '8:00 AM - 10:00 PM' },
  { day: 'Sunday', time: '9:00 AM - 9:00 PM' },
  { day: 'Festivals', time: '7:00 AM - 11:00 PM' },
]

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-600' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-600' },
  { icon: YouTube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:text-red-600' },
  { icon: WhatsApp, href: 'https://wa.me/91XXXXXXXXXX', label: 'WhatsApp', color: 'hover:text-green-600' },
]

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-maroon text-cream"
      role="contentinfo"
      aria-label="Footer"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-5" aria-hidden="true" />

      {/* Gold Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />

      <div className="container-custom relative py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link
              href="#home"
              className="inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-maroon rounded-lg"
              aria-label="Kanha Sweets - Home"
            >
              <div className="w-14 h-14" role="img" aria-label="Kanha Sweets Logo">
                <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                  <circle cx="50" cy="50" r="48" fill="#7A1F2B" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#D4AF37" strokeWidth="2" />
                  <circle cx="50" cy="50" r="34" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4,4" />
                  <path d="M50 18 C32.4 18 18 32.4 18 50 C18 67.6 32.4 82 50 82 C67.6 82 82 67.6 82 50 C82 32.4 67.6 18 50 18 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
                  <path d="M50 30 L50 50 L65 58" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <ellipse cx="50" cy="30" rx="4" ry="3" fill="#D4AF37" />
                  <text x="50" y="75" textAnchor="middle" fontFamily="cursive" fontSize="12" fill="#D4AF37" fontWeight="bold">KS</text>
                </svg>
              </div>
              <div>
                <span className="block font-display font-bold text-xl leading-tight">Kanha Sweets</span>
                <span className="block font-devanagari text-gold text-xs tracking-widest">Since 1990</span>
              </div>
            </Link>

            <p className="text-cream/70 leading-relaxed max-w-xs">
              Tauru&apos;s most trusted sweet shop serving authentic Indian mithai, namkeen & festival gifts for over 35 years. Handcrafted with pure desi ghee & love.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-medium">100% Vegetarian</span>
              <span className="px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-medium">Pure Desi Ghee</span>
              <span className="px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-medium">Fresh Daily</span>
              <span className="px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-medium">No Preservatives</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-gold hover:text-maroon focus:outline-none focus:ring-2 focus:ring-gold`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav className="space-y-4" aria-label="Quick links">
            <h3 className="font-display font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="space-y-4" aria-label="Contact information">
            <h3 className="font-display font-semibold text-lg">Visit Us</h3>
            <div className="space-y-3 text-cream/70">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-gold transition-colors"
              >
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">
                  Kanha Sweets, Tauru City<br />
                  Nuh District, Haryana 122105, India
                </span>
              </a>
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                <span>+91 XXXXXXXXXX</span>
              </a>
              <a
                href="mailto:info@kanhasweets.in"
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                <span>info@kanhasweets.in</span>
              </a>
            </div>
          </address>

          {/* Opening Hours */}
          <div className="space-y-4" aria-label="Opening hours">
            <h3 className="font-display font-semibold text-lg">Opening Hours</h3>
            <dl className="space-y-3 text-cream/70">
              {openingHours.map((hour) => (
                <div key={hour.day} className="flex justify-between gap-4">
                  <dt className="font-medium">{hour.day}</dt>
                  <dd className="text-gold/80 whitespace-nowrap">{hour.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/50 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Kanha Sweets. All rights reserved.
              <br />
              <span className="flex items-center justify-center md:justify-start gap-1 mt-1">
                Made with <Heart className="w-4 h-4 text-red-500" aria-hidden="true" /> in Tauru, Haryana
              </span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-cream/50">
              <a href="#privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
              <span className="w-px h-4 bg-gold/30" aria-hidden="true" />
              <a href="#terms" className="hover:text-gold transition-colors">Terms of Service</a>
              <span className="w-px h-4 bg-gold/30" aria-hidden="true" />
              <a href="#refund" className="hover:text-gold transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>

        {/* Google Maps Placeholder */}
        <div className="mt-10 rounded-2xl overflow-hidden border border-gold/20 bg-gold/5" aria-label="Map location">
          <div className="aspect-video relative">
            {/* TODO: Replace with actual Google Maps embed */}
            <div className="absolute inset-0 flex items-center justify-center text-maroon/50">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 mx-auto mb-3 text-gold/50" aria-hidden="true" />
                <p className="font-medium">Google Maps Embed</p>
                <p className="text-sm mt-1">Replace with actual iframe</p>
                <code className="text-xs block mt-2 bg-maroon/10 px-2 py-1 rounded">
                  <iframe src="https://www.google.com/maps/embed?...">
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}