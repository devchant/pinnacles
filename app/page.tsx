'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/sections/header'
import CinematicLoader from '@/components/sections/cinematic-loader'
import HeroSection from '@/components/sections/hero'
import AboutSection from '@/components/sections/about'
import ProgramsSection from '@/components/sections/programs'
import AdmissionsSection from '@/components/sections/admissions'
import PortalsSection from '@/components/sections/portals'
import GallerySection from '@/components/sections/gallery'
import TestimonialsSection from '@/components/sections/testimonials'
import ContactSection from '@/components/sections/contact'
import Footer from '@/components/sections/footer'
import WhatsAppButton from '@/components/sections/whatsapp-button'

export default function Page() {
  const [showSplash, setShowSplash] = useState(true)

  // Disable scroll while splash introduction is active, manage body loading class
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('loading')
    } else {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('loading')
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('loading')
    }
  }, [showSplash])

  // Mobile Failsafe in page.tsx: force disable splash if it remains active on mobile for > 5s
  useEffect(() => {
    const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 768
    if (isMobileDevice && showSplash) {
      const failsafeTimer = setTimeout(() => {
        console.log("Mobile failsafe triggered in page.tsx")
        setShowSplash(false)
        document.body.classList.remove('loading')
      }, 5000)
      return () => clearTimeout(failsafeTimer)
    }
  }, [showSplash])

  // GLOBAL FINAL SAFETY NET: After 12 seconds from app launch, force homepage visibility
  useEffect(() => {
    const safetyNet = setTimeout(() => {
      console.log("Final 12-second safety net triggered. Forcing homepage visibility.")
      setShowSplash(false)
      document.body.classList.remove('loading')
      document.body.style.overflow = 'unset'
    }, 12000)

    return () => clearTimeout(safetyNet)
  }, [])

  return (
    <div className="bg-[#050505] text-[#FAF9F6] overflow-hidden min-h-screen relative selection:bg-accent selection:text-black">
      {/* Navigation Header */}
      <Header />
      
      {/* Floating Chat Button */}
      <WhatsAppButton />
      
      {/* Main Content Areas */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <AdmissionsSection />
        <PortalsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Cinematic Launch Overlay */}
      {showSplash && (
        <CinematicLoader onIntroEnd={() => setShowSplash(false)} />
      )}
    </div>
  )
}
