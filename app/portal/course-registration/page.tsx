'use client'

import { useState } from 'react'
import { ClipboardList, BookOpen, CheckCircle, Plus, Sparkles } from 'lucide-react'

const courses = [
  { code: 'CUL-AFC', name: 'African Culinary Art (Core)', status: 'Registered' },
  { code: 'CUL-KNS', name: 'Professional Knife Skills & Safety', status: 'Registered' },
  { code: 'CUL-PAST', name: 'Pastries and Desserts (Elective)', status: 'Available' },
  { code: 'CUL-CAKE', name: 'Cake Baking & Decoration (Elective)', status: 'Available' },
]

export default function CourseRegistrationPage() {
  const [courseList, setCourseList] = useState(courses)

  const registerCourse = (code: string) => {
    setCourseList(prev => prev.map(c => c.code === code ? { ...c, status: 'Registered' } : c))
  }

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="font-playfair text-3xl font-bold text-[#FAF9F6]">Course Registration</h1>
        <p className="text-sm text-gray-400 font-inter mt-1">Register for core culinary classes or add specialized elective programs</p>
      </div>

      <div className="bg-white/3 border border-white/8 rounded-2xl p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <ClipboardList className="w-4.5 h-4.5 text-[#aa7217]" />
            <h2 className="font-playfair text-lg font-semibold text-[#FAF9F6]">Available Classes</h2>
          </div>
          <span className="text-[10px] text-gray-400 font-mono">Cohort: 2026 Batch 2 (B2)</span>
        </div>

        <div className="space-y-3">
          {courseList.map(c => (
            <div key={c.code} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white/2 border border-white/5 rounded-xl hover:border-[#aa7217]/20 transition-all">
              <div className="text-left">
                <span className="text-[9px] font-mono text-gray-500">{c.code}</span>
                <p className="text-sm font-playfair font-semibold text-[#FAF9F6] mt-0.5">{c.name}</p>
              </div>

              <div>
                {c.status === 'Registered' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-[10px] text-green-400 font-inter font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" /> Registered
                  </span>
                ) : (
                  <button
                    onClick={() => registerCourse(c.code)}
                    className="px-4 py-1.5 bg-[#aa7217] hover:bg-[#c48920] text-black font-semibold text-xs font-inter rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Course
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
