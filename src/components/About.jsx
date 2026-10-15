import React from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function About() {
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
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#EAE5DE]/80">
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

            {/* Refined Pillar Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EAE5DE] mb-8">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A46A] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#22201E]">Thoughtful Coordination</h4>
                  <p className="text-xs text-[#77716A] mt-0.5">Calm, structured timelines and attentive on-site management.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A46A] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#22201E]">Bespoke Presentation</h4>
                  <p className="text-xs text-[#77716A] mt-0.5">Tailored floral stages, canopy draping, and ambient lighting.</p>
                </div>
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

          {/* Photograph Column */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative">
              {/* Subtle architectural frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#C6A46A]/30 -z-10 rounded-sm" />
              
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-sm bg-[#FAF8F5] shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
                <img
                  src="/images/-5948478724158197594_119.jpg"
                  alt="OMR A2Z Welcome Beverage Lounge & Professional Attendants"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Photo Caption Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-2.5 border border-[#EAE5DE] shadow-sm rounded-sm">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-[#22201E]">
                  Hospitality In Action
                </p>
                <p className="text-[11px] text-[#77716A]">
                  Dedicated live counter presentation by OMR A2Z
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
