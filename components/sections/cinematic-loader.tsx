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
  
  // Track specific states for mobile flow
  const [showSplashOverlay, setShowSplashOverlay] = useState(true)
  const [showVideo, setShowVideo] = useState(false)
  
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

  // MOBILE FLOW & FAILSAFE TIMER
  useEffect(() => {
    if (!isMobile) return

    // Failsafe timer (3 seconds) for mobile devices
    const failSafe = setTimeout(() => {
      if (!videoLoaded) {
        // VIDEO NOT READY: Skip video entirely and show homepage
        console.log("Mobile video not loaded within 3s. Skipping to homepage.")
        setShowSplashOverlay(false)
        setShowVideo(false)
        setPhase('completed')
        onIntroEnd()
      } else {
        // VIDEO LOADED SUCCESSFULLY: Hide splash overlay, start playback
        console.log("Mobile video ready after 3s. Starting video.")
        setShowSplashOverlay(false)
        setShowVideo(true)
        if (videoRef.current) {
          videoRef.current.play().catch((err) => {
            console.warn("Mobile video autoplay blocked. Showing homepage.", err)
            setShowVideo(false)
            setPhase('completed')
            onIntroEnd()
          })
        }
      }
    }, 3000)

    return () => clearTimeout(failSafe)
  }, [isMobile, videoLoaded, onIntroEnd])

  // Handle media loaded/canplay events
  const handleVideoCanPlay = () => {
    if (videoLoaded) return
    setVideoLoaded(true)

    // For mobile, if video is ready earlier than 3 seconds, start it immediately
    if (isMobile) {
      console.log("Mobile video loaded early. Starting video.")
      setShowSplashOverlay(false)
      setShowVideo(true)
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.warn("Mobile early autoplay blocked. Showing homepage.", err)
          setShowVideo(false)
          setPhase('completed')
          onIntroEnd()
        })
      }
    } else {
      // Desktop standard behavior
      if (phase === 'loading') {
        setPhase('reveal-video')
      }
    }
  }

  // DESKTOP FLOW transitions
  useEffect(() => {
    if (isMobile) return

    if (phase === 'reveal-video') {
      if (videoRef.current) {
        videoRef.current.play()
          .then(() => {
            setPhase('playing-video')
          })
          .catch((err) => {
            console.warn('Desktop auto-play blocked, skipping to homepage:', err)
            setPhase('dissolving')
          })
      } else {
        setPhase('dissolving')
      }
    }

    if (phase === 'playing-video') {
      const timer = setTimeout(() => {
        setPhase('dissolving')
      }, 8000)
      return () => clearTimeout(timer)
    }

    if (phase === 'dissolving') {
      const timer = setTimeout(() => {
        setPhase('completed')
        onIntroEnd()
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [phase, isMobile, onIntroEnd])

  // Unmount completely when state is completed
  if (phase === 'completed') {
    return null
  }

  // Calculate if the container is hidden based on state
  const isHidden = isMobile
    ? (!showSplashOverlay && !showVideo)
    : (phase === 'completed')

  return (
    <div 
      className={`splash-screen fixed inset-0 overflow-hidden select-none ${
        isHidden 
          ? 'hidden' 
          : 'z-[9999] bg-[#050505]'
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
      {/* Video Element */}
      {videoSrc && (
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
            console.log("Intro video finished. Showing homepage.")
            if (isMobile) {
              setShowVideo(false)
              setPhase('completed')
              onIntroEnd()
            } else {
              setPhase('dissolving')
            }
          }}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isMobile
              ? (showVideo ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none')
              : (phase === 'playing-video' ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-[1.12] blur-[20px]')
          }`}
        />
      )}

      {/* PHASE 1 - Initial Loading State Overlay (Pure Black) */}
      <div 
        className={`absolute inset-0 bg-[#050505] flex flex-col items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isMobile
            ? (showSplashOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none scale-105 blur-sm')
            : (phase === 'loading' ? 'opacity-100' : 'opacity-0 pointer-events-none scale-105 blur-sm')
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
              "Where Passion Meets Culinary Excellence"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
