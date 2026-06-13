'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'

interface Testimonial {
  id: number
  name: string
  role: string
  achievement: string
  quote: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Celine Bitrus Nyam',
    role: 'Professional Graduate',
    achievement: 'Culinary Arts Alumna',
    quote: 'Before joining Pinnacle, my cooking was just average. After my training, everything changed. I can now prepare both local and continental dishes with ease. My plating skills, flavor combinations, and understanding of food science have greatly improved. The academy truly lives up to its name.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Isaac Emmanuel',
    role: 'Professional Chef',
    achievement: 'Professional Chef Alumnus',
    quote: 'My experience at Pinnacle Culinary Academy was truly transformative. The training I received elevated my culinary skills from basic to professional level. The instructors were patient, knowledgeable, and genuinely invested in my growth. Today, I cook with confidence and creativity because Pinnacle gave me the foundation I needed.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Queen Kanyion Benedict',
    role: 'Pastry & Baking Graduate',
    achievement: 'Pastry & Baking Arts Alumna',
    quote: 'I came to Pinnacle Culinary Academy with little hope and no direction. Today, I am proud of who I’ve become. The academy believed in me even before I believed in myself. They shaped my passion into a skill and my skill into a career. Pinnacle will always be a big part of my success story.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sakmicit Alexander Yaro',
    role: 'Graduate & Entrepreneur',
    achievement: 'Culinary Arts Alumna',
    quote: 'Pinnacle Culinary Academy taught me more than I expected. The classes were fun, the instructors were friendly, and we learned a lot of practical things. I can now cook confidently for events, family, and clients. I recommend the academy to anyone who loves cooking. As a proud graduate of Pinnacle Culinary Academy, I confidently say the academy is one of the best places to learn culinary arts. The instructors, environment, and curriculum are top-notch. I left with enhanced skills, valuable knowledge, and the confidence to pursue my culinary dreams.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  // Get three testimonials to show in a row
  const getVisibleTestimonials = () => {
    const indices = []
    for (let i = 0; i < 3; i++) {
      indices.push((currentIndex + i) % testimonials.length)
    }
    return indices.map(idx => testimonials[idx])
  }

  return (
    <section id="testimonials" className="py-28 bg-[#050505] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-[#700200]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Title */}
        <ScrollReveal direction="up" className="text-center mb-20 space-y-4">
          <p className="text-[#aa7217] font-inter text-xs tracking-[0.3em] uppercase font-semibold">
            Voices of Our{' '}
            <span className="font-cormorant italic text-[#aa7217] font-light">
              Distinguished Alumni
            </span>
          </p>
          <div className="w-16 h-[1px] bg-[#aa7217] mx-auto mt-6" />
        </ScrollReveal>

        {/* Testimonials Slider */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="glass-strong p-8 rounded-2xl flex flex-col justify-between border border-white/5 hover:border-[#aa7217]/30 transition-all duration-500 hover:-translate-y-1 relative group min-h-[360px]"
              >
                {/* Subtle Quote Icon Accent */}
                <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-12 h-12 text-[#FAF9F6]" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#aa7217] fill-[#aa7217]" />
                    ))}
                  </div>

                  {/* Quote text: Editorial Italic Serif */}
                  <p className="font-cormorant italic text-lg text-gray-200 leading-relaxed mb-8">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>

                {/* Author Info */}
                <div className="border-t border-white/5 pt-4">
                  <p className="font-playfair text-base font-bold text-[#FAF9F6]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#aa7217] font-inter font-semibold mt-0.5">
                    {testimonial.role}
                  </p>
                  <p className="text-[10px] text-gray-500 font-inter tracking-wider mt-0.5 uppercase">
                    {testimonial.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Prev button */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-[#aa7217]/40 hover:bg-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="w-5 h-5 text-gray-300" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#aa7217] w-8'
                      : 'bg-white/10 w-2.5 hover:bg-white/20'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-[#aa7217]/40 hover:bg-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
              aria-label="Next testimonials"
            >
              <ArrowRight className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </ScrollReveal>

        {/* Global Statistics Panel */}
        <ScrollReveal direction="up" delay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-16 border-t border-white/10">
          <div className="text-center">
            <p className="text-4xl font-bold font-playfair text-[#aa7217]">3,000+</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-inter mt-2">Active Culinarians Registry</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold font-playfair text-[#aa7217]">100%</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-inter mt-2">Accredited Career Placement</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold font-playfair text-[#aa7217]">4.9 / 5</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-inter mt-2">Alumni Satisfaction Index</p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
