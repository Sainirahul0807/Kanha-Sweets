'use client'

import { motion } from 'framer-motion'
import { categories } from '@/data/products'

interface CategoryNavProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  const allCategories = ['all', ...categories.map((c) => c.id)]

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="section-padding bg-cream"
      aria-label="Product categories"
    >
      <div className="container-custom">
        <div className="flex flex-wrap gap-3 justify-center" role="tablist">
          {allCategories.map((catId, index) => {
            const category = categories.find((c) => c.id === catId)
            const isActive = activeCategory === catId

            return (
              <motion.button
                key={catId}
                onClick={() => onCategoryChange(catId)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`menu-${catId}`}
                id={`tab-${catId}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream ${
                  isActive
                    ? 'bg-maroon text-cream shadow-lg shadow-maroon/30'
                    : 'bg-cream text-maroon/70 border border-gold/20 hover:border-gold/50 hover:text-maroon hover:bg-gold/5'
                }`}
              >
                <span className="flex items-center gap-2">
                  {category && <span aria-hidden="true">{category.icon}</span>}
                  {catId === 'all' ? 'All Sweets' : category?.name}
                </span>
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gold rounded-t-full"
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}