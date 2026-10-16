'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  UtensilsCrossed,
  Tent,
  Palette,
  Mic2,
  Sparkles,
  Music,
  CheckCircle2
} from 'lucide-react'
import { WhatsAppIcon } from './Icons'

export default function Services() {
  const services = [
    {
      number: '01',
      totalCount: '06',
      category: 'Main Food & Banqueting',
      title: 'Catering & Grand Feasts',
      tagline: 'Authentic Thalassery Dum Biryani & Royal Buffets',
      description:
        'Food is the heart of every Malabar celebration. We craft royal Thalassery Dum Biryani, traditional sadya, multi-cuisine banquets, live hot food stations, and traditional refreshment stalls with trained, uniformed service staff.',
      image: '/images/-5948478724158197594_119.jpg',
      alt: 'OMR A2Z Catering & Food Lounge Presentation',
      icon: UtensilsCrossed,
      features: [
        'Thalassery Dum Biryani & Sadya',
        'Live Welcome Counters & Drinks',
        'Uniformed Hospitality Crew'
      ],
      whatsappTopic: 'Catering & Food Services'
    },
    {
      number: '02',
      totalCount: '06',
      category: 'Structural Architecture',
      title: 'Pandhal & Marquee Canopies',
      tagline: 'Heavy-Duty Waterproof Structures & Drapes',
      description:
        'Engineered all-weather pandhal setups, German aluminium marquees, sweeping radial fabric ceiling drapes, and illuminated walkway tunnels built with our in-house structural inventory to withstand coastal winds and rain.',
      image: '/images/-5946127916758405052_119.jpg',
      alt: 'OMR A2Z Radial Marquee Drapes & Chandelier Lighting',
      icon: Tent,
      features: [
        'Waterproof Pandhal Structures',
        'Radial Ceiling Ribbon Drapes',
        'German Aluminium Marquees'
      ],
      whatsappTopic: 'Pandhal & Marquee Canopy Setup'
    },
    {
      number: '03',
      totalCount: '06',
      category: 'Stage & Ambience Decor',
      title: 'Stage & Stage Decoration',
      tagline: 'Bespoke Stages, Fresh Flowers & Lighting',
      description:
        'Spectacular wedding stage architecture tailored to your theme. Traditional Nikah backdrops, Mandap designs, fresh floral arches, cascading crystal chandeliers, and cinematic atmospheric lighting that elevates photography.',
      image: '/images/-5948577014484766555_119.jpg',
      alt: 'OMR A2Z Floral Wedding Stage & Entrance Decor',
      icon: Palette,
      features: [
        'Custom Wedding Stage Architecture',
        'Exotic Fresh Flower Backdrops',
        'Crystal Chandeliers & Fairy Lights'
      ],
      whatsappTopic: 'Stage & Floral Decoration'
    },
    {
      number: '04',
      totalCount: '06',
      category: 'Live Music & Audio Engineering',
      title: 'Karaoke & Live Ganamela',
      tagline: 'Interactive Singing & Acoustic Melodies',
      description:
        'Keep your guests captivated with lively karaoke setups and melodious Ganamela troupes. High-definition wireless microphones, seasoned vocalists, acoustic orchestral accompaniment, and concert-grade sound balancing.',
      image: '/images/-5948480493684723537_119.jpg',
      alt: 'OMR A2Z Audio, Lighting & Atmosphere Experience',
      icon: Mic2,
      features: [
        'Interactive Live Karaoke Systems',
        'Seasoned Ganamela Musicians',
        'Concert-Grade Sound Balancing'
      ],
      whatsappTopic: 'Karaoke & Live Ganamela'
    },
    {
      number: '05',
      totalCount: '06',
      category: 'Bridal Festivities',
      title: 'Mailanji / Mehendi Night',
      tagline: 'Themed Canopies, Low Seating & Artists',
      description:
        'Magical Mailanji Idal night setups with boho-chic floor mattresses, fairy-lit bridal thrones, traditional brass lamps, festive photo props, curated music, and booking of top bridal Mehendi artists.',
      image: '/images/-5948153251536506696_119.jpg',
      alt: 'OMR A2Z Evening Promenade & Festive Lighting',
      icon: Sparkles,
      features: [
        'Themed Bridal Canopy & Seating',
        'Expert Bridal Mehendi Artists',
        'Fairy-Lit Festive Photo Booths'
      ],
      whatsappTopic: 'Mailanji & Mehendi Night'
    },
    {
      number: '06',
      totalCount: '06',
      category: 'Traditional Cultural Heritage',
      title: 'Oppana, Daffmuttu & Kolkkali',
      tagline: 'Authentic Malabar Cultural Entertainment',
      description:
        'Celebrate Kerala wedding roots with vibrant traditional artforms. Graceful Oppana dance troupes to accompany the bride, spirited rhythmic Daffmuttu processions to welcome the groom, and energetic live Kolkkali performances.',
      image: '/images/-5945938594599997336_119.jpg',
      alt: 'OMR A2Z Malabar Traditional Counter & Cultural Setup',
      icon: Music,
      features: [
        'Professional Oppana Dance Troupe',
        'Royal Daffmuttu Welcome Procession',
        'High-Energy Kolkkali Performances'
      ],
      whatsappTopic: 'Cultural Performances - Oppana, Daffmuttu & Kolkkali'
    }
  ]

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#FAF8F5] relative border-b border-[#EAE5DE]">
      {/* Subtle Ambient Background Accent */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#C6A46A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#A52A32]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-[#EAE5DE]"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#A52A32]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A52A32]">
                Our Core Services
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#22201E]">
              Every Celebration Need, <br />
              <span className="italic font-normal text-[#59534B]">
                Orchestrated Under One Roof.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Scroll-Triggered Stacking Cards Deck */}
        <div className="relative pb-10">
          {services.map((service, index) => {
            const IconComp = service.icon
            // Fluid responsive top offset that perfectly adapts from mobile to large screens
            const topOffsetFluid = `calc(clamp(4.2rem, 8vh, 5.2rem) + ${index * 14}px)`

            return (
              <div
                key={service.number}
                className="sticky mb-20 sm:mb-28 lg:mb-36 last:mb-6 transition-all duration-300"
                style={{
                  top: topOffsetFluid,
                  zIndex: 10 + index
                }}
              >
                {/* Single Luxury Card Container */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EAE5DE] hover:border-[#C6A46A]/80 shadow-[0_-8px_30px_rgba(0,0,0,0.05),0_20px_50px_rgba(34,32,30,0.09)] transition-all duration-300 overflow-hidden">
                  
                  {/* Card Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center p-5 sm:p-8 lg:p-11">
                    
                    {/* Left Column: Minimal Clean Details */}
                    <div className="lg:col-span-7 flex flex-col justify-between order-2 lg:order-1">
                      <div>
                        {/* Micro Header with Step Count & Category */}
                        <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[#EAE5DE]/80">
                          <div className="flex items-center gap-3">
                            <span className="text-xl sm:text-2xl font-semibold text-[#A52A32]">
                              {service.number}
                            </span>
                            <span className="text-xs text-[#A7A19A] font-mono">
                              / {service.totalCount}
                            </span>
                            <span className="text-[#C6A46A]">•</span>
                            <span className="text-[10.5px] uppercase tracking-[0.22em] font-semibold text-[#A52A32]">
                              {service.category}
                            </span>
                          </div>


                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#22201E] tracking-tight leading-tight">
                          {service.title}
                        </h3>

                        {/* Tagline */}
                        <p className="text-xs sm:text-sm text-[#77716A] mt-1 mb-4 font-normal">
                          "{service.tagline}"
                        </p>

                        {/* Minimal Narrative */}
                        <p className="text-xs sm:text-sm text-[#59534B] leading-relaxed mb-6 font-normal max-w-xl">
                          {service.description}
                        </p>

                      </div>

                      {/* Direct WhatsApp Enquiry Button */}
                      <div className="pt-2">
                        <a
                          href={`https://wa.me/919074796765?text=Hi%20OMR%20A2Z,%20I%20would%20like%20to%20enquire%20about%20your%20${encodeURIComponent(service.whatsappTopic)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-whatsapp-pill sm:w-auto inline-flex group"
                        >
                          <span className="truncate pr-3">
                            Enquire On Whatsapp
                          </span>
                          <span className="wa-disc">
                            <WhatsAppIcon className="w-4 h-4 fill-current" />
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Right Column: High-Impact Cinematic Image */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                      <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#EAE5DE] group shadow-inner">
                        <img
                          src={service.image}
                          alt={service.alt}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />


                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tailored Consultation Callout - After Stacking Deck */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 p-6 sm:p-8 bg-white border border-[#EAE5DE] flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-300"
        >
          <div>
            <h4 className="font-serif text-xl font-semibold text-[#22201E]">
              Looking for a Custom Event Package?
            </h4>
            <p className="text-xs sm:text-sm text-[#77716A] mt-1">
              Every family celebration is unique. We combine catering, decor, and scheduling to suit your exact guest count and traditions.
            </p>
          </div>
          <a
            href="https://wa.me/919074796765?text=Hi%20OMR%20A2Z,%20I%20would%20like%20to%20discuss%20a%20customized%20event%20package%20for%20my%20function."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group self-stretch sm:self-auto"
          >
            <span className="pr-3">Consult on WhatsApp</span>
            <span className="wa-disc">
              <WhatsAppIcon className="w-4 h-4 fill-current" />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
