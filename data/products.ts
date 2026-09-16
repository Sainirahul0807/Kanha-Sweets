// ============================================
// PRODUCT DATA - KANHA SWEETS MENU
// ============================================

export type Category =
  | 'traditional'
  | 'ghee'
  | 'dry-fruit'
  | 'bengali'
  | 'namkeen'
  | 'gift-boxes'
  | 'chaat'
  | 'seasonal'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  unit: string // e.g., 'per kg', 'per 500g', 'per piece', 'per box'
  category: Category
  image: string
  veg: boolean
  popular?: boolean
  seasonal?: boolean
}

export const categories: { id: Category; name: string; icon: string }[] = [
  { id: 'traditional', name: 'Traditional Mithai', icon: '🍯' },
  { id: 'ghee', name: 'Ghee Sweets', icon: '🧈' },
  { id: 'dry-fruit', name: 'Dry Fruit & Kaju Specials', icon: '🥜' },
  { id: 'bengali', name: 'Bengali Sweets', icon: '🍮' },
  { id: 'namkeen', name: 'Namkeen & Snacks', icon: '🥨' },
  { id: 'gift-boxes', name: 'Gift Boxes & Hampers', icon: '🎁' },
  { id: 'chaat', name: 'Chaat & Fast Food', icon: '🍢' },
  { id: 'seasonal', name: 'Seasonal Specials', icon: '🪔' },
]

