import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Wedding Planning',
      tagline: 'Ceremony & Stage Architecture',
      description:
        'Complete conceptualization, traditional & contemporary stage decor, mandap / nikaah setups, and end-to-end ceremony management tailored to your family.',
      image: '/images/-5948577014484766555_119.jpg',
      alt: 'OMR A2Z Floral Wedding Stage & Entrance Decor',
      features: ['Stage & Floral Decor', 'Ceremony Scheduling', 'Vendor Harmony']
    },
    {
      number: '02',
      title: 'Catering & Dining Services',
      tagline: 'Authentic Malabar Culinary Heritage',
      description:
        'From traditional banana-leaf feasts and aromatic Thalassery dum biryani to modern live dessert and beverage counters prepared under strict hygiene standards.',
      image: '/images/-5948478724158197594_119.jpg',
      alt: 'OMR A2Z Live Welcome Beverage and Mocktail Lounge',
      features: ['Grand Wedding Buffets', 'Live Beverage & Snack Stalls', 'Trained Uniformed Staff']
    },
    {
      number: '03',
      title: 'Reception Coordination',
      tagline: 'Atmospheric Marquee & Lighting',
      description:
        'Transforming venues into magical banquet spaces with sweeping ceiling canopies, crystal chandeliers, ambient stage illumination, and seamless guest flow.',
      image: '/images/-5946127916758405052_119.jpg',
      alt: 'OMR A2Z Radial Marquee Drapes & Chandelier Lighting',
      features: ['Ceiling & Marquee Draping', 'Chandelier & Starry Lighting', 'Guest Seating Layouts']
    },
    {
      number: '04',
      title: 'Event Management',
      tagline: 'Flawless On-Ground Execution',
      description:
        'Comprehensive logistics, venue preparation, audio-visual assistance, and vigilant coordination that lets you remain fully present in your celebration.',
      image: '/images/-5948135405947391809_119.jpg',
      alt: 'OMR A2Z Grand Event Hall Coordination',
      features: ['On-Site Supervision', 'Venue Logistics', 'Floor Management']
    },
    {
      number: '05',
      title: 'Traditional Live Counters',
      tagline: 'Interactive Guest Hospitality',
      description:
        'Unique live stalls including traditional Malabar kulukki, artisanal tea & beverage huts, chat counters, and regional delicacies made fresh for your guests.',
      image: '/images/-5945938594599997336_119.jpg',
      alt: 'OMR A2Z Malabar Beverage Hut & Refreshment Station',
      features: ['Themed Wooden Huts', 'Fresh Live Preparation', 'Cultural Charm']
    },
    {
      number: '06',
      title: 'Private & Corporate Celebrations',
      tagline: 'Family Milestones & Formals',
      description:
        'Tailored setups for engagements, housewarmings, anniversaries, corporate gatherings, and birthday celebrations throughout Thalassery, Kannur, and beyond.',
      image: '/images/-5948153251536506696_119.jpg',
      alt: 'OMR A2Z Private Celebration Entrance Illumination',
      features: ['Intimate Gatherings', 'Corporate Hospitality', 'Anniversary Feasts']
    },
  ]

  const scrollToContact = (e) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
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
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#EAE5DE]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#A52A32]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A52A32]">
                Our Services
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#22201E]">
              Distinctive Experiences, <br />
              <span className="italic font-normal text-[#59534B]">Crafted With Precision.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#77716A] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            From complete wedding decor and marquee architecture to renowned Malabar catering, we take care of every facet of your event.
          </p>
        </div>

        {/* Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.number}
              className="group flex flex-col bg-white border border-[#EAE5DE] hover:border-[#C6A46A]/60 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >
              {/* Service Photograph */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF8F5]">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Number Badge */}
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono font-semibold tracking-wider text-[#22201E] border border-[#EAE5DE]/80 shadow-sm">
                  {service.number}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#C6A46A] font-semibold block mb-1.5">
                    {service.tagline}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#22201E] group-hover:text-[#A52A32] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#59534B] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE5DE]/60">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-[11px] bg-[#FAF8F5] text-[#59534B] px-2.5 py-1 border border-[#EAE5DE]/60 rounded-xs"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#22201E] group-hover:text-[#A52A32] transition-colors"
                  >
                    <span>Enquire for this service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A46A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tailored Consultation Callout */}
        <div className="mt-14 p-6 sm:p-8 bg-white border border-[#EAE5DE] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl font-semibold text-[#22201E]">Looking for a Custom Event Package?</h4>
            <p className="text-xs sm:text-sm text-[#77716A] mt-1">
              Every family celebration is unique. We combine catering, decor, and scheduling to suit your exact guest count and traditions.
            </p>
          </div>
          <a
            href="https://wa.me/919562731173?text=Hi%20OMR%20A2Z,%20I%20would%20like%20to%20discuss%20a%20customized%20event%20package%20for%20my%20function."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs uppercase tracking-wider px-6 py-3 whitespace-nowrap flex-shrink-0"
          >
            Consult on WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}
