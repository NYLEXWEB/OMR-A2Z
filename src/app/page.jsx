'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import VideoSection from '../components/VideoSection'
import SocialSection from '../components/SocialSection'
import GoogleReviews from '../components/GoogleReviews'
import WhyChooseUs from '../components/WhyChooseUs'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import { WhatsAppIcon, InstagramIcon } from '../components/Icons'
import MenuSection from '../components/MenuSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#22201E] relative selection:bg-[#A52A32] selection:text-white">
      {/* Refined Floating Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
         <VideoSection />
        <MenuSection />
        <Services />
        <Gallery />
        <SocialSection />
        <GoogleReviews />
        <WhyChooseUs />
        <ContactSection />
      </main>

      {/* Premium Minimal Footer */}
      <Footer />

      {/* Floating Action Buttons (Stacked: Instagram on top, WhatsApp on bottom, NO text per user request) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* Instagram Floating Icon */}
        <a
          href="https://www.instagram.com/omr.a2z.events/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(225,48,108,0.35)] hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Follow OMR A2Z on Instagram"
          title="Instagram @omr.a2z.events"
        >
          <InstagramIcon className="w-6 h-6" />
        </a>

        {/* WhatsApp Floating Icon */}
        <a
          href="https://wa.me/919074796765?text=Hi%20OMR%20A2Z,%20I%20would%20like%20to%20enquire%20about%20your%20wedding%20and%20event%20planning%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Direct WhatsApp Enquiry"
          title="Chat on WhatsApp (+91 90747 96765)"
        >
          <WhatsAppIcon className="w-6 h-6 fill-current" />
        </a>
      </div>
    </div>
  )
}
