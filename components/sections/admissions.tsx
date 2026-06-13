'use client'

import { useRef, useEffect, useState } from 'react'
import { FileText, CreditCard, GraduationCap, Home, CheckCircle, Mail, Phone } from 'lucide-react'
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
      title: 'Registration',
      description: 'Fill out your registration form with your personal details, program of choice, and background information.',
    },
    {
      number: 2,
      icon: <CreditCard className="w-6 h-6 text-[#aa7217]" />,
      title: 'Payment',
      description: 'Complete your tuition payment to secure your spot. Payment plans and installment options are available on request.',
    },
    {
      number: 3,
      icon: <GraduationCap className="w-6 h-6 text-[#aa7217]" />,
      title: 'Admission',
      description: 'Receive your official admission letter, course schedule, and orientation details — and begin your culinary journey.',
    },
  ]

  return (
    <section id="admissions" className="py-28 bg-[#050505] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#700200]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#aa7217]/4 rounded-full blur-[100px] pointer-events-none" />
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
              Culinary Excellence
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-[#aa7217] mx-auto mt-6" />
        </ScrollReveal>

        {/* Process Steps Timeline */}
        <div className="relative mb-24">
          {/* Horizontal connecting line (hidden on mobile) */}
          <div className="hidden lg:block absolute left-[16%] right-[16%] top-[38px] h-[1px] bg-gradient-to-r from-[#aa7217]/10 via-[#aa7217]/40 to-[#aa7217]/10 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
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
              We welcome everyone with a genuine passion for culinary arts. Whether you are a total beginner or someone with prior kitchen experience, Pinnacle Culinary Academy is designed to help you grow and excel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex gap-3.5">
                <CheckCircle className="w-5 h-5 text-[#aa7217] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-playfair text-sm text-[#FAF9F6] font-semibold">Minimum Age Requirement</h4>
                  <p className="text-[11px] text-gray-400 font-inter mt-1">Candidates must be 18 years of age or older to enroll in any program.</p>
                </div>
              </div>
              
              <div className="flex gap-3.5">
                <CheckCircle className="w-5 h-5 text-[#aa7217] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-playfair text-sm text-[#FAF9F6] font-semibold">Educational Background</h4>
                  <p className="text-[11px] text-gray-400 font-inter mt-1">A secondary school certificate or its equivalent is required for enrollment.</p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <CheckCircle className="w-5 h-5 text-[#aa7217] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-playfair text-sm text-[#FAF9F6] font-semibold">Culinary Passion</h4>
                  <p className="text-[11px] text-gray-400 font-inter mt-1">No prior cooking experience is required — just a genuine passion and readiness to learn.</p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <CheckCircle className="w-5 h-5 text-[#aa7217] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-playfair text-sm text-[#FAF9F6] font-semibold">Hostel Available</h4>
                  <p className="text-[11px] text-gray-400 font-inter mt-1">On-campus hostel accommodation is available for students. Contact us for hostel details and rates.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Application & Hostel Card */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5">
            <div className="glass-strong p-8 rounded-2xl border border-[#aa7217]/25 h-full flex flex-col justify-between">
              <div>
                {/* Hostel Info Banner */}
                <div className="flex items-center gap-3 mb-6 p-4 bg-[#aa7217]/8 rounded-xl border border-[#aa7217]/20">
                  <div className="w-10 h-10 rounded-lg bg-[#aa7217]/15 flex items-center justify-center shrink-0">
                    <Home className="w-5 h-5 text-[#aa7217]" />
                  </div>
                  <div>
                    <p className="font-playfair text-sm font-semibold text-[#FAF9F6]">Hostel Accommodation</p>
                    <p className="text-[10px] text-gray-400 font-inter mt-0.5">On-campus hostel available for all students. Contact admissions for availability & rates.</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pb-6 border-b border-white/5 text-center">
                  <div>
                    <p className="text-3xl font-bold font-playfair text-[#aa7217]">3 Steps</p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-inter mt-1">Simple Process</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-playfair text-[#aa7217]">Open</p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-inter mt-1">Intake Status</p>
                  </div>
                </div>

                <div className="space-y-4 my-8">
                  <p className="text-xs text-center text-gray-300 font-inter leading-relaxed">
                    Enrollment is currently open. Spots are limited — register early to secure your place in the next cohort. Hostel accommodation is available for out-of-town students.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <a href="/apply" className="btn-primary w-full text-center text-xs uppercase tracking-wider font-semibold py-3.5">
                  Begin Registration
                </a>
                <a href="#contact" className="btn-secondary w-full text-center text-xs uppercase tracking-wider font-semibold py-3.5">
                  Enquire About Hostel
                </a>
                
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <div className="flex items-center justify-center gap-2 text-center">
                    <Phone className="w-4 h-4 text-[#aa7217]" />
                    <p className="text-[11px] text-gray-400 font-inter">
                      Call us:{' '}
                      <span className="text-[#FAF9F6] hover:text-[#aa7217] transition-colors font-medium">
                        08163977414
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-center">
                    <Mail className="w-4 h-4 text-[#aa7217]" />
                    <p className="text-[11px] text-gray-400 font-inter">
                      <span className="text-[#FAF9F6] hover:text-[#aa7217] transition-colors font-medium text-[10px]">
                        Pinnaculeculinaryacademy@gmail.com
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
