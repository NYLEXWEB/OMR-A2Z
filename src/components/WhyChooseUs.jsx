'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HelpCircle,
  Plus,
  Minus,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Search,
  Layers,
  HeartHandshake
} from 'lucide-react'
import { WhatsAppIcon } from './Icons'

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Coordination & Care', 'In-House Quality', 'Catering & Custom']

  const faqs = [
    {
      id: 'q1',
      category: 'Coordination & Care',
      questionNumber: '01',
      tag: 'Peace of Mind Guarantee',
      question: 'Will our family have to manage vendors, calls, and timings on the wedding day?',
      answer:
        'No. That is our foundational promise to you. Parents and couples should be joyful hosts and sacred participants, not stressed phone operators. Our senior director and on-ground crew arrive at 5:00 AM and remain on-site until the last guest departs. We shield you completely—handling sound technicians, venue staff, stage handovers, floral arrivals, and ceremony cues.',
      highlight: 'Dedicated Owner-Led On-Ground Supervision from 5:00 AM till Midnight',
      features: [
        'Zero vendor phone calls to parents or couple',
        'Direct coordination with venue authorities and religious officiants',
        'Stage handover guaranteed 4 hours before guest arrival'
      ],
      whatsappPrompt: 'I would like to enquire about your on-ground wedding coordination and timeline management.'
    },
    {
      id: 'q2',
      category: 'In-House Quality',
      questionNumber: '02',
      tag: 'Zero Middlemen · Direct Pricing',
      question: 'Do you own your stage structures, marquees, and lighting in-house, or do you outsource them?',
      answer:
        'We own 100% of our core production assets. Many event agencies in North Kerala act as brokers—subcontracting pandhal trusses, radial canopies, and lighting to third parties, which adds 25% to 35% in middleman commissions and leads to avoidable delays. At OMR A2Z, we own every structural truss, fabric drape, audio rig, and light fixture in our Thalassery workshop. You work directly with the craftsmen building your celebration.',
      highlight: '100% In-House Inventory · Zero Third-Party Broker Markups',
      features: [
        'Direct workshop fabrication in Thalassery & Kannur',
        'Direct accountability without passing the blame',
        'Significant savings passed directly to your family'
      ],
      whatsappPrompt: 'I would like to know more about your in-house stage structures and marquee capabilities.'
    },
    {
      id: 'q3',
      category: 'Catering & Custom',
      questionNumber: '03',
      tag: 'Flexible Choice · No Forced Bundles',
      question: 'Can we book only specific services (like stage decor or catering) without taking a full package?',
      answer:
        'Yes, completely. We do not believe in rigid, take-it-or-leave-it package bundles. If your family already has a family caterer and only requires our heavy-duty Pandhal architecture and floral stage decoration, we are happy to assist. Conversely, if you want full Thalassery Dum Biryani catering with live beverage cottages, karaoke, and Mailanji setups, we coordinate everything seamlessly under one roof.',
      highlight: '100% Customisable Service Combinations Tailored to Your Family',
      features: [
        'Choose stage & pandhal only, catering only, or a complete package',
        'Quotes tailored strictly to your actual guest count and venue size',
        'Full flexibility to add or modify elements during planning'
      ],
      whatsappPrompt: 'I would like to discuss a customized service combination for our upcoming function.'
    },
    {
      id: 'q4',
      category: 'Catering & Custom',
      questionNumber: '04',
      tag: 'Malabar Culinary Etiquette',
      question: 'How do you ensure banquet dining flows gracefully without shortages, cold food, or bottlenecks?',
      answer:
        'In Malabar, gracious banquet hospitality is sacred. Even the most lavish decor is ruined if guests face long queues or lukewarm food. We implement synchronized dining protocols: trained uniformed stewards, continuous hot replenishments for Thalassery Biryani and traditional sadya, dedicated welcome refreshment cottages (Kulukki, fresh juices), and specialized seating assistance for elderly guests.',
      highlight: 'Over 500+ Feasts Coordinated with Flawless Dining Sequencing',
      features: [
        'Uniformed courteous hospitality personnel and stewards',
        'Traditional live refreshment cottages and tea stalls',
        'Zero dining hall bottlenecks and strict hygiene standards'
      ],
      whatsappPrompt: 'I would like to know how you organize catering flow and live beverage lounges.'
    },
    {
      id: 'q5',
      category: 'In-House Quality',
      questionNumber: '05',
      tag: 'Coastal Weather Reliability',
      question: 'How do your outdoor marquees and pandhals withstand coastal Malabar rain and wind?',
      answer:
        'Having orchestrated celebrations across Kannur, Thalassery, Kozhikode, and Kasaragod for over 12 years, we engineer every outdoor setup for coastal coastal microclimates. We use heavy-duty German aluminium marquees, commercial-grade waterproof PVC fabrics, and counter-weighted structural anchorings. We test drainage paths and complete installations hours in advance so unexpected squalls never dampen your day.',
      highlight: 'Heavy-Duty Waterproof Rigging Engineered for Coastal Kerala Winds',
      features: [
        'Commercial waterproof PVC canopies and German marquees',
        'High-wind resistance structural truss anchors',
        'Complete stage & canopy readiness minimum 4 hours prior'
      ],
      whatsappPrompt: 'I want to enquire about heavy-duty waterproof pandhal and outdoor marquee setups.'
    },
    {
      id: 'q6',
      category: 'Coordination & Care',
      questionNumber: '06',
      tag: 'Financial Ethics & Trust',
      question: 'Are there hidden charges, generator overtime fees, or surprise invoices after the function?',
      answer:
        'Never. We provide comprehensive, itemized proposals before you sign any agreement. Every floral density, fabric grade, lighting fixture, and sound capacity is committed in writing. We do not bait clients with cheap base rates only to add surprise fees for generator diesel, transport, or night labor on the event morning. What you agree upon is what you pay.',
      highlight: '100% Price Integrity with Granular Line-Item Quotations',
      features: [
        'Detailed line-item quotes with clear specifications',
        'No surprise overtime or miscellaneous add-on bills',
        'Transparent advance and settlement schedules'
      ],
      whatsappPrompt: 'I would like to request an itemized quotation with transparent costing.'
    }
  ]

  const filteredFaqs =
    selectedCategory === 'All'
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory)

  const trustMetrics = [
    {
      icon: Clock,
      title: '4-Hour Early Handover',
      desc: 'Stages and lighting completed hours before guest arrival.'
    },
    {
      icon: Layers,
      title: '100% In-House Inventory',
      desc: 'All marquees, audio rigs, and truss owned directly by us.'
    },
    {
      icon: HeartHandshake,
      title: 'Malabar Hospitality',
      desc: 'Respecting regional dining rituals, live stalls, and care.'
    },
    {
      icon: ShieldCheck,
      title: 'Zero Hidden Fees',
      desc: 'Itemized written quotes with fixed commitment guarantees.'
    }
  ]

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#EAE5DE] relative overflow-hidden">
      {/* Subtle Bespoke Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A46A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A52A32]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[1.5px] bg-[#A52A32]" />
            <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#A52A32]">
              Why Choose Us
            </span>
            <span className="text-xs text-[#C6A46A]">•</span>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#77716A]">
              Frequently Asked Questions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#22201E] leading-[1.18]"
          >
            Honest Answers to What Families <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#59534B]">
              Ask Before Choosing OMR A2Z.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-sm sm:text-base text-[#77716A] leading-relaxed font-normal"
          >
            Entrusting your family’s once-in-a-lifetime day to an event planner is a major decision. Here is how we address the most important concerns—from vendor panic and middleman markups to banquet flow and unexpected rain.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#EAE5DE]">
          <span className="text-xs uppercase tracking-wider text-[#77716A] font-semibold mr-2 hidden sm:inline">
            Browse by Topic:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#22201E] text-white shadow-xs'
                  : 'bg-white text-[#59534B] border border-[#EAE5DE] hover:border-[#C6A46A] hover:bg-[#FAF8F5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Editorial Q&A Accordion Stack */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`border rounded-sm transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#C6A46A] shadow-[0_8px_30px_rgba(34,32,30,0.06)]'
                    : 'bg-white/75 hover:bg-white border-[#EAE5DE] hover:border-[#D6CEC4]'
                }`}
              >
                {/* Question Trigger Bar */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-5 cursor-pointer select-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 sm:gap-6 flex-grow">
                    {/* Editorial Question Index */}
                    <span
                      className={`font-serif text-xl sm:text-2xl font-normal transition-colors flex-shrink-0 pt-0.5 ${
                        isOpen ? 'text-[#A52A32] font-semibold' : 'text-[#C6A46A]'
                      }`}
                    >
                      {faq.questionNumber}
                    </span>

                    <div className="space-y-1.5 flex-grow pr-2">
                      <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#A52A32] block">
                        {faq.tag}
                      </span>
                      <h3
                        className={`font-serif text-lg sm:text-xl lg:text-2xl font-medium tracking-tight transition-colors leading-snug ${
                          isOpen ? 'text-[#22201E] font-semibold' : 'text-[#22201E] group-hover:text-[#A52A32]'
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Expand / Collapse Icon Disc */}
                  <span
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 mt-1 ${
                      isOpen
                        ? 'bg-[#A52A32] text-white border-[#A52A32] rotate-180 shadow-xs'
                        : 'bg-[#FAF8F5] text-[#77716A] border-[#EAE5DE] group-hover:border-[#C6A46A] group-hover:text-[#22201E]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.2]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.2]" />
                    )}
                  </span>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-7 pt-1 border-t border-[#EAE5DE]/80">
                        
                        {/* Narrative Answer */}
                        <div className="pl-0 sm:pl-12">
                          <p className="text-sm sm:text-base text-[#59534B] leading-relaxed mb-5 font-normal">
                            {faq.answer}
                          </p>

                          {/* Distinct OMR A2Z Commitment Box */}
                          <div className="p-4 sm:p-5 bg-[#FAF8F5] border border-[#EAE5DE] rounded-sm mb-5">
                            <span className="text-[10px] uppercase tracking-wider text-[#A52A32] font-bold block mb-1.5 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-[#C6A46A]" />
                              <span>The OMR A2Z Standard</span>
                            </span>
                            <p className="font-serif text-sm sm:text-base font-semibold text-[#22201E]">
                              {faq.highlight}
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-3 pt-3 border-t border-[#EAE5DE]">
                              {faq.features.map((feature, fIdx) => (
                                <div key={fIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A52A32] flex-shrink-0 mt-0.5" />
                                  <span className="text-xs text-[#59534B] font-medium leading-tight">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Instant Inquiry on this specific point */}
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
                            <span className="text-xs text-[#77716A]">
                              Have a unique concern regarding this topic?
                            </span>
                            <a
                              href={`https://wa.me/919074796765?text=Hi%20OMR%20A2Z,%20${encodeURIComponent(faq.whatsappPrompt)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-whatsapp-pill sm:w-auto inline-flex group"
                            >
                              <span className="truncate pr-2">
                                Ask Us on WhatsApp
                              </span>
                              <span className="wa-disc">
                                <WhatsAppIcon className="w-4 h-4 fill-current" />
                              </span>
                            </a>
                          </div>

                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )
          })}
        </div>

        {/* Bottom Trust Pillars Strip */}
        <div className="mt-16 pt-12 border-t border-[#EAE5DE]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustMetrics.map((item, index) => {
              const IconComp = item.icon
              return (
                <div
                  key={index}
                  className="p-5 bg-white border border-[#EAE5DE] rounded-sm hover:border-[#C6A46A] hover:shadow-xs transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#EAE5DE] flex items-center justify-center text-[#A52A32] mb-3">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-[#22201E]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#77716A] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Consultation Strip */}
          <div className="mt-8 p-6 sm:p-8 bg-gradient-to-r from-[#22201E] to-[#2E2A27] text-white rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A46A] font-semibold block mb-1">
                Still Have Questions?
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-white">
                Speak Directly with Our Lead Planner in Thalassery.
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
                We are happy to answer all your venue, catering, and decor questions over a quick phone call or coffee at our Thalassery studio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
              <a
                href="https://wa.me/919074796765?text=Hi%20OMR%20A2Z,%20I%20have%20a%20few%20questions%20regarding%20planning%20my%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto group justify-center sm:justify-between"
              >
                <span>Chat on WhatsApp</span>
                <span className="btn-disc">
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                </span>
              </a>
              <a
                href="tel:+919074796765"
                className="btn-hero-secondary w-full sm:w-auto group justify-center sm:justify-between"
              >
                <span>Call Us Now</span>
                <span className="btn-disc">
                  <PhoneCall className="w-3.5 h-3.5 text-[#22201E]" />
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
