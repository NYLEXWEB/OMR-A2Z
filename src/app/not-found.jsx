import React from 'react'
import Link from 'next/link'
import { Home, Phone, Calendar } from 'lucide-react'

export const metadata = {
  title: 'Page Not Found | OMR A2Z Wedding Planners',
  description: 'The page you are looking for does not exist. Explore OMR A2Z wedding planning, catering, and event management services in Thalassery and Kannur.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#FAF8F5] text-[#22201E] px-6 py-24 select-none">
      <div className="max-w-xl w-full text-center space-y-6">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A52A32]/10 text-[#A52A32] text-xs font-semibold uppercase tracking-widest">
          Error 404
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#22201E]">
          Celebration Not Found
        </h1>

        <p className="text-sm sm:text-base text-[#59534B] font-light leading-relaxed max-w-md mx-auto">
          The page you requested may have moved or no longer exists. Return to our homepage to explore our wedding planning, decor, and catering services.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#A52A32] hover:bg-[#8e232a] text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-sm transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-[#FAF8F5] text-[#22201E] border border-[#EAE5DE] text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xs transition-all duration-200"
          >
            <Calendar className="w-4 h-4 text-[#A52A32]" />
            <span>Book Consultation</span>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t border-[#EAE5DE] text-xs text-[#77716A]">
          <p className="mb-2">Need immediate assistance with your event in Thalassery or Kannur?</p>
          <a
            href="tel:+919074796765"
            className="inline-flex items-center gap-1.5 font-semibold text-[#A52A32] hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Us: +91 90747 96765</span>
          </a>
        </div>

      </div>
    </div>
  )
}
