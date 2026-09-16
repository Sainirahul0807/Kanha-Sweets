'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Plus, Minus, Check, ShoppingCart, Leaf } from 'lucide-react'
import { Product } from '@/data/products'
import { useCart } from './Providers'

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { items, addItem, updateQuantity, removeItem } = useCart()

  const cartItem = items.find(
    (item) => item.productId === product.id
  )
  const quantity = cartItem?.quantity || 0
  const inCart = quantity > 0

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      unit: product.unit,
      image: product.image,
      veg: product.veg,
    })
  }

  const handleIncrement = () => {
    if (cartItem) updateQuantity(cartItem.id, quantity + 1)
  }

  const handleDecrement = () => {
    if (cartItem) updateQuantity(cartItem.id, quantity - 1)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: (index % 8) * 0.08, duration: 0.5 }}
      className="card-mithai group"
      role="listitem"
      aria-labelledby={`product-${product.id}-name`}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gold/5">
        <Image
          src={product.image}
          alt={`${product.name} - ${product.description}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
          quality={85}
        />
        {/* Veg Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="veg-badge" aria-label="Vegetarian">
            <span className="sr-only">Vegetarian</span>
          </span>
        </div>

        {/* Popular Badge */}
        {product.popular && (
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.3 }}
            className="absolute top-3 right-3 z-10 bg-gold text-maroon text-xs font-bold px-2 py-1 rounded-full shadow-lg"
            aria-label="Popular item"
          >
            ⭐ Popular
          </motion.div>
        )}

        {/* Seasonal Badge */}
        {product.seasonal && (
          <div className="absolute top-3 right-3 z-10 bg-red-600 text-cream text-xs font-bold px-2 py-1 rounded-full shadow-lg" aria-label="Seasonal item">
            🪔 Seasonal
          </div>
        )}

        {/* Hover Overlay */}
        <AnimatePresence>
          {inCart && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-maroon/80 flex items-center justify-center"
            >
              <div className="text-center p-4">
                <p className="text-cream font-medium mb-2">Added to cart</p>
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={handleDecrement}
                    className="w-8 h-8 bg-cream/20 text-cream rounded-full hover:bg-cream/30 transition-colors flex items-center justify-center"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <span className="w-10 text-center font-bold text-lg">{quantity}</span>
                  <button
                    onClick={handleIncrement}
                    className="w-8 h-8 bg-gold text-maroon rounded-full hover:bg-gold-light transition-colors flex items-center justify-center"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Name & Price Row */}
        <div className="flex items-start justify-between gap-2">
          <h3
            id={`product-${product.id}-name`}
            className="font-display font-semibold text-maroon text-base leading-tight flex-1 pr-2"
          >
            {product.name}
          </h3>
          <span className="font-display font-bold text-gold text-lg whitespace-nowrap flex-shrink-0">
            ₹{product.price.toLocaleString()}
            <span className="font-body text-maroon/60 text-xs font-normal">/{product.unit}</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-maroon/60 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Add to Cart / Quantity Controls */}
        <AnimatePresence mode="wait">
          {!inCart ? (
            <motion.button
              key="add"
              onClick={handleAdd}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-gold py-3 flex items-center justify-center gap-2"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingCart className="w-5 h-5" aria-hidden="true" />
              <span>Add to Cart</span>
            </motion.button>
          ) : (
            <motion.div
              key="quantity"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full flex items-center justify-center gap-3"
            >
              <button
                onClick={handleDecrement}
                className="w-10 h-10 bg-maroon/10 text-maroon rounded-full hover:bg-maroun/20 transition-colors flex items-center justify-center"
                aria-label="Decrease quantity"
              >
                <Minus className="w-5 h-5" aria-hidden="true" />
              </button>
              <span className="w-12 text-center font-display font-bold text-lg text-maroon">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="w-10 h-10 bg-gold text-maroon rounded-full hover:bg-gold-light transition-colors flex items-center justify-center"
                aria-label="Increase quantity"
              >
                <Plus className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => cartItem && removeItem(cartItem.id)}
                className="ml-auto w-10 h-10 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors flex items-center justify-center"
                aria-label="Remove from cart"
              >
                <Check className="w-5 h-5 rotate-45" aria-hidden="true" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-12 h-12 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23D4AF37%22 stroke-opacity=%220.08%22 stroke-width=%221%22%3E%3Cpath d=%22M12 22L22 17l-10-5-10 5zM22 7l-10-5-10 5M22 12l-10-5-10 5%22/%3E%3C/svg%3E')] bg-no-repeat bg-center bg-cover pointer-events-none" aria-hidden="true" />
    </motion.article>
  )
}