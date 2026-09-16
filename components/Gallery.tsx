'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1558961942-1a4682904a51?w=1200&q=80',
    alt: 'Assorted traditional Indian sweets display',
    caption: 'Traditional Mithai Selection',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&q=80',
    alt: 'Kaju Katli with silver varq',
    caption: 'Premium Kaju Katli with Silver Leaf',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1577303552983-82b8f2185b7f?w=1200&q=80',
    alt: 'Festival gift boxes arranged',
    caption: 'Diwali Gift Hampers Ready',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1541745537411-b804b81c2e8c?w=1200&q=80',
    alt: 'Fresh jalebi being made',
    caption: 'Fresh Jalebi - Made to Order',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1563729784474-d77d80b50d56?w=1200&q=80',
    alt: 'Bengali sweets - rasgulla and sandesh',
    caption: 'Authentic Bengali Sweets',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&q=80',
    alt: 'Dry fruit assortment',
    caption: 'Premium Dry Fruit Collection',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1558961942-1a4682904a51?w=1200&q=80',
    alt: 'Shop interior with sweet counter',
    caption: 'Our Tauru Shop - Since 1990',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1577303552983-82b8f2185b7f?w=1200&q=80',
    alt: 'Wedding celebration hamper',
    caption: 'Wedding Celebration Hampers',
  },
]

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)
  const nextImage = () => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : 0))
  const prevImage = () => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0))

  // Keyboard navigation
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedIndex === null) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  // We'll add the event listener in a useEffect in real implementation
  // For simplicity, we'll attach it to the lightbox container

  return (
    <section
      id="gallery"
      className="section-padding bg-cream relative"
      aria-labelledby="gallery-heading"
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
          <h2 id="gallery-heading" className="section-title mx-auto">
            Gallery
          </h2>
          <p className="mt-4 text-lg text-maroon/70 max-w-2xl mx-auto">
            A glimpse into our world of sweetness — from kitchen to celebration.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          role="list"
          aria-label="Gallery images"
        >
          {galleryImages.map((image, index) => (
            <motion.article
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              role="listitem"
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(index)}
              tabIndex={0}
              aria-label={`View ${image.caption} in full size`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-cream">
                  <p className="font-display font-semibold">{image.caption}</p>
                  <p className="text-sm opacity-80 flex items-center gap-1">
                    <Expand className="w-4 h-4" aria-hidden="true" />
                    Click to enlarge
                  </p>
                </div>
              </div>
              {/* Gold border accent */}
              <div className="absolute inset-0 border-2 border-gold/20 rounded-2xl pointer-events-none group-hover:border-gold/50 transition-colors" />
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
          >
            <motion.button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 z-10 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </motion.button>

            <motion.button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 z-10 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-gold hidden md:flex"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
            >
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                width={1200}
                height={800}
                className="rounded-xl shadow-2xl object-contain"
                priority
                quality={90}
              />
            </motion.div>

            <motion.button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 z-10 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-gold hidden md:flex"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </motion.button>

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white max-w-2xl px-4"
            >
              <p className="font-display text-lg mb-1">{galleryImages[selectedIndex].caption}</p>
              <p className="text-sm text-white/60">{selectedIndex + 1} of {galleryImages.length}</p>
            </motion.div>

            {/* Mobile swipe indicators */}
            <div className="md:hidden absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4">
              <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="p-2 bg-white/10 text-white rounded-full" aria-label="Previous">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="p-2 bg-white/10 text-white rounded-full" aria-label="Next">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}