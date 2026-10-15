import React from 'react'
import { Calendar, ArrowUpRight, MapPin, ChevronDown } from 'lucide-react'

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
    <section
      id="home"
      className="relative w-full h-[100dvh] min-h-[640px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/omr-a2z-hero.png"
          alt="OMR A2Z Luxury Wedding Reception and Banquet in Thalassery Kannur"
          className="w-full h-full object-cover object-center lg:object-[center_35%]"
          fetchPriority="high"
          loading="eager"
        />
        {/* Subtle cinematic overlays for pristine text readability while highlighting the sunset */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/90 via-[#1A1817]/50 to-[#1A1817]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1817]/65 via-transparent to-[#1A1817]/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center pt-16 sm:pt-20">
        
        {/* Location pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5 sm:mb-6 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium text-[#FAF8F5]">
          <MapPin className="w-3.5 h-3.5 text-[#C6A46A]" />
          <span>Thalassery · Kannur · Kerala</span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.12] max-w-4xl mb-5 sm:mb-6 drop-shadow-md">
          Every Celebration,<br />
          <span className="italic font-normal text-[#F2ECE1]">Beautifully Brought to Life.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-9 text-balance drop-shadow-sm">
          From unforgettable weddings to thoughtfully curated celebrations, OMR A2Z brings every detail together with care and precision.
        </p>

        {/* Primary and Secondary CTA Buttons */}
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

        {/* Bottom Hallmark Strip */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/15 w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/60 font-medium">Bespoke</span>
            <span className="text-xs sm:text-sm font-serif font-semibold text-[#FAF8F5] mt-0.5">Wedding Decor</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/60 font-medium">Authentic</span>
            <span className="text-xs sm:text-sm font-serif font-semibold text-[#FAF8F5] mt-0.5">Malabar Catering</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/60 font-medium">End-to-End</span>
            <span className="text-xs sm:text-sm font-serif font-semibold text-[#FAF8F5] mt-0.5">Event Management</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/60 font-medium">Dedicated</span>
            <span className="text-xs sm:text-sm font-serif font-semibold text-[#FAF8F5] mt-0.5">Guest Hospitality</span>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt Indicator */}
      <a
        href="#about"
        onClick={(e) => scrollToSection(e, '#about')}
        className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-1 z-10"
        aria-label="Scroll to About section"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>

    </section>
  )
}
