'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, BookOpen, Globe, Quote, Users } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'

export default function AboutSection() {

  const features = [
    {
      icon: <Award className="w-6 h-6 text-[#aa7217]" />,
      title: 'Michelin-Star Pedigree',
      desc: 'Master techniques directly from chefs who have run the world\'s most acclaimed kitchens.'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#aa7217]" />,
      title: 'State-of-the-Art Ateliers',
      desc: 'Our kitchens feature precision heating, flash freezers, and equipment used in multi-star restaurants.'
    },
    {
      icon: <Globe className="w-6 h-6 text-[#aa7217]" />,
      title: 'Global Affiliates Network',
      desc: 'Direct career channels to elite hospitality groups, luxury cruises, and Michelin restaurants.'
    },
    {
      icon: <Users className="w-6 h-6 text-[#aa7217]" />,
      title: 'Select Peer Group',
      desc: 'Join a tight-knit community of culinarians hailing from over 60 countries.'
    }
  ]

  return (
    <section id="about" className="py-28 bg-[#050505] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#700200]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-[#aa7217]/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Title */}
        <ScrollReveal direction="up" className="text-center mb-20 space-y-4">
          <p className="text-[#aa7217] font-inter text-xs tracking-[0.3em] uppercase font-semibold">
            Our Heritage
          </p>
          <h2 className="heading-lg max-w-3xl mx-auto font-playfair font-bold text-[#FAF9F6]">
            Our Commitment to{' '}
            <span className="font-cormorant italic text-[#aa7217] font-light">
              Culinary Education Success
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-[#aa7217] mx-auto mt-6" />
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: Text & Core Features */}
          <ScrollReveal direction="left" delay={0.1} className="lg:col-span-7 space-y-8">
            <h3 className="font-playfair text-3xl font-semibold text-[#FAF9F6]">
              Raising outstanding professionals in{' '}
              <span className="font-cormorant italic text-[#aa7217]">Nigeria and beyond</span>.
            </h3>
            <p className="body-text text-gray-300">
              With over a decade of proven expertise, we have been raising outstanding culinary professionals in Nigeria and beyond. From our base in Jos, Plateau State, we have produced outstanding graduates who are making remarkable strides across the food and hospitality industry. Join the moving train and become part of a legacy of success.
            </p>

            {/* Custom Cards: Lifts on hover with gold borders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((feat, index) => (
                <div 
                  key={index}
                  className="glass-light p-6 rounded-xl border border-white/5 hover:border-[#aa7217]/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="mb-4 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#aa7217]/10 transition-colors">
                    {feat.icon}
                  </div>
                  <h4 className="font-playfair text-lg text-[#FAF9F6] font-semibold mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-inter leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* RIGHT: High-End Chef Quote with custom gold border */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5">
            <div className="relative group">
              {/* Decorative behind glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#700200] to-[#aa7217] rounded-2xl blur-lg opacity-30 group-hover:opacity-45 transition duration-1000" />
              
              {/* Showcase Card */}
              <div className="relative glass-strong p-10 rounded-2xl flex flex-col justify-between text-center min-h-[400px]">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#aa7217]/10 flex items-center justify-center border border-[#aa7217]/20">
                    <Quote className="w-6 h-6 text-[#aa7217]" />
                  </div>
                </div>

                <blockquote className="font-playfair text-2xl italic text-[#FAF9F6] leading-relaxed mb-8">
                  &quot;If you can Dream it, You can Achieve it&quot;
                </blockquote>

                <div className="border-t border-white/10 pt-6">
                  <p className="font-playfair text-lg text-[#FAF9F6] font-semibold">Pinnacle Joint</p>
                  <p className="text-xs text-[#aa7217] uppercase tracking-wider font-inter mt-1">Culinary Leadership</p>
                  <p className="text-[10px] text-gray-500 font-inter mt-0.5">Jos, Plateau State, Nigeria</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Feature stats banner at the bottom */}
        <ScrollReveal direction="up" delay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-white/10">
          <div className="text-center group">
            <p className="text-4xl md:text-5xl font-bold text-[#aa7217] font-playfair tracking-tight group-hover:scale-105 transition-transform duration-300">
              10+ Years
            </p>
            <p className="text-xs uppercase tracking-wider text-gray-400 mt-2 font-inter">Proven Expertise</p>
          </div>
          <div className="text-center group">
            <p className="text-4xl md:text-5xl font-bold text-[#aa7217] font-playfair tracking-tight group-hover:scale-105 transition-transform duration-300">
              Jos, PL
            </p>
            <p className="text-xs uppercase tracking-wider text-gray-400 mt-2 font-inter">Academy Base</p>
          </div>
          <div className="text-center group">
            <p className="text-4xl md:text-5xl font-bold text-[#aa7217] font-playfair tracking-tight group-hover:scale-105 transition-transform duration-300">
              100s
            </p>
            <p className="text-xs uppercase tracking-wider text-gray-400 mt-2 font-inter">Outstanding Graduates</p>
          </div>
          <div className="text-center group">
            <p className="text-4xl md:text-5xl font-bold text-[#aa7217] font-playfair tracking-tight group-hover:scale-105 transition-transform duration-300">
              100%
            </p>
            <p className="text-xs uppercase tracking-wider text-gray-400 mt-2 font-inter">Hands-on Success</p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
