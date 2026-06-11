'use client'

import { useState, useEffect, useRef } from 'react'
import { ChefHat, Cake, Wine, Flame, Utensils, Briefcase, Clock, ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'

interface Program {
  id: number
  icon: React.ReactNode
  title: string
  duration: string
  description: string
  highlights: string[]
}

export default function ProgramsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const programs: Program[] = [
    {
      id: 1,
      icon: <ChefHat className="w-8 h-8 text-[#aa7217]" />,
      title: 'Grand Diplôme in Culinary Arts',
      duration: '2 Years • Full-Time',
      description: 'Master French heritage and molecular gastronomy techniques, from butchery, advanced saucing, and sous-vide cooking to plating artistry.',
      highlights: ['Advanced Plating', 'Charcuterie & Garde Manger', 'Modern Gastronomy', 'Saucier Mastery'],
    },
    {
      id: 2,
      icon: <Cake className="w-8 h-8 text-[#aa7217]" />,
      title: 'Professional Pastry & Baking',
      duration: '2 Years • Full-Time',
      description: 'From classic viennoiserie, sourdoughs, and gateaux to sugar pulling, complex tempering, and elaborate wedding cake compositions.',
      highlights: ['Sugar & Chocolate Artistry', 'Classic Viennoiserie', 'Artisanal Bread Crafting', 'Avant-Garde Desserts'],
    },
    {
      id: 3,
      icon: <Wine className="w-8 h-8 text-[#aa7217]" />,
      title: 'Master Sommelier & Beverage',
      duration: '1 Year • Professional',
      description: 'Deepen your knowledge in viticulture, regional pairings, cellar curation, and high-end restaurant beverage service.',
      highlights: ['Viticulture Regions', 'Pairing Chemistry', 'Cellar Curation', 'Spirits & Mixology'],
    },
    {
      id: 4,
      icon: <Flame className="w-8 h-8 text-[#aa7217]" />,
      title: 'Pan-Asian Culinary Arts',
      duration: '18 Months • Intensive',
      description: 'Journey through authentic techniques of Japanese, Sichuan, Thai, and Vietnamese kitchens. Explore wok mastery and sushi craft.',
      highlights: ['Wok & Teppan Techniques', 'Sushi & Kaiseki Craft', 'Curry Chemistry', 'Dim Sum Artistry'],
    },
    {
      id: 5,
      icon: <Utensils className="w-8 h-8 text-[#aa7217]" />,
      title: 'Authentic Italian & Mediterranean',
      duration: '18 Months • Intensive',
      description: 'Discover the rich culinary history, regional pastas, olive oils, and woodfired techniques of the classic Mediterranean basin.',
      highlights: ['Artisanal Pasta Making', 'Woodfired Hearth Cooking', 'Charcuterie Curing', 'Olive Oil Grading'],
    },
    {
      id: 6,
      icon: <Briefcase className="w-8 h-8 text-[#aa7217]" />,
      title: 'Restaurant & Culinary Business',
      duration: '2 Years • Executive',
      description: 'Equip yourself with financial planning, supply logistics, team leadership, brand marketing, and restaurant concept design.',
      highlights: ['Concept Architecture', 'Kitchen Cost Engineering', 'Supply Chain Logistics', 'Culinary Brand Strategy'],
    },
  ]

  return (
    <section id="programs" className="py-28 bg-[#050505] relative overflow-hidden">
      {/* Ambient glowing circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#aa7217]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#700200]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header */}
        <ScrollReveal direction="up" className="text-center mb-20 space-y-4">
          <p className="text-[#aa7217] font-inter text-xs tracking-[0.3em] uppercase font-semibold">
            Our Programs
          </p>
          <h2 className="heading-lg max-w-3xl mx-auto font-playfair font-bold text-[#FAF9F6]">
            Academic Tracks for{' '}
            <span className="font-cormorant italic text-[#aa7217] font-light">
              Future Gastronomists
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-[#aa7217] mx-auto mt-6" />
        </ScrollReveal>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ScrollReveal key={program.id} direction="up" delay={index * 0.07}>
              <div
                onMouseEnter={() => setHoveredId(program.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative glass-strong p-8 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
                  hoveredId === program.id ? 'border-[#aa7217]/40 -translate-y-2' : 'border-white/5'
                }`}
                style={{ 
                  boxShadow: hoveredId === program.id ? '0 15px 35px rgba(170, 114, 23, 0.08)' : 'none'
                }}
              >
                <div>
                {/* Icon & Duration */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#aa7217]/10 transition-colors">
                    {program.icon}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/5 text-[11px] text-gray-300 font-inter">
                    <Clock className="w-3.5 h-3.5 text-[#aa7217]" />
                    <span>{program.duration}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-playfair text-xl font-bold text-[#FAF9F6] mb-3 group-hover:text-[#aa7217] transition-colors">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 font-inter leading-relaxed mb-6">
                  {program.description}
                </p>
              </div>

              {/* Syllabus Highlights */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 pt-2">
                  {program.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-wider bg-[#aa7217]/10 text-[#aa7217] px-2.5 py-1 rounded-full font-inter font-medium border border-[#aa7217]/10"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Learn More Button - smooth inline slide up */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  hoveredId === program.id ? 'max-h-12 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <button className="w-full py-2.5 bg-[#700200] hover:bg-[#8f0300] border border-[#aa7217]/20 text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2">
                    <span>View Full Syllabus</span>
                    <ArrowRight className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Callout Section */}
        <ScrollReveal direction="up" delay={0.1} className="mt-20 glass-light p-10 rounded-2xl border border-white/5 text-center max-w-4xl mx-auto relative overflow-hidden">
          {/* Subtle accent border */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#aa7217] to-transparent" />
          
          <h3 className="font-playfair text-2xl font-semibold text-[#FAF9F6] mb-3">
            Not sure which path to pursue?
          </h3>
          <p className="text-sm text-gray-300 font-inter max-w-2xl mx-auto mb-6">
            Speak with an academic dean to discover the program that aligns with your professional aspirations and matches your skill background.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="btn-gold text-xs uppercase tracking-wider font-semibold">
              Schedule Consultation
            </a>
            <a href="#admissions" className="btn-secondary text-xs uppercase tracking-wider font-semibold">
              Download Syllabus Guide
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
