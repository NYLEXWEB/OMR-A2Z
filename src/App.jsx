import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import WhyChooseUs from './components/WhyChooseUs'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { MessageCircle } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#22201E] relative selection:bg-[#A52A32] selection:text-white">
      {/* Refined Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <ContactSection />
      </main>

      {/* Premium Minimal Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/919562731173?text=Hi%20OMR%20A2Z,%20I%20would%20like%20to%20enquire%20about%20your%20wedding%20and%20event%20planning%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-[0_6px_20px_rgba(37,211,102,0.35)] hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
        aria-label="Direct WhatsApp Enquiry"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase">
          WhatsApp Us
        </span>
      </a>
    </div>
  )
}
