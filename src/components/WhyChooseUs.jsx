import React from 'react'
import { motion } from 'framer-motion'
import { Compass, CheckCircle2 } from 'lucide-react'

export default function WhyChooseUs() {
  const principles = [
    {
      number: '01',
      title: 'Thoughtful Planning & Foresight',
      quote: 'Anticipating every detail before it unfolds.',
      description:
        'Every timeline, banquet layout, and vendor coordination is structured weeks in advance. We eliminate last-minute rushes so your family can embrace every sacred ritual and joyful conversation with complete peace of mind.',
      highlight: 'Calm Timelines & Zero Stress'
    },
    {
      number: '02',
      title: 'The Poetry of Subtle Details',
      quote: 'Luxury is felt in nuances that never shout.',
      description:
        'From the geometric symmetry of sweeping ceiling ribbons to the temperature and fresh garnish on every welcome beverage, we focus on the understated touches that linger in your guests’ memories for years.',
      highlight: 'Precision Stage & Dining Artistry'
    },
    {
      number: '03',
      title: 'Deeply Personalised Traditions',
      quote: 'No rigid packages, only custom celebrations.',
      description:
        'Every family in Thalassery and Kannur carries cherished customs. We listen first, tailoring the floral color palettes, live snack stalls, and banquet course sequences to mirror your heritage and vision.',
      highlight: 'Authentic Regional Sensibility'
    },
    {
      number: '04',
      title: 'Vigilant On-Ground Presence',
      quote: 'From morning prep to the final farewell.',
      description:
        'Our senior coordination team and uniformed hospitality personnel remain actively on-site from early morning preparations through the last guest send-off, ensuring gracious hosting at every step.',
      highlight: 'Dedicated Owner-Led Supervision'
    },
  ]

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#EAE5DE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#EAE5DE]"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#A52A32]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A52A32]">
                Our Guiding Philosophy
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#22201E]">
              Why Families in North Kerala <br />
              <span className="italic font-normal text-[#59534B]">Entrust Their Celebrations to Us.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#77716A] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            We move away from standard event formulas, curating celebrations grounded in gracious hospitality, aesthetic refinement, and genuine care.
          </p>
        </motion.div>

        {/* Unique Architectural List with Staggered Scroll & Hover Animations */}
        <div className="relative border-t border-[#EAE5DE]">
          {principles.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ x: 6, transition: { duration: 0.25 } }}
              className="py-10 sm:py-14 border-b border-[#EAE5DE] group transition-all duration-300 hover:bg-white/80 px-4 sm:px-8 -mx-4 sm:-mx-8 rounded-sm cursor-default"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
                
                {/* Number & Headline */}
                <div className="lg:col-span-5 flex items-baseline gap-4 sm:gap-6">
                  <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#C6A46A] group-hover:text-[#A52A32] group-hover:scale-105 transition-all duration-300 flex-shrink-0 select-none">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#22201E] group-hover:text-[#A52A32] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-serif italic text-xs sm:text-sm text-[#77716A] mt-1 group-hover:text-[#59534B] transition-colors">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                {/* Narrative & Touchpoint Badge */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm md:text-base text-[#59534B] leading-relaxed font-normal">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-2 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A52A32] group-hover:scale-125 transition-transform" />
                    <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#22201E] group-hover:text-[#A52A32] transition-colors">
                      {item.highlight}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Regional Anchor Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 bg-white border border-[#EAE5DE] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EAE5DE] flex items-center justify-center text-[#A52A32] flex-shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-[#22201E]">
                Local Roots, Uncompromising Craft
              </h4>
              <p className="text-xs text-[#77716A] mt-0.5">
                Headquartered in Thalassery, orchestrating events across Kannur, Kozhikode, and Kasaragod.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="btn-primary text-xs uppercase tracking-wider px-6 py-3 whitespace-nowrap self-stretch sm:self-auto text-center hover:scale-102 active:scale-98 transition-transform"
          >
            Start Planning With Us
          </a>
        </motion.div>

      </div>
    </section>
  )
}
