'use client'

import { useEffect, useRef, useState } from 'react'

interface CinematicLoaderProps {
  onIntroEnd: () => void
}

type LoaderPhase = 'loading' | 'reveal-video' | 'playing-video' | 'dissolving' | 'completed'

export default function CinematicLoader({ onIntroEnd }: CinematicLoaderProps) {
  const [phase, setPhase] = useState<LoaderPhase>('loading')
  const [videoSrc, setVideoSrc] = useState('')
  const [isMobile, setIsMobile] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  // Detect mobile and set source
  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 768px)')
    const mobileActive = mobileQuery.matches
    setIsMobile(mobileActive)
    
    const src = mobileActive
      ? 'https://res.cloudinary.com/dlctwbems/video/upload/f_auto,q_auto/v1781139356/Firefly_779856_1.mp4'
      : 'https://res.cloudinary.com/dlctwbems/video/upload/f_auto,q_auto/v1781139653/Firefly_779856.mp4'
    
    setVideoSrc(src)
  }, [])

  // Handle media loaded/canplay events
  const handleVideoCanPlay = () => {
    if (videoLoaded) return
    setVideoLoaded(true)

    if (phase === 'loading') {
      setPhase('reveal-video')
    }
  }

  // Animation timeline — identical on mobile and desktop
  useEffect(() => {
    if (phase === 'reveal-video') {
      if (videoRef.current) {
        videoRef.current.play()
          .then(() => {
            setPhase('playing-video')
          })
          .catch((err) => {
            console.warn('Auto-play blocked, skipping to homepage:', err)
            setPhase('dissolving')
          })
      } else {
        setPhase('dissolving')
      }
    }

    // playing-video: no timer — let the video play to its natural end.
    // The <video onEnded> handler will trigger setPhase('dissolving').

    if (phase === 'dissolving') {
      // 1.5 seconds smooth fade-out before unmounting
      const timer = setTimeout(() => {
        setPhase('completed')
        onIntroEnd()
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [phase, onIntroEnd])

  // Unmount completely when completed
  if (phase === 'completed') {
    return null
  }

  return (
    <div
      className={`splash-screen fixed inset-0 overflow-hidden select-none z-[9999] bg-[#050505] transition-opacity duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
        phase === 'dissolving' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Preload hero image while splash is visible for fast LCP after transition */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://res.cloudinary.com/dlctwbems/image/upload/f_auto,q_auto,w_1920/v1781173997/ChatGPT_Image_Jun_11_2026_11_32_18_AM.png"
        alt=""
        aria-hidden="true"
        className="absolute opacity-0 w-0 h-0 pointer-events-none"
        fetchPriority="high"
      />

      {/* Video Element — object-contain on mobile to show full content, object-cover on desktop */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        playsInline
        preload="auto"
        onCanPlay={handleVideoCanPlay}
        onCanPlayThrough={handleVideoCanPlay}
        onLoadedData={handleVideoCanPlay}
        onEnded={() => {
          console.log("Intro video finished. Dissolving to homepage.")
          setPhase('dissolving')
        }}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
          phase === 'playing-video' ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-[1.12] blur-[20px]'
        }`}
      />

      {/* PHASE 1 - Initial Loading State Overlay (Logo + Tagline) */}
      <div
        className={`absolute inset-0 bg-[#050505] flex flex-col items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
          phase === 'loading' ? 'opacity-100' : 'opacity-0 pointer-events-none scale-105 blur-sm'
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-center px-4">
          {/* Animated Pinnacle Logo */}
          <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] flex items-center justify-center animate-breathing-logo">
            <img
              src="/logo.png"
              alt="Pinnacle Culinary Academy Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* School Name & Tagline */}
          <div className="space-y-3 mt-4 animate-fade-in-delayed">
            <h1 className="font-playfair text-[#FAF9F6] text-lg md:text-2xl font-semibold tracking-[0.15em] uppercase opacity-95">
              Pinnacle Culinary Academy
            </h1>
            <p className="font-cormorant italic text-sm md:text-base text-[#FAF9F6]/70 font-light tracking-wider">
              &quot;Where Passion Meets Culinary Excellence&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
