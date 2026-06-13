'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight, User, Phone, MapPin } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position to adjust header opacity/size
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Heritage', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Learning Hub', href: '#portals' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Success Stories', href: '#testimonials' },
    { label: 'Inquiries', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 flex flex-col">
      {/* TOP SLIM NAVBAR */}
      <div 
        className={`w-full transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? 'py-1.5 bg-[#050505]/95 backdrop-blur-md border-b border-[#aa7217]/10' 
            : 'py-2 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Contact Details & Campus Location */}
          <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-start">
            <a 
              href="tel:+2348033035133" 
              className="flex items-center gap-1.5 text-[10px] sm:text-xs font-inter uppercase tracking-wider text-gray-300 hover:text-[#aa7217] transition-all duration-300 group"
            >
              <Phone className="w-3 h-3 text-[#aa7217] group-hover:scale-110 transition-transform duration-300" />
              <span>+234 803 303 5133</span>
            </a>
            
            <span className="text-[#aa7217]/30 text-xs hidden sm:inline">|</span>
            
            <a 
              href="#contact" 
              className="flex items-center gap-1.5 text-[10px] sm:text-xs font-inter uppercase tracking-wider text-gray-300 hover:text-[#aa7217] transition-all duration-300 group"
            >
              <MapPin className="w-3 h-3 text-[#aa7217] group-hover:scale-110 transition-transform duration-300" />
              <span>Jos, Plateau State</span>
            </a>
          </div>
          
          {/* Premium Tagline Callout */}
          <a href="#admissions" className="hidden md:flex items-center gap-2 group">
            <span className="w-1.5 h-1.5 rounded-full bg-[#aa7217] animate-pulse" />
            <span className="text-[10px] font-inter uppercase tracking-[0.15em] text-gray-400 group-hover:text-[#aa7217] transition-colors duration-300">
              Register Now
            </span>
          </a>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div 
        className={`w-full transition-all duration-500 ${
          scrolled
            ? 'py-2 bg-[#050505]/85 backdrop-blur-xl border-b border-[#aa7217]/15 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : mobileMenuOpen
              ? 'py-4 bg-[#050505]/98 backdrop-blur-xl border-b border-transparent'
              : 'py-4 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LOGO: Premium emblem */}
            <Link 
              href="#"
              className="flex items-center group shrink-0"
            >
              <Image
                src="/logo.png"
                alt="Pinnacle Culinary Academy"
                width={160}
                height={100}
                className={`object-contain transition-all duration-500 drop-shadow-[0_2px_8px_rgba(170,114,23,0.3)] group-hover:drop-shadow-[0_2px_12px_rgba(170,114,23,0.5)] ${
                  scrolled ? 'h-11 w-auto' : 'h-15 w-auto'
                }`}
                priority
              />
            </Link>

            {/* DESKTOP MENU: Modern typography and underlines */}
            <nav className="hidden xl:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-inter text-xs tracking-wider uppercase text-gray-300 hover:text-[#aa7217] transition-colors relative py-1 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#aa7217] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA ACTIONS */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Student Portal Link */}
              <a 
                href="/portal-login"
                className="text-xs uppercase tracking-wider font-semibold text-[#FAF9F6] hover:text-[#aa7217] flex items-center gap-1.5 transition-colors border border-white/10 hover:border-[#aa7217]/40 px-3.5 py-2 rounded bg-white/5"
              >
                <User className="w-3.5 h-3.5 text-[#aa7217]" />
                <span>Portal</span>
              </a>

              {/* Main Action CTA */}
              <a 
                href="/apply"
                className="px-5 py-2 bg-[#700200] hover:bg-[#8f0300] text-white border border-[#aa7217]/20 text-xs font-semibold rounded uppercase tracking-wider transition-all duration-300 shadow-[0_4px_15px_rgba(112,2,0,0.3)] hover:shadow-[0_4px_20px_rgba(170,114,23,0.3)]"
              >
                Apply Online
              </a>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              className="xl:hidden text-[#FAF9F6] hover:text-[#aa7217] transition-colors p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* MOBILE DRAWER: Cinematic glass slide-down */}
          <div 
            className={`xl:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden bg-[#050505]/98 backdrop-blur-xl ${
              mobileMenuOpen 
                ? 'max-h-[500px] opacity-100 mt-4 pt-4 border-t border-[#aa7217]/15' 
                : 'max-h-0 opacity-0 pointer-events-none'
            }`}
          >
            <nav className="flex flex-col gap-4 py-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-inter text-xs tracking-widest uppercase text-gray-300 hover:text-[#aa7217] transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex flex-col sm:flex-row gap-3 mt-4 pt-4 border-t border-white/5">
                <a 
                  href="/portal-login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-widest font-semibold text-[#FAF9F6] hover:text-[#aa7217] flex items-center justify-center gap-1.5 transition-colors border border-white/10 px-4 py-3 rounded bg-white/5"
                >
                  <User className="w-4 h-4 text-[#aa7217]" />
                  <span>Student Portal</span>
                </a>
                <a 
                  href="/apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 bg-[#700200] text-center text-white border border-[#aa7217]/20 text-xs font-semibold rounded uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <span>Apply Online</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
