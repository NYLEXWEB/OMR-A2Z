'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function WhyChooseUs() {
  // Initially null so all questions are closed by default as requested
  const [openIndex, setOpenIndex] = useState(null)

  const items = [
    {
      number: '01',
      question: 'Will our family have to manage vendors, calls, and timings on the wedding day?',
      answer:
        'No. Our senior director and on-ground coordination team arrive at 5:00 AM and remain on-site until the last guest departs. We handle all vendor coordination, venue logistics, religious officiant cues, and stage handovers so your family can celebrate with complete peace of mind.'
    },
    {
      number: '02',
      question: 'Do you own your stage structures, marquees, and lighting in-house?',
      answer:
        'Yes, 100%. Unlike agencies that act as brokers and outsource equipment with 30% middleman markups, we own every structural truss, German marquee, fabric drape, and lighting rig in our Thalassery workshop. You work directly with the creators.'
    },
    {
      number: '03',
      question: 'Can we book only specific services without taking a full package?',
      answer:
        'Absolutely. We never force rigid packages. You can choose heavy-duty Pandhal erection and stage decoration alone, full Thalassery Dum Biryani catering, or add live Karaoke, Mailanji setups, and Oppana troupes tailored precisely to your requirements.'
    },
    {
      number: '04',
      question: 'How do you ensure banquet dining flows gracefully without delays or shortages?',
      answer:
        'We deploy dedicated dining supervisors and trained, uniformed stewards. From traditional welcome refreshment cottages to continuous hot buffet replenishments and special seating care for elderly guests, we ensure an unhurried, gracious dining flow.'
    },
    {
      number: '05',
      question: 'How do your outdoor marquees and pandhals hold up against coastal rain and wind?',
      answer:
        'Having orchestrated events across coastal North Kerala for over 12 years, all our marquees and German aluminium structures are weather-tested with heavy-duty anchors. Stages are handed over at least 4 hours before guest arrival.'
    },
    {
      number: '06',
      question: 'Are there any hidden charges, generator overtime fees, or surprise bills later?',
      answer:
        'Never. We provide clear, itemized quotations before agreement with zero surprise post-event invoices. Every floral specification, lighting fixture, and electrical backup is committed in writing.'
    }
  ]

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#EAE5DE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#A52A32]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A52A32]">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#22201E]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#77716A] font-light leading-relaxed">
            Everything you need to know about planning your celebration with OMR A2Z.
          </p>
        </div>

        {/* Clean Minimalist Q&A Accordion Stack */}
        <div className="divide-y divide-[#EAE5DE] border-y border-[#EAE5DE]">
          {items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={item.number} className="transition-colors">
                
                {/* Question Trigger Bar */}
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between gap-4 sm:gap-6 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6 flex-grow pr-2">
                    <span className="text-xs sm:text-sm font-medium text-[#C6A46A] tracking-wider select-none flex-shrink-0">
                      {item.number}
                    </span>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal text-[#22201E] group-hover:text-[#A52A32] transition-colors leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  {/* Minimalist Arrow Icon (Rotates Down/Up) */}
                  <div
                    className={`w-8 h-8 rounded-full border border-[#EAE5DE] flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isOpen
                        ? 'bg-[#22201E] text-white border-[#22201E] rotate-180'
                        : 'bg-white text-[#77716A] group-hover:border-[#C6A46A] group-hover:text-[#22201E]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer (Only visible when arrow is clicked) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pl-8 sm:pl-11 pr-2 sm:pr-8 text-xs sm:text-sm md:text-base text-[#59534B] leading-relaxed font-normal">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
