import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GoogleIcon, InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons'

export default function SocialSection() {
  const platforms = [
    {
      id: 'google',
      name: 'Google Business',
      handle: 'OMR A2Z Wedding & Event Planners',
      actionText: 'Find on Google Maps',
      description: 'Locate our headquarters, view verified directions, and check regional service areas across Kannur.',
      icon: GoogleIcon,
      href: 'https://www.google.com/search?q=OMR+A2Z+Wedding+and+Event+Planners+Thalassery',
      badge: 'Official Listing',
      iconContainer: 'bg-white border border-[#EAE5DE] shadow-xs',
      badgeColor: 'bg-[#4285F4]/10 text-[#4285F4] border-[#4285F4]/30',
      accentColor: 'text-[#4285F4]',
      cardBorder: 'hover:border-[#4285F4]/60',
      btnBg: 'bg-[#4285F4] hover:bg-[#3367D6] text-white'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@omr.a2z.events',
      actionText: 'Follow on Instagram',
      description: 'Explore our latest reels, behind-the-scenes event prep, bride and groom entries, and live culinary counters.',
      icon: InstagramIcon,
      href: 'https://www.instagram.com/omr.a2z.events/',
      badge: 'Daily Updates',
      iconContainer: 'bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-[0_4px_14px_rgba(225,48,108,0.35)]',
      badgeColor: 'bg-[#E1306C]/10 text-[#E1306C] border-[#E1306C]/30',
      accentColor: 'text-[#E1306C]',
      cardBorder: 'hover:border-[#E1306C]/60',
      btnBg: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white hover:opacity-95'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      handle: 'OMR A2Z Events & Catering',
      actionText: 'Connect on Facebook',
      description: 'Join our celebration community in North Kerala to see event photo albums, announcements, and family testimonials.',
      icon: FacebookIcon,
      href: 'https://www.facebook.com/search/top?q=OMR%20A2Z%20Events',
      badge: 'Community',
      iconContainer: 'bg-[#1877F2] text-white shadow-[0_4px_14px_rgba(24,119,242,0.35)]',
      badgeColor: 'bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/30',
      accentColor: 'text-[#1877F2]',
      cardBorder: 'hover:border-[#1877F2]/60',
      btnBg: 'bg-[#1877F2] hover:bg-[#166fe5] text-white'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Business',
      handle: '+91 95627 31173',
      actionText: 'Chat on WhatsApp',
      description: 'Direct priority channel to discuss your event date, customize wedding menus, and receive instant estimates.',
      icon: WhatsAppIcon,
      href: 'https://wa.me/919562731173?text=Hi%20OMR%20A2Z,%20I%20found%20you%20through%20your%20website%20and%20would%20like%20to%20chat%20about%20an%20event.',
      badge: 'Instant Support',
      iconContainer: 'bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.35)]',
      badgeColor: 'bg-[#25D366]/10 text-[#128C7E] border-[#25D366]/30',
      accentColor: 'text-[#25D366]',
      cardBorder: 'hover:border-[#25D366]/60',
      btnBg: 'bg-[#25D366] hover:bg-[#20ba5a] text-white'
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#EAE5DE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#A52A32]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A52A32]">
              Connect With Us
            </span>
            <span className="w-6 h-[1px] bg-[#A52A32]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#22201E] mb-4">
            Follow Our Celebrations
          </h2>

          <p className="text-sm sm:text-base text-[#77716A] leading-relaxed">
            Stay in touch across your preferred platform. View our active work, behind-the-scenes moments, and get in touch with our team in Thalassery.
          </p>
        </motion.div>

        {/* 4 Platforms Grid with Staggered Scroll Animation and Official Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon
            return (
              <motion.a
                key={platform.id}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group bg-white p-7 border border-[#EAE5DE] ${platform.cardBorder} transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] flex flex-col justify-between rounded-sm relative`}
              >
                <div>
                  {/* Top Bar with Authentic Branded Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${platform.iconContainer}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 border rounded-xs ${platform.badgeColor}`}
                    >
                      {platform.badge}
                    </span>
                  </div>

                  {/* Platform Name & Handle */}
                  <h3 className="font-serif text-xl font-semibold text-[#22201E] group-hover:text-[#22201E] transition-colors mb-1">
                    {platform.name}
                  </h3>
                  <p className={`text-xs font-semibold tracking-wide mb-3 truncate ${platform.accentColor}`}>
                    {platform.handle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[#59534B] leading-relaxed mb-6 font-normal">
                    {platform.description}
                  </p>
                </div>

                {/* Action Link / Button with Authentic Brand Background */}
                <div className="pt-4 border-t border-[#EAE5DE]/60">
                  <div
                    className={`w-full py-2.5 px-3 rounded-xs text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs group-hover:shadow-md ${platform.btnBg}`}
                  >
                    <span>{platform.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

      </div>
    </section>
  )
}
