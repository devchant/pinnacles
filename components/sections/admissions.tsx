'use client'

import { useRef, useEffect, useState } from 'react'
import { Calendar, FileText, Compass, Award, CheckCircle, Mail } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'

interface Requirement {
  number: number
  icon: React.ReactNode
  title: string
  description: string
}

export default function AdmissionsSection() {

  const requirements: Requirement[] = [
    {
      number: 1,
      icon: <FileText className="w-6 h-6 text-[#aa7217]" />,
      title: 'Digital Application',
      description: 'Submit your culinary profile, academic background, and program preferences online.',
    },
    {
      number: 2,
      icon: <Compass className="w-6 h-6 text-[#aa7217]" />,
      title: 'Creative Portfolio',
      description: 'Provide an essay or photo gallery illustrating your culinary experiments or fine dining passion.',
    },
    {
      number: 3,
      icon: <Calendar className="w-6 h-6 text-[#aa7217]" />,
      title: 'Academic Interview',
      description: 'Meet one-on-one with a member of the culinary faculty to discuss your career objectives.',
    },
    {
      number: 4,
      icon: <Award className="w-6 h-6 text-[#aa7217]" />,
      title: 'Selective Intake',
      description: 'Selected candidates receive admission packages and scholarship details within 10 days.',
    },
  ]

  return (
    <section id="admissions" className="py-28 bg-[#050505] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#700200]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Title */}
        <ScrollReveal direction="up" className="text-center mb-20 space-y-4">
          <p className="text-[#aa7217] font-inter text-xs tracking-[0.3em] uppercase font-semibold">
            Admissions Process
          </p>
          <h2 className="heading-lg max-w-3xl mx-auto font-playfair font-bold text-[#FAF9F6]">
            The Journey to{' '}
            <span className="font-cormorant italic text-[#aa7217] font-light">
              Michelin Excellence
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-[#aa7217] mx-auto mt-6" />
        </ScrollReveal>

        {/* Process Steps Timeline */}
        <div className="relative mb-24">
          {/* Horizontal connecting line (hidden on mobile) */}
          <div className="hidden lg:block absolute left-[12%] right-[12%] top-[38px] h-[1px] bg-gradient-to-r from-[#aa7217]/10 via-[#aa7217]/40 to-[#aa7217]/10 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {requirements.map((req, index) => (
              <ScrollReveal key={req.number} direction="up" delay={index * 0.12} className="flex flex-col items-center text-center">
                {/* Number Circle and Icon */}
                <div className="relative mb-6">
                  {/* Outer breathing ring */}
                  <div className="absolute -inset-2 rounded-full bg-white/5 border border-[#aa7217]/25 group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Inner container */}
                  <div className="relative w-16 h-16 rounded-full bg-[#050505] border-2 border-[#aa7217] flex items-center justify-center shadow-[0_0_15px_rgba(170,114,23,0.3)]">
                    {req.icon}
                  </div>
                  
                  {/* Floating index flag */}
                  <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#700200] border border-[#aa7217]/40 flex items-center justify-center">
                    <span className="text-[10px] font-bold font-playfair text-[#FAF9F6]">{req.number}</span>
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="font-playfair text-lg text-[#FAF9F6] font-semibold mb-2">{req.title}</h3>
                <p className="text-xs text-gray-400 font-inter leading-relaxed max-w-xs">{req.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Requirements Detail Checklist & Intake CTA Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch mt-16 pt-16 border-t border-white/10">
          
          {/* Left: Requirements Checklist */}
          <ScrollReveal direction="left" delay={0.1} className="lg:col-span-7 space-y-8 flex flex-col justify-center">
            <h3 className="font-playfair text-2xl font-bold text-[#FAF9F6]">
              Admission <span className="font-cormorant italic text-[#aa7217]">Prerequisites</span>
            </h3>
            <p className="body-text text-gray-300">
              We look beyond academic transcripts. We seek candidates who display resilience, culinary curiosity, an appreciation for detail, and a relentless drive to craft sensory masterpieces.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex gap-3.5">
                <CheckCircle className="w-5 h-5 text-[#aa7217] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-playfair text-sm text-[#FAF9F6] font-semibold">Minimum Age Requirement</h4>
                  <p className="text-[11px] text-gray-400 font-inter mt-1">Candidates must be 18 years of age or older upon cohort launch.</p>
                </div>
              </div>
              
              <div className="flex gap-3.5">
                <CheckCircle className="w-5 h-5 text-[#aa7217] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-playfair text-sm text-[#FAF9F6] font-semibold">Educational Credentials</h4>
                  <p className="text-[11px] text-gray-400 font-inter mt-1">High school diploma, secondary school certificate, or equivalency is mandatory.</p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <CheckCircle className="w-5 h-5 text-[#aa7217] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-playfair text-sm text-[#FAF9F6] font-semibold">Culinary Commitment</h4>
                  <p className="text-[11px] text-gray-400 font-inter mt-1">Demonstrated creative focus, passion, or prior work in professional settings is ideal.</p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <CheckCircle className="w-5 h-5 text-[#aa7217] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-playfair text-sm text-[#FAF9F6] font-semibold">Language Proficiency</h4>
                  <p className="text-[11px] text-gray-400 font-inter mt-1">Sufficient English literacy is required to operate safely in high-intensity kitchens.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Reservation and Application card */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5">
            <div className="glass-strong p-8 rounded-2xl border border-[#aa7217]/25 h-full flex flex-col justify-between">
              <div>
                <div className="grid grid-cols-2 gap-6 pb-6 border-b border-white/5 text-center">
                  <div>
                    <p className="text-3xl font-bold font-playfair text-[#aa7217]">15%</p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-inter mt-1">Intake Selectivity</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-playfair text-[#aa7217]">Sept 1</p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-inter mt-1">Cohort Start</p>
                  </div>
                </div>

                <div className="space-y-4 my-8">
                  <p className="text-xs text-center text-gray-300 font-inter leading-relaxed">
                    Applications for our Fall 2026 term are currently open. Classes are strictly capped to maintain an elite student-to-instructor ratio.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <a href="#contact" className="btn-primary w-full text-center text-xs uppercase tracking-wider font-semibold py-3.5">
                  Begin Application
                </a>
                <a href="#contact" className="btn-secondary w-full text-center text-xs uppercase tracking-wider font-semibold py-3.5">
                  Schedule Private Tour
                </a>
                
                <div className="flex items-center justify-center gap-2 pt-4 text-center">
                  <Mail className="w-4 h-4 text-[#aa7217]" />
                  <p className="text-[11px] text-gray-400 font-inter">
                    Direct inquiries:{' '}
                    <span className="text-[#FAF9F6] hover:text-[#aa7217] transition-colors font-medium">
                      admissions@pinnacle.edu
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
