'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageCircle, Heart } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Our Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#order', label: 'Order Online' },
]

const socials = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: MessageCircle, href: 'https://wa.me/', label: 'WhatsApp' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-maroon text-cream" role="contentinfo">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-2">
            <Link href="#home" className="inline-block font-display text-2xl font-bold">
              Kanha Sweets
            </Link>
            <p className="max-w-md leading-relaxed text-cream/70">
              Tauru&apos;s trusted sweet shop serving authentic Indian mithai, namkeen,
              and festival gifts. Handcrafted with pure desi ghee and love.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors hover:bg-gold hover:text-maroon"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links" className="space-y-4">
            <h2 className="font-display text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/70 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4">
            <h2 className="font-display text-lg font-semibold">Visit Us</h2>
            <div className="space-y-3 text-cream/70">
              <a href="https://maps.google.com/?q=Tauru,Haryana,India" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-gold">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>Tauru, Nuh District, Haryana 122105, India</span>
              </a>
              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-3 hover:text-gold">
                <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>+91 XXXXXXXXXX</span>
              </a>
              <a href="mailto:info@kanhasweets.in" className="flex items-center gap-3 hover:text-gold">
                <Mail className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>info@kanhasweets.in</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-gold/20 pt-6 text-sm text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Kanha Sweets. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" aria-hidden="true" /> in Tauru, Haryana
          </p>
        </div>
      </div>
    </footer>
  )
}
