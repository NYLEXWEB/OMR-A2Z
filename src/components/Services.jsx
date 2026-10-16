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
      category: 'Main Food & Banqueting',
      title: 'Catering & Grand Feasts',
      tagline: 'Authentic Thalassery Dum Biryani & Royal Buffets',
      description:
        'Food is the heart of every Malabar celebration. We craft royal Thalassery Dum Biryani, traditional sadya, multi-cuisine banquets, live hot food stations, traditional refreshment stalls, and welcome drinks with trained, uniformed service staff.',
      image: '/images/-5948478724158197594_119.jpg',
      alt: 'OMR A2Z Catering & Food Lounge Presentation',
      icon: UtensilsCrossed,
      features: [
        'Thalassery Dum Biryani & Sadya',
        'Live Welcome Counters & Beverages',
        'Uniformed Hospitality Crew',
        'Full Hygiene & Presentation'
      ],
      whatsappTopic: 'Catering & Food Services'
    },
    {
      number: '02',
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
        'German Aluminium Marquees',
        'Weather-Tested Coastal Safety'
      ],
      whatsappTopic: 'Pandhal & Marquee Canopy Setup'
    },
    {
      number: '03',
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
        'Crystal Chandeliers & Fairy Lights',
        'Photogenic Entrance Arches'
      ],
      whatsappTopic: 'Stage & Floral Decoration'
    },
    {
      number: '04',
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
        'Experienced Ganamela Troupe',
        'Concert-Grade Sound Engineering',
        'Curated Regional & Old-School Hits'
      ],
      whatsappTopic: 'Karaoke & Live Ganamela'
    },
    {
      number: '05',
      category: 'Bridal Festivities',
      title: 'Mailanji / Mehendi Night',
      tagline: 'Themed Canopies, Low Seating & Artists',
      description:
        'Magical Mailanji Idal night setups with boho-chic floor mattresses, fairy-lit bridal thrones, traditional brass lamps, festive photo props, curated music, and booking of top bridal Mehendi artists.',
      image: '/images/-5948153251536506696_119.jpg',
      alt: 'OMR A2Z Evening Promenade & Festive Lighting',
      icon: Sparkles,
      features: [
        'Themed Bridal Canopy & Mattresses',
        'Expert Bridal Mehendi Artists',
        'Fairy-Lit Festive Photo Booths',
        'Traditional Props & Festive Ambience'
      ],
      whatsappTopic: 'Mailanji & Mehendi Night'
    },
    {
      number: '06',
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
        'High-Energy Kolkkali Performances',
        'Traditional Attire & Live Percussion'
      ],
      whatsappTopic: 'Cultural Performances - Oppana, Daffmuttu & Kolkkali'
    }
  ]

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#FAF8F5] overflow-hidden border-b border-[#EAE5DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#EAE5DE]"
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
          <p className="text-sm sm:text-base text-[#77716A] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            From delicious Thalassery feast catering, waterproof pandhals, and stage decor to karaoke, Mailanji nights, and Oppana—we tailor every single element to your family’s exact requirements.
          </p>
        </motion.div>

        {/* Editorial 6-Service Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComp = service.icon
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group flex flex-col bg-white border border-[#EAE5DE] hover:border-[#C6A46A]/60 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] rounded-sm overflow-hidden"
              >
                {/* Service Photograph & Overlays */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Shade for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Number Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono font-semibold tracking-wider text-[#22201E] border border-[#EAE5DE]/80 shadow-xs rounded-xs">
                    {service.number}
                  </div>

                  {/* Icon Floating Badge */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-[#EAE5DE] flex items-center justify-center text-[#A52A32] shadow-xs">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#A52A32] font-semibold block mb-1">
                      {service.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#22201E] group-hover:text-[#A52A32] transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-serif italic text-xs text-[#77716A] mt-0.5 mb-3">
                      "{service.tagline}"
                    </p>
                    <p className="text-xs sm:text-sm text-[#59534B] leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EAE5DE]/60">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.features.map((feat) => (
                        <span
                          key={feat}
                          className="text-[10.5px] bg-[#FAF8F5] text-[#59534B] px-2.5 py-1 border border-[#EAE5DE]/80 rounded-xs flex items-center gap-1.5 font-medium"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#A52A32] flex-shrink-0" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>

                    {/* Direct WhatsApp Action Button */}
                    <a
                      href={`https://wa.me/919074796765?text=Hi%20OMR%20A2Z,%20I%20would%20like%20to%20enquire%20about%20your%20${encodeURIComponent(service.whatsappTopic)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp-pill group"
                    >
                      <span className="truncate pr-2">
                        Enquire About {service.title}
                      </span>
                      <span className="wa-disc">
                        <WhatsAppIcon className="w-4 h-4 fill-current" />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tailored Consultation Callout - Original Clean Luxury Style */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 bg-white border border-[#EAE5DE] flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-300"
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
            <span>Consult on WhatsApp</span>
            <span className="btn-disc">
              <WhatsAppIcon className="w-4 h-4 fill-current" />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
