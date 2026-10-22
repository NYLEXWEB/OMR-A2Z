'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GlassWater,
  UtensilsCrossed,
  Flame,
  ChefHat,
  Salad,
  Sparkles,
  ArrowRight,
  X,
  CheckCircle2,
  Users2,
  Layers,
  Award,
  PhoneCall,
  Clock,
  Wheat
} from 'lucide-react'
import { WhatsAppIcon } from './Icons'

export default function MenuSection() {
  const [activeModal, setActiveModal] = useState(null)

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModal(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [activeModal])

  const menuCategories = [
    {
      id: 'welcome-drinks',
      number: '01',
      title: 'Welcome Drinks & Live Shakes',
      malayalamTitle: 'വെൽക്കം ഡ്രിങ്ക്സ് & ഷെയ്ക്കുകൾ',
      tagline: 'Chilled Water-Based Juices & Rich Fresh Milk Shakes',
      image: '/images/menu_welcome_drinks.jpg',
      icon: GlassWater,
      badge: 'Live Counter Setup',
      summary:
        'Refreshing welcome beverage stations greeted by uniformed stewards. From chilled water-based fruit juices to thick, creamy Malabar specialty milkshakes.',
      previewItems: [
        'Fresh Watermelon, Pineapple & Grape',
        'Tender Coconut Shake (എളനീർ)',
        'Seethaphal (സീതാപ്പഴം) & Chikku'
      ],
      whatsappTopic: 'Welcome Drinks & Live Shakes Menu',
      subcategories: [
        {
          groupName: 'Fresh Fruit Juices (Water-Based / ഫ്രഷ് ജ്യൂസുകൾ)',
          items: [
            { name: 'Watermelon Fresh Juice', desc: 'Chilled seedless watermelon with mint droplets & lime' },
            { name: 'Golden Pineapple Juice', desc: 'Sweet queen pineapple with mild crushed ginger' },
            { name: 'Black Grape Cooler', desc: 'Fresh black grape juice served ice-cold' },
            { name: 'Fresh Mint Lime Cooler', desc: 'Zesty lime with garden-fresh mint leaves' },
            { name: 'Orange & Mixed Fruit Nectar', desc: 'Citrus blend prepared live on-site' }
          ]
        },
        {
          groupName: 'Rich Milk-Based Shakes & Royal Drinks (പാൽ ഷെയ്ക്കുകൾ)',
          items: [
            { name: 'Tender Coconut Shake (എളനീർ ഷേക്ക്)', desc: 'Malabar special tender coconut pulp, rich milk & crushed ice' },
            { name: 'Seethaphal Shake (സീതാപ്പഴം ഷേക്ക്)', desc: 'Sweet custard apple pulp with creamy chilled milk' },
            { name: 'Chikku Shake (സപ്പോട്ട / ചിക്കു)', desc: 'Caramel-sweet sapodilla whipped to silky perfection' },
            { name: 'Royal Malabar Falooda', desc: 'Basil seeds, vermicelli, rich dry fruit milk & rose essence' }
          ]
        }
      ],
      serviceIncludes: [
        'Chilled crystal glassware & eco-straws',
        'Uniformed live counter attendants',
        'Carved fruit presentation island'
      ]
    },
    {
      id: 'biryani-mandi',
      number: '02',
      title: 'Royal Dum Biryani & Arabian Mandi',
      malayalamTitle: 'തനത് ബിരിയാണികൾ & മന്തി',
      tagline: 'Authentic Thalassery Kaima Rice & Slow-Smoked Arabian Mandi',
      image: '/menu/Royal Dum Biryani & Arabian Mandi.png',
      alt: 'Thalassery Dum Biryani Feast Presentation',
      icon: UtensilsCrossed,
      badge: 'Signature Highlight',
      summary:
        'The crowned jewel of North Kerala weddings. Authentic small-grain Kaima Dum Biryani slow-cooked with ghee, fried onions, raisins and spices, alongside charcoal Mandi.',
      previewItems: [
        'Royal Thalassery Mutton Dum Biryani',
        'Chicken & Beef Dum Biryani',
        'Smoked Arabian Chicken Mandi'
      ],
      whatsappTopic: 'Thalassery Biryani & Arabian Mandi Menu',
      subcategories: [
        {
          groupName: 'Thalassery Dum Biryani Varieties (തലശ്ശേരി ദം ബിരിയാണികൾ)',
          items: [
            { name: 'Royal Thalassery Mutton Dum Biryani', desc: 'Tender baby mutton, fragrant Kaima rice, pure ghee & fried onions' },
            { name: 'Thalassery Chicken Dum Biryani', desc: 'Country/broiler chicken simmered in rich Malabar masala' },
            { name: 'Malabar Beef Dum Biryani', desc: 'Slow-cooked succulent beef layered with golden spiced rice' },
            { name: 'Chicken Leg Piece Special Biryani', desc: 'Whole marinated leg cuts roasted to tender perfection' },
            { name: 'Authentic Hyderabadi Dum Biryani', desc: 'Long-grain basmati with saffron strands and aromatic whole spices' }
          ]
        },
        {
          groupName: 'Arabian Mandi Specialities (അറേബ്യൻ മന്തി)',
          items: [
            { name: 'Arabian Chicken Mandi', desc: 'Smoked spiced chicken over fragrant mandi rice with fiery sahawiq tomato dip' },
            { name: 'Arabian Beef Mandi', desc: 'Tender spiced beef cuts smoked with natural charcoal aroma' }
          ]
        },
        {
          groupName: 'Traditional Accompaniments (കൂട്ടുകറികൾ & ചമ്മന്തി)',
          items: [
            { name: 'Thalassery Date-Lime Pickle (ഈത്തപ്പഴ അച്ചാർ)', desc: 'Sweet, sour and spicy heritage wedding pickle' },
            { name: 'Fresh Coconut Chammanthi & Mint Raita', desc: 'Cooling curd dip with fresh onions, green chillies and coriander' },
            { name: 'Crisp Malabar Pappadam', desc: 'Deep-fried golden crunchy wafers' }
          ]
        }
      ],
      serviceIncludes: [
        'Piping hot traditional copper/brass uruli presentation',
        'Choice of premium fiber plates or eco-disposable plates',
        'Uniformed table stewards for continuous hot rice replenishment'
      ]
    },
    {
      id: 'malabar-alsa',
      number: '03',
      title: 'Traditional Malabar Aleesa Counter',
      malayalamTitle: 'തനത് അൽസ / അലീസ കൗണ്ടർ',
      tagline: 'Warm Wheat & Meat Wedding Porridge with Pure Golden Ghee',
      image: '/images/-5945938594599997336_119.jpg',
      alt: 'Traditional Malabar Aleesa & Cultural Dining',
      icon: Flame,
      badge: 'Heritage Dish',
      summary:
        'An indispensable Malabar Muslim wedding tradition. Whole broken wheat slow-simmered with tender shredded meat, finished with sizzling pure ghee, shallots and cashews.',
      previewItems: [
        'Slow-Simmered Chicken Aleesa',
        'Rich Mutton Aleesa with Pure Ghee',
        'Fried Shallots, Cashews & Sugar'
      ],
      whatsappTopic: 'Traditional Malabar Aleesa Counter',
      subcategories: [
        {
          groupName: 'Aleesa Selections (തനത് അലീസ വിഭവങ്ങൾ)',
          items: [
            { name: 'Heritage Chicken Aleesa', desc: 'Whole broken wheat, tender chicken shreds, cardamom and rich bone broth' },
            { name: 'Royal Mutton Aleesa', desc: 'Velvety wheat porridge slow-cooked overnight with prime mutton cuts' }
          ]
        },
        {
          groupName: 'Live Sizzling Toppings (നെയ്യിൽ വറുത്ത മേമ്പൊടികൾ)',
          items: [
            { name: 'Pure Desi Ghee Drizzle', desc: 'Hot aromatic ghee ladled freshly onto each bowl' },
            { name: 'Golden Crispy Fried Shallots', desc: 'Caramelized small onions (ulli porichathu)' },
            { name: 'Roasted Cashews & Sultanas', desc: 'Crunchy golden nuts roasted in pure cow ghee' },
            { name: 'Granulated Sugar on Side', desc: 'Traditional sweet-and-savory Malabar wedding etiquette' }
          ]
        }
      ],
      serviceIncludes: [
        'Dedicated live steaming counter with traditional brass chafers',
        'Individual ceramic or fiber serving bowls with brass spoons',
        'Live attendant serving fresh ghee garnishes to guests'
      ]
    },
    {
      id: 'kerala-breads',
      number: '04',
      title: 'Malabar Breads & Tawa Rotti',
      malayalamTitle: 'റൊട്ടികൾ & അപ്പങ്ങൾ',
      tagline: 'Flaky Porotta, Soft Neypathiri, Vellayappam & Hot Bhatura',
      image: '/menu/Malabar Breads & Tawa Rotti.png',
      alt: 'Malabar Breads and Hot Tawa Service',
      icon: Wheat,
      badge: 'Hot Live Tawa',
      summary:
        'Freshly made piping-hot Kerala breads served straight from the live griddles to dining tables, pairing flawlessly with our spicy non-veg gravies.',
      previewItems: [
        'Multi-Layered Malabar Porotta',
        'Neypathiri & Soft Vellayappam',
        'Puffed Bhatura & Butter Chapathi'
      ],
      whatsappTopic: 'Breads & Tawa Rotti Counter',
      subcategories: [
        {
          groupName: 'Signature Malabar Breads (മലബാർ റൊട്ടികൾ)',
          items: [
            { name: 'Malabar Flaky Layered Porotta', desc: 'Crispy outer rings with feather-light soft inner layers' },
            { name: 'Traditional Neypathiri (നെയ്പ്പത്തിരി)', desc: 'Deep-fried crispy rice bread with hints of fennel and coconut' },
            { name: 'Lace-Edge Vellayappam (വെള്ളയപ്പം)', desc: 'Fermented rice hoppers with soft spongy centers and delicate lace rims' },
            { name: 'Golden Puffed Bhatura (ഭട്ടൂര)', desc: 'Deep-fried golden bread popular for feast dining' },
            { name: 'Adukkupathiri / Nice Pathiri (നൈസ് പത്തിരി)', desc: 'Ultra-thin, soft steamed rice wafers' },
            { name: 'Soft Butter Chapathi', desc: 'Homestyle whole-wheat flatbreads brushed with fresh butter' }
          ]
        }
      ],
      serviceIncludes: [
        'Live tawa station with master bread bakers',
        'Insulated thermal basket service to maintain piping heat',
        'Unlimited hot replenishments at guest tables'
      ]
    },
    {
      id: 'royal-curries',
      number: '05',
      title: 'Royal Curries & Tawa Fries',
      malayalamTitle: 'കറികളും ഫ്രൈകളും',
      tagline: 'Chicken Pepper Curry, Butter Chicken, Beef Roast & Fried Fish',
      image: '/menu/Royal Curries & Tawa Fries.png',
      alt: 'Royal Wedding Curries & Non-Veg Specialties',
      icon: ChefHat,
      badge: 'Master Chef Gravies',
      summary:
        'Slow-simmered rich curries and sizzling fish fries prepared with hand-ground spices and fresh coconut oil, perfectly matching breads and rice.',
      previewItems: [
        'Chicken Pepper Curry & Butter Chicken',
        'Malabar Beef Pepper Roast',
        'Fresh Fish Porichathu (Tawa Fry)'
      ],
      whatsappTopic: 'Royal Non-Veg Curries & Tawa Fries',
      subcategories: [
        {
          groupName: 'Poultry & Meat Curries (ചിക്കൻ, ബീഫ് & മട്ടൺ വിഭവങ്ങൾ)',
          items: [
            { name: 'Chicken Pepper Curry / Roast', desc: 'Spicy chicken infused with freshly crushed black pepper and shallots' },
            { name: 'Rich Butter Chicken', desc: 'Succulent boneless chicken in creamy tomato-cashew makhani gravy' },
            { name: 'Malabar Beef Pepper Roast', desc: 'Tender beef chunks pan-roasted with coconut slivers, curry leaves & pepper' },
            { name: 'Mutton Rogan Josh / Pepper Fry', desc: 'Kashmiri chilli braised tender mutton with fragrant spices' }
          ]
        },
        {
          groupName: 'Fresh Coastal Seafood (കടൽ വിഭവങ്ങൾ)',
          items: [
            { name: 'Fresh Fish Porichathu / Tawa Fry (മീൻ മൊരിഞ്ഞത്)', desc: 'Kingfish/Pomfret coated in fiery red chilli masala and crisp tawa-fried in coconut oil' },
            { name: 'Fish Moly / Alleppey Fish Curry', desc: 'Tender fish simmered in mild coconut milk with raw mango' }
          ]
        }
      ],
      serviceIncludes: [
        'Warm copper & stainless steel chafing dish setups',
        'Live fish tawa fry counter option available upon request',
        'Fresh curry leaf and fried onion garnishing'
      ]
    },
    {
      id: 'gourmet-salads',
      number: '06',
      title: 'Gourmet Salads & Accompaniments',
      malayalamTitle: 'സലാഡുകൾ & സ്പെഷ്യൽസ്',
      tagline: 'Russian Salad, Fresh Garden Greens, Tossed Macaroni & Raitas',
      image: '/menu/Gourmet Salads & Accompaniments.png',
      alt: 'Gourmet Wedding Banquet Salad Island',
      icon: Salad,
      badge: 'Fresh & Crisp',
      summary:
        'A vibrant selection of chilled European and regional salads providing a crisp, refreshing balance to rich wedding gravies and biryanis.',
      previewItems: [
        'Creamy Russian Salad with Diced Fruits',
        'Garden Fresh Veg Salad with Lemon Dressing',
        'Spiced Tossed Macaroni & Sweet Raita'
      ],
      whatsappTopic: 'Gourmet Salads & Cold Delights',
      subcategories: [
        {
          groupName: 'Cold Salad Counter (കോൾഡ് സലാഡ് കൗണ്ടർ)',
          items: [
            { name: 'Gourmet Russian Salad', desc: 'Diced potatoes, carrots, green peas, sweet pineapple, apples and rich eggless cream dressing' },
            { name: 'Fresh Garden Green Salad', desc: 'Crisp cucumber ribbons, vine tomatoes, carrots, beetroot and lemon vinaigrette' },
            { name: 'Spiced Macaroni / Pasta Salad', desc: 'Tossed elbow pasta with bell peppers, sweet corn, herbs and creamy mayo' },
            { name: 'Pineapple Sweet Raita / Kachumber', desc: 'Spiced yogurt blend with sweet pineapple chunks and roasted cumin' }
          ]
        }
      ],
      serviceIncludes: [
        'Chilled crystal salad bowls on crushed ice',
        'Individual salad tongs and serving spoons',
        'Fresh herb and microgreen garnishing'
      ]
    }
  ]

  return (
    <section id="menu" className="py-24 lg:py-32 bg-[#FAF8F5] relative border-b border-[#EAE5DE]">
      {/* Subtle Background Glows */}
      <div className="absolute top-24 left-10 w-96 h-96 bg-[#C6A46A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 right-10 w-96 h-96 bg-[#A52A32]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[1.5px] bg-[#A52A32]" />
            <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#A52A32]">
              Catering Repertoire
            </span>
            <span className="text-xs text-[#C6A46A]">•</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#22201E] leading-[1.18]"
          >
            Signature Feast Menus<br className="hidden sm:inline" />
   
          </motion.h2>


        </div>

        {/* 6 Elite Dark-Themed Menu Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {menuCategories.map((cat, idx) => {
            const IconComp = cat.icon
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-gradient-to-b from-[#1E1B18] via-[#161412] to-[#11100E] border border-[#2E2924] hover:border-[#C6A46A] rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.35),0_0_25px_rgba(198,164,106,0.15)] transition-all duration-300 relative text-white"
              >
                {/* Category Header Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#24211D]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  {/* Subtle Dark Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-black/40 to-transparent" />

                  {/* Number Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-black/75 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono font-semibold tracking-wider text-[#C6A46A] border border-[#C6A46A]/30 rounded-xs shadow-sm">
                    {cat.number}
                  </div>

            

                  {/* Floating Tag */}
                  <div className="absolute bottom-3 left-3.5">
                    <span className="text-[10px] uppercase font-bold tracking-[0.18em] px-2.5 py-1 rounded-full bg-[#A52A32]/90 text-white backdrop-blur-md border border-white/10">
                      {cat.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Malayalam Title */}
                    <span className="text-xs text-[#C6A46A] font-medium block mb-1">
                      {cat.malayalamTitle}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white group-hover:text-[#E3C999] transition-colors leading-tight">
                      {cat.title}
                    </h3>

                    {/* Tagline */}
                    <p className="font-serif italic text-xs text-white/60 mt-1 mb-3">
                      "{cat.tagline}"
                    </p>

                    {/* Short Summary */}
                    <p className="text-xs text-white/70 leading-relaxed mb-5 font-normal">
                      {cat.summary}
                    </p>


                  </div>

                  {/* Card Action Buttons (Two Buttons: View Details + WhatsApp Enquiry) */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    
                    {/* View Details Button (Triggers Modal) */}
                    <button
                      type="button"
                      onClick={() => setActiveModal(cat)}
                      className="flex-1 py-2.5 px-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider uppercase border border-white/15 hover:border-[#C6A46A] flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer active:scale-98"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C6A46A]" />
                    </button>

                    {/* Direct WhatsApp Enquiry Button */}
                    <a
                      href={`https://wa.me/919074796765?text=Hi%20OMR%20A2Z,%20I%20would%20like%20to%20enquire%20about%20your%20${encodeURIComponent(cat.whatsappTopic)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold tracking-wider uppercase shadow-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-98"
                      title="Enquire on WhatsApp"
                    >
                      <span>Enquire</span>
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    </a>

                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* All-Inclusive Catering Service Inclusions Strip (Client & Developer Explicit Requirement) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 p-6 sm:p-10 bg-gradient-to-r from-[#181614] via-[#221F1C] to-[#181614] text-white rounded-2xl border border-[#C6A46A]/40 shadow-xl relative overflow-hidden"
        >
          {/* Subtle Ambient Decorative Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6A46A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#C6A46A]" />
                <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#C6A46A]">
                  All-Inclusive Catering Packages · സമ്പൂർണ്ണ സർവീസ്
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                Everything Included in Our Catering Service.
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-2 leading-relaxed font-normal">
                നിങ്ങൾ നൽകുന്ന തുകയിൽ വിഭവങ്ങൾ മാത്രമല്ല ഉൾപ്പെടുന്നത്. വിവാഹ സൽക്കാരത്തിന് പരിചയസമ്പന്നരായ യൂണിഫോംഡ് കാറ്ററിംഗ് ബോയ്‌സ് & ഗേൾസ്, ലൈവ് കൗണ്ടർ ഫാബ്രിക്കേഷൻ, ഫൈബർ പ്ലേറ്റുകൾ, ഡിസ്പോസിബിൾ പ്ലേറ്റുകൾ, ചൂടോടെയുള്ള വിളമ്പൽ തുടങ്ങി എല്ലാം ഒഎംആർ എ2സിയുടെ നേരിട്ടുള്ള മേൽനോട്ടത്തിൽ ക്രമീകരിക്കുന്നു.
              </p>

              {/* Inclusions Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-5 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/10 border border-[#C6A46A]/30 flex items-center justify-center text-[#C6A46A] flex-shrink-0">
                    <Users2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">Catering Boys & Girls</span>
                    <span className="text-[10px] text-white/60">യൂണിഫോംഡ് സെർവിങ് ടീം</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/10 border border-[#C6A46A]/30 flex items-center justify-center text-[#C6A46A] flex-shrink-0">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">Fiber & Disposable Plates</span>
                    <span className="text-[10px] text-white/60">പ്രീമിയം പ്ലേറ്റ് സെറ്റപ്പുകൾ</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/10 border border-[#C6A46A]/30 flex items-center justify-center text-[#C6A46A] flex-shrink-0">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">Live Counters & Dishes</span>
                    <span className="text-[10px] text-white/60">തത്സമയ കൗണ്ടർ സെറ്റപ്പ്</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href="https://wa.me/919074796765?text=Hi%20OMR%20A2Z,%20I%20would%20like%20to%20discuss%20a%20full%20wedding%20catering%20package%20including%20service%20staff%20and%20counter%20setups."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group justify-center sm:justify-between"
              >
                <span>Get Full Menu Quotation</span>
                <span className="btn-disc">
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                </span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Interactive Detail Modal / Pop-Up */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-[#181614] border border-[#C6A46A]/60 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-white"
            >
              {/* Modal Top Header with Image Banner */}
              <div className="relative h-44 sm:h-52 overflow-hidden flex-shrink-0 bg-black">
                <img
                  src={activeModal.image}
                  alt={activeModal.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-[#181614]/60 to-transparent" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 hover:bg-[#A52A32] text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer shadow-md"
                  aria-label="Close menu details"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#C6A46A] block mb-1">
                    {activeModal.malayalamTitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-tight">
                    {activeModal.title}
                  </h3>
                  <p className="font-serif italic text-xs text-white/70 mt-0.5">
                    "{activeModal.tagline}"
                  </p>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-grow">
                {/* Description */}
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                  {activeModal.summary}
                </p>

                {/* Itemized Subcategories */}
                <div className="space-y-5">
                  {activeModal.subcategories.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 sm:p-5 bg-white/5 border border-white/10 rounded-xl"
                    >
                      <h4 className="font-serif text-sm sm:text-base font-semibold text-[#C6A46A] mb-3 pb-2 border-b border-white/10">
                        {sub.groupName}
                      </h4>
                      <div className="space-y-3">
                        {sub.items.map((item, iIdx) => (
                          <div key={iIdx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A52A32] mt-1.5 flex-shrink-0" />
                            <div>
                              <span className="text-xs sm:text-sm font-semibold text-white block">
                                {item.name}
                              </span>
                              <span className="text-[11px] text-white/60 block leading-tight mt-0.5">
                                {item.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Service Inclusions */}
                <div className="p-4 bg-[#A52A32]/10 border border-[#A52A32]/30 rounded-xl">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#C6A46A] block mb-2">
                    Service Standards Included With This Counter:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80">
                    {activeModal.serviceIncludes.map((inc, incIdx) => (
                      <div key={incIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A46A] flex-shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 sm:p-5 border-t border-white/10 bg-[#12100E] flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
                <span className="text-xs text-white/70 text-center sm:text-left">
                  Ready to customize this menu for your event?
                </span>
                <a
                  href={`https://wa.me/919074796765?text=Hi%20OMR%20A2Z,%20I%20would%20like%20to%20book/enquire%20about%20the%20${encodeURIComponent(activeModal.whatsappTopic)}%20for%20my%20event.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-2.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
                >
                  <span>Book This Menu via WhatsApp</span>
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
