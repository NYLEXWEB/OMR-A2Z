import React, { useState, useEffect } from 'react'
import { Menu, X, Phone, MessageCircle, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-b border-[#EAE5DE] py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-[#EAE5DE]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3.5 group select-none"
            aria-label="OMR A2Z Home"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-105 border border-[#EAE5DE]/60 shadow-sm bg-white p-0.5">
              <img
                src="/images/file_00000000ffbc81faa9ceedf25b696b4f.png"
                alt="OMR A2Z Wedding & Event Planners Logo"
                className="w-full h-full object-contain"
                width={56}
                height={56}
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#22201E] group-hover:text-[#A52A32] transition-colors leading-tight">
                OMR A2Z
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#77716A] font-medium leading-none mt-1">
                Wedding & Event Planners
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
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

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919562731173"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#77716A] hover:text-[#A52A32] transition-colors py-2 px-3"
              title="Call OMR A2Z"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A46A]" />
              <span>095627 31173</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary text-xs uppercase font-medium tracking-wider px-5 py-2.5 rounded-sm"
            >
              <span>Plan Your Event</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/919562731173?text=Hi%20OMR%20A2Z,%20I%20would%20like%20to%20enquire%20about%20event%20planning%20and%20catering%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] hover:bg-[#FAF8F5] rounded-full transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#22201E] hover:text-[#A52A32] hover:bg-[#FAF8F5] rounded-md transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#EAE5DE] shadow-xl animate-fadeIn">
          <div className="px-5 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-1 divide-y divide-[#EAE5DE]/60">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-3 text-[15px] font-medium text-[#22201E] hover:text-[#A52A32] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A46A] opacity-60" />
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary w-full text-center text-xs uppercase tracking-wider py-3"
              >
                Plan Your Event
              </a>
              <div className="flex items-center justify-around pt-2 text-xs text-[#77716A]">
                <a
                  href="tel:+919562731173"
                  className="flex items-center gap-1.5 hover:text-[#A52A32] py-1 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A46A]" />
                  <span>095627 31173</span>
                </a>
                <span className="text-[#EAE5DE]">|</span>
                <span className="text-[#77716A]">Thalassery, Kannur</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
