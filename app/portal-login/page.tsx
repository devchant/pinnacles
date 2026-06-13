'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { LogIn, AlertCircle, Eye, EyeOff } from 'lucide-react'

const VALID_ID = 'PCA/2026/B2/0001'

export default function PortalLoginPage() {
  const router = useRouter()
  const [studentId, setStudentId] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    if (!studentId.trim()) { setError('Please enter your Student ID.'); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    if (studentId.trim() === VALID_ID) {
      sessionStorage.setItem('portalAuth', 'true')
      router.push('/portal')
    } else {
      setError('Invalid Student ID. Please check your ID and try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAF9F6] flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#aa7217]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#700200]/5 rounded-full blur-[150px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#aa7217 1px, transparent 1px), linear-gradient(90deg, #aa7217 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">

          {/* Logo + Branding */}
          <div className="text-center mb-10">
            <a href="/" className="inline-block mb-6">
              <Image src="/logo.png" alt="Pinnacle Culinary Academy" width={160} height={80} className="h-20 w-auto object-contain mx-auto drop-shadow-[0_2px_12px_rgba(170,114,23,0.4)]" />
            </a>
            <p className="text-[#aa7217] font-inter text-xs tracking-[0.3em] uppercase font-semibold mb-2">Student Portal</p>
            <h1 className="font-playfair text-3xl font-bold text-[#FAF9F6]">Welcome Back</h1>
            <p className="text-sm text-gray-400 font-inter mt-2">Enter your Student ID to access your portal</p>
          </div>

          {/* Login Card */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-[#aa7217]/20 to-transparent rounded-2xl blur-sm" />
            <div className="relative bg-white/3 backdrop-blur-sm border border-white/8 rounded-2xl p-8 space-y-6">

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-inter mb-2">Student ID</label>
                <input
                  value={studentId}
                  onChange={e => { setStudentId(e.target.value); setError('') }}
                  onKeyDown={e => e.key === 'Enter' && handleLogin()}
                  placeholder="e.g. PCA/2026/B2/0001"
                  className={`w-full bg-white/5 border ${error ? 'border-red-500/60' : 'border-white/10'} rounded-xl px-4 py-3.5 text-sm text-[#FAF9F6] placeholder-gray-500 focus:outline-none focus:border-[#aa7217]/60 transition-colors font-mono tracking-wider`}
                />
              </div>

              {error && (
                <div className="flex items-start gap-3 p-4 bg-red-500/8 border border-red-500/20 rounded-xl">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-red-400 font-inter">{error}</p>
                </div>
              )}

              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full py-3.5 bg-[#aa7217] hover:bg-[#c48920] text-black font-bold font-inter text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#aa7217]/30 disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : (
                  <><LogIn className="w-4 h-4" />Access Portal</>
                )}
              </button>

              <div className="text-center space-y-2 pt-2 border-t border-white/5">
                <p className="text-xs text-gray-400 font-inter">
                  Don&apos;t have a Student ID?{' '}
                  <a href="/apply" className="text-[#aa7217] hover:underline font-semibold">Apply Now</a>
                </p>
                <p className="text-xs text-gray-500 font-inter">
                  Need help?{' '}
                  <a href="/#contact" className="text-gray-400 hover:text-[#aa7217] transition-colors">Contact Admissions</a>
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-[10px] text-gray-600 font-inter mt-8">
            © 2026 Pinnacle Culinary Academy · Jos, Plateau State, Nigeria
          </p>
        </div>
      </div>
    </div>
  )
}
