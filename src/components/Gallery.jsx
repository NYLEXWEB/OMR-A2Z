import React, { useState } from 'react'
import { Eye, X, ZoomIn } from 'lucide-react'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    {
      id: 1,
      title: 'Grand Radial Marquee Architecture',
      category: 'marquee',
      categoryLabel: 'Marquee & Draping',
      image: '/images/-5946127916758405052_119.jpg',
      aspect: 'aspect-[4/5] sm:aspect-[3/4]',
      colSpan: 'lg:col-span-6',
      description: 'Burgundy and ivory radial ceiling drapes with starburst fairy lighting and crystal chandelier center.'
    },
    {
      id: 2,
      title: 'Live Beverage Lounge & Staff Presentation',
      category: 'catering',
      categoryLabel: 'Catering & Counters',
      image: '/images/-5948478724158197594_119.jpg',
      aspect: 'aspect-[4/3]',
      colSpan: 'lg:col-span-6',
      description: 'Signature mocktail counter featuring OMR A2Z emblem, incandescent bulb canopy, and uniformed attendants.'
    },
    {
      id: 3,
      title: 'Floral Canopy & Fairy Light Walkway',
      category: 'lighting',
      categoryLabel: 'Lighting & Decor',
      image: '/images/-5948577014484766555_119.jpg',
      aspect: 'aspect-[3/4]',
      colSpan: 'lg:col-span-4',
      description: 'Enchanting guest walkway featuring fairy light curtains, cascading floral festoons, and warm amber chandeliers.'
    },
    {
      id: 4,
      title: 'Traditional Malabar Refreshment Cottage',
      category: 'catering',
      categoryLabel: 'Catering & Counters',
      image: '/images/-5945938594599997336_119.jpg',
      aspect: 'aspect-[4/3]',
      colSpan: 'lg:col-span-4',
      description: 'Authentic thatched-roof live counter serving regional Kerala refreshments, kulukki, and welcome delicacies.'
    },
    {
      id: 5,
      title: 'Illuminated Welcome Promenade',
      category: 'lighting',
      categoryLabel: 'Lighting & Decor',
      image: '/images/-5948153251536506696_119.jpg',
      aspect: 'aspect-[3/4]',
      colSpan: 'lg:col-span-4',
      description: 'Star-lit entryway corridor with customized welcome display signage and draped ceiling fixtures.'
    },
    {
      id: 6,
      title: 'Full Banquet Hall Coordination',
      category: 'marquee',
      categoryLabel: 'Marquee & Draping',
      image: '/images/-5948135405947391809_119.jpg',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-8',
      description: 'Expansive dining and reception layout combining tiered fabric drapes, beverage counter, and guest seating.'
    },
    {
      id: 7,
      title: 'Artisanal Chandelier & Fabric Detailing',
      category: 'lighting',
      categoryLabel: 'Lighting & Decor',
      image: '/images/-5948480493684723537_119.jpg',
      aspect: 'aspect-[4/3] sm:aspect-square',
      colSpan: 'lg:col-span-4',
      description: 'Handcrafted warm chandeliers suspended beneath tailored burgundy and ivory ceiling ribbons.'
    },
    {
      id: 8,
      title: 'High-Vaulted Reception Atmosphere',
      category: 'marquee',
      categoryLabel: 'Marquee & Draping',
      image: '/images/-5946047467725983729_119.jpg',
      aspect: 'aspect-[3/4]',
      colSpan: 'lg:col-span-4',
      description: 'Pitched canopy structure featuring mood lighting and elegant white chair slipcovers.'
    }
  ]

  const filters = [
    { key: 'all', label: 'All Celebrations' },
    { key: 'marquee', label: 'Marquee & Draping' },
    { key: 'catering', label: 'Live Counters & Dining' },
    { key: 'lighting', label: 'Lighting & Illumination' },
  ]

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#EAE5DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#A52A32]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A52A32]">
              Real Celebrations
            </span>
            <span className="w-6 h-[1px] bg-[#A52A32]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#22201E] mb-4">
            Our Work in Thalassery & Kannur
          </h2>

          <p className="text-sm sm:text-base text-[#77716A] leading-relaxed">
            A glimpse into actual celebrations curated and managed by OMR A2Z. Every setup is crafted with authentic care, high standards, and attention to detail.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-200 border cursor-pointer ${
                  activeFilter === f.key
                    ? 'bg-[#22201E] text-white border-[#22201E] shadow-sm'
                    : 'bg-[#FAF8F5] text-[#59534B] border-[#EAE5DE] hover:border-[#C6A46A] hover:bg-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`${item.colSpan} group cursor-pointer relative bg-[#FAF8F5] border border-[#EAE5DE] overflow-hidden rounded-xs`}
              onClick={() => setSelectedImage(item)}
            >
              <div className={`relative ${item.aspect} w-full overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle vignette on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#C6A46A] font-semibold">
                    {item.categoryLabel}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-medium mt-1 leading-snug">
                    {item.title}
                  </h4>
                  <div className="inline-flex items-center gap-1.5 text-xs text-white/80 mt-2">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Click to view</span>
                  </div>
                </div>
              </div>

              {/* Mobile text caption (always visible for clarity) */}
              <div className="p-3.5 bg-white border-t border-[#EAE5DE] sm:hidden">
                <span className="text-[10px] uppercase tracking-wider text-[#A52A32] font-semibold">
                  {item.categoryLabel}
                </span>
                <p className="font-serif text-sm font-semibold text-[#22201E] mt-0.5">
                  {item.title}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Real-time Instagram Link Prompt */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-[#77716A]">
            Want to see our latest wedding setups and behind-the-scenes?{' '}
            <a
              href="https://www.instagram.com/omr.a2z.events/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A52A32] font-semibold hover:underline inline-flex items-center gap-1"
            >
              Follow @omr.a2z.events on Instagram
            </a>
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1A1817] text-white border border-white/20 rounded-xs overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-5 sm:p-6 bg-[#22201E] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C6A46A] font-medium">
                  {selectedImage.categoryLabel} · OMR A2Z
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-white mt-1">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
                  {selectedImage.description}
                </p>
              </div>

              <a
                href={`https://wa.me/919562731173?text=Hi%20OMR%20A2Z,%20I%20am%20interested%20in%20a%20setup%20like:%20${encodeURIComponent(selectedImage.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs uppercase tracking-wider px-5 py-2.5 whitespace-nowrap self-start sm:self-auto"
              >
                Inquire About This Setup
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
