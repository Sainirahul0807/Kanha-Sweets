'use client'

import { ReactNode, createContext, useContext, useState, useEffect, useCallback } from 'react'

// ============================================
// CART CONTEXT
// ============================================

export interface CartItem {
  id: string
  productId: string
  name: string
  price: number
  quantity: number
  weight?: string
  image: string
  veg: boolean
}

interface CartContextType {
  items: CartItem[]
  itemCount: number
  subtotal: number
  addItem: (item: Omit<CartItem, 'id'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('kanha-sweets-cart')
      if (stored) {
        try {
          return JSON.parse(stored)
        } catch {
          return []
        }
      }
    }
    return []
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('kanha-sweets-cart', JSON.stringify(items))
  }, [items])

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const addItem = useCallback((newItem: Omit<CartItem, 'id'>) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.productId === newItem.productId && item.weight === newItem.weight
      )
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      }
      return [...prev, { ...newItem, id: `${newItem.productId}-${Date.now()}` }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }, [removeItem])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), [])

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

// ============================================
// ORDER CONTEXT
// ============================================

interface OrderFormData {
  name: string
  phone: string
  email: string
  address: string
  area: string
  deliveryType: 'pickup' | 'delivery'
  preferredDate: string
  preferredTime: string
  notes: string
}

interface OrderContextType {
  formData: OrderFormData
  updateField: <K extends keyof OrderFormData>(field: K, value: OrderFormData[K]) => void
  resetForm: () => void
}

const initialFormData: OrderFormData = {
  name: '',
  phone: '',
  email: '',
  address: '',
  area: '',
  deliveryType: 'pickup',
  preferredDate: '',
  preferredTime: '',
  notes: '',
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<OrderFormData>(initialFormData)

  const updateField = useCallback(<K extends keyof OrderFormData>(field: K, value: OrderFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const resetForm = useCallback(() => {
    setFormData(initialFormData)
  }, [])

  return (
    <OrderContext.Provider value={{ formData, updateField, resetForm }}>
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  const context = useContext(OrderContext)
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider')
  }
  return context
}

// Root provider expected by app/layout.tsx.
export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <OrderProvider>{children}</OrderProvider>
    </CartProvider>
  )
}