export const products: Product[] = [
  // ============================================
  // TRADITIONAL SWEETS (MITHai)
  // ============================================
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    description: 'Soft, melt-in-mouth khoya dumplings soaked in rose-cardamom sugar syrup. Made fresh daily with pure desi ghee.',
    price: 280,
    unit: 'per kg',
    category: 'traditional',
    image: '/images/products/gulab-jamun.jpg',
    veg: true,
    popular: true,
  },
  {
    id: 'rasgulla',
    name: 'Rasgulla',
    description: 'Spongy white cottage cheese balls simmered in light cardamom-scented syrup. A Bengali classic perfected in Tauru.',
    price: 260,
    unit: 'per kg',
    category: 'traditional',
    image: '/images/products/rasgulla.jpg',
    veg: true,
    popular: true,
  },
  {
    id: 'kaju-katli',
    name: 'Kaju Katli',
    description: 'Diamond-shaped cashew fudge made with premium Kaju, silver leaf (varq), and a hint of cardamom. The king of mithai.',
    price: 850,
    unit: 'per kg',
    category: 'traditional',
    image: '/images/products/kaju-katli.jpg',
    veg: true,
    popular: true,
  },
  {
    id: 'motichoor-ladoo',
    name: 'Motichoor Ladoo',
    description: 'Tiny pearls of gram flour bound with ghee and sugar syrup, flavored with cardamom and saffron. Festive favorite.',
    price: 320,
    unit: 'per kg',
    category: 'traditional',
    image: '/images/products/motichoor-ladoo.jpg',
    veg: true,
    popular: true,
  },
  {
    id: 'besan-ladoo',
    name: 'Besan Ladoo',
    description: 'Roasted gram flour laddoos with generous desi ghee, powdered sugar, and aromatic cardamom. Nostalgic homemade taste.',
    price: 300,
    unit: 'per kg',
    category: 'traditional',
    image: '/images/products/besan-ladoo.jpg',
    veg: true,
  },
  {
    id: 'kalakand',
    name: 'Kalakand',
    description: 'Granular milk cake made by reducing full-cream milk, flavored with cardamom and topped with pistachio slivers.',
    price: 350,
    unit: 'per kg',
    category: 'traditional',
    image: '/images/products/kalakand.jpg',
    veg: true,
  },
  {
    id: 'peda',
    name: 'Doodh Peda',
    description: 'Rich milk fudge rounds made from slow-cooked khoya, cardamom, and a touch of saffron. Soft, creamy, divine.',
    price: 340,
    unit: 'per kg',
    category: 'traditional',
    image: '/images/products/peda.jpg',
    veg: true,
  },
  {
    id: 'barfi-assorted',
    name: 'Assorted Barfi',
    description: 'Selection of plain, pista, chocolate, and coconut barfi. Perfect for sampling multiple flavors.',
    price: 400,
    unit: 'per kg',
    category: 'traditional',
    image: '/images/products/barfi-assorted.jpg',
    veg: true,
  },
  {
    id: 'rasmalai',
    name: 'Rasmalai',
    description: 'Flattened chenna patties soaked in thickened saffron-cardamom milk (rabri), garnished with nuts.',
    price: 380,
    unit: 'per kg',
    category: 'traditional',
    image: '/images/products/rasmalai.jpg',
    veg: true,
    popular: true,
  },
  {
    id: 'jalebi',
    name: 'Jalebi',
    description: 'Crispy, spiral-shaped fermented batter fried golden and soaked in saffron syrup. Best eaten warm.',
    price: 240,
    unit: 'per kg',
    category: 'traditional',
    image: '/images/products/jalebi.jpg',
    veg: true,
    popular: true,
  },

  // ============================================
  // GHEE SWEETS
  // ============================================
  {
    id: 'ghee-ladoo',
    name: 'Desi Ghee Ladoo',
    description: 'Pure desi ghee laddoos with roasted wheat flour, jaggery, and dry fruits. Energy-packed traditional recipe.',
    price: 420,
    unit: 'per kg',
    category: 'ghee',
    image: '/images/products/ghee-ladoo.jpg',
    veg: true,
  },
  {
    id: 'moong-dal-halwa',
    name: 'Moong Dal Halwa',
    description: 'Slow-roasted yellow moong dal in generous ghee, simmered with milk, sugar, and cardamom. Winter specialty.',
    price: 480,
    unit: 'per kg',
    category: 'ghee',
    image: '/images/products/moong-dal-halwa.jpg',
    veg: true,
    seasonal: true,
  },
  {
    id: 'ghee-jalebi',
    name: 'Desi Ghee Jalebi',
    description: 'Jalebis fried exclusively in pure desi ghee for unmatched aroma and crispness. A Tauru specialty.',
    price: 320,
    unit: 'per kg',
    category: 'ghee',
    image: '/images/products/ghee-jalebi.jpg',
    veg: true,
  },
  {
    id: 'gajar-halwa',
    name: 'Gajar Ka Halwa',
    description: 'Slow-cooked red carrots in full-cream milk and desi ghee with khoya, nuts, and cardamom. Seasonal winter delight.',
    price: 380,
    unit: 'per kg',
    category: 'ghee',
    image: '/images/products/gajar-halwa.jpg',
    veg: true,
    seasonal: true,
  },
  {
    id: 'badam-halwa',
    name: 'Badam Halwa',
    description: 'Premium almond paste cooked in desi ghee with saffron and cardamom. Rich, royal, and utterly indulgent.',
    price: 950,
    unit: 'per kg',
    category: 'ghee',
    image: '/images/products/badam-halwa.jpg',
    veg: true,
  },

  // ============================================
  // DRY FRUIT & KAJU SPECIALS
  // ============================================
  {
    id: 'kaju-roll',
    name: 'Kaju Roll',
    description: 'Premium cashew paste rolled with pistachio filling and silver varq. Elegant cylindrical mithai.',
    price: 950,
    unit: 'per kg',
    category: 'dry-fruit',
    image: '/images/products/kaju-roll.jpg',
    veg: true,
    popular: true,
  },
  {
    id: 'kaju-anjeer-roll',
    name: 'Kaju Anjeer Roll',
    description: 'Cashew paste rolled with premium fig (anjeer) filling. Naturally sweet, no added sugar in filling.',
    price: 1050,
    unit: 'per kg',
    category: 'dry-fruit',
    image: '/images/products/kaju-anjeer-roll.jpg',
    veg: true,
  },
  {
    id: 'dry-fruit-barfi',
    name: 'Dry Fruit Barfi',
    description: 'Rich fudge packed with almonds, cashews, pistachios, figs, dates, and raisins. Nutrient-dense luxury.',
    price: 880,
    unit: 'per kg',
    category: 'dry-fruit',
    image: '/images/products/dry-fruit-barfi.jpg',
    veg: true,
  },
  {
    id: 'mixed-dry-fruit-box',
    name: 'Mixed Dry Fruit Gift Box',
    description: 'Curated selection of premium almonds, cashews, pistachios, walnuts, raisins, and dried figs in decorative box.',
    price: 1200,
    unit: 'per box (500g)',
    category: 'dry-fruit',
    image: '/images/products/mixed-dry-fruit-box.jpg',
    veg: true,
  },
  {
    id: 'pista-barfi',
    name: 'Pista Barfi',
    description: 'Vibrant green pistachio fudge with cardamom and silver leaf. Made with 100% real pistachios.',
    price: 1100,
    unit: 'per kg',
    category: 'dry-fruit',
    image: '/images/products/pista-barfi.jpg',
    veg: true,
  },
  {
    id: 'anjeer-barfi',
    name: 'Anjeer Barfi',
    description: 'Fig-based fudge with cashews and almonds. Naturally sweetened, high fiber, guilt-free indulgence.',
    price: 900,
    unit: 'per kg',
    category: 'dry-fruit',
    image: '/images/products/anjeer-barfi.jpg',
    veg: true,
  },

  // ============================================
  // BENGALI SWEETS
  // ============================================
  {
    id: 'sandesh',
    name: 'Sandesh',
    description: 'Delicate chenna (cottage cheese) fudge flavored with cardamom, saffron, and topped with pistachio.',
    price: 420,
    unit: 'per kg',
    category: 'bengali',
    image: '/images/products/sandesh.jpg',
    veg: true,
  },
  {
    id: 'cham-cham',
    name: 'Cham Cham',
    description: 'Cylindrical chenna sweets boiled in syrup, stuffed with khoya, and rolled in coconut flakes.',
    price: 380,
    unit: 'per kg',
    category: 'bengali',
    image: '/images/products/cham-cham.jpg',
    veg: true,
  },
  {
    id: 'kheer-kadam',
    name: 'Kheer Kadam',
    description: 'Rasgulla coated with thickened kheer (milk reduction) and dusted with dried milk powder.',
    price: 450,
    unit: 'per kg',
    category: 'bengali',
    image: '/images/products/kheer-kadam.jpg',
    veg: true,
  },
  {
    id: 'mishti-doi',
    name: 'Mishti Doi',
    description: 'Traditional Bengali sweet yogurt set in earthen pots with caramelized jaggery. Creamy, tangy, caramel notes.',
    price: 180,
    unit: 'per 500g',
    category: 'bengali',
    image: '/images/products/mishti-doi.jpg',
    veg: true,
  },
  {
    id: 'pantua',
    name: 'Pantua',
    description: 'Deep-fried chenna-khoya balls soaked in sugar syrup. Bengali cousin of gulab jamun, richer and denser.',
    price: 360,
    unit: 'per kg',
    category: 'bengali',
    image: '/images/products/pantua.jpg',
    veg: true,
  },

  // ============================================
  // NAMKEEN & SNACKS
  // ============================================
  {
    id: 'bhujia',
    name: 'Tauru Special Bhujia',
    description: 'Crispy moth bean flour sev with authentic Rajasthani spices. Our signature namkeen since 1990.',
    price: 220,
    unit: 'per kg',
    category: 'namkeen',
    image: '/images/products/bhujia.jpg',
    veg: true,
    popular: true,
  },
  {
    id: 'namkeen-mixture',
    name: 'Namkeen Mixture',
    description: 'Perfect blend of sev, boondi, peanuts, roasted chana, curry leaves, and spices. Tea-time essential.',
    price: 200,
    unit: 'per kg',
    category: 'namkeen',
    image: '/images/products/namkeen-mixture.jpg',
    veg: true,
  },
  {
    id: 'mathi',
    name: 'Mathi (Mathri)',
    description: 'Flaky, crisp semolina-wheat flour crackers with ajwain and cumin. Perfect with pickle or tea.',
    price: 180,
    unit: 'per kg',
    category: 'namkeen',
    image: '/images/products/mathi.jpg',
    veg: true,
  },
  {
    id: 'sev',
    name: 'Ratlami Sev',
    description: 'Thin, spicy gram flour noodles with clove, pepper, and black salt. Tongue-tingling Ratlami style.',
    price: 210,
    unit: 'per kg',
    category: 'namkeen',
    image: '/images/products/sev.jpg',
    veg: true,
  },
  {
    id: 'samosa',
    name: 'Samosa (6 pcs)',
    description: 'Crispy golden triangles stuffed with spiced potato-pea filling. Served with tamarind & mint chutney.',
    price: 120,
    unit: 'per pack (6 pcs)',
    category: 'namkeen',
    image: '/images/products/samosa.jpg',
    veg: true,
  },
  {
    id: 'kachori',
    name: 'Kachori (6 pcs)',
    description: 'Flaky deep-fried bread stuffed with spiced moong dal or potato. Rajasthani style with chutneys.',
    price: 130,
    unit: 'per pack (6 pcs)',
    category: 'namkeen',
    image: '/images/products/kachori.jpg',
    veg: true,
  },

  // ============================================
  // GIFT BOXES & HAMPERS
  // ============================================
  {
    id: 'mithai-box-small',
    name: 'Assorted Mithai Box - Small',
    description: '6 varieties of our bestselling sweets (200g each): Gulab Jamun, Rasgulla, Kaju Katli, Peda, Barfi, Ladoo.',
    price: 550,
    unit: 'per box (1.2 kg)',
    category: 'gift-boxes',
    image: '/images/products/mithai-box-small.jpg',
    veg: true,
    popular: true,
  },
  {
    id: 'mithai-box-medium',
    name: 'Assorted Mithai Box - Medium',
    description: '8 varieties (250g each) including dry fruit specials. Elegant packaging, perfect for gifting.',
    price: 1100,
    unit: 'per box (2 kg)',
    category: 'gift-boxes',
    image: '/images/products/mithai-box-medium.jpg',
    veg: true,
  },
  {
    id: 'mithai-box-large',
    name: 'Assorted Mithai Box - Large',
    description: '12 premium varieties (300g each) with Kaju Roll, Anjeer Barfi, Bengali specials. Premium gift box.',
    price: 2100,
    unit: 'per box (3.6 kg)',
    category: 'gift-boxes',
    image: '/images/products/mithai-box-large.jpg',
    veg: true,
  },
  {
    id: 'festival-special-box',
    name: 'Festival Special Box (Diwali/Rakhi)',
    description: 'Curated festive assortment with decorative diyas, roli-chawal, and premium mithai. Seasonal packaging.',
    price: 1500,
    unit: 'per box (2.5 kg)',
    category: 'gift-boxes',
    image: '/images/products/festival-special-box.jpg',
    veg: true,
    seasonal: true,
  },
  {
    id: 'wedding-hamper',
    name: 'Wedding/Celebration Hamper',
    description: 'Grand 5-tier hamper: 5kg assorted mithai, 1kg dry fruits, 500g namkeen, silver-plated serveware.',
    price: 8500,
    unit: 'per hamper',
    category: 'gift-boxes',
    image: '/images/products/wedding-hamper.jpg',
    veg: true,
  },
  {
    id: 'corporate-gift-box',
    name: 'Corporate Gift Box',
    description: 'Customizable box with logo printing option. Assorted mithai, dry fruits, and branded thank-you card.',
    price: 800,
    unit: 'per box (1.5 kg)',
    category: 'gift-boxes',
    image: '/images/products/corporate-gift-box.jpg',
    veg: true,
  },

  // ============================================
  // CHAAT & FAST FOOD
  // ============================================
  {
    id: 'samosa-chaat',
    name: 'Samosa Chaat',
    description: 'Crushed samosa topped with chole, yogurt, tamarind chutney, mint chutney, sev, and pomegranate.',
    price: 80,
    unit: 'per plate',
    category: 'chaat',
    image: '/images/products/samosa-chaat.jpg',
    veg: true,
  },
  {
    id: 'pani-puri',
    name: 'Pani Puri (8 pcs)',
    description: 'Crispy puris filled with spiced potato, chickpeas, and tangy mint-tamarind water (teekha & meetha pani).',
    price: 60,
    unit: 'per plate (8 pcs)',
    category: 'chaat',
    image: '/images/products/pani-puri.jpg',
    veg: true,
  },
  {
    id: 'bhel-puri',
    name: 'Bhel Puri',
    description: 'Puffed rice tossed with sev, onions, tomatoes, potatoes, chutneys, and spices. Mumbai street style.',
    price: 70,
    unit: 'per plate',
    category: 'chaat',
    image: '/images/products/bhel-puri.jpg',
    veg: true,
  },
  {
    id: 'aloo-tikki',
    name: 'Aloo Tikki Chaat (2 pcs)',
    description: 'Crispy potato patties with chole, yogurt, chutneys, sev, and fresh coriander. North Indian favorite.',
    price: 75,
    unit: 'per plate (2 pcs)',
    category: 'chaat',
    image: '/images/products/aloo-tikki.jpg',
    veg: true,
  },
  {
    id: 'dahi-bhalla',
    name: 'Dahi Bhalla',
    description: 'Soft lentil dumplings soaked in creamy yogurt, topped with sweet & spicy chutneys, cumin, and chili powder.',
    price: 85,
    unit: 'per plate',
    category: 'chaat',
    image: '/images/products/dahi-bhalla.jpg',
    veg: true,
  },

  // ============================================
  // SEASONAL / FESTIVAL SPECIALS
  // ============================================
  {
    id: 'diwali-special-box',
    name: 'Diwali Special Gift Box',
    description: 'Limited edition: Kaju Katli, Motichoor Ladoo, Dry Fruit Barfi, Ghee Jalebi in festive packaging with diyas.',
    price: 1800,
    unit: 'per box (2.5 kg)',
    category: 'seasonal',
    image: '/images/products/diwali-special-box.jpg',
    veg: true,
    seasonal: true,
  },
  {
    id: 'rakhi-special',
    name: 'Rakhi Special Hamper',
    description: 'Rakhi thread + Roli-Chawal + Assorted Mithai Box (1kg) + Dry Fruits (200g). Complete sibling gift.',
    price: 950,
    unit: 'per hamper',
    category: 'seasonal',
    image: '/images/products/rakhi-special.jpg',
    veg: true,
    seasonal: true,
  },
  {
    id: 'holi-gujiya',
    name: 'Gujiya (Holi Special)',
    description: 'Deep-fried crescent pastries stuffed with khoya, dry fruits, and coconut. The quintessential Holi sweet.',
    price: 380,
    unit: 'per kg',
    category: 'seasonal',
    image: '/images/products/gujiya.jpg',
    veg: true,
    seasonal: true,
  },
  {
    id: 'malpua',
    name: 'Malpua with Rabri',
    description: 'Crispy-edged pancakes made with flour, fennel, and milk, fried in ghee, served with thick rabri.',
    price: 220,
    unit: 'per plate (4 pcs + rabri)',
    category: 'seasonal',
    image: '/images/products/malpua.jpg',
    veg: true,
    seasonal: true,
  },
  {
    id: 'thandai',
    name: 'Thandai (Holi/Diwali)',
    description: 'Traditional cold drink with milk, almonds, pistachios, rose petals, saffron, cardamom, and fennel seeds.',
    price: 80,
    unit: 'per glass (250ml)',
    category: 'seasonal',
    image: '/images/products/thandai.jpg',
    veg: true,
    seasonal: true,
  },
]

// Helper functions
export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category)
}

export function getPopularProducts(): Product[] {
  return products.filter((p) => p.popular)
}

export function getSeasonalProducts(): Product[] {
  return products.filter((p) => p.seasonal)
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}