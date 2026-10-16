'use client'

import React, { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { WhatsAppIcon } from './Icons'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Real photographs from client's assets
  const rowOneImages = [
    {
      id: 'r1-1',
      title: 'Grand Radial Marquee Architecture',
      subtitle: 'Marquee & Draping',
      image: '/images/-5946127916758405052_119.jpg',
      description: 'Burgundy and ivory radial ceiling drapes with starburst fairy lighting and crystal chandelier center.'
    },
    {
      id: 'r1-2',
      title: 'Live Beverage Lounge & Staff Presentation',
      subtitle: 'Catering & Live Counters',
      image: '/images/-5948478724158197594_119.jpg',
      description: 'Signature mocktail counter featuring OMR A2Z emblem, incandescent bulb canopy, and uniformed attendants.'
    },
    {
      id: 'r1-3',
      title: 'Floral Canopy & Fairy Light Walkway',
      subtitle: 'Lighting & Decor',
      image: '/images/-5948577014484766555_119.jpg',
      description: 'Enchanting guest walkway featuring fairy light curtains, cascading floral festoons, and warm amber chandeliers.'
    },
    {
      id: 'r1-4',
      title: 'Traditional Malabar Refreshment Cottage',
      subtitle: 'Traditional Counters',
      image: '/images/-5945938594599997336_119.jpg',
      description: 'Authentic thatched-roof live counter serving regional Kerala refreshments, kulukki, and welcome delicacies.'
    },
    {
      id: 'r1-5',
      title: 'Full Banquet Hall Coordination',
      subtitle: 'Event Management',
      image: '/images/-5948135405947391809_119.jpg',
      description: 'Expansive dining and reception layout combining tiered fabric drapes, beverage counter, and guest seating.'
    }
  ]

  const rowTwoImages = [
    {
      id: 'r2-1',
      title: 'Illuminated Welcome Promenade',
      subtitle: 'Lighting & Entrance',
      image: '/images/-5948153251536506696_119.jpg',
      description: 'Star-lit entryway corridor with customized welcome display signage and draped ceiling fixtures.'
    },
    {
      id: 'r2-2',
      title: 'Artisanal Chandelier & Fabric Detailing',
      subtitle: 'Atmospheric Lighting',
      image: '/images/-5948480493684723537_119.jpg',
      description: 'Handcrafted warm chandeliers suspended beneath tailored burgundy and ivory ceiling ribbons.'
    },
    {
      id: 'r2-3',
      title: 'High-Vaulted Reception Atmosphere',
      subtitle: 'Hall Architecture',
      image: '/images/-5946047467725983729_119.jpg',
      description: 'Pitched canopy structure featuring mood lighting and elegant white chair slipcovers.'
    },
    {
      id: 'r2-4',
      title: 'Grand Radial Marquee Architecture',
      subtitle: 'Marquee & Draping',
      image: '/images/-5946127916758405052_119.jpg',
      description: 'Burgundy and ivory radial ceiling drapes with starburst fairy lighting and crystal chandelier center.'
    },
    {
      id: 'r2-5',
      title: 'Live Beverage Lounge & Staff Presentation',
      subtitle: 'Catering & Live Counters',
      image: '/images/-5948478724158197594_119.jpg',
      description: 'Signature mocktail counter featuring OMR A2Z emblem, incandescent bulb canopy, and uniformed attendants.'
    }
  ]

  // Double arrays to ensure a seamless infinite loop
  const rowOneItems = [...rowOneImages, ...rowOneImages]
  const rowTwoItems = [...rowTwoImages, ...rowTwoImages]

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#FFFFFF] border-b border-[#EAE5DE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="w-6 h-[1px] bg-[#A52A32]" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A52A32]">
            Celebration Portfolio
          </span>
          <span className="w-6 h-[1px] bg-[#A52A32]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#22201E] mb-4">
          Capturing Our Real Work in Motion
        </h2>

        <p className="text-sm sm:text-base text-[#77716A] max-w-2xl mx-auto leading-relaxed">
          From marquee canopies in Kannur to live catering lounges across Thalassery, explore moments curated by OMR A2Z. Hover any photograph to pause or click to view details.
        </p>

      </div>

      {/* Dual Row Continuous Auto-Scrolling Marquee */}
      <div className="space-y-6 sm:space-y-8 select-none">
        
        {/* Row 1: Scrolling Right-to-Left (animate-marquee-left) */}
        <div className="overflow-hidden w-full relative">
          <div className="animate-marquee-left flex gap-6 sm:gap-8 items-center">
            {rowOneItems.map((item, index) => (
              <div
                key={`row1-${item.id}-${index}`}
                onClick={() => setSelectedImage(item)}
                className="group relative w-72 sm:w-84 md:w-96 flex-shrink-0 cursor-pointer rounded-sm overflow-hidden bg-[#FAF8F5] border border-[#EAE5DE] shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Dark Vignette & Caption on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-[#C6A46A] font-semibold">
                      {item.subtitle}
                    </span>
                    <h4 className="font-serif text-base sm:text-lg font-medium leading-snug mt-0.5">
                      {item.title}
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-xs text-white/80 mt-2">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Click to view</span>
                    </div>
                  </div>
                </div>

                {/* Always-visible clean label strip */}
              
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Left-to-Right (animate-marquee-right) */}
        <div className="overflow-hidden w-full relative">
          <div className="animate-marquee-right flex gap-6 sm:gap-8 items-center">
            {rowTwoItems.map((item, index) => (
              <div
                key={`row2-${item.id}-${index}`}
                onClick={() => setSelectedImage(item)}
                className="group relative w-72 sm:w-84 md:w-96 flex-shrink-0 cursor-pointer rounded-sm overflow-hidden bg-[#FAF8F5] border border-[#EAE5DE] shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Dark Vignette & Caption on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-[#C6A46A] font-semibold">
                      {item.subtitle}
                    </span>
                    <h4 className="font-serif text-base sm:text-lg font-medium leading-snug mt-0.5">
                      {item.title}
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-xs text-white/80 mt-2">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Click to view</span>
                    </div>
                  </div>
                </div>

                {/* Always-visible clean label strip */}
               
              </div>
            ))}
          </div>
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
                  {selectedImage.subtitle} · OMR A2Z
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-white mt-1">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
                  {selectedImage.description}
                </p>
              </div>

              <a
                href={`https://wa.me/919074796765?text=Hi%20OMR%20A2Z,%20I%20am%20interested%20in%20a%20setup%20like:%20${encodeURIComponent(selectedImage.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-5 pr-1.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-3 shadow-md hover:shadow-lg transition-all duration-300 group whitespace-nowrap self-start sm:self-auto"
              >
                <span>Inquire on WhatsApp</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#25D366] flex items-center justify-center shadow-xs transition-transform group-hover:scale-110">
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                </span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
