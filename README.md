# Kanha Sweets - Tauru's No.1 Sweet Shop Since 1990

A production-ready, animated Next.js 14 website for Kanha Sweets, Tauru City, Haryana. Built with modern web technologies for optimal performance, accessibility, and visual appeal.

## 🌟 Features

- **Next.js 14 App Router** with TypeScript
- **Tailwind CSS** for styling with custom Indian sweet shop theme
- **Framer Motion** for smooth animations (scroll reveals, page transitions, hover effects)
- **Responsive Design** - Mobile-first, works on all devices
- **Shopping Cart** with React Context + localStorage persistence
- **Multi-step Order Form** with validation
- **WhatsApp Integration** ready for order submissions
- **Image Optimization** with Next.js Image component
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- **SEO Optimized** - Metadata, Open Graph, Twitter Cards
- **Vercel Ready** - Zero-config deployment

## 🎨 Design Highlights

- **Color Palette**: Deep Maroon (#7A1F2B), Rich Gold (#D4AF37), Cream (#FFF8ED)
- **Typography**: Playfair Display (headings) + Poppins (body) + Yatra One (Devanagari accents)
- **Logo**: Custom SVG emblem with Diya lamp + "KS" initials
- **Animations**: Scroll reveals, carousel, hover micro-interactions, cart badge bounce
- **Components**: Mithai box-style cards, gold dividers, mandala patterns

## 📦 Product Categories (80+ Items)

1. **Traditional Mithai** - Gulab Jamun, Rasgulla, Kaju Katli, Motichoor Ladoo, etc.
2. **Ghee Sweets** - Desi Ghee Ladoo, Moong Dal Halwa, Ghee Jalebi, Gajar Halwa
3. **Dry Fruit & Kaju Specials** - Kaju Roll, Kaju Anjeer Roll, Dry Fruit Barfi
4. **Bengali Sweets** - Sandesh, Cham Cham, Kheer Kadam, Mishti Doi
5. **Namkeen & Snacks** - Tauru Special Bhujia, Samosa, Kachori, Mathi
6. **Gift Boxes & Hampers** - Assorted boxes (S/M/L), Festival boxes, Wedding hampers
7. **Chaat & Fast Food** - Samosa Chaat, Pani Puri, Bhel Puri, Aloo Tikki
8. **Seasonal Specials** - Diwali, Rakhi, Holi specials

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/kanha-sweets.git
cd kanha-sweets

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Customization Guide

### Updating Products & Prices

Edit `data/products.ts`:
```typescript
export const products: Product[] = [
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    description: 'Soft, melt-in-mouth khoya dumplings...',
    price: 280,        // Price in ₹
    unit: 'per kg',    // Unit of measurement
    category: 'traditional',
    image: '/images/products/gulab-jamun.jpg',
    veg: true,
    popular: true,
  },
  // Add more products...
]
```

### Updating Contact Information

Search for `TODO: replace with real contact info` in:
- `components/Navbar.tsx` (phone, email, address)
- `components/Footer.tsx` (phone, email, address, map)
- `components/OrderForm.tsx` (WhatsApp number)

### Adding Real Images

Place your images in the appropriate folders:
```
public/images/
├── hero/           # Hero carousel images
├── products/       # Product images (match product IDs)
├── gallery/        # Gallery images
└── logo/           # Favicon, apple-touch-icon, etc.
```

Update image paths in `data/products.ts` to match your filenames.

### Customizing Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  maroon: {
    DEFAULT: '#7A1F2B',  // Primary brand color
    light: '#9B2A3C',
    dark: '#5D1821',
  },
  gold: {
    DEFAULT: '#D4AF37',  // Primary accent
    light: '#E8C56A',
    saffron: '#E8A33D',
  },
  cream: {
    DEFAULT: '#FFF8ED',  // Background
  },
}
```

## 🌐 Deployment to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js - just click **Deploy**
6. Your site will be live at `https://your-project.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Environment Variables (Optional)

No environment variables required for base version. For production WhatsApp/email integration:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Shop's WhatsApp number (with country code) |
| `EMAIL_SERVICE_API_KEY` | API key for EmailJS/Formspree/Resend |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID |

## 📁 Project Structure

```
kanha-sweets/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles & Tailwind directives
├── components/
│   ├── Providers.tsx       # Cart & Order Context providers
│   ├── Navbar.tsx          # Sticky navbar with cart & search
│   ├── Hero.tsx            # Carousel hero section
│   ├── About.tsx           # Story, trust badges, founder
│   ├── CategoryNav.tsx     # Horizontal category pills
│   ├── ProductCard.tsx     # Mithai box-style product card
│   ├── MenuSection.tsx     # Dynamic product grid
│   ├── Gallery.tsx         # Image grid with lightbox
│   ├── Testimonials.tsx    # Carousel with ratings
│   ├── CartDrawer.tsx      # Slide-in cart side panel
│   ├── OrderForm.tsx       # 3-step order form
│   └── Footer.tsx          # Contact, hours, social, map
├── data/
│   └── products.ts         # All product data (80+ items)
├── public/
│   └── images/             # Image assets (see structure above)
├── tailwind.config.ts      # Theme configuration
├── next.config.js          # Next.js configuration
├── package.json
├── tsconfig.json
└── README.md
```

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Color contrast ratios (WCAG AA)
- Alt text for all images
- Reduced motion support

## 🔧 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2+ | React framework with App Router |
| React | 18.2+ | UI library |
| TypeScript | 5.3+ | Type safety |
| Tailwind CSS | 3.4+ | Utility-first CSS |
| Framer Motion | 11+ | Animations |
| Lucide React | 0.344+ | Icons |
| Canvas Confetti | 1.9+ | Celebration effects |

## 📄 License

This project is created for Kanha Sweets, Tauru. All rights reserved.

## 🙏 Credits

- **Shop**: Kanha Sweets, Tauru City, Nuh District, Haryana
- **Founder**: Shri Indraj Saini (Since 1990)
- **Images**: Unsplash (placeholder - replace with actual shop photos)
- **Fonts**: Google Fonts (Playfair Display, Poppins, Yatra One)
- **Icons**: Lucide React

## 📞 Support

For technical questions about this website:
- Check the customization guide above
- Review component code for implementation details
- Vercel deployment docs: [vercel.com/docs](https://vercel.com/docs)

---

**Jai Shri Krishna!** 🙏 Made with ❤️ for Tauru's sweetest tradition.