import React from 'react'
import { Calendar, ArrowUpRight, Sparkles, MapPin } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.querySelector(id)
    if (element) {
      const navOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-[96vh] flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/omr-a2z-hero.png"
          alt="OMR A2Z Luxury Wedding Reception and Banquet in Thalassery Kannur"
          className="w-full h-full object-cover object-center lg:object-[center_35%] scale-100 transition-transform duration-1000 ease-out"
          fetchPriority="high"
          loading="eager"
        />
        {/* Editorial Gradients & Tint for maximum text clarity while preserving the sunset and banquet glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/85 via-[#1A1817]/45 to-[#1A1817]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1817]/70 via-transparent to-[#1A1817]/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        
        {/* Eyebrow / Location badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-[#FAF8F5]">
          <MapPin className="w-3.5 h-3.5 text-[#C6A46A]" />
          <span>Thalassery · Kannur · Kerala</span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.12] max-w-4xl mb-6 drop-shadow-sm">
          Every Celebration,<br />
          <span className="italic font-normal text-[#F2ECE1]">Beautifully Brought to Life.</span>
        </h1>

        {/* Refined Supporting Copy */}
        <p className="text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10 text-balance drop-shadow-sm">
          From unforgettable weddings to thoughtfully curated celebrations, OMR A2Z brings every detail together with care and precision.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="btn-primary w-full sm:w-auto text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 font-semibold bg-[#A52A32] hover:bg-[#8C2229] transition-all"
          >
            <Calendar className="w-4 h-4 text-[#C6A46A]" />
            <span>Plan Your Event</span>
          </a>

          <a
            href="#gallery"
            onClick={(e) => scrollToSection(e, '#gallery')}
            className="btn-hero-secondary w-full sm:w-auto text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 font-medium"
          >
            <span>Explore Our Work</span>
            <ArrowUpRight className="w-4 h-4 text-[#FAF8F5]" />
          </a>
        </div>

        {/* Bottom Hallmarks Pill */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/15 w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/60 font-medium">Bespoke</span>
            <span className="text-xs sm:text-sm font-serif font-semibold text-[#FAF8F5] mt-0.5">Wedding Decor</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/60 font-medium">Authentic</span>
            <span className="text-xs sm:text-sm font-serif font-semibold text-[#FAF8F5] mt-0.5">Malabar Catering</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/60 font-medium">End-to-End</span>
            <span className="text-xs sm:text-sm font-serif font-semibold text-[#FAF8F5] mt-0.5">Event Management</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/60 font-medium">Dedicated</span>
            <span className="text-xs sm:text-sm font-serif font-semibold text-[#FAF8F5] mt-0.5">Guest Hospitality</span>
          </div>
        </div>

      </div>

    </section>
  )
}
