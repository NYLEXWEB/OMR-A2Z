import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function About() {
  const scrollToContact = (e) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
    if (element) {
      const navOffset = 90
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#A52A32]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A52A32]">
                The Art of Celebration
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#22201E] leading-[1.18] mb-6">
              Moments Worth Remembering.
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#59534B] leading-relaxed mb-8">
              <p>
                Every celebration has its own story. We bring thoughtful planning,
                beautiful presentation, and attentive service together to help make
                your special occasions memorable.
              </p>
              <p>
                Based in Thalassery and serving across Kannur and North Kerala, OMR A2Z
                approaches each wedding and gathering with deep respect for regional
                hospitality traditions and a contemporary eye for detail. Whether coordinating
                intimate family ceremonies or orchestrating grand wedding banquets, our priority
                is delivering an effortless, gracious experience for you and your guests.
              </p>
            </div>

            {/* Refined Two-Column Signature Hallmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#EAE5DE] mb-8">
              <div>
                <span className="font-serif text-lg font-semibold text-[#22201E] block mb-1">
                  Thoughtful Coordination
                </span>
                <p className="text-xs sm:text-sm text-[#77716A] leading-relaxed">
                  Structured timelines, calm orchestration, and watchful on-ground management from dawn to send-off.
                </p>
              </div>
              <div>
                <span className="font-serif text-lg font-semibold text-[#22201E] block mb-1">
                  Bespoke Presentation
                </span>
                <p className="text-xs sm:text-sm text-[#77716A] leading-relaxed">
                  Tailored floral stage architecture, marquee draping, crystal lighting, and authentic Malabar dining.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#A52A32] hover:text-[#8C2229] group transition-colors"
              >
                <span>Discuss Your Upcoming Event</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* Premium Editorial Layered Visual Showcase (Redesigned per user request) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              
              {/* Main Feature Image */}
              <div className="relative rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/images/-5948478724158197594_119.jpg"
                  alt="OMR A2Z Welcome Beverage Lounge & Uniformed Team"
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Floating Secondary Image */}
              <div className="hidden sm:block absolute -bottom-10 -left-8 w-48 lg:w-56 aspect-[3/4] rounded-md overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.18)] border-4 border-white">
                <img
                  src="/images/-5948577014484766555_119.jpg"
                  alt="OMR A2Z Floral Canopy Entrance"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Floating Luxury Editorial Badge */}
              <div className="absolute -top-5 right-4 sm:-top-6 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-sm border border-[#C6A46A]/40 shadow-lg flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#A52A32]" />
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-widest text-[#C6A46A] font-bold block leading-none">
                    Thalassery · Kannur
                  </span>
                  <span className="text-xs font-serif font-semibold text-[#22201E] mt-0.5 block leading-none">
                    Authentic Malabar Hospitality
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
