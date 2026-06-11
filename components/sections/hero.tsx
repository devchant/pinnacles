'use client'

import { useState, useRef } from 'react'
import { ArrowRight, Sparkles, ChefHat, Trophy, ShieldCheck } from 'lucide-react'

export default function HeroSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    // Calculate mouse coordinates relative to card center (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    // Rotate max 12 degrees
    setTilt({
      x: -y * 24,
      y: x * 24,
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center pt-24 pb-16">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/dlctwbems/image/upload/v1781173997/ChatGPT_Image_Jun_11_2026_11_32_18_AM.png"
          alt="Pinnacle Culinary Academy hero background"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Editorial Gradients & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/25 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0)_50%,rgba(5,5,5,0.92)_90%)] z-10" />

        {/* Soft glowing ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#700200]/10 rounded-full blur-[120px] animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#aa7217]/5 rounded-full blur-[100px] animate-float pointer-events-none" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT: Luxurious Typography & Editorial Content */}
          <div className="lg:col-span-7 space-y-8 text-left animate-slide-in-left">


            {/* Main Headline: Mix serif and sans-serif */}
            <h2 className="heading-hero">
              Transform Your <br />
              <span className="font-cormorant italic text-[#aa7217] font-light tracking-wide">
                Passion
              </span>{' '}
              Into{' '}
              <span className="font-playfair text-[#FAF9F6] font-bold">
                Culinary Mastery
              </span>
            </h2>

            {/* Description */}
            <p className="subheading max-w-xl leading-relaxed text-gray-300">
              Enter the world’s elite culinary academy. Learn heritage techniques alongside avant-garde gastronomy under the guidance of legendary Michelin-star masters.
            </p>

            {/* Premium CTA Buttons with subtle glow & magnetic scales */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#admissions"
                className="btn-primary group text-center gap-2 text-sm"
              >
                <span>Start Your Culinary Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#programs"
                className="btn-secondary text-center text-sm"
              >
                Explore Elite Programs
              </a>
            </div>



          </div>



        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.35em] text-gray-400 font-inter">Scroll to discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#aa7217] to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-line" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
