'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Plus, Minus, Trash2, ShoppingCart, Truck, MapPin } from 'lucide-react'
import Link from 'next/link'
import { useCart } from './Providers'

export function CartDrawer() {
  const { items, itemCount, subtotal, updateQuantity, removeItem, clearCart, closeCart, isOpen } = useCart()

  const deliveryFee = subtotal > 0 && subtotal < 1000 ? 50 : 0
  const freeDeliveryThreshold = 1000
  const total = subtotal + deliveryFee

  const formatPrice = (price: number) => `₹${price.toLocaleString()}`

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={closeCart}
        aria-hidden="true"
      />

      <motion.aside
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed right-0 top-0 h-full w-full max-w-md z-50 bg-cream shadow-2xl flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between p-6 border-b border-gold/20 sticky top-0 bg-cream z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-gold" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display font-bold text-maroon">Your Cart</h3>
              <p className="text-sm text-maroon/60">{itemCount} item{itemCount !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-maroon/60 hover:text-maroon hover:bg-gold/10 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Close cart"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4" role="list" aria-label="Cart items">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <ShoppingCart className="w-10 h-10 text-gold" aria-hidden="true" />
              </div>
              <h4 className="font-display text-xl text-maroon mb-2">Your cart is empty</h4>
              <p className="text-maroon/60 mb-6">Add some delicious sweets to get started</p>
              <Link href="#menu" onClick={closeCart} className="btn-primary">
                Browse Menu
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex gap-4 p-3 bg-cream/50 rounded-2xl border border-gold/10"
                role="listitem"
              >
                <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gold/5">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-maroon truncate">{item.name}</h4>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 text-maroon/40 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>

                  {item.weight && <p className="text-xs text-maroon/50 mb-1">{item.weight}</p>}

                  <p className="font-display font-bold text-gold text-sm">
                    {formatPrice(item.price)} per item
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-maroon/10 text-maroon rounded-full hover:bg-maroon/20 transition-colors flex items-center justify-center"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <span className="w-10 text-center font-display font-bold text-maroon">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gold text-maroon rounded-full hover:bg-gold-light transition-colors flex items-center justify-center"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" aria-hidden="true" />
                    </button>

                    <span className="ml-auto font-display font-bold text-maroon">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </div>

        <div className="p-6 border-t border-gold/20 bg-cream/50 space-y-3">
          <div className="flex justify-between text-maroon/70">
            <span>Subtotal ({itemCount} items)</span>
            <span className="font-semibold">{formatPrice(subtotal)}</span>
          </div>

          <div className="flex justify-between text-maroon/70">
            <span className="flex items-center gap-1">
              <Truck className="w-4 h-4" aria-hidden="true" />
              Delivery
            </span>
            <span className="font-semibold">{deliveryFee > 0 ? formatPrice(deliveryFee) : 'Free'}</span>
          </div>

          {subtotal > 0 && subtotal < freeDeliveryThreshold && (
            <p className="text-xs text-gold/80 flex items-center justify-center gap-1">
              <MapPin className="w-3 h-3" aria-hidden="true" />
              Add {formatPrice(freeDeliveryThreshold - subtotal)} more for free delivery within Tauru
            </p>
          )}

          <div className="h-px bg-gold/30 my-2" />

          <div className="flex justify-between text-lg">
            <span className="font-display font-bold text-maroon">Total</span>
            <span className="font-display font-bold text-gold">{formatPrice(total)}</span>
          </div>

          <p className="text-xs text-maroon/50 flex items-center justify-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-600" aria-hidden="true" />
            All items are 100% vegetarian
          </p>
        </div>

        <div className="p-6 border-t border-gold/20 bg-cream/50 space-y-3">
          {items.length > 0 && (
            <button
              onClick={() => {
                closeCart()
                document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="w-full btn-primary py-4 text-lg"
            >
              Proceed to Order
            </button>
          )}
          {items.length > 0 && (
            <button onClick={clearCart} className="w-full btn-secondary py-3">
              Clear Cart
            </button>
          )}
          <Link
            href="#menu"
            onClick={closeCart}
            className="block text-center text-sm text-maroon/60 hover:text-gold transition-colors"
          >
            ← Continue Shopping
          </Link>
        </div>
      </motion.aside>
    </AnimatePresence>
  )
}
