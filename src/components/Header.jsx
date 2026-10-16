'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reels', href: '#videos' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const navOffset = 90
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none">
      <div
        className={`max-w-6xl mx-auto rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-auto border border-[#EAE5DE] ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.08)] py-2.5 px-4 sm:px-6'
            : 'bg-white/90 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.04)] py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group select-none"
            aria-label="OMR A2Z Home"
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-105 border border-[#EAE5DE] shadow-xs bg-white p-0.5">
              <img
                src="/images/file_00000000ffbc81faa9ceedf25b696b4f.png"
                alt="OMR A2Z Wedding & Event Planners Logo"
                className="w-full h-full object-contain"
                width={52}
                height={52}
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#22201E] group-hover:text-[#A52A32] transition-colors leading-tight">
                OMR A2Z
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#77716A] font-medium leading-none mt-0.5">
                Wedding & Event Planners
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13px] font-medium tracking-wide text-[#4A453E] hover:text-[#A52A32] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#A52A32] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Primary CTA (Capsule Pill with action disc) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary group"
            >
              <span>Plan Your Event</span>
              <span className="btn-disc">
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle (Yellow/message icon removed per user request) */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#22201E] hover:text-[#A52A32] hover:bg-[#FAF8F5] rounded-full transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#EAE5DE] animate-fadeIn pb-2">
            <div className="grid grid-cols-1 divide-y divide-[#EAE5DE]/60">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-2.5 text-[14px] font-medium text-[#22201E] hover:text-[#A52A32] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A46A] opacity-60" />
                </a>
              ))}
            </div>

            <div className="pt-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary w-full group"
              >
                <span>Plan Your Event</span>
                <span className="btn-disc">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}
