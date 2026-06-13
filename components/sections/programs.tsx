'use client'

import { useState } from 'react'
import { ChefHat, Cake, Flame, Utensils, Clock, ArrowRight, Camera, Briefcase, Award, Calendar } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'

interface CourseItem {
  id: number
  title: string
  category: 'diploma' | 'short'
  description: string
  tuition: string
  duration: string
  time?: string
  notes?: string
  certification?: string
  highlights: string[]
  icon: React.ReactNode
}

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState<'diploma' | 'short'>('diploma')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const coursesList: CourseItem[] = [
    // Diploma / Certificate Programs
    {
      id: 1,
      title: 'Cake Baking and Decoration',
      category: 'diploma',
      description: 'A hands-on program designed to teach essential techniques in baking, frosting, and creative cake design, perfect for beginners and enthusiasts looking to master the art of cake making.',
      tuition: '₦50,000',
      duration: '1 Week',
      highlights: ['Cake Baking', 'Frosting & Piping', 'Cake Decoration', 'Hands-on practice'],
      icon: <Cake className="w-6 h-6 text-[#aa7217]" />
    },
    {
      id: 2,
      title: 'Cake Baking Beginners Level',
      category: 'diploma',
      description: 'Provides a solid foundation in the art of baking, covering essential techniques, ingredient functions, mixing methods, and basic baking skills to help beginners create delicious, well-structured cakes with confidence.',
      tuition: '₦350,000',
      duration: '2 Weeks',
      time: '1:00 PM - 4:00 PM (3 days a week)',
      highlights: ['Ingredient Science', 'Mixing Methods', 'Baking Fundamentals', 'Basic Frosting'],
      icon: <Cake className="w-6 h-6 text-[#aa7217]" />
    },
    {
      id: 3,
      title: 'City & Guilds Level 2 Diploma in Food Preparation and Patisserie',
      category: 'diploma',
      description: 'A comprehensive, internationally recognized program designed to build essential culinary skills for individuals pursuing a career in the kitchen. Includes hands-on training combined with industry-relevant knowledge.',
      tuition: '₦1,800,000',
      notes: 'Compulsory Internship Included. Subject to Naira-to-Pounds exchange rate.',
      duration: '3 Months',
      time: '10:00 AM – 3:00 PM (3 days a week)',
      certification: 'The City and Guilds of London Institute',
      highlights: ['Compulsory Internship', 'UK level 2 certification', 'Professional Kitchen Prep', 'Patisserie fundamentals'],
      icon: <Award className="w-6 h-6 text-[#aa7217]" />
    },
    {
      id: 4,
      title: 'African Culinary Art',
      category: 'diploma',
      description: 'Explores the rich flavors, techniques, and cultural heritage of African cuisine, providing hands-on training in traditional and contemporary dishes from various countries across the continent.',
      tuition: '₦450,000',
      duration: '3 Weeks',
      time: '1:00 PM - 4:00 PM (3 days a week)',
      highlights: ['Traditional Spices', 'Heritage Cuisine', 'Modern Plating', 'Continental Fusion'],
      icon: <Utensils className="w-6 h-6 text-[#aa7217]" />
    },
    
    // Short Courses & Masterclasses
    {
      id: 5,
      title: 'Pastries and Desserts',
      category: 'short',
      description: 'Provides hands-on training in crafting a variety of classic and contemporary pastries, tarts, cookies, and plated desserts, equipping participants with essential baking techniques and presentation skills.',
      tuition: '₦650,000',
      duration: '4 Weeks',
      time: '1:00 PM - 4:00 PM (3 days a week)',
      highlights: ['Tarts & Cookies', 'Plated Desserts', 'Gourmet Pastries', 'Presentation Craft'],
      icon: <Cake className="w-6 h-6 text-[#aa7217]" />
    },
    {
      id: 6,
      title: 'Continental Cuisine',
      category: 'short',
      description: 'Offers hands-on training in fundamental intercontinental cooking techniques, teaching participants how to prepare and present a variety of classic continental dishes.',
      tuition: '₦320,000',
      duration: '2 Weeks',
      time: '1:00 PM - 4:00 PM (Monday, Wednesday, Friday)',
      highlights: ['Intercontinental Techniques', 'Sauce Foundations', 'Gourmet Plating', 'Kitchen Speed'],
      icon: <ChefHat className="w-6 h-6 text-[#aa7217]" />
    },
    {
      id: 7,
      title: 'Beginner Food Photography and Styling',
      category: 'short',
      description: 'Introduces participants to the fundamentals of capturing mouthwatering food images, covering lighting, composition, styling techniques, and smartphone or camera photography.',
      tuition: '₦30,000',
      duration: '3 Days',
      time: '10:00 AM – 1:00 PM',
      highlights: ['Lighting setups', 'Camera/Phone settings', 'Prop & Plate Styling', 'Visual composition'],
      icon: <Camera className="w-6 h-6 text-[#aa7217]" />
    },
    {
      id: 8,
      title: 'Advanced Food Photography and Styling',
      category: 'short',
      description: 'Delves deeper into professional food photography, including advanced studio lighting, composition, prop styling, editing, and storytelling for branding, media, and marketing.',
      tuition: '₦50,000',
      duration: 'Advanced level',
      highlights: ['Studio Lighting', 'Prop Curation', 'Editorial Editing', 'Visual Storytelling'],
      icon: <Camera className="w-6 h-6 text-[#aa7217]" />
    },
    {
      id: 9,
      title: 'Entrepreneurship Management',
      category: 'short',
      description: 'Learn how to start, scale, and manage a successful culinary or bakery business. Focuses on food business operations, financial budgeting, branding, and marketing strategies.',
      tuition: '₦250,000',
      duration: '2 Weeks',
      time: '1:00 PM - 4:00 PM (Monday - Thursday)',
      highlights: ['Business Blueprint', 'Branding & Marketing', 'Costing & Inventory', 'Operational Leadership'],
      icon: <Briefcase className="w-6 h-6 text-[#aa7217]" />
    }
  ]

  const filteredCourses = coursesList.filter(course => course.category === activeTab)

  const handleApply = (courseTitle: string) => {
    // Dispatch custom event to auto-populate program select field in contact form
    const event = new CustomEvent('select-course', { detail: courseTitle })
    window.dispatchEvent(event)
    
    // Scroll to contact form
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="programs" className="py-28 bg-[#050505] relative overflow-hidden">
      {/* Ambient glowing circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#aa7217]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#700200]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header */}
        <ScrollReveal direction="up" className="text-center mb-16 space-y-4">
          <p className="text-[#aa7217] font-inter text-xs tracking-[0.3em] uppercase font-semibold">
            Our Curriculum
          </p>
          <h2 className="heading-lg max-w-4xl mx-auto font-playfair font-bold text-[#FAF9F6]">
            Explore Our Academy Programs &{' '}
            <span className="font-cormorant italic text-[#aa7217] font-light">
              Ignite Your Passion for Cooking
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-[#aa7217] mx-auto mt-6" />
        </ScrollReveal>

        {/* Premium Tab Toggles */}
        <ScrollReveal direction="up" delay={0.05} className="flex justify-center mb-16">
          <div className="inline-flex bg-white/5 p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('diploma')}
              className={`px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'diploma'
                  ? 'bg-[#aa7217] text-[#FAF9F6] shadow-lg shadow-[#aa7217]/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              COURSES & DIPLOMAS
            </button>
            <button
              onClick={() => setActiveTab('short')}
              className={`px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'short'
                  ? 'bg-[#aa7217] text-[#FAF9F6] shadow-lg shadow-[#aa7217]/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              SHORT COURSES
            </button>
          </div>
        </ScrollReveal>

        {/* Dynamic Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          {filteredCourses.map((course, index) => (
            <ScrollReveal key={course.id} direction="up" delay={index * 0.05}>
              <div
                onMouseEnter={() => setHoveredId(course.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative glass-strong p-8 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between border h-full ${
                  hoveredId === course.id ? 'border-[#aa7217]/40 -translate-y-2' : 'border-white/5'
                }`}
                style={{ 
                  boxShadow: hoveredId === course.id ? '0 15px 35px rgba(170, 114, 23, 0.08)' : 'none'
                }}
              >
                <div>
                  {/* Card Header: Icon + Price Tag */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {course.icon}
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-bold text-[#aa7217] bg-[#aa7217]/10 px-3 py-1 rounded-full border border-[#aa7217]/25 font-inter">
                        {course.tuition}
                      </span>
                      {course.notes && (
                        <span className="text-[8px] text-gray-500 font-inter mt-1 max-w-[120px] text-right">
                          *Internship Included
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="font-playfair text-lg font-bold text-[#FAF9F6] mb-3 leading-snug">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 font-inter leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Schedule Specifications */}
                  <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                    <div className="flex items-center gap-2 text-[11px] text-gray-300 font-inter">
                      <Clock className="w-3.5 h-3.5 text-[#aa7217] shrink-0" />
                      <span><strong>Duration:</strong> {course.duration}</span>
                    </div>
                    {course.time && (
                      <div className="flex items-center gap-2 text-[11px] text-gray-300 font-inter">
                        <Calendar className="w-3.5 h-3.5 text-[#aa7217] shrink-0" />
                        <span><strong>Schedule:</strong> {course.time}</span>
                      </div>
                    )}
                    {course.certification && (
                      <div className="flex items-center gap-2 text-[11px] text-[#aa7217] font-inter">
                        <Award className="w-3.5 h-3.5 shrink-0" />
                        <span><strong>Cert:</strong> {course.certification}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Highlights and Action */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {course.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="text-[8px] uppercase tracking-wider bg-white/5 text-gray-300 px-2 py-0.5 rounded font-inter font-medium border border-white/5"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleApply(course.title)}
                    className="w-full py-3 bg-[#700200] hover:bg-[#8f0300] border border-[#aa7217]/20 text-[#FAF9F6] text-[10px] font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
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
            Unlock Your Culinary Potential
          </h3>
          <p className="text-sm text-gray-300 font-inter max-w-2xl mx-auto mb-6">
            Discover world class training, hands-on experience, and expert mentorship designed to turn your passion for food into a rewarding career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="btn-gold text-xs uppercase tracking-wider font-semibold">
              Start Your Culinary Journey
            </a>
            <a href="#contact" className="btn-secondary text-xs uppercase tracking-wider font-semibold">
              Speak to Admissions
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
