'use client'

import { useState, useRef, useEffect } from 'react'
import { BookOpen, Award, Compass, Database, ShieldAlert, ArrowUpRight, GraduationCap } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'

interface Portal {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

export default function PortalsSection() {
  const [selectedPortal, setSelectedPortal] = useState<number | null>(null)

  const portals: Portal[] = [
    {
      id: 1,
      icon: <BookOpen className="w-6 h-6 text-[#aa7217]" />,
      title: 'Active Student Hub',
      description: 'Review course curriculum schedules, submit weekly plating assignments, check instructor grading criteria, and manage kitchen prep sheets.',
      features: ['Daily Recipe Catalogues', 'Chef Instructor Feedback', 'Kitchen Prep Calendars', 'Practical Grading Rubrics'],
    },
    {
      id: 2,
      icon: <GraduationCap className="w-6 h-6 text-[#aa7217]" />,
      title: 'Global Alumni Guild',
      description: 'Engage with our worldwide network of over 3,000 active culinarians. Collaborate on menu openings, share stages, and hire junior talents.',
      features: ['Global Contact Registry', 'Direct Chat Network', 'Regional Chapter Gatherings', 'Alumni Restaurant Spotlights'],
    },
    {
      id: 3,
      icon: <Compass className="w-6 h-6 text-[#aa7217]" />,
      title: 'Placement & Career Services',
      description: 'Get direct access to exclusive stages, internships, and permanent openings in Michelin-starred establishments and luxury resorts.',
      features: ['Michelin Placement Board', 'Stage Application Facilitation', 'Resume and Brand Optimization', 'Interview Simulation Guides'],
    },
    {
      id: 4,
      icon: <Database className="w-6 h-6 text-[#aa7217]" />,
      title: 'The Escoffier Library',
      description: 'Our proprietary digital reference base containing over 1,200 video tutorials of classic mother sauces, culinary formulas, and molecular guides.',
      features: ['High-Definition Technique Videos', 'Ingredient Seasonality Matrices', 'Gastronomy Formula Calculators', 'Historical Recipe Archives'],
    },
  ]

  return (
    <section id="portals" className="py-28 bg-[#050505] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 -left-96 w-96 h-96 bg-[#700200]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-96 w-96 h-96 bg-[#aa7217]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Title */}
        <ScrollReveal direction="up" className="text-center mb-20 space-y-4">
          <p className="text-[#aa7217] font-inter text-xs tracking-[0.3em] uppercase font-semibold">
            Learning Hubs
          </p>
          <h2 className="heading-lg max-w-3xl mx-auto font-playfair font-bold text-[#FAF9F6]">
            The Digital Atelier:{' '}
            <span className="font-cormorant italic text-[#aa7217] font-light">
              Academics & Network
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-[#aa7217] mx-auto mt-6" />
        </ScrollReveal>

        {/* Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portals.map((portal, index) => (
            <ScrollReveal key={portal.id} direction="up" delay={index * 0.08}>
              <div
                onClick={() => setSelectedPortal(selectedPortal === portal.id ? null : portal.id)}
                className={`glass-strong p-8 rounded-2xl cursor-pointer transition-all duration-300 text-left border relative group select-none ${
                  selectedPortal === portal.id ? 'border-[#aa7217]/50' : 'border-white/5'
                }`}
                style={{ 
                  boxShadow: selectedPortal === portal.id ? '0 12px 24px rgba(170, 114, 23, 0.05)' : 'none'
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#aa7217]/10 transition-colors">
                    {portal.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#aa7217]/40 group-hover:bg-white/5 transition-all">
                    <ArrowUpRight className={`w-4 h-4 text-gray-400 group-hover:text-[#aa7217] transition-transform ${
                      selectedPortal === portal.id ? 'rotate-45' : ''
                    }`} />
                  </div>
                </div>

                <h3 className="font-playfair text-xl font-bold text-[#FAF9F6] mb-3">{portal.title}</h3>
                <p className="text-sm text-gray-400 font-inter leading-relaxed mb-4">{portal.description}</p>

                {/* Accordion Details */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  selectedPortal === portal.id ? 'max-h-60 opacity-100 mt-6 pt-6 border-t border-white/10' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-[10px] uppercase tracking-widest text-[#aa7217] font-semibold mb-3">Key Resources:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {portal.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#aa7217]" />
                        <span className="text-xs text-gray-300 font-inter">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Central Entrance Gateway */}
        <ScrollReveal direction="up" delay={0.1} className="glass-light p-10 rounded-2xl border border-white/5 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#700200] to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2 text-left">
              <h3 className="font-playfair text-xl font-bold text-[#FAF9F6]">Secure Academic Portal Access</h3>
              <p className="text-xs text-gray-400 font-inter leading-relaxed">
                Registered students and alumni require official academy credentials to log in. Please use the secure authenticators below.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 w-full">
              <button className="btn-gold text-xs uppercase tracking-wider font-semibold py-3 w-full">
                Student Sign In
              </button>
              <button className="btn-secondary text-xs uppercase tracking-wider font-semibold py-3 w-full">
                Alumni Registry
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
