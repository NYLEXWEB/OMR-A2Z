'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageCircle, Check, AlertCircle } from 'lucide-react'
import { InstagramIcon, WhatsAppIcon } from './Icons'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    eventType: 'Wedding & Reception',
    eventDate: '',
    eventLocation: 'Thalassery',
    guestCount: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [formattedMessage, setFormattedMessage] = useState('')

  const eventOptions = [
    'Wedding & Reception',
    'Catering & Food Services',
    'Pandhal & Marquee Canopy',
    'Stage & Stage Decoration',
    'Karaoke & Live Ganamela',
    'Mailanji / Mehendi Night',
    'Oppana, Daffmuttu & Kolkkali',
    'Customized Full Event Package'
  ]

  const locationOptions = [
    'Thalassery',
    'Kannur City',
    'Payyanur',
    'Taliparamba',
    'Mattannur',
    'Iritty',
    'Koothuparamba',
    'Other Location in Kerala'
  ]

  const validate = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact phone number.'
    } else {
      // Basic phone check (allowing 10 digits or with +91)
      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '')
      if (cleanPhone.length < 10) {
        newErrors.phone = 'Please enter a valid 10-digit mobile number.'
      }
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Please select a preferred event date.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const generateWhatsAppText = () => {
    return `*New Event Enquiry for OMR A2Z*
------------------------------
👤 *Name:* ${formData.fullName.trim()}
📞 *Phone:* ${formData.phone.trim()}
🎉 *Event Type:* ${formData.eventType}
📅 *Date:* ${formData.eventDate}
📍 *Location:* ${formData.eventLocation}
👥 *Estimated Guests:* ${formData.guestCount.trim() || 'Not specified'}
💬 *Notes / Requests:*
${formData.message.trim() || 'No additional notes provided.'}
------------------------------
_Sent via omra2z.com inquiry form_`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      return
    }

    const messageText = generateWhatsAppText()
    setFormattedMessage(messageText)
    setSubmitted(true)

    // Open WhatsApp directly with the structured message
    const encoded = encodeURIComponent(messageText)
    const whatsappUrl = `https://wa.me/919074796765?text=${encoded}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#A52A32]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A52A32]">
              Start the Conversation
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#22201E] mb-4">
            Let's Plan Something Memorable.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#FAF8F5] border border-[#EAE5DE] p-6 sm:p-10 shadow-sm rounded-xs"
          >
            <div className="mb-6 pb-4 border-b border-[#EAE5DE]">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#22201E]">
                Event Consultation Request
              </h3>
              <p className="text-xs text-[#77716A] mt-1">
                Submitting opens a direct WhatsApp conversation with our planning team in Thalassery.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-white border border-[#25D366]/40 rounded-xs space-y-4">
                <div className="flex items-center gap-3 text-[#25D366]">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                  <h4 className="font-serif text-lg font-semibold text-[#22201E]">
                    Enquiry Formatted for WhatsApp
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#59534B] leading-relaxed">
                  Your enquiry has been prepared. If your browser didn't open WhatsApp automatically, click the button below to send your details directly to <strong>+91 90747 96765</strong>:
                </p>

                <div className="p-4 bg-[#FAF8F5] border border-[#EAE5DE] text-xs font-mono text-[#59534B] whitespace-pre-wrap rounded-xs max-h-48 overflow-y-auto">
                  {formattedMessage}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={`https://wa.me/919074796765?text=${encodeURIComponent(formattedMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pl-5 pr-2 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center justify-between gap-3 shadow-md transition-all group"
                  >
                    <span>Open in WhatsApp</span>
                    <span className="w-7 h-7 rounded-full bg-white text-[#25D366] flex items-center justify-center transition-transform group-hover:scale-110">
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary group"
                  >
                    <span>Edit Information</span>
                    <span className="btn-disc">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-semibold text-[#22201E] mb-1.5">
                    Full Name <span className="text-[#A52A32]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="e.g. Mohammed Farooq"
                    className={`w-full px-4 py-3 bg-white border text-sm text-[#22201E] placeholder-[#A49F96] focus:outline-none focus:border-[#A52A32] transition-colors rounded-xs ${
                      errors.fullName ? 'border-red-500' : 'border-[#EAE5DE]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone & Event Type (2 cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-[#22201E] mb-1.5">
                      Phone Number <span className="text-[#A52A32]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="e.g. 095627 31173"
                      className={`w-full px-4 py-3 bg-white border text-sm text-[#22201E] placeholder-[#A49F96] focus:outline-none focus:border-[#A52A32] transition-colors rounded-xs ${
                        errors.phone ? 'border-red-500' : 'border-[#EAE5DE]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="eventType" className="block text-xs uppercase tracking-wider font-semibold text-[#22201E] mb-1.5">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      value={formData.eventType}
                      onChange={(e) => handleInputChange('eventType', e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#EAE5DE] text-sm text-[#22201E] focus:outline-none focus:border-[#A52A32] transition-colors rounded-xs"
                    >
                      {eventOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Event Date & Location (2 cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="eventDate" className="block text-xs uppercase tracking-wider font-semibold text-[#22201E] mb-1.5">
                      Event Date <span className="text-[#A52A32]">*</span>
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange('eventDate', e.target.value)}
                      className={`w-full px-4 py-3 bg-white border text-sm text-[#22201E] focus:outline-none focus:border-[#A52A32] transition-colors rounded-xs ${
                        errors.eventDate ? 'border-red-500' : 'border-[#EAE5DE]'
                      }`}
                    />
                    {errors.eventDate && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.eventDate}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="eventLocation" className="block text-xs uppercase tracking-wider font-semibold text-[#22201E] mb-1.5">
                      Event Location
                    </label>
                    <select
                      id="eventLocation"
                      value={formData.eventLocation}
                      onChange={(e) => handleInputChange('eventLocation', e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#EAE5DE] text-sm text-[#22201E] focus:outline-none focus:border-[#A52A32] transition-colors rounded-xs"
                    >
                      {locationOptions.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor="guestCount" className="block text-xs uppercase tracking-wider font-semibold text-[#22201E] mb-1.5">
                    Approximate Number of Guests <span className="text-[#77716A] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="guestCount"
                    value={formData.guestCount}
                    onChange={(e) => handleInputChange('guestCount', e.target.value)}
                    placeholder="e.g. 500 - 800 guests"
                    className="w-full px-4 py-3 bg-white border border-[#EAE5DE] text-sm text-[#22201E] placeholder-[#A49F96] focus:outline-none focus:border-[#A52A32] transition-colors rounded-xs"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-[#22201E] mb-1.5">
                    Specific Requirements or Questions <span className="text-[#77716A] font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about the venue, catering preferences (Biryani, Sadya, live stalls), decor theme, or any other vision you have in mind..."
                    className="w-full px-4 py-3 bg-white border border-[#EAE5DE] text-sm text-[#22201E] placeholder-[#A49F96] focus:outline-none focus:border-[#A52A32] transition-colors rounded-xs resize-none"
                  />
                </div>

                {/* Submit Action (Unique capsule pill with action disc) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-primary w-full group py-3.5 pl-6 pr-3.5"
                  >
                    <span>Send Enquiry via WhatsApp</span>
                    <span className="btn-disc">
                      <WhatsAppIcon className="w-4 h-4 fill-current text-[#7C151B]" />
                    </span>
                  </button>
                  <p className="text-[11px] text-center text-[#77716A] mt-2.5">
                    No spam. Your details will be formatted and opened directly in WhatsApp with OMR A2Z.
                  </p>
                </div>

              </form>
            )}

          </motion.div>

          {/* Business Information & Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            
            <div className="bg-[#FAF8F5] border border-[#EAE5DE] p-6 sm:p-8">
              <h3 className="font-serif text-xl font-semibold text-[#22201E] mb-6">
                Direct Channels
              </h3>

              <div className="space-y-6">
                
                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#EAE5DE] flex items-center justify-center text-[#A52A32] flex-shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#77716A] font-semibold block">
                      Call Us Directly
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
                      <a
                        href="tel:+919074796765"
                        className="text-base font-semibold text-[#22201E] hover:text-[#A52A32] transition-colors inline-block"
                      >
                        +91 90747 96765
                      </a>
                      <span className="text-[#A7A19A] text-sm">/</span>
                      <a
                        href="tel:+919562731173"
                        className="text-base font-semibold text-[#22201E] hover:text-[#A52A32] transition-colors inline-block"
                      >
                        +91 95627 31173
                      </a>
                    </div>
                    <p className="text-xs text-[#77716A] mt-0.5">Available for direct calls and inquiries</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#EAE5DE] flex items-center justify-center text-[#25D366] flex-shrink-0 shadow-xs">
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#77716A] font-semibold block">
                      Official WhatsApp
                    </span>
                    <a
                      href="https://wa.me/919074796765?text=Hi%20OMR%20A2Z,%20I%20would%20like%20to%20enquire%20about%20event%20planning%20and%20catering%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-[#22201E] hover:text-[#25D366] transition-colors mt-0.5 inline-block"
                    >
                      +91 90747 96765
                    </a>
                    <p className="text-xs text-[#77716A] mt-0.5">Instant messaging & quotation chat</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#EAE5DE] flex items-center justify-center text-[#C6A46A] flex-shrink-0 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#77716A] font-semibold block">
                      Email Inquiries
                    </span>
                    <a
                      href="mailto:omr2013a2z@gmail.com"
                      className="text-sm font-semibold text-[#22201E] hover:text-[#A52A32] transition-colors mt-0.5 inline-block break-all"
                    >
                      omr2013a2z@gmail.com
                    </a>
                    <p className="text-xs text-[#77716A] mt-0.5">For proposals and event briefs</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#EAE5DE] flex items-center justify-center text-[#E1306C] flex-shrink-0 shadow-xs">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#77716A] font-semibold block">
                      Official Instagram
                    </span>
                    <a
                      href="https://www.instagram.com/omr.a2z.events/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#22201E] hover:text-[#E1306C] transition-colors mt-0.5 inline-block"
                    >
                      @omr.a2z.events
                    </a>
                    <p className="text-xs text-[#77716A] mt-0.5">View current reels and setups</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 pt-2 border-t border-[#EAE5DE]">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#EAE5DE] flex items-center justify-center text-[#22201E] flex-shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#77716A] font-semibold block">
                      Primary Location
                    </span>
                    <p className="text-sm font-semibold text-[#22201E] mt-0.5">
                       SS Rd, Pallithazhe, Chonadam, Thalassery, Kannur, Kerala 670104
                    </p>
                    <p className="text-xs text-[#77716A] mt-0.5">
                      Coordination available throughout North Kerala
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Note about bespoke planning */}
            <div className="p-6 bg-white border border-[#EAE5DE] text-[#59534B]">
              <h4 className="font-serif text-base font-semibold text-[#22201E] mb-2">
                Personalized Consultations
              </h4>
              <p className="text-xs leading-relaxed">
                We are happy to meet with your family in Thalassery or Kannur to review venue floor plans, decor themes, and menu options in detail.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}
