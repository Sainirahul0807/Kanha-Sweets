'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Leaf, Heart, Truck, Sparkles } from 'lucide-react'

const trustBadges = [
  { icon: Award, label: '35+ Years', desc: 'Established 1990' },
  { icon: Leaf, label: '100% Vegetarian', desc: 'Pure ingredients' },
  { icon: Heart, label: 'Pure Desi Ghee', desc: 'Traditional recipe' },
  { icon: Sparkles, label: 'Fresh Daily', desc: 'Made every morning' },
  { icon: Truck, label: 'Local Delivery', desc: 'Tauru & nearby' },
]

const features = [
  {
    title: 'Heritage Recipe',
    desc: 'Every sweet follows the original 1990 recipes passed down by our founder, Shri Indraj Saini. No shortcuts, no compromises.',
    icon: '📜',
  },
  {
    title: 'Pure Ingredients',
    desc: 'We source the finest milk, desi ghee, nuts, and spices. Every ingredient is personally inspected for quality.',
    icon: '🥛',
  },
  {
    title: 'Handcrafted Daily',
    desc: 'Our karigars (artisans) hand-shape every mithai from dawn. What you taste is made fresh that very morning.',
    icon: '👨‍🍳',
  },
  {
    title: 'Community First',
    desc: 'From school events to weddings, Kanha Sweets has been part of Tauru\'s celebrations for generations.',
    icon: '🤝',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="section-padding bg-cream relative"
      aria-labelledby="about-heading"
    >
      {/* Background pattern */}
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
          <h2 id="about-heading" className="section-title mx-auto">
            Our Story
          </h2>
          <p className="mt-6 text-lg text-maroon/70 max-w-2xl mx-auto leading-relaxed">
            Three decades of sweet memories, one unchanged promise: authenticity in every bite.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/30">
              <Image
                src="https://images.unsplash.com/photo-1558961942-1a4682904a51?w=800&q=80"
                alt="Kanha Sweets shop interior showing traditional sweet making"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
              {/* Decorative corner accents */}
              <div className="absolute inset-0 border-4 border-gold/20 rounded-3xl pointer-events-none" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-gold rounded-tl-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-gold rounded-br-2xl pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-maroon text-cream p-4 rounded-2xl shadow-xl border border-gold/30"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="font-display font-bold text-lg">Tauru's No.1</p>
                  <p className="text-gold text-sm font-medium">Sweet Shop Since 1990</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-maroon/80 leading-relaxed">
                In <span className="font-display font-bold text-gold">1990</span>, Shri Indraj Saini opened a modest sweet shop in Tauru City with a simple vision:
                to serve authentic, handcrafted mithai made with pure desi ghee and the finest ingredients.
              </p>

              <p className="text-lg text-maroon/80 leading-relaxed">
                What started as a small counter serving gulab jamun and jalebi to locals has grown into
                <span className="font-semibold text-maroon">Tauru's most trusted sweet destination</span>, yet our methods remain unchanged.
                Every karigar (artisan) at Kanha Sweets is trained in the traditional techniques that have defined our taste for over 35 years.
              </p>

              <p className="text-lg text-maroon/80 leading-relaxed font-medium">
                Today, the legacy continues with the same dedication — from the slow reduction of milk for kalakand
                to the precise temperature of ghee for perfect jalebi spirals. This is not just a business;
                it's a promise to our community.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gold/20">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-cream/50 rounded-xl border border-gold/10 hover:border-gold/30 hover:bg-cream transition-all"
                  >
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center flex-shrink-0 text-gold">
                      <badge.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-maroon">{badge.label}</p>
                      <p className="text-sm text-maroon/60">{badge.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-center font-display text-2xl sm:text-3xl text-maroon mb-12">
            What Makes Us Different
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-cream rounded-2xl border border-gold/10 hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-display text-xl text-maroon mb-2">{feature.title}</h4>
                <p className="text-maroon/70 leading-relaxed">{feature.desc}</p>
                <div className="mt-4 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent group-hover:w-full group-hover:from-gold group-hover:via-gold group-hover:to-gold transition-all duration-500 w-0" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 p-8 lg:p-12 bg-gradient-to-br from-maroon via-maroon to-maroon-dark rounded-3xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-mandala-pattern opacity-5" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" aria-hidden="true" />

          <div className="relative flex flex-col lg:flex-row items-center gap-8">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center flex-shrink-0">
              <span className="text-5xl lg:text-7xl">👨‍🍳</span>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-gold font-devanagari text-sm tracking-widest uppercase mb-2">Founder</p>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-cream mb-2">Shri Indraj Saini</h3>
              <p className="text-cream/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                "Sweetness is not just about sugar — it's about the love in your hands,
                the purity in your ingredients, and the smile on your customer's face.
                That's the Kanha way, since 1990."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}