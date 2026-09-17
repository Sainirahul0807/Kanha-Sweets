'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Truck, MapPin, Calendar, Clock, CheckCircle, AlertCircle, Loader2, ChevronRight } from 'lucide-react'
import { useCart } from './Providers'
import { useOrder } from './Providers'

const DELIVERY_AREAS = [
  'Tauru City',
  'Sohna',
  'Nuh',
  'Ferozepur Jhirka',
  'Punhana',
  'Pinangwan',
  'Hathin',
]

const TIME_SLOTS = [
  '09:00 - 11:00',
  '11:00 - 13:00',
  '13:00 - 15:00',
  '15:00 - 17:00',
  '17:00 - 19:00',
]

export function OrderForm() {
  const { items, subtotal, clearCart } = useCart()
  const { formData, updateField, resetForm } = useOrder()

  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const deliveryFee = subtotal > 0 && subtotal < 1000 ? 50 : 0
  const total = subtotal + deliveryFee

  const formatPrice = (price: number) => `₹${price.toLocaleString()}`

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required'
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
      else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Enter a valid 10-digit Indian mobile number'
      }
    }

    if (currentStep === 2) {
      if (formData.deliveryType === 'delivery') {
        if (!formData.address.trim()) newErrors.address = 'Delivery address is required'
      }
      if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required'
      if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time slot is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateStep(2)) return

    setSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    const orderSummary = generateOrderSummary()

    const whatsappMessage = encodeURIComponent(
      `🎉 New Order from Kanha Sweets Website\n\n` +
      `📋 Order Summary:\n${orderSummary}\n\n` +
      `👤 Customer: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `📍 ${formData.deliveryType === 'delivery' ? `Delivery: ${formData.address}` : 'Pickup from store'}\n` +
      `📅 Preferred: ${formData.preferredDate} at ${formData.preferredTime}\n` +
      `${formData.notes ? `📝 Notes: ${formData.notes}\n` : ''}` +
      `\nPlease confirm availability and ready time. Jai Shri Krishna!`
    )

    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`

    // TODO: Replace with actual shop WhatsApp number
    // window.open(whatsappUrl, '_blank')

    /*
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, items, subtotal, deliveryFee, total })
      })
      if (!response.ok) throw new Error('Order submission failed')
    } catch (error) {
      setSubmitStatus('error')
      setSubmitting(false)
      return
    }
    */

    setSubmitStatus('success')
    setSubmitting(false)
    clearCart()
    resetForm()
    setStep(1)
  }

  const generateOrderSummary = () => {
    return items
      .map((item) => `  • ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}`)
      .join('\n') +
      `\n  ${'─'.repeat(30)}\n` +
      `  Subtotal: ${formatPrice(subtotal)}\n` +
      `  Delivery: ${deliveryFee > 0 ? formatPrice(deliveryFee) : 'Free'}\n` +
      `  Total: ${formatPrice(total)}`
  }

  const handleBack = () => setStep((prev) => Math.max(1, prev - 1))

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(3, prev + 1))
    }
  }

  const getMinDate = () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  if (submitStatus === 'success') {
    return <OrderSuccess orderSummary={generateOrderSummary()} customerName={formData.name} />
  }

  return (
    <section
      id="order"
      className="section-padding bg-cream relative min-h-[calc(100vh-200px)]"
      aria-labelledby="order-heading"
    >
      <div className="absolute inset-0 bg-mandala-pattern opacity-5" aria-hidden="true" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
          role="progressbar"
          aria-valuenow={step}
          aria-valuemin={1}
          aria-valuemax={3}
          aria-label="Order progress"
        >
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-gold/30" aria-hidden="true" />
            {[1, 2, 3].map((s) => (
              <motion.div key={s} className="relative z-10 flex flex-col items-center">
                <motion.div
                  animate={{ scale: step >= s ? 1 : 0.8, backgroundColor: step >= s ? '#D4AF37' : '#FFF8ED' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-2 ${
                    step > s ? 'bg-gold border-gold text-cream' : step === s ? 'bg-gold border-gold text-cream' : 'bg-cream border-gold/30 text-maroon/40'
                  }`}
                >
                  {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                </motion.div>
                <span className={`text-xs text-center mt-2 font-medium ${step >= s ? 'text-maroon' : 'text-maroon/40'}`}>
                  {['Details', 'Delivery', 'Confirm'][s - 1]}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.form
            key={step}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: step > 1 ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: step > 1 ? -30 : 30 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 id="order-heading" className="section-title mx-auto text-center mb-4">Your Details</h2>
                <p className="text-center text-maroon/70 mb-8">Help us reach you with your sweet order</p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="label-text">Full Name *</label>
                    <input type="text" id="name" value={formData.name} onChange={(e) => updateField('name', e.target.value)} className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`} placeholder="Your full name" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
                    {errors.name && <p id="name-error" className="mt-1 text-sm text-red-500 flex items-center gap-1" role="alert"><AlertCircle className="w-4 h-4" />{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="label-text">Phone Number *</label>
                    <input type="tel" id="phone" value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} className={`input-field ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`} placeholder="+91 98765 43210" autoComplete="tel" required aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} maxLength={15} />
                    {errors.phone && <p id="phone-error" className="mt-1 text-sm text-red-500 flex items-center gap-1" role="alert"><AlertCircle className="w-4 h-4" />{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="label-text">Email (Optional)</label>
                    <input type="email" id="email" value={formData.email || ''} onChange={(e) => updateField('email', e.target.value)} className="input-field" placeholder="you@example.com" autoComplete="email" />
                  </div>
                </div>

                <div className="lg:hidden mt-8 p-4 bg-cream rounded-2xl border border-gold/20">
                  <h4 className="font-semibold text-maroon mb-3 flex items-center gap-2"><Truck className="w-5 h-5 text-gold" />Order Summary</h4>
                  <div className="space-y-2 text-sm">
                    {items.map((item) => <div key={item.id} className="flex justify-between"><span className="text-maroon/70">{item.name} × {item.quantity}</span><span className="font-semibold text-maroon">{formatPrice(item.price * item.quantity)}</span></div>)}
                    <div className="border-t border-gold/20 pt-2 flex justify-between"><span className="font-semibold text-maroon">Total</span><span className="font-display font-bold text-gold">{formatPrice(total)}</span></div>
                  </div>
                </div>

                <div className="flex justify-end mt-8"><button type="button" onClick={handleNext} className="btn-primary px-10">Continue to Delivery<ChevronRight className="w-5 h-5 ml-2" /></button></div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 className="section-title mx-auto text-center mb-4">Delivery Details</h2>
                <p className="text-center text-maroon/70 mb-8">Choose how you'd like to receive your order</p>
                <fieldset className="space-y-4">
                  <legend className="label-text">Delivery Method *</legend>
                  <div className="grid grid-cols-2 gap-4">
                    {['pickup', 'delivery'].map((type) => (
                      <label key={type} className={`relative cursor-pointer ${formData.deliveryType === type ? 'ring-2 ring-gold' : ''}`}>
                        <input type="radio" name="deliveryType" value={type} checked={formData.deliveryType === type} onChange={(e) => updateField('deliveryType', e.target.value as 'pickup' | 'delivery')} className="sr-only" aria-describedby={`${type}-desc`} />
                        <div className={`p-6 rounded-2xl border-2 text-center transition-all ${formData.deliveryType === type ? 'bg-gold/10 border-gold' : 'bg-cream border-gold/20 hover:border-gold/40'}`}>
                          <div className="text-3xl mb-2">{type === 'pickup' ? '🏪' : '🚚'}</div>
                          <div className="font-semibold text-maroon capitalize">{type}</div>
                          <p id={`${type}-desc`} className="text-sm text-maroon/60 mt-1">{type === 'pickup' ? 'Collect from our Tauru shop' : `Delivery within Tauru area (₹${deliveryFee > 0 ? '50' : 'Free'})`}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <AnimatePresence>
                  {formData.deliveryType === 'delivery' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-4">
                      <div>
                        <label htmlFor="address" className="label-text">Delivery Address *</label>
                        <textarea id="address" value={formData.address} onChange={(e) => updateField('address', e.target.value)} rows={3} className={`input-field ${errors.address ? 'border-red-500 focus:ring-red-500' : ''}`} placeholder="House/Flat No., Street, Landmark, Tauru City, Haryana 122105" required aria-invalid={!!errors.address} aria-describedby={errors.address ? 'address-error' : undefined} />
                        {errors.address && <p id="address-error" className="mt-1 text-sm text-red-500 flex items-center gap-1" role="alert"><AlertCircle className="w-4 h-4" />{errors.address}</p>}
                      </div>
                      <div>
                        <label className="label-text">Delivery Area</label>
                        <select value={formData.area || ''} onChange={(e) => updateField('area', e.target.value)} className="input-field">
                          <option value="">Select area</option>
                          {DELIVERY_AREAS.map((area) => <option key={area} value={area}>{area}</option>)}
                        </select>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label htmlFor="preferredDate" className="label-text">Preferred Date *</label><input type="date" id="preferredDate" min={getMinDate()} value={formData.preferredDate} onChange={(e) => updateField('preferredDate', e.target.value)} className="input-field" required /></div>
                  <div><label htmlFor="preferredTime" className="label-text">Preferred Time *</label><select id="preferredTime" value={formData.preferredTime} onChange={(e) => updateField('preferredTime', e.target.value)} className="input-field" required><option value="">Select time slot</option>{TIME_SLOTS.map((slot) => <option key={slot} value={slot}>{slot}</option>)}</select></div>
                </div>

                <div><label htmlFor="notes" className="label-text">Additional Notes</label><textarea id="notes" value={formData.notes} onChange={(e) => updateField('notes', e.target.value)} rows={3} className="input-field" placeholder="Any special instructions..." /></div>

                <div className="flex justify-between mt-8"><button type="button" onClick={handleBack} className="btn-secondary">Back</button><button type="button" onClick={handleNext} className="btn-primary px-10">Review Order<ChevronRight className="w-5 h-5 ml-2" /></button></div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 className="section-title mx-auto text-center mb-4">Confirm Your Order</h2>
                <p className="text-center text-maroon/70 mb-8">Please review your details before placing the order</p>
                <div className="bg-cream rounded-2xl border border-gold/20 p-6 space-y-4">
                  <div className="flex justify-between"><span className="text-maroon/60">Name</span><span className="font-semibold text-maroon">{formData.name}</span></div>
                  <div className="flex justify-between"><span className="text-maroon/60">Phone</span><span className="font-semibold text-maroon">{formData.phone}</span></div>
                  {formData.email && <div className="flex justify-between"><span className="text-maroon/60">Email</span><span className="font-semibold text-maroon">{formData.email}</span></div>}
                  <div className="flex justify-between"><span className="text-maroon/60">Method</span><span className="font-semibold text-maroon capitalize">{formData.deliveryType}</span></div>
                  {formData.deliveryType === 'delivery' && <><div className="flex justify-between"><span className="text-maroon/60">Address</span><span className="font-semibold text-maroon text-right max-w-xs">{formData.address}</span></div><div className="flex justify-between"><span className="text-maroon/60">Area</span><span className="font-semibold text-maroon">{formData.area}</span></div></>}
                  <div className="flex justify-between"><span className="text-maroon/60">Date</span><span className="font-semibold text-maroon">{formData.preferredDate}</span></div>
                  <div className="flex justify-between"><span className="text-maroon/60">Time</span><span className="font-semibold text-maroon">{formData.preferredTime}</span></div>
                </div>
                <div className="bg-maroon/5 rounded-2xl p-6"><h3 className="font-display text-xl font-bold text-maroon mb-4">Order Summary</h3><div className="space-y-2">{items.map((item) => <div key={item.id} className="flex justify-between"><span>{item.name} × {item.quantity}</span><span>{formatPrice(item.price * item.quantity)}</span></div>)}</div><div className="border-t border-gold/20 mt-4 pt-4 space-y-2"><div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div><div className="flex justify-between"><span>Delivery</span><span>{deliveryFee > 0 ? formatPrice(deliveryFee) : 'Free'}</span></div><div className="flex justify-between text-lg font-bold text-maroon"><span>Total</span><span>{formatPrice(total)}</span></div></div></div>
                <div className="flex justify-between mt-8"><button type="button" onClick={handleBack} className="btn-secondary">Back</button><button type="submit" disabled={submitting} className="btn-primary px-10">{submitting ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Placing Order...</> : <>Place Order<CheckCircle className="w-5 h-5 ml-2" /></>}</button></div>
              </motion.div>
            )}
          </motion.form>
        </AnimatePresence>
      </div>
    </section>
  )
}

function OrderSuccess({ orderSummary, customerName }: { orderSummary: string; customerName: string }) {
  return <section className="section-padding bg-cream min-h-[60vh] flex items-center justify-center"><div className="text-center max-w-lg mx-auto"><div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-12 h-12 text-gold" /></div><h2 className="section-title">Thank You, {customerName}!</h2><p className="text-maroon/70 mt-4 mb-6">Your order has been received. We will contact you shortly to confirm the details.</p><div className="bg-white rounded-2xl p-6 text-left border border-gold/20"><h3 className="font-display text-xl font-bold text-maroon mb-3">Order Summary</h3><pre className="text-sm text-maroon/70 whitespace-pre-wrap font-sans">{orderSummary}</pre></div><button type="button" onClick={() => window.location.reload()} className="btn-primary mt-8">Place Another Order</button></div></section>
}
