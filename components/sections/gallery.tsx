'use client'

import { useState } from 'react'
import { Maximize2, X } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'

interface GalleryImage {
  id: number
  title: string
  category: string
  image: string
}

const galleryImages: GalleryImage[] = [
  // Real Academy Photos
  { id: 1,  title: 'Student Award Ceremony',        category: 'Awards',      image: '/award-1.jpeg'                          },
  { id: 2,  title: 'Certificate Presentation',      category: 'Awards',      image: '/award-2.jpeg'                          },
  { id: 3,  title: 'Excellence Recognition',        category: 'Awards',      image: '/award-3.jpeg'                          },
  { id: 4,  title: 'Students & Instructors',        category: 'Community',   image: '/friendship.jpeg'                       },
  { id: 5,  title: 'Culinary Family Moment',        category: 'Community',   image: '/friendship-2.jpeg'                     },
  { id: 6,  title: 'Academy Bonding',               category: 'Community',   image: '/freindship-3.jpeg'                     },
  { id: 7,  title: 'In the Academy Kitchen',        category: 'Training',    image: '/pinnacle-1.jpg'                        },
  { id: 8,  title: 'Practical Kitchen Session',     category: 'Training',    image: '/pinnacle-2.jpeg'                       },
  { id: 9,  title: 'Professional Food Prep',        category: 'Training',    image: '/pinnacle-4.jpg'                        },
  { id: 10, title: 'Hands-On Cooking Class',        category: 'Training',    image: '/pinnacle-5.jpg'                        },
  { id: 11, title: 'Culinary Arts in Action',       category: 'Training',    image: '/pinnacle-6.jpg'                        },
  { id: 12, title: 'Expert Instructor Guidance',    category: 'Training',    image: '/pinnacle-7.jpg'                        },
  { id: 13, title: 'Fine Plating Masterclass',      category: 'Training',    image: '/pinnacle-9.jpeg'                       },
  { id: 14, title: 'Academy Showcase Moment',       category: 'Events',      image: '/pinnicle-3.jpg'                        },
  // Student Testimonial Portraits
  { id: 15, title: 'Celine Bitrus Nyam',            category: 'Graduates',   image: '/pinnacle-studen-testimonial-1.jpeg'    },
  { id: 16, title: 'Isaac Emmanuel',                category: 'Graduates',   image: '/pinnacle-studen-testimonial-2.jpeg'    },
  { id: 17, title: 'Graduate Portrait',             category: 'Graduates',   image: '/pinnacle-studen-testimonial-3.jpeg'    },
  { id: 18, title: 'Queen Kanyion Benedict',        category: 'Graduates',   image: '/pinnacle-studen-testimonial-4.jpeg'    },
  { id: 19, title: 'Sakmicit Alexander Yaro',       category: 'Graduates',   image: '/pinnacle-studen-testimonial-5.jpeg'    },
]

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = ['All', 'Training', 'Awards', 'Community', 'Graduates', 'Events']
  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section id="gallery" className="py-28 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#aa7217]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Title */}
        <ScrollReveal direction="up" className="text-center mb-16 space-y-4">
          <p className="text-[#aa7217] font-inter text-xs tracking-[0.3em] uppercase font-semibold">
            Our Gallery
          </p>
          <h2 className="heading-lg max-w-3xl mx-auto font-playfair font-bold text-[#FAF9F6]">
            Life at{' '}
            <span className="font-cormorant italic text-[#aa7217] font-light">
              Pinnacle Culinary Academy
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-[#aa7217] mx-auto mt-6" />
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal direction="up" delay={0.05} className="flex flex-wrap justify-center gap-3 mb-16">
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
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <ScrollReveal
              key={image.id}
              direction="up"
              delay={index * 0.04}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 hover:border-[#aa7217]/30 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
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
              
              {/* Gold inner border on hover */}
              <div className="absolute inset-4 border border-[#aa7217]/0 group-hover:border-[#aa7217]/20 rounded-xl transition-all duration-500 pointer-events-none" />

              {/* Details */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex justify-between items-end">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#aa7217] font-semibold font-inter bg-[#aa7217]/10 border border-[#aa7217]/20 px-2 py-0.5 rounded">
                    {image.category}
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-[#FAF9F6] mt-2 leading-tight">
                    {image.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <Maximize2 className="w-3.5 h-3.5 text-[#aa7217]" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Row */}
        <ScrollReveal direction="up" delay={0.1} className="grid grid-cols-3 gap-8 mt-24 pt-16 border-t border-white/10">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#aa7217] font-playfair">100s</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-inter mt-1.5">Outstanding Graduates</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#aa7217] font-playfair">10+</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-inter mt-1.5">Years of Excellence</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#aa7217] font-playfair">Jos, NG</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-inter mt-1.5">Academy Base</p>
          </div>
        </ScrollReveal>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#aa7217] hover:border-[#aa7217]/40 transition-all cursor-pointer z-55"
          >
            <X className="w-5 h-5" />
          </button>

          <div 
            className="relative max-w-4xl w-full max-h-[80vh] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#050505] flex flex-col justify-end"
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={galleryImages.find(img => img.id === selectedImage)?.image} 
              alt="Gallery" 
              className="absolute inset-0 w-full h-full object-cover"
            />
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
