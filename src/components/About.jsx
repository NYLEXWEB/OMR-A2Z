'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Pause, Volume2, VolumeX, Sparkles, Film } from 'lucide-react'

export default function About() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)

  // Ensure autoplay starts smoothly
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlayPromise = () => {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false))
      }
    }

    handlePlayPromise()
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play()
      setIsPlaying(true)
    }
  }

  const toggleSound = (e) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video || !video.duration) return
    const pct = (video.currentTime / video.duration) * 100
    setProgress(pct)
  }

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
          
          {/* Editorial Content Column with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#A52A32]" />
              <span className="text-xs uppercase tracking-[0.22em] font-medium text-[#A52A32]">
                The Art of Celebration
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#22201E] leading-[1.12] mb-6">
              Moments Worth Remembering.
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#59534B] font-light leading-relaxed mb-8">
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



            {/* CTA (Luxury Capsule Button) */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="btn-secondary group inline-flex"
              >
                <span>Discuss Your Upcoming Event</span>
                <span className="btn-disc">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>

          </motion.div>

          {/* Premium Video Showcase Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[390px] mx-auto">
              
              {/* Outer Decorative Ambient Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#C6A46A]/20 via-[#A52A32]/10 to-[#C6A46A]/20 rounded-3xl blur-xl opacity-75 pointer-events-none" />

              {/* Bespoke Architectural Cinema Bezel */}
              <div
                onClick={togglePlay}
                className="relative cursor-pointer rounded-2xl overflow-hidden border border-[#C6A46A]/40 bg-[#161412] shadow-[0_24px_55px_-12px_rgba(124,21,27,0.25),0_10px_25px_rgba(0,0,0,0.15)] group select-none"
              >
                {/* 9:16 Vertical Video Frame */}
                <div className="relative aspect-[9/15.5] w-full overflow-hidden bg-black">
                  <video
                    ref={videoRef}
                    src="/video/4_5950933958932827180.mp4"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    preload="metadata"
                    onTimeUpdate={handleTimeUpdate}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />

                  {/* Top Header Overlay with Badges & Sound Controller */}
                  <div className="absolute top-0 inset-x-0 p-3.5 sm:p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between z-10 pointer-events-none">
                    
                  

                    {/* Interactive Sound Toggle */}
                    <button
                      type="button"
                      onClick={toggleSound}
                      aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                      className="pointer-events-auto w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 hover:border-[#C6A46A] flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-white/90" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-[#C6A46A]" />
                      )}
                    </button>
                  </div>

                  {/* Centered Play/Pause Disc (Visible when paused or briefly on hover) */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                      isPlaying
                        ? 'opacity-0 group-hover:opacity-85'
                        : 'opacity-100 bg-black/35 backdrop-blur-[2px]'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md border border-[#C6A46A]/60 flex items-center justify-center text-[#7C151B] shadow-2xl transform transition-transform group-hover:scale-105">
                      {isPlaying ? (
                        <Pause className="w-6 h-6 fill-current" />
                      ) : (
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Vignette & Event Caption */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 pointer-events-none">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] uppercase font-medium tracking-[0.2em] text-[#C6A46A]">
                        Signature Stage & Ambience
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-normal text-white leading-tight drop-shadow-sm">
                      Real Celebration Moments
                    </h3>

                    {/* Slim Gold Playback Progress Bar */}
                    <div className="w-full h-1 bg-white/25 rounded-full mt-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#C6A46A] to-[#E3C999] transition-all duration-150 ease-linear rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                </div>
              </div>



            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
