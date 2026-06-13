'use client'

import { Award, BookOpen, Users, ChefHat, Quote } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'

export default function AboutSection() {

  const features = [
    {
      icon: <Award className="w-6 h-6 text-[#aa7217]" />,
      title: 'Award-Winning Graduates',
      desc: 'Our students have been recognised for their exceptional culinary skills at competitions and industry events.'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#aa7217]" />,
      title: 'Hands-On Training',
      desc: 'Every class is practical. Students learn in fully equipped kitchens from day one with real tools and real recipes.'
    },
    {
      icon: <ChefHat className="w-6 h-6 text-[#aa7217]" />,
      title: 'Expert Instructors',
      desc: 'Our faculty are seasoned culinary professionals who are genuinely invested in each student\'s growth and success.'
    },
    {
      icon: <Users className="w-6 h-6 text-[#aa7217]" />,
      title: 'Supportive Community',
      desc: 'Join a family of passionate culinarians — students, alumni, and instructors who uplift one another every step of the way.'
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

            {/* Feature Cards */}
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

          {/* RIGHT: Real Photo Collage */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5">
            <div className="relative group">
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#700200] to-[#aa7217] rounded-2xl blur-lg opacity-20 group-hover:opacity-35 transition duration-1000" />

              <div className="relative grid grid-cols-2 gap-3 p-3 glass-strong rounded-2xl border border-[#aa7217]/20">
                {/* Large top-left photo */}
                <div className="col-span-2 aspect-[16/9] rounded-xl overflow-hidden">
                  <img
                    src="/award-1.jpeg"
                    alt="Student Award Ceremony"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Bottom two smaller photos */}
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/friendship.jpeg"
                    alt="Students and Instructors"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/award-2.jpeg"
                    alt="Certificate Presentation"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Overlay quote badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-max bg-[#050505] border border-[#aa7217]/30 rounded-full px-5 py-2 flex items-center gap-2 shadow-lg">
                  <Quote className="w-3.5 h-3.5 text-[#aa7217]" />
                  <span className="font-cormorant italic text-sm text-[#FAF9F6]">&quot;If you can Dream it, You can Achieve it&quot;</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Real Life Academy Strip */}
        <ScrollReveal direction="up" delay={0.1} className="mt-28">
          <p className="text-[#aa7217] font-inter text-xs tracking-[0.3em] uppercase font-semibold text-center mb-8">
            Real Moments, Real People
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { src: '/award-3.jpeg',        alt: 'Awards' },
              { src: '/friendship-2.jpeg',   alt: 'Friendship' },
              { src: '/freindship-3.jpeg',   alt: 'Community' },
              { src: '/pinnacle-4.jpg',      alt: 'Training' },
              { src: '/pinnacle-6.jpg',      alt: 'Kitchen' },
              { src: '/pinnacle-7.jpg',      alt: 'Culinary Arts' },
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden border border-white/5 group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Feature stats banner */}
        <ScrollReveal direction="up" delay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/10">
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
