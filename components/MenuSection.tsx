'use client'

import { motion } from 'framer-motion'
import { categories, getProductsByCategory, Product } from '@/data/products'
import { ProductCard } from './ProductCard'

interface MenuSectionProps {
  activeCategory: string
}

export function MenuSection({ activeCategory }: MenuSectionProps) {
  const currentCategory = activeCategory === 'all' ? null : activeCategory
  const products = currentCategory ? getProductsByCategory(currentCategory as Product['category']) : categories.flatMap(c => getProductsByCategory(c.id))
  const categoryInfo = categories.find(c => c.id === currentCategory)

  return (
    <section
      id="menu"
      className="section-padding bg-cream relative"
      aria-labelledby="menu-heading"
    >
      <div className="absolute inset-0 bg-mandala-pattern opacity-5" aria-hidden="true" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="menu-heading" className="section-title mx-auto">
            {categoryInfo ? `${categoryInfo.icon} ${categoryInfo.name}` : 'Our Complete Menu'}
          </h2>
          <p className="mt-4 text-lg text-maroon/70 max-w-2xl mx-auto">
            {categoryInfo
              ? `Explore our handcrafted ${categoryInfo.name.toLowerCase()} — each piece made with love and tradition.`
              : 'Discover 80+ authentic sweets, namkeen, gift boxes & seasonal specials.'}
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          role="list"
          aria-label={`${categoryInfo?.name || 'All'} products`}
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}

          {/* Empty state */}
          {products.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-display text-2xl text-maroon mb-2">No items in this category</h3>
              <p className="text-maroon/60">Please check back soon for new additions!</p>
            </motion.div>
          )}
        </motion.div>

        {/* View All Button (when filtered) */}
        {currentCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 text-center"
          >
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault()
                window.dispatchEvent(new CustomEvent('reset-category'))
              }}
              className="btn-secondary inline-flex items-center gap-2"
            >
              View All Sweets
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}