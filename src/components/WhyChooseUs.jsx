import React from 'react'
import { Sparkles, Compass, HeartHandshake, ShieldCheck } from 'lucide-react'

export default function WhyChooseUs() {
  const pillars = [
    {
      number: '01',
      title: 'Thoughtful Planning',
      description:
        'Every timeline, floor layout, and vendor coordination is structured weeks in advance. We anticipate the unexpected so your family can simply enjoy the moment.',
    },
    {
      number: '02',
      title: 'Attention to Detail',
      description:
        'From the symmetry of ceiling drapes to the garnish on welcome mocktails, we believe true luxury lies in the nuances that guests feel without having to look for them.',
    },
    {
      number: '03',
      title: 'Personalised Celebrations',
      description:
        'We never impose rigid cookie-cutter formulas. We listen carefully to your family traditions, culinary preferences, and aesthetic wishes to curate a bespoke experience.',
    },
    {
      number: '04',
      title: 'Dedicated On-Ground Service',
      description:
        'Our experienced coordination and service crew is actively present on-site from early morning preparations through the last guest send-off, ensuring warm hospitality.',
    },
  ]

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#EAE5DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#A52A32]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A52A32]">
              Our Guiding Principles
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#22201E] mb-4">
            A Commitment to Gracious Hospitality.
          </h2>

          <p className="text-sm sm:text-base text-[#77716A] leading-relaxed">
            Planning a wedding or celebration should bring anticipation and joy, not anxiety. Here is how we ensure your event in Thalassery and Kannur unfolds with quiet grace and elegance.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white p-7 sm:p-8 border border-[#EAE5DE] relative group hover:border-[#C6A46A] transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
            >
              {/* Subtle accent border on top */}
              <div className="w-8 h-[2px] bg-[#C6A46A] mb-6 group-hover:w-12 transition-all duration-300" />
              
              <span className="font-mono text-xs uppercase tracking-widest text-[#77716A] font-semibold block mb-2">
                {pillar.number}
              </span>

              <h3 className="font-serif text-xl font-semibold text-[#22201E] mb-3 group-hover:text-[#A52A32] transition-colors">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#59534B] leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Regional Assurance Banner */}
        <div className="mt-14 py-6 px-8 bg-white border border-[#EAE5DE] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-[#22201E]">
            <span className="w-2 h-2 rounded-full bg-[#A52A32]" />
            <p className="text-xs sm:text-sm font-medium">
              Based in <span className="font-semibold">Thalassery</span>, providing wedding and event services across Kannur and North Kerala.
            </p>
          </div>
          <div className="text-xs text-[#77716A] font-medium">
            Direct coordination with business owner
          </div>
        </div>

      </div>
    </section>
  )
}
