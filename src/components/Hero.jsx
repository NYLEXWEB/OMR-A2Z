'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react'

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
      className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-[#FAF8F5]"
    >
      {/* Background White Luxury Hall Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-section.png"
          alt="OMR A2Z Luxury White Theme Wedding Reception Hall"
          className="w-full h-full object-cover object-[center_right] sm:object-center"
          fetchPriority="high"
          loading="eager"
        />

        {/* Desktop: Crisp Left-to-Center White Fade ONLY (0% to 50%), completely clear on the right */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background:
              'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.98) 25%, rgba(255, 255, 255, 0.75) 38%, rgba(255, 255, 255, 0) 50%)'
          }}
        />

        {/* Mobile / Tablet: Smooth Top-to-Mid Fade so text stays legible on narrow screens */}
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.85) 45%, rgba(255, 255, 255, 0) 70%)'
          }}
        />
      </div>

      {/* Main Content Container (Left-Aligned, Minimal, Editorial Style) */}
      <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-16 w-full pt-28 sm:pt-36 pb-20">
        <div className="max-w-2xl text-left">


          {/* Apple-style Minimal Slim Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-normal tracking-[-0.035em] text-[#22201E] leading-[1.05] mb-5"
          >
            Weddings,<br />
            <span className="font-light text-[#9C222A]">Flawlessly Curated.</span>
          </motion.h1>

          {/* Minimal, Punchy Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-[#59534B] font-light leading-relaxed max-w-xl mb-8"
          >
            Bespoke wedding decor, authentic Thalassery feasts, and seamless event management tailored to your celebrations.
          </motion.p>

          {/* Primary & Secondary Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn-primary group"
            >
              <span>Plan Your Event</span>
              <span className="btn-disc">
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>

            <a
              href="#services"
              onClick={(e) => scrollToSection(e, '#services')}
              className="btn-secondary group"
            >
              <span>Explore Services</span>
              <span className="btn-disc">
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#about"
        onClick={(e) => scrollToSection(e, '#about')}
        className="hidden md:flex absolute bottom-5 left-10 lg:left-16 text-[#77716A] hover:text-[#9C222A] transition-colors items-center gap-2 z-10 group"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">Scroll Down</span>
        <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
      </a>
    </section>
  )
}
