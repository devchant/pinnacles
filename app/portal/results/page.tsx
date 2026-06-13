'use client'

import { BarChart2, Award, ClipboardList, BookOpen, AlertCircle } from 'lucide-react'

const resultsData = [
  { code: 'CUL101', name: 'Introduction to Culinary Science & Safety', credits: 2, grade: 'A', score: 87, status: 'Passed' },
  { code: 'CUL102', name: 'Professional Knife Skills & Cuts',      credits: 3, grade: 'A', score: 92, status: 'Passed' },
  { code: 'CUL103', name: 'African Spices & Herb Profiles',        credits: 3, grade: 'B+', score: 79, status: 'Passed' },
  { code: 'CUL104', name: 'Continental Cuisine Fundamentals',      credits: 4, grade: 'A', score: 89, status: 'Passed' },
  { code: 'CUL105', name: 'Basic Patisserie & Baking Chemistry',    credits: 3, grade: 'A', score: 94, status: 'Passed' },
  { code: 'CUL106', name: 'Kitchen Organization & Safety Norms',    credits: 2, grade: 'A', score: 90, status: 'Passed' },
]

export default function ResultsPage() {
  const gpa = '4.88'
  const totalCredits = 17

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h1 className="font-playfair text-3xl font-bold text-[#FAF9F6]">Academic Results</h1>
        <p className="text-sm text-gray-400 font-inter mt-1">Track your course grades, score sheets, and cumulative grade averages</p>
      </div>

      {/* GPA & Statistics Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white/3 border border-white/8 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-wider text-gray-500 font-inter">Cumulative GPA</p>
            <p className="font-playfair text-3xl font-bold text-[#aa7217] mt-1">{gpa} / 5.00</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#aa7217]/10 border border-[#aa7217]/20 flex items-center justify-center">
            <Award className="w-6 h-6 text-[#aa7217]" />
          </div>
        </div>

        <div className="bg-white/3 border border-white/8 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-wider text-gray-500 font-inter">Total Registered Credits</p>
            <p className="font-playfair text-3xl font-bold text-[#FAF9F6] mt-1">{totalCredits} Units</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        <div className="bg-white/3 border border-white/8 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-wider text-gray-500 font-inter">Academic Standing</p>
            <p className="font-playfair text-3xl font-bold text-green-400 mt-1">Excellent</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
            <ClipboardList className="w-6 h-6 text-green-400" />
          </div>
        </div>
      </div>

      {/* Modern Results Table */}
      <div className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-white/5 flex items-center gap-2">
          <BarChart2 className="w-4.5 h-4.5 text-[#aa7217]" />
          <h2 className="font-playfair text-lg font-semibold text-[#FAF9F6]">Semester Course Grades</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/8 bg-white/2 text-[10px] uppercase tracking-wider text-gray-400 font-inter font-semibold">
                <th className="py-4 px-6">Course Code</th>
                <th className="py-4 px-6">Course Name</th>
                <th className="py-4 px-6 text-center">Units</th>
                <th className="py-4 px-6 text-center">Score</th>
                <th className="py-4 px-6 text-center">Grade</th>
                <th className="py-4 px-6 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-inter text-xs">
              {resultsData.map(row => (
                <tr key={row.code} className="hover:bg-white/1 text-gray-300 transition-colors">
                  <td className="py-4 px-6 font-mono text-gray-400">{row.code}</td>
                  <td className="py-4 px-6 font-medium text-[#FAF9F6]">{row.name}</td>
                  <td className="py-4 px-6 text-center">{row.credits}</td>
                  <td className="py-4 px-6 text-center font-semibold">{row.score}%</td>
                  <td className="py-4 px-6 text-center">
                    <span className="font-bold text-[#aa7217] bg-[#aa7217]/10 px-2 py-0.5 rounded border border-[#aa7217]/20">
                      {row.grade}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-[10px] font-semibold bg-green-500/10 border border-green-500/20 text-green-400 px-2.5 py-0.5 rounded-full">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Advisory Banner */}
      <div className="flex items-start gap-3 p-4 bg-white/2 border border-white/5 rounded-xl">
        <AlertCircle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
        <p className="text-xs text-gray-400 font-inter leading-relaxed">
          Results displayed here represent certified grades submitted by the Academic Office. If you notice any omissions or discrepancies with your practical kitchen exam records, please consult the Head Instructor.
        </p>
      </div>
    </div>
  )
}
