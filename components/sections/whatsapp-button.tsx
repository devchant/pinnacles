'use client'

import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [isScrolling, setIsScrolling] = useState(false)
  const phoneNumber = '08033035133'
  const message = encodeURIComponent('Hello, I would like to inquire about your culinary programs at Pinnacle Academy.')
  
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout
    
    const handleScroll = () => {
      setIsScrolling(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 700)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])
  
  return (
    <a
      href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 left-8 z-50 glass-strong border border-[#aa7217]/35 hover:border-[#aa7217] text-[#FAF9F6] rounded-full px-5 py-3 shadow-2xl transition-all duration-500 flex items-center gap-2.5 select-none ${
        isScrolling 
          ? 'opacity-25 translate-x-[-15px] scale-90 pointer-events-none' 
          : 'opacity-100 translate-x-0 scale-100'
      }`}
      aria-label="Contact us on WhatsApp"
    >
      {/* Active Concierge Pulse Dot */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#aa7217] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#aa7217]"></span>
      </span>

      {/* WhatsApp SVG Icon */}
      <svg
        className="w-4 h-4 text-[#aa7217] fill-current"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.719.744 5.37 2.156 7.66L2.254 22l8.07-2.119a9.844 9.844 0 004.617 1.16h.004c5.43 0 9.848-4.414 9.848-9.845 0-2.631-.996-5.104-2.807-6.97a9.844 9.844 0 00-7.038-2.882m0 0z" />
      </svg>
      
      <span className="text-[10px] font-semibold uppercase tracking-widest font-inter text-gray-200">
        Inquire Online
      </span>
    </a>
  )
}
