'use client'

import { useState } from 'react'
import { ArrowRight, Shield } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log('Newsletter subscription:', email)
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <footer className="bg-[#050505] border-t border-[#aa7217]/15 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#700200]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10">
        
        {/* Newsletter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2 text-left">
              <h3 className="font-playfair text-2xl font-bold text-[#FAF9F6]">Subscribe to Gastronomy Digest</h3>
              <p className="text-xs text-gray-400 font-inter leading-relaxed max-w-xl">
                Receive quarterly reports on avant-garde gastronomy, seasonal recipe breakdowns, and admissions timetables for coming cohorts.
              </p>
            </div>

            <div className="lg:col-span-5 w-full">
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your professional email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs text-[#FAF9F6] placeholder-gray-500 focus:outline-none focus:border-[#aa7217]/60 focus:bg-white/10 transition-colors font-inter"
                />
                <button 
                  type="submit"
                  className="btn-gold text-xs uppercase tracking-wider font-semibold py-3 px-6 shrink-0"
                >
                  {subscribed ? 'Registered' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
            
            {/* Brand column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="Pinnacle Culinary Academy" 
                  className="h-20 w-auto object-contain drop-shadow-[0_2px_8px_rgba(170,114,23,0.25)]"
                />
              </div>
              <p className="text-xs text-gray-400 font-inter leading-relaxed max-w-sm">
                Raising outstanding culinary professionals in Nigeria and beyond. Based in Jos, Plateau State, we turn passion into culinary mastery with over a decade of proven expertise.
              </p>
              
              {/* Social Channels */}
              <div className="flex gap-4 pt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#aa7217] hover:border-[#aa7217]/30 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#aa7217] hover:border-[#aa7217]/30 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#aa7217] hover:border-[#aa7217]/30 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Academic Tracks */}
            <div className="lg:col-span-2 lg:col-start-7 space-y-4 text-left">
              <h3 className="font-playfair text-sm font-semibold text-[#FAF9F6]">Programs</h3>
              <ul className="space-y-2">
                <li><a href="#programs" className="text-xs text-gray-400 hover:text-[#aa7217] transition-colors font-inter">Culinary Arts</a></li>
                <li><a href="#programs" className="text-xs text-gray-400 hover:text-[#aa7217] transition-colors font-inter">Pastry & Baking</a></li>
                <li><a href="#programs" className="text-xs text-gray-400 hover:text-[#aa7217] transition-colors font-inter">Master Sommelier</a></li>
                <li><a href="#programs" className="text-xs text-gray-400 hover:text-[#aa7217] transition-colors font-inter">Asian Cuisine</a></li>
                <li><a href="#programs" className="text-xs text-gray-400 hover:text-[#aa7217] transition-colors font-inter">Culinary Management</a></li>
              </ul>
            </div>

            {/* Digital Library */}
            <div className="lg:col-span-2 space-y-4 text-left">
              <h3 className="font-playfair text-sm font-semibold text-[#FAF9F6]">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#portals" className="text-xs text-gray-400 hover:text-[#aa7217] transition-colors font-inter">Escoffier Database</a></li>
                <li><a href="#portals" className="text-xs text-gray-400 hover:text-[#aa7217] transition-colors font-inter">Student Hub Portal</a></li>
                <li><a href="#portals" className="text-xs text-gray-400 hover:text-[#aa7217] transition-colors font-inter">Alumni Network Registry</a></li>
                <li><a href="#about" className="text-xs text-gray-400 hover:text-[#aa7217] transition-colors font-inter">Academic Ateliers</a></li>
                <li><a href="#contact" className="text-xs text-gray-400 hover:text-[#aa7217] transition-colors font-inter">Inquiries & Tours</a></li>
              </ul>
            </div>

            {/* General Corporate */}
            <div className="lg:col-span-2 space-y-4 text-left">
              <h3 className="font-playfair text-sm font-semibold text-[#FAF9F6]">Corporate</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-xs text-gray-400 hover:text-[#aa7217] transition-colors font-inter">Our Heritage</a></li>
                <li><a href="#admissions" className="text-xs text-gray-400 hover:text-[#aa7217] transition-colors font-inter">Admissions Office</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-[#aa7217] transition-colors font-inter">Careers at Pinnacle</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-[#aa7217] transition-colors font-inter">Privacy Policy</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-[#aa7217] transition-colors font-inter">Terms of Service</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright details */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-center">
            <p className="text-[11px] text-gray-500 font-inter">
              Copyright © 2026 Pinnacle | Designed By Simplicity Concept
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-[11px] text-gray-500 font-inter">
              <a href="#" className="hover:text-[#aa7217] transition-colors">Accessibility Statement</a>
              <a href="#" className="hover:text-[#aa7217] transition-colors">Atelier Safety Norms</a>
              <a href="#" className="hover:text-[#aa7217] transition-colors">Direct Support Helpline</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
