'use client'

import { useState, useRef, useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, Check } from 'lucide-react'

interface ContactInfo {
  icon: React.ReactNode
  title: string
  details: string
  value: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const contactInfo: ContactInfo[] = [
    {
      icon: <MapPin className="w-5 h-5 text-[#aa7217]" />,
      title: 'Academy Campus',
      details: 'Jos, Plateau State',
      value: 'Jos, Plateau State, Nigeria',
    },
    {
      icon: <Phone className="w-5 h-5 text-[#aa7217]" />,
      title: 'Admissions Office',
      details: 'Direct Line',
      value: '+234 803 303 5133',
    },
    {
      icon: <Mail className="w-5 h-5 text-[#aa7217]" />,
      title: 'Email Registry',
      details: 'General Inquiry',
      value: 'admissions@pinnacle.edu',
    },
    {
      icon: <Clock className="w-5 h-5 text-[#aa7217]" />,
      title: 'Operating Hours',
      details: 'West Africa Time',
      value: 'Mon - Fri • 9:00 AM - 6:00 PM',
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', program: '', message: '' })
    }, 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" ref={ref} className="py-28 bg-[#050505] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-0 w-96 h-96 bg-[#700200]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-[#aa7217]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Title */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-[#aa7217] font-inter text-xs tracking-[0.3em] uppercase font-semibold">
            Inquiries
          </p>
          <h2 className="heading-lg max-w-3xl mx-auto font-playfair font-bold text-[#FAF9F6]">
            Start Your{' '}
            <span className="font-cormorant italic text-[#aa7217] font-light">
              Gastronomic Journey
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-[#aa7217] mx-auto mt-6" />
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className={`glass-strong p-6 rounded-xl border border-white/5 text-center transition-all duration-300 hover:border-[#aa7217]/30 hover:-translate-y-1 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="mx-auto w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/5">
                {info.icon}
              </div>
              <h3 className="font-playfair text-sm text-[#FAF9F6] font-semibold mb-1">{info.title}</h3>
              <p className="text-[10px] uppercase text-gray-500 font-inter tracking-wider mb-2">{info.details}</p>
              <p className="text-xs text-gray-300 font-inter leading-relaxed">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Contact Form & Premium Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Contact Form */}
          <div className={`lg:col-span-7 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="glass-strong p-8 rounded-2xl border border-white/5 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-playfair text-xl font-bold text-[#FAF9F6] mb-2">Request Catalogues & Consultation</h3>
                <p className="text-xs text-gray-400 font-inter mb-6 leading-relaxed">
                  Fill out our secure portal registry. An admissions officer will contact you within 24 hours to schedule a Zoom or campus tour.
                </p>

                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-scale-in">
                    <div className="mx-auto w-14 h-14 rounded-full bg-[#aa7217]/10 flex items-center justify-center border border-[#aa7217]/40">
                      <Check className="w-6 h-6 text-[#aa7217]" />
                    </div>
                    <h4 className="font-playfair text-lg text-[#FAF9F6] font-semibold">Inquiry Registered</h4>
                    <p className="text-xs text-gray-400 font-inter max-w-sm mx-auto leading-relaxed">
                      Thank you. We have dispatched a confirmation receipt to your inbox. A curriculum advisor will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-[#FAF9F6] placeholder-gray-500 focus:outline-none focus:border-[#aa7217]/60 focus:bg-white/10 transition-colors font-inter"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-[#FAF9F6] placeholder-gray-500 focus:outline-none focus:border-[#aa7217]/60 focus:bg-white/10 transition-colors font-inter"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-[#FAF9F6] placeholder-gray-500 focus:outline-none focus:border-[#aa7217]/60 focus:bg-white/10 transition-colors font-inter"
                      />
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-[#FAF9F6] focus:outline-none focus:border-[#aa7217]/60 focus:bg-white/10 transition-colors font-inter appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#050505] text-gray-500">Select Academic Program</option>
                        <option value="culinary" className="bg-[#050505] text-[#FAF9F6]">Grand Diplôme - Culinary Arts</option>
                        <option value="pastry" className="bg-[#050505] text-[#FAF9F6]">Pastry & Baking Arts</option>
                        <option value="sommelier" className="bg-[#050505] text-[#FAF9F6]">Master Sommelier & Beverage</option>
                        <option value="asian" className="bg-[#050505] text-[#FAF9F6]">Pan-Asian Culinary Arts</option>
                        <option value="italian" className="bg-[#050505] text-[#FAF9F6]">Authentic Italian & Mediterranean</option>
                        <option value="management" className="bg-[#050505] text-[#FAF9F6]">Restaurant & Culinary Management</option>
                      </select>
                    </div>

                    <textarea
                      name="message"
                      placeholder="Share your background or program questions..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-[#FAF9F6] placeholder-gray-500 focus:outline-none focus:border-[#aa7217]/60 focus:bg-white/10 transition-colors font-inter resize-none"
                    />

                    <button 
                      type="submit" 
                      className="btn-primary w-full py-3.5 text-xs font-semibold uppercase tracking-wider gap-2 flex items-center justify-center"
                    >
                      <span>Submit Secure Request</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              <div className="flex items-center gap-2 justify-center border-t border-white/5 pt-4 mt-6">
                <ShieldCheck className="w-4 h-4 text-[#aa7217]" />
                <p className="text-[10px] text-gray-500 font-inter">
                  Your data is protected under academic privacy directives.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Custom Luxury Map Graphic & Campus tours details */}
          <div className={`lg:col-span-5 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="glass-strong p-8 rounded-2xl border border-white/5 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-playfair text-xl font-bold text-[#FAF9F6] mb-6">Our Campus Grounds</h3>
                
                {/* Custom Vector Style Map Mockup */}
                <div className="relative bg-white/2 rounded-xl border border-white/5 p-6 h-60 overflow-hidden flex items-center justify-center">
                  {/* Grid Lines Background */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.03] pointer-events-none">
                    {[...Array(36)].map((_, i) => (
                      <div key={i} className="border-[0.5px] border-white" />
                    ))}
                  </div>

                  {/* Radial glow around marker */}
                  <div className="absolute w-24 h-24 bg-[#aa7217]/15 rounded-full blur-xl animate-pulse" />
                  
                  {/* Map Graphic Monogram */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#050505] border border-[#aa7217] flex items-center justify-center shadow-[0_0_20px_rgba(170,114,23,0.4)]">
                      <MapPin className="w-6 h-6 text-[#aa7217]" />
                    </div>
                    <div className="text-center">
                      <p className="font-playfair text-[#FAF9F6] font-semibold text-sm">Pinnacle Academy HQ</p>
                      <p className="text-[10px] text-[#aa7217] uppercase tracking-wider mt-0.5 font-inter">Bay Area Atelier</p>
                    </div>
                  </div>
                  
                  {/* Decorative Latitude Coordinates */}
                  <div className="absolute bottom-3 left-4 text-[9px] text-gray-600 font-mono tracking-widest">
                    LAT 37.7749° N
                  </div>
                  <div className="absolute bottom-3 right-4 text-[9px] text-gray-600 font-mono tracking-widest">
                    LON 122.4194° W
                  </div>
                </div>
              </div>

              {/* Quick Links details */}
              <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                <h4 className="font-playfair text-sm text-[#FAF9F6] font-semibold">Admissions Resources</h4>
                <div className="grid grid-cols-1 gap-2.5">
                  <a href="#" className="text-xs text-[#aa7217] hover:text-[#FAF9F6] transition-colors font-inter flex items-center gap-2">
                    <span>→</span> Schedule an On-Site Kitchen Tour
                  </a>
                  <a href="#" className="text-xs text-[#aa7217] hover:text-[#FAF9F6] transition-colors font-inter flex items-center gap-2">
                    <span>→</span> Download Academy Prospectus PDF
                  </a>
                  <a href="#" className="text-xs text-[#aa7217] hover:text-[#FAF9F6] transition-colors font-inter flex items-center gap-2">
                    <span>→</span> Direct WhatsApp Registry Chat
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
