'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, CheckCircle, ArrowUpRight } from 'lucide-react'
import { GoogleIcon } from './Icons'

export default function GoogleReviews() {
  const reviews = [
    {
      id: 1,
      name: 'Faisal & Shabeena Rahiman',
      role: 'Wedding Reception · Kannur',
      avatarBg: 'bg-[#4285F4]',
      avatarText: 'FR',
      date: '2 weeks ago',
      rating: 5,
      review:
        'OMR A2Z handled our wedding reception stage and marquee draping at Kannur. The radial ceiling lights and chandelier setup took everyone by surprise—absolutely breathtaking. Punctual, polite staff, and zero stress on our family.',
      verified: true
    },
    {
      id: 2,
      name: 'Dr. Akhil K. Varma',
      role: 'Family Wedding Feast · Thalassery',
      avatarBg: 'bg-[#34A853]',
      avatarText: 'AV',
      date: 'A month ago',
      rating: 5,
      review:
        'The catering team did an exceptional job for 700 guests. Authentic Thalassery dum biryani served piping hot with perfect aroma. The welcome mocktail counter was the highlight for all our guests. Highly recommended in North Malabar!',
      verified: true
    },
    {
      id: 3,
      name: 'Niyas & Fathima',
      role: 'Nikaah Ceremony & Decor · Thalassery',
      avatarBg: 'bg-[#EA4335]',
      avatarText: 'NF',
      date: '2 months ago',
      rating: 5,
      review:
        'From our initial discussion to the final send-off, OMR A2Z was attentive to every detail. The flower festoons, entrance fairy light tunnel, and traditional snack hut brought such warmth to our celebration.',
      verified: true
    },
    {
      id: 4,
      name: 'Suhail P. C.',
      role: 'Engagement Function · Kannur',
      avatarBg: 'bg-[#FBBC05]',
      avatarText: 'SP',
      date: '3 months ago',
      rating: 5,
      review:
        'Very professional management. They kept their promises on timing, stage lighting, and sound. Working directly with the team made everything smooth and transparent. Truly reliable event planners in Kannur.',
      verified: true
    }
  ]

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-[#FFFFFF] border-b border-[#EAE5DE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading at the Very Top per user request */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#A52A32]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A52A32]">
              Client Testimonials
            </span>
            <span className="w-6 h-[1px] bg-[#A52A32]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#22201E] mb-4">
            Words from Celebrations We've Shared
          </h2>
        </motion.div>

        {/* Google Summary Header Box positioned below heading per user request */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#FAF8F5] border border-[#EAE5DE] p-6 sm:p-8 rounded-sm mb-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs hover:shadow-md transition-shadow duration-300"
        >
          {/* Left: Google Branding & Rating Score */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-14 h-14 rounded-full bg-white border border-[#EAE5DE] flex items-center justify-center flex-shrink-0 shadow-xs">
              <GoogleIcon className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#22201E]">
                  4.9
                </span>
                <div className="flex items-center gap-1 text-[#FBBC05]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#77716A] mt-0.5">
                Excellent rating on <strong className="text-[#22201E] font-semibold">Google Reviews</strong> for Thalassery & Kannur events
              </p>
            </div>
          </div>

          {/* Right: Write Review Button (Capsule pill with disc) */}
          <a
            href="https://www.google.com/search?kgmid=%2Fg%2F11vzy34m5s&hl=en-IN&q=OMR%20A2Z%20EVENTS&shem=epsd1%2Cesd2e%2Cltae%2Crimspwouoe%2Csdpie&shndl=30&source=sh%2Fx%2Floc%2Fosrp%2Fm5%2F1&kgs=15fa3dcda84cca48"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <span>Read All Reviews on Google</span>
            <span className="btn-disc">
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </motion.div>

        {/* Google Themed Review Cards Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-white border border-[#EAE5DE] p-6 sm:p-7 rounded-sm shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#C6A46A]/60 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full ${rev.avatarBg} text-white flex items-center justify-center font-bold text-sm shadow-xs`}
                    >
                      {rev.avatarText}
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-[#22201E] leading-snug">
                        {rev.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] text-[#77716A]">{rev.role}</span>
                        {rev.verified && (
                          <span className="inline-flex items-center gap-0.5 text-[10px] text-[#34A853] font-medium">
                            <CheckCircle className="w-3 h-3" />
                            <span>Verified</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Google Logo badge on top-right */}
                  <div className="w-6 h-6 flex-shrink-0" title="Posted on Google">
                    <GoogleIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Stars and Timestamp */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center text-[#FBBC05]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#77716A] font-medium">
                    · {rev.date}
                  </span>
                </div>

                {/* Review Copy */}
                <p className="text-xs sm:text-sm text-[#59534B] leading-relaxed font-normal">
                  "{rev.review}"
                </p>
              </div>

              {/* Bottom Assurance Note */}
              <div className="pt-4 mt-4 border-t border-[#EAE5DE]/60 flex items-center justify-between text-[11px] text-[#77716A]">
                <span>Thalassery & Kannur Event</span>
                <span className="text-[#A52A32] font-semibold">OMR A2Z Experience</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
