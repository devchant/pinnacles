'use client'

import { BookOpen, GraduationCap, Calendar, FileText } from 'lucide-react'

export default function AcademicRecordsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="font-playfair text-3xl font-bold text-[#FAF9F6]">Academic Records</h1>
        <p className="text-sm text-gray-400 font-inter mt-1">Review your enrollment status, cohort details, and program curricula</p>
      </div>

      <div className="bg-white/3 border border-white/8 rounded-2xl p-6 space-y-6">
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <div className="w-10 h-10 rounded-lg bg-[#aa7217]/10 flex items-center justify-center border border-[#aa7217]/20">
            <GraduationCap className="w-5 h-5 text-[#aa7217]" />
          </div>
          <div>
            <h2 className="font-playfair text-lg font-semibold text-[#FAF9F6]">Current Program Curriculum</h2>
            <p className="text-xs text-gray-400 font-inter mt-0.5">African Culinary Art (3-Week Intensive)</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Academic Standing', value: 'Good Standing' },
              { label: 'Enrollment Term', value: '2026 Batch 2 (B2)' },
              { label: 'Assigned Instructor', value: 'Chef Pinnacle Lead' },
              { label: 'Campus Facility', value: 'Rayfield, Jos, Plateau State' },
            ].map(item => (
              <div key={item.label} className="p-4 bg-white/2 border border-white/5 rounded-xl">
                <p className="text-[9px] uppercase tracking-wider text-gray-500 font-inter">{item.label}</p>
                <p className="text-sm text-[#FAF9F6] font-inter font-medium mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-white/2 border border-white/5 rounded-xl text-left">
            <p className="text-[9px] uppercase tracking-wider text-gray-500 font-inter">Course Outline</p>
            <div className="space-y-3 mt-3">
              {[
                'Module 1: Culinary Hygiene, Safety, and Kitchen Knife Skills',
                'Module 2: Traditional African Spices, Stocks, and Flavor Extraction',
                'Module 3: Regional Soups, Stews, and Protein Preparation',
                'Module 4: Modern Plating, Presentation, and Food Photography Styling',
              ].map((m, i) => (
                <div key={i} className="flex gap-3 items-center text-xs text-gray-300 font-inter">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#aa7217]" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
