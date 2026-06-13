'use client'

import { useState } from 'react'
import { User, Mail, Phone, Calendar, MapPin, Award, BookOpen, ShieldCheck } from 'lucide-react'

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    fullName: 'Celine Bitrus Nyam',
    email: 'celine.nyam@gmail.com',
    phone: '08123456789',
    dob: '2004-10-15',
    address: 'Rayfield, Jos, Plateau State, Nigeria',
    program: 'African Culinary Art',
    studentId: 'PCA/2026/B2/0001',
    emergencyContact: 'Mr. Bitrus Nyam',
    emergencyPhone: '08098765432',
  })

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="font-playfair text-3xl font-bold text-[#FAF9F6]">Student Profile</h1>
        <p className="text-sm text-gray-400 font-inter mt-1">Manage your personal and enrollment information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Card: Avatar & ID */}
        <div className="bg-white/3 border border-white/8 rounded-2xl p-6 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#aa7217]/40 mb-4">
            <img src="/pinnacle-studen-testimonial-1.jpeg" alt="Celine Bitrus Nyam" className="w-full h-full object-cover" />
          </div>
          <h2 className="font-playfair text-xl font-bold text-[#FAF9F6]">{profile.fullName}</h2>
          <p className="text-xs text-[#aa7217] font-inter font-semibold mt-1">Student ID: {profile.studentId}</p>
          <span className="mt-3 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-[10px] text-green-400 font-inter font-semibold uppercase">
            Active Student
          </span>
        </div>

        {/* Right Info Forms */}
        <div className="md:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-[#FAF9F6] border-b border-white/5 pb-3">Personal Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Full Name', value: profile.fullName },
                { label: 'Email Address', value: profile.email },
                { label: 'Phone Number', value: profile.phone },
                { label: 'Date of Birth', value: profile.dob },
                { label: 'Address', value: profile.address, colSpan: true },
              ].map(item => (
                <div key={item.label} className={item.colSpan ? 'sm:col-span-2' : ''}>
                  <p className="text-[9px] uppercase tracking-wider text-gray-500 font-inter">{item.label}</p>
                  <p className="text-sm text-[#FAF9F6] font-inter font-medium mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Information */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-[#FAF9F6] border-b border-white/5 pb-3">Academic Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Admitted Program', value: profile.program },
                { label: 'Class Cohort', value: '2026 Batch 2 (B2)' },
                { label: 'Academic Status', value: 'Good Standing' },
                { label: 'Hostel Accommodation', value: 'Yes (Rayfield Campus)' },
              ].map(item => (
                <div key={item.label}>
                  <p className="text-[9px] uppercase tracking-wider text-gray-500 font-inter">{item.label}</p>
                  <p className="text-sm text-[#FAF9F6] font-inter font-medium mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-[#FAF9F6] border-b border-white/5 pb-3">Emergency Contact Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Guardian / Sponsor Name', value: profile.emergencyContact },
                { label: 'Guardian Phone Number', value: profile.emergencyPhone },
              ].map(item => (
                <div key={item.label}>
                  <p className="text-[9px] uppercase tracking-wider text-gray-500 font-inter">{item.label}</p>
                  <p className="text-sm text-[#FAF9F6] font-inter font-medium mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
