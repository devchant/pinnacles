'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { CheckCircle, CreditCard, Shield, Lock, AlertCircle } from 'lucide-react'

const tuitionMap: Record<string, string> = {
  'Cake Baking and Decoration': '₦50,000',
  'Cake Baking Beginners Level': '₦350,000',
  'City & Guilds Level 2 Diploma in Food Preparation and Patisserie': '₦1,800,000',
  'African Culinary Art': '₦450,000',
  'Pastries and Desserts': '₦650,000',
  'Continental Cuisine': '₦320,000',
  'Beginner Food Photography and Styling': '₦30,000',
  'Advanced Food Photography and Styling': '₦50,000',
  'Entrepreneurship Management': '₦250,000',
}

export default function PaymentPage() {
  const router = useRouter()
  const [applicant, setApplicant] = useState<{ fullName: string; email: string; phone: string; program: string } | null>(null)
  const [processing, setProcessing] = useState(false)
  const [cardNum, setCardNum] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const data = sessionStorage.getItem('applicantData')
    if (data) setApplicant(JSON.parse(data))
    else setApplicant({ fullName: 'Applicant', email: 'N/A', phone: 'N/A', program: 'Culinary Arts' })
  }, [])

  const tuition = applicant ? (tuitionMap[applicant.program] ?? '₦50,000') : '—'

  const formatCard = (val: string) => val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim()
  const formatExpiry = (val: string) => val.replace(/\D/g, '').slice(0, 4).replace(/^(.{2})(.+)/, '$1/$2')

  const validate = () => {
    const e: Record<string, string> = {}
    if (cardNum.replace(/\s/g, '').length < 16) e.cardNum = 'Enter a valid 16-digit card number'
    if (expiry.length < 5) e.expiry = 'Enter expiry as MM/YY'
    if (cvv.length < 3) e.cvv = 'CVV must be 3 digits'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handlePay = async () => {
    if (!validate()) return
    setProcessing(true)
    await new Promise(r => setTimeout(r, 2000))
    setProcessing(false)
    router.push('/application-success')
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAF9F6] relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#700200]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#aa7217]/6 rounded-full blur-[120px]" />
      </div>

      <header className="relative z-10 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="/"><Image src="/logo.png" alt="Pinnacle Culinary Academy" width={120} height={60} className="h-12 w-auto object-contain" /></a>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-inter">
            <Lock className="w-3.5 h-3.5 text-[#aa7217]" /> Secure Payment
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <p className="text-[#aa7217] font-inter text-xs tracking-[0.3em] uppercase font-semibold mb-3">Tuition Payment</p>
          <h1 className="font-playfair text-4xl font-bold text-[#FAF9F6]">Complete Your Enrollment</h1>
          <p className="text-sm text-gray-400 font-inter mt-3">Secure your place by completing your tuition payment below.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left: Applicant Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
              <p className="text-[10px] uppercase tracking-widest text-[#aa7217] font-inter font-semibold mb-4">Application Summary</p>
              {applicant && [
                ['Applicant', applicant.fullName],
                ['Email', applicant.email],
                ['Phone', applicant.phone],
                ['Program', applicant.program],
              ].map(([label, val]) => (
                <div key={label} className="flex flex-col py-2.5 border-b border-white/5 last:border-0">
                  <span className="text-[9px] text-gray-500 font-inter uppercase tracking-wider">{label}</span>
                  <span className="text-xs text-[#FAF9F6] font-inter font-medium mt-0.5">{val}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#aa7217]/8 border border-[#aa7217]/25 rounded-2xl p-6">
              <p className="text-[10px] uppercase tracking-widest text-[#aa7217] font-inter font-semibold mb-3">Tuition Fee</p>
              <p className="font-playfair text-4xl font-bold text-[#aa7217]">{tuition}</p>
              <p className="text-[10px] text-gray-400 font-inter mt-1">One-time registration & tuition fee</p>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white/2 border border-white/5 rounded-xl">
              <Shield className="w-5 h-5 text-[#aa7217] shrink-0 mt-0.5" />
              <p className="text-[10px] text-gray-400 font-inter leading-relaxed">Your payment is secured with 256-bit SSL encryption. Pinnacle does not store card details.</p>
            </div>
          </div>

          {/* Right: Payment Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/3 border border-white/8 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="w-5 h-5 text-[#aa7217]" />
                <h2 className="font-playfair text-xl font-semibold text-[#FAF9F6]">Card Details</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-inter mb-2">Card Number</label>
                  <input
                    value={cardNum}
                    onChange={e => { setCardNum(formatCard(e.target.value)); setErrors(p => ({...p, cardNum: ''})) }}
                    placeholder="0000 0000 0000 0000"
                    className={`w-full bg-white/5 border ${errors.cardNum ? 'border-red-500/60' : 'border-white/10'} rounded-xl px-4 py-3.5 text-sm text-[#FAF9F6] placeholder-gray-500 focus:outline-none focus:border-[#aa7217]/60 transition-colors font-mono tracking-widest`}
                  />
                  {errors.cardNum && <p className="text-red-400 text-[10px] mt-1">{errors.cardNum}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-inter mb-2">Expiry Date</label>
                    <input
                      value={expiry}
                      onChange={e => { setExpiry(formatExpiry(e.target.value)); setErrors(p => ({...p, expiry: ''})) }}
                      placeholder="MM/YY"
                      className={`w-full bg-white/5 border ${errors.expiry ? 'border-red-500/60' : 'border-white/10'} rounded-xl px-4 py-3.5 text-sm text-[#FAF9F6] placeholder-gray-500 focus:outline-none focus:border-[#aa7217]/60 transition-colors font-mono`}
                    />
                    {errors.expiry && <p className="text-red-400 text-[10px] mt-1">{errors.expiry}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-inter mb-2">CVV</label>
                    <input
                      value={cvv}
                      onChange={e => { setCvv(e.target.value.replace(/\D/g, '').slice(0, 3)); setErrors(p => ({...p, cvv: ''})) }}
                      placeholder="•••"
                      type="password"
                      className={`w-full bg-white/5 border ${errors.cvv ? 'border-red-500/60' : 'border-white/10'} rounded-xl px-4 py-3.5 text-sm text-[#FAF9F6] placeholder-gray-500 focus:outline-none focus:border-[#aa7217]/60 transition-colors font-mono`}
                    />
                    {errors.cvv && <p className="text-red-400 text-[10px] mt-1">{errors.cvv}</p>}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-300 font-inter">Total Amount Due</span>
                    <span className="font-playfair text-2xl font-bold text-[#aa7217]">{tuition}</span>
                  </div>
                  <button
                    onClick={handlePay}
                    disabled={processing}
                    className="w-full py-4 bg-[#aa7217] hover:bg-[#c48920] text-black font-bold font-inter text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#aa7217]/30 disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {processing ? (
                      <><span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin" />Processing Payment...</>
                    ) : (
                      <><Lock className="w-4 h-4" />Pay {tuition} Securely</>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-gray-500 font-inter mt-3">By paying, you agree to Pinnacle's enrollment terms and conditions.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
