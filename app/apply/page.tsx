'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Upload, User, Mail, Phone, Calendar, MapPin, BookOpen, Users, FileText, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react'

const programs = [
  'Cake Baking and Decoration',
  'Cake Baking Beginners Level',
  'City & Guilds Level 2 Diploma in Food Preparation and Patisserie',
  'African Culinary Art',
  'Pastries and Desserts',
  'Continental Cuisine',
  'Beginner Food Photography and Styling',
  'Advanced Food Photography and Styling',
  'Entrepreneurship Management',
]

export default function ApplyPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [passportPreview, setPassportPreview] = useState<string | null>(null)

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    program: '',
    education: '',
    guardianName: '',
    guardianPhone: '',
    passportFile: null as File | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setForm(prev => ({ ...prev, passportFile: file }))
      const reader = new FileReader()
      reader.onload = () => setPassportPreview(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!form.dob) newErrors.dob = 'Date of birth is required'
    if (!form.address.trim()) newErrors.address = 'Address is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}
    if (!form.program) newErrors.program = 'Please select a program'
    if (!form.education.trim()) newErrors.education = 'Educational background is required'
    if (!form.guardianName.trim()) newErrors.guardianName = 'Guardian name is required'
    if (!form.guardianPhone.trim()) newErrors.guardianPhone = 'Guardian phone is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2)
    if (step === 2 && validateStep2()) setStep(3)
  }

  const handleSubmit = async () => {
    setLoading(true)
    // Store form data in sessionStorage for payment page
    sessionStorage.setItem('applicantData', JSON.stringify({
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      program: form.program,
    }))
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    router.push('/payment')
  }

  const inputClass = (name: string) =>
    `w-full bg-white/5 border ${errors[name] ? 'border-red-500/60' : 'border-white/10'} rounded-xl px-4 py-3.5 text-sm text-[#FAF9F6] placeholder-gray-500 focus:outline-none focus:border-[#aa7217]/60 focus:bg-white/8 transition-colors font-inter`

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAF9F6] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#700200]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#aa7217]/6 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="/">
            <Image src="/logo.png" alt="Pinnacle Culinary Academy" width={120} height={60} className="h-12 w-auto object-contain" />
          </a>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-[#aa7217] font-inter font-semibold">Application Portal</p>
            <p className="text-xs text-gray-400 font-inter mt-0.5">2026 Enrollment</p>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Title */}
        <div className="text-center mb-10">
          <p className="text-[#aa7217] font-inter text-xs tracking-[0.3em] uppercase font-semibold mb-3">Student Enrollment</p>
          <h1 className="font-playfair text-4xl font-bold text-[#FAF9F6]">Begin Your Application</h1>
          <p className="text-sm text-gray-400 font-inter mt-3 max-w-lg mx-auto">Complete the form below to apply to Pinnacle Culinary Academy. All fields are required.</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {['Personal Info', 'Academic & Program', 'Passport Photo'].map((label, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 ${
                  step > i + 1 ? 'bg-[#aa7217] border-[#aa7217] text-black' :
                  step === i + 1 ? 'border-[#aa7217] text-[#aa7217] bg-[#aa7217]/10' :
                  'border-white/15 text-gray-500 bg-transparent'
                }`}>
                  {step > i + 1 ? <CheckCircle className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-[9px] uppercase tracking-wider mt-1.5 font-inter hidden sm:block ${step === i + 1 ? 'text-[#aa7217]' : 'text-gray-500'}`}>{label}</span>
              </div>
              {i < 2 && <div className={`w-16 sm:w-24 h-[1px] mx-2 transition-colors duration-300 ${step > i + 1 ? 'bg-[#aa7217]' : 'bg-white/10'}`} />}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white/3 backdrop-blur-sm border border-white/8 rounded-2xl p-8 shadow-2xl">

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="font-playfair text-xl font-semibold text-[#FAF9F6] mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-[#aa7217]" /> Personal Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-inter mb-2">Full Name *</label>
                  <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter your full legal name" className={inputClass('fullName')} />
                  {errors.fullName && <p className="text-red-400 text-[10px] mt-1 font-inter">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-inter mb-2">Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass('email')} />
                  {errors.email && <p className="text-red-400 text-[10px] mt-1 font-inter">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-inter mb-2">Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="080XXXXXXXX" className={inputClass('phone')} />
                  {errors.phone && <p className="text-red-400 text-[10px] mt-1 font-inter">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-inter mb-2">Date of Birth *</label>
                  <input name="dob" type="date" value={form.dob} onChange={handleChange} className={inputClass('dob')} />
                  {errors.dob && <p className="text-red-400 text-[10px] mt-1 font-inter">{errors.dob}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-inter mb-2">Home Address *</label>
                  <textarea name="address" value={form.address} onChange={handleChange} rows={3} placeholder="Enter your full residential address" className={`${inputClass('address')} resize-none`} />
                  {errors.address && <p className="text-red-400 text-[10px] mt-1 font-inter">{errors.address}</p>}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-playfair text-xl font-semibold text-[#FAF9F6] mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#aa7217]" /> Academic & Program Details
              </h2>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-inter mb-2">Program / Course *</label>
                <div className="relative">
                  <select name="program" value={form.program} onChange={handleChange} className={`${inputClass('program')} appearance-none pr-10`}>
                    <option value="" className="bg-[#050505] text-gray-500">Select a Program</option>
                    {programs.map(p => <option key={p} value={p} className="bg-[#111] text-[#FAF9F6]">{p}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                {errors.program && <p className="text-red-400 text-[10px] mt-1 font-inter">{errors.program}</p>}
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-inter mb-2">Educational Background *</label>
                <textarea name="education" value={form.education} onChange={handleChange} rows={4} placeholder="Describe your highest level of education, e.g. WAEC, NECO, OND, HND, B.Sc." className={`${inputClass('education')} resize-none`} />
                {errors.education && <p className="text-red-400 text-[10px] mt-1 font-inter">{errors.education}</p>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-inter mb-2">Guardian / Emergency Contact Name *</label>
                  <input name="guardianName" value={form.guardianName} onChange={handleChange} placeholder="Full name of guardian" className={inputClass('guardianName')} />
                  {errors.guardianName && <p className="text-red-400 text-[10px] mt-1 font-inter">{errors.guardianName}</p>}
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-inter mb-2">Guardian Phone Number *</label>
                  <input name="guardianPhone" value={form.guardianPhone} onChange={handleChange} placeholder="Guardian's phone number" className={inputClass('guardianPhone')} />
                  {errors.guardianPhone && <p className="text-red-400 text-[10px] mt-1 font-inter">{errors.guardianPhone}</p>}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="font-playfair text-xl font-semibold text-[#FAF9F6] mb-6 flex items-center gap-2">
                <Upload className="w-5 h-5 text-[#aa7217]" /> Passport Photograph
              </h2>
              <div className="border-2 border-dashed border-white/15 hover:border-[#aa7217]/40 rounded-2xl p-8 text-center transition-colors cursor-pointer relative">
                <input type="file" accept="image/*" onChange={handleFile} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                {passportPreview ? (
                  <div className="flex flex-col items-center gap-4">
                    <img src={passportPreview} alt="Passport preview" className="w-32 h-32 rounded-full object-cover border-4 border-[#aa7217]/40" />
                    <p className="text-sm text-[#aa7217] font-inter font-semibold">Photo uploaded — click to replace</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3 py-4">
                    <div className="w-16 h-16 rounded-full bg-[#aa7217]/10 border border-[#aa7217]/20 flex items-center justify-center">
                      <Upload className="w-7 h-7 text-[#aa7217]" />
                    </div>
                    <p className="text-sm text-[#FAF9F6] font-playfair font-semibold">Upload Passport Photograph</p>
                    <p className="text-xs text-gray-400 font-inter">JPG, PNG or WEBP • Max 5MB • Clear face photo on white background</p>
                  </div>
                )}
              </div>

              {/* Summary */}
              <div className="bg-white/3 rounded-xl border border-white/8 p-6 space-y-3">
                <p className="text-xs uppercase tracking-widest text-[#aa7217] font-inter font-semibold mb-4">Application Summary</p>
                {[
                  ['Full Name', form.fullName],
                  ['Email', form.email],
                  ['Phone', form.phone],
                  ['Program', form.program],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
                    <span className="text-[11px] text-gray-400 font-inter uppercase tracking-wider">{label}</span>
                    <span className="text-xs text-[#FAF9F6] font-inter font-medium text-right max-w-[60%]">{val || '—'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-white/8">
            {step > 1 ? (
              <button onClick={() => setStep(s => s - 1)} className="px-6 py-3 bg-white/5 border border-white/10 hover:border-white/20 text-sm text-gray-300 font-inter font-semibold rounded-xl transition-all">
                ← Back
              </button>
            ) : (
              <a href="/" className="px-6 py-3 bg-white/5 border border-white/10 text-sm text-gray-400 font-inter rounded-xl transition-all hover:border-white/20">
                Cancel
              </a>
            )}

            {step < 3 ? (
              <button onClick={handleNext} className="px-8 py-3 bg-[#700200] hover:bg-[#8f0300] border border-[#aa7217]/20 text-white text-sm font-semibold font-inter rounded-xl transition-all shadow-lg shadow-[#700200]/30">
                Continue →
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={loading} className="px-8 py-3 bg-[#aa7217] hover:bg-[#c48920] text-black text-sm font-bold font-inter rounded-xl transition-all shadow-lg shadow-[#aa7217]/30 disabled:opacity-60 flex items-center gap-2">
                {loading ? (
                  <><span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin" />Submitting...</>
                ) : (
                  'Submit Application →'
                )}
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
