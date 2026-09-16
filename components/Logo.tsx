'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: { w: 'w-8 h-8', text: 'text-xs', ring: 'ring-2' },
    md: { w: 'w-12 h-12', text: 'text-sm', ring: 'ring-2' },
    lg: { w: 'w-16 h-16', text: 'text-base', ring: 'ring-4' },
  }

  const { w, text, ring } = sizes[size]

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`${w} ${ring} relative inline-flex items-center justify-center ${className}`}
      role="img"
      aria-label="Kanha Sweets Logo"
    >
      {/* Outer mandala ring */}
      <svg
        className="absolute inset-0 text-gold/30 animate-spin-slow"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <g stroke="currentColor" strokeWidth="0.5">
          {[0, 45, 90, 135].map((angle) => (
            <line key={angle} x1="50" y1="50" x2={50 + 45 * Math.cos((angle * Math.PI) / 180)} y2={50 + 45 * Math.sin((angle * Math.PI) / 180)} />
          ))}
        </g>
      </svg>

      {/* Main circular emblem */}
      <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-maroon via-maroon to-maroon-dark flex flex-col items-center justify-center p-1">
        {/* Inner gold border */}
        <div className="w-full h-full rounded-full border border-gold/50 flex flex-col items-center justify-center p-[1px]">
          {/* Diya / Oil Lamp Icon */}
          <svg
            className="text-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            <path d="M12 6v6l4 2" />
            <ellipse cx="12" cy="6" rx="1.5" ry="1" fill="currentColor" stroke="none" />
          </svg>

          {/* KS Initials */}
          <span className="font-devanagari text-gold tracking-widest -mt-1 select-none">
            KS
          </span>

          {/* Decorative dots */}
          <div className="flex gap-1 mt-0.5" aria-hidden="true">
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            <span className="w-1 h-1 rounded-full bg-gold/60" />
          </div>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/20 via-transparent to-gold/20 blur-xl opacity-50 animate-pulse-gold"
        aria-hidden="true"
      />
    </motion.div>
  )
}

// Add custom animation for slow spin
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 30s linear infinite;
    }
  `
  document.head.appendChild(style)
}