'use client'

import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [isScrolling, setIsScrolling] = useState(false)
  const phoneNumber = '2348033035133'
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
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className={`fixed bottom-8 left-8 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] transition-all duration-300 flex items-center justify-center select-none ${
        isScrolling
          ? 'opacity-30 scale-90 pointer-events-none'
          : 'opacity-100 scale-100 hover:scale-110'
      }`}
    >
      {/*
        Lucide-react does not include brand icons (WhatsApp, Instagram, etc.)
        by design. This uses the official WhatsApp SVG rendered in lucide's
        stroke style — white, 28×28, stroke-based for visual consistency.
      */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Bubble outline */}
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    </a>
  )
}
