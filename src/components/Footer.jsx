'use client'

import React from 'react'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'
import { InstagramIcon, WhatsAppIcon } from './Icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
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
    <footer className="bg-[#1C1A18] text-white pt-16 pb-12 border-t border-[#332F2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white p-0.5 border border-white/20 shadow-sm flex-shrink-0">
                <img
                  src="/images/file_00000000ffbc81faa9ceedf25b696b4f.png"
                  alt="OMR A2Z Wedding & Event Planners Logo"
                  className="w-full h-full object-contain"
                  width={56}
                  height={56}
                />
              </div>
              <div>
                <span className="text-2xl font-semibold tracking-[-0.02em] text-white block">
                  OMR A2Z
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#C6A46A] font-medium">
                  Wedding & Event Planners
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed font-normal pt-2">
              Professional event management and authentic catering services in Thalassery and Kannur. Crafting memorable celebrations across North Kerala.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/919074796765"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center text-white/90 transition-all duration-200"
                aria-label="WhatsApp OMR A2Z"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://www.instagram.com/omr.a2z.events/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E1306C] hover:text-white flex items-center justify-center text-white/90 transition-all duration-200"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="tel:+919074796765"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#A52A32] hover:text-white flex items-center justify-center text-white/90 transition-all duration-200"
                aria-label="Call OMR A2Z"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:omr2013a2z@gmail.com"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C6A46A] hover:text-white flex items-center justify-center text-white/90 transition-all duration-200"
                aria-label="Email OMR A2Z"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Col */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C6A46A] font-semibold block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors">
                  The Art of Celebration
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">
                  Services & Catering
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-white transition-colors">
                  Celebration Portfolio
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => handleNavClick(e, '#reviews')} className="hover:text-white transition-colors">
                  Google Reviews
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')} className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-white transition-colors">
                  Event Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C6A46A] font-semibold block mb-4">
              Contact & Location
            </span>
            <div className="space-y-3 text-xs sm:text-sm text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A46A] flex-shrink-0 mt-0.5" />
                <span>Thalassery, Kannur, Kerala, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A46A] flex-shrink-0" />
                <div className="flex items-center gap-2 flex-wrap">
                  <a href="tel:+919074796765" className="hover:text-white transition-colors">
                    +91 90747 96765
                  </a>
                  <span className="text-white/40">/</span>
                  <a href="tel:+919562731173" className="hover:text-white transition-colors">
                    +91 95627 31173
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] flex-shrink-0 fill-current" />
                <a href="https://wa.me/919074796765" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +91 90747 96765 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C6A46A] flex-shrink-0" />
                <a href="mailto:omr2013a2z@gmail.com" className="hover:text-white transition-colors break-all">
                  omr2013a2z@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-[#E1306C] flex-shrink-0" />
                <a href="https://www.instagram.com/omr.a2z.events/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  omr.a2z.events
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} OMR A2Z Wedding & Event Planners. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  )
}
