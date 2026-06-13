'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CheckCircle, Download, ExternalLink, Copy, Check } from 'lucide-react'

const STUDENT_ID = 'PCA/2026/B2/0001'

export default function ApplicationSuccessPage() {
  const [copied, setCopied] = useState(false)

  const copyId = () => {
    navigator.clipboard.writeText(STUDENT_ID)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAF9F6] flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#aa7217]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#700200]/6 rounded-full blur-[120px]" />
      </div>

      <header className="relative z-10 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="/"><Image src="/logo.png" alt="Pinnacle Culinary Academy" width={120} height={60} className="h-12 w-auto object-contain" /></a>
          <p className="text-[10px] uppercase tracking-widest text-[#aa7217] font-inter font-semibold">Enrollment Confirmed</p>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="max-w-2xl w-full text-center space-y-8">

          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#aa7217]/15 rounded-full blur-xl animate-pulse" />
              <div className="relative w-24 h-24 rounded-full bg-[#aa7217]/10 border-2 border-[#aa7217]/40 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-[#aa7217]" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-[#FAF9F6] mb-4">
              Application Successful
            </h1>
            <p className="text-gray-300 font-inter text-base leading-relaxed max-w-xl mx-auto">
              Congratulations! Your application has been received and your tuition payment has been confirmed. Welcome to the Pinnacle Culinary Academy family.
            </p>
          </div>

          {/* Student ID Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#700200] via-[#aa7217] to-[#700200] rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500" />
            <div className="relative bg-[#050505] border border-[#aa7217]/30 rounded-2xl p-8 space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-[#aa7217] font-inter font-semibold">Your Student ID</p>
              <div className="flex items-center justify-center gap-4">
                <span className="font-mono text-3xl sm:text-4xl font-bold text-[#FAF9F6] tracking-widest">
                  {STUDENT_ID}
                </span>
                <button
                  onClick={copyId}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#aa7217]/40 hover:bg-[#aa7217]/10 transition-all"
                  title="Copy Student ID"
                >
                  {copied ? <Check className="w-4 h-4 text-[#aa7217]" /> : <Copy className="w-4 h-4 text-gray-400" />}
                </button>
              </div>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#aa7217]/30 to-transparent" />
              <p className="text-xs text-gray-400 font-inter leading-relaxed max-w-md mx-auto">
                Please save this Student ID. It will be required to access the Student Portal, track your enrollment, and access all future academic records.
              </p>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 text-left space-y-4">
            <p className="text-[10px] uppercase tracking-widest text-[#aa7217] font-inter font-semibold">Next Steps</p>
            {[
              { num: '01', title: 'Save Your Student ID', desc: 'Screenshot or copy your ID — you\'ll need it to log in to the portal.' },
              { num: '02', title: 'Check Your Email', desc: 'A confirmation email with your enrollment details has been sent.' },
              { num: '03', title: 'Complete Your Profile', desc: 'Log into the Student Portal and upload your required documents.' },
              { num: '04', title: 'Await Orientation Date', desc: 'Our admissions team will contact you with your class schedule and orientation details.' },
            ].map(step => (
              <div key={step.num} className="flex gap-4 items-start py-2 border-b border-white/5 last:border-0">
                <span className="font-playfair text-xl font-bold text-[#aa7217]/40 shrink-0">{step.num}</span>
                <div>
                  <p className="text-sm font-playfair font-semibold text-[#FAF9F6]">{step.title}</p>
                  <p className="text-xs text-gray-400 font-inter mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.print()}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 border border-white/15 hover:border-[#aa7217]/40 text-sm font-semibold font-inter text-[#FAF9F6] rounded-xl transition-all"
            >
              <Download className="w-4 h-4 text-[#aa7217]" />
              Download Receipt
            </button>
            <a
              href="/portal-login"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#aa7217] hover:bg-[#c48920] text-black text-sm font-bold font-inter rounded-xl transition-all shadow-lg shadow-[#aa7217]/30"
            >
              <ExternalLink className="w-4 h-4" />
              Go to Student Portal
            </a>
          </div>

          <p className="text-xs text-gray-500 font-inter">
            Questions? Contact us at{' '}
            <a href="mailto:Pinnaculeculinaryacademy@gmail.com" className="text-[#aa7217] hover:underline">
              Pinnaculeculinaryacademy@gmail.com
            </a>{' '}
            or call <span className="text-[#FAF9F6]">08163977414</span>
          </p>
        </div>
      </main>
    </div>
  )
}
