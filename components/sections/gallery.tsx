'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Maximize2, X } from 'lucide-react'

interface GalleryImage {
  id: number
  title: string
  category: string
  image: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: 'Advanced Plating Geometry',
    category: 'Techniques',
    image: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Artisanal Patisserie Craft',
    category: 'Pastry',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Sensory Wine Profiling',
    category: 'Sommelier',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Precision Searing & Saucier Work',
    category: 'Cuisine',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Modern Culinary Lab Ateliers',
    category: 'Facilities',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Grand Graduation Banquet',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
  },
]

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const categories = ['All', 'Techniques', 'Pastry', 'Cuisine', 'Facilities', 'Events']
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section id="gallery" ref={ref} className="py-28 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#aa7217]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Title */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#aa7217] font-inter text-xs tracking-[0.3em] uppercase font-semibold">
            Our Gallery
          </p>
          <h2 className="heading-lg max-w-3xl mx-auto font-playfair font-bold text-[#FAF9F6]">
            Scenes of{' '}
            <span className="font-cormorant italic text-[#aa7217] font-light">
              Gastronomic Artistry
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-[#aa7217] mx-auto mt-6" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-inter text-xs tracking-wider uppercase font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#aa7217] text-black shadow-lg shadow-[#aa7217]/20 border border-[#aa7217]'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className={`group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 hover:border-[#aa7217]/30 transition-all duration-500 text-left outline-none ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Full-width Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={image.image}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
              </div>

              {/* Dark Overlay with vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:via-black/25 transition-all duration-500" />
              
              {/* Gold borders on hover */}
              <div className="absolute inset-4 border border-[#aa7217]/0 group-hover:border-[#aa7217]/20 rounded-xl transition-all duration-500 pointer-events-none" />

              {/* Details (visible at bottom) */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex justify-between items-end">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#aa7217] font-semibold font-inter bg-[#aa7217]/10 border border-[#aa7217]/20 px-2 py-0.5 rounded">
                    {image.category}
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-[#FAF9F6] mt-2 leading-tight">
                    {image.title}
                  </h3>
                </div>
                
                {/* Maximize Icon */}
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-md">
                  <Maximize2 className="w-3.5 h-3.5 text-[#aa7217]" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 mt-24 pt-16 border-t border-white/10">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#aa7217] font-playfair">1,200+</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-inter mt-1.5">Masterclass Videos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#aa7217] font-playfair">12,000</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-inter mt-1.5">Plates Prepared Annually</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#aa7217] font-playfair">15</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-inter mt-1.5">Annual Competitions</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="btn-primary text-xs uppercase tracking-wider font-semibold">
            Request Media Access
          </button>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 backdrop-blur-md transition-all duration-300 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#aa7217] hover:border-[#aa7217]/40 transition-all cursor-pointer z-55"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-4xl w-full max-h-[80vh] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#050505] flex flex-col justify-end"
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={galleryImages.find(img => img.id === selectedImage)?.image} 
              alt="Culinary scene" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Modal details strip */}
            <div className="relative z-10 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
              <span className="text-[10px] uppercase tracking-widest text-[#aa7217] font-semibold font-inter">
                {galleryImages.find(img => img.id === selectedImage)?.category}
              </span>
              <h3 className="font-playfair text-2xl font-bold text-[#FAF9F6] mt-2">
                {galleryImages.find(img => img.id === selectedImage)?.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
