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
      {/* Background Loop Video (Low opacity with overlay for maximum luxury readability) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-25 scale-105"
        >
          <source 
            src="https://res.cloudinary.com/dlctwbems/video/upload/v1781139653/Firefly_779856.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Editorial Gradients & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]/30 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0)_10%,rgba(5,5,5,0.95)_80%)] z-10" />
        
        {/* Soft glowing ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#700200]/10 rounded-full blur-[120px] animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#aa7217]/5 rounded-full blur-[100px] animate-float pointer-events-none" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Luxurious Typography & Editorial Content */}
          <div className="lg:col-span-7 space-y-8 text-left animate-slide-in-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#aa7217]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#FAF9F6]">
                Michelin-Star Standards
              </span>
            </div>

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
            
            {/* Fast Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg">
              <div>
                <p className="font-playfair text-xl md:text-2xl font-bold text-[#aa7217]">100%</p>
                <p className="text-xs text-gray-400 font-inter mt-1">Michelin Placement</p>
              </div>
              <div>
                <p className="font-playfair text-xl md:text-2xl font-bold text-[#aa7217]">35+</p>
                <p className="text-xs text-gray-400 font-inter mt-1">Master Instructors</p>
              </div>
              <div>
                <p className="font-playfair text-xl md:text-2xl font-bold text-[#aa7217]">12</p>
                <p className="text-xs text-gray-400 font-inter mt-1">Global Campuses</p>
              </div>
            </div>
          </div>

          {/* RIGHT: 3D Mouse-Interactive Showcase Panel */}
          <div className="lg:col-span-5 flex justify-center items-center relative min-h-[460px] animate-scale-in">
            {/* 3D Glass Box */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-80 h-[420px] glass-strong flex flex-col justify-between p-8 rounded-2xl cursor-pointer group transition-all duration-200"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              {/* Luxury Gold Shimmer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#aa7217]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              {/* Card Header */}
              <div>
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                    <ChefHat className="w-6 h-6 text-[#aa7217]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 bg-[#700200]/40 text-[#FAF9F6] border border-[#700200]/40 rounded-full">
                    Pinnacle Elite
                  </span>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#FAF9F6] mt-6 leading-tight">
                  Crafting the Future <br />
                  <span className="font-cormorant italic font-light text-[#aa7217]">of Fine Dining</span>
                </h3>
              </div>

              {/* Decorative Plating Illustration/Glow */}
              <div className="relative my-4 flex justify-center items-center">
                <div className="w-32 h-32 rounded-full border border-[#aa7217]/30 flex items-center justify-center animate-spin-slow">
                  <div className="w-24 h-24 rounded-full border-dashed border-[#aa7217]/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#700200]/20 to-[#aa7217]/10" />
                  </div>
                </div>
                <div className="absolute text-center text-xs tracking-wider text-[#aa7217] font-playfair">
                  EST. 1995
                </div>
              </div>

              {/* Card Footer */}
              <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-gray-400">Next Cohort</p>
                  <p className="text-xs font-semibold text-[#FAF9F6] mt-0.5">September 2026</p>
                </div>
                <div className="text-xs text-[#aa7217] font-semibold flex items-center gap-1 group-hover:underline">
                  <span>Register Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* FLOATING ACCENT BADGES: Lift on Hover with motion design */}
            {/* Badge 1 */}
            <div 
              className="absolute -top-6 -left-8 glass-light p-4 rounded-xl flex items-center gap-3 border border-white/5 shadow-xl animate-float pointer-events-none"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="w-10 h-10 rounded-full bg-[#aa7217]/20 flex items-center justify-center border border-[#aa7217]/30">
                <Trophy className="w-5 h-5 text-[#aa7217]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Accreditation</p>
                <p className="text-xs font-bold text-[#FAF9F6]">World Culinary Guild</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div 
              className="absolute -bottom-6 -right-4 glass-light p-4 rounded-xl flex items-center gap-3 border border-white/5 shadow-xl animate-float pointer-events-none"
              style={{ animationDelay: '2s' }}
            >
              <div className="w-10 h-10 rounded-full bg-[#700200]/30 flex items-center justify-center border border-[#700200]/30">
                <ShieldCheck className="w-5 h-5 text-[#FAF9F6]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400">Admissions</p>
                <p className="text-xs font-bold text-[#aa7217]">Selective Intake</p>
              </div>
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
