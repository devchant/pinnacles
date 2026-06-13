'use client'

import { BookOpen, FileText, CreditCard, Bell, BarChart2, Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react'

const stats = [
  { label: 'Current Program',    value: 'African Culinary Art',   sub: '3-Week Short Course'   },
  { label: 'Enrollment Status',  value: 'Active',                  sub: 'Class of 2026', highlight: true },
  { label: 'Documents Pending',  value: '2',                       sub: 'Upload required'       },
  { label: 'Next Class',         value: 'Mon, Jun 16',             sub: '10:00 AM – 3:00 PM'   },
]

const announcements = [
  { type: 'info',    title: 'Orientation Week',           desc: 'Your orientation is scheduled for Monday, June 16th, 2026 at 9:00 AM.',                           time: '2 days ago' },
  { type: 'success', title: 'Payment Confirmed',          desc: 'Your tuition payment has been received and your enrollment is now active.',                         time: '1 week ago' },
  { type: 'warning', title: 'Documents Required',         desc: 'Please upload your Birth Certificate and Academic Certificate to complete your profile.',           time: '1 week ago' },
]

const schedule = [
  { day: 'Monday',    time: '10:00 AM - 3:00 PM', subject: 'African Cuisine Foundations',   room: 'Kitchen Lab A' },
  { day: 'Wednesday', time: '10:00 AM - 3:00 PM', subject: 'Spice & Flavor Profiling',      room: 'Kitchen Lab B' },
  { day: 'Friday',    time: '10:00 AM - 3:00 PM', subject: 'Traditional Plating & Garnish', room: 'Presentation Hall' },
]

export default function PortalDashboard() {
  return (
    <div className="space-y-8 max-w-6xl">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-bold text-[#FAF9F6]">Welcome back 👨‍🍳</h1>
          <p className="text-sm text-gray-400 font-inter mt-1">Student ID: <span className="text-[#aa7217] font-mono font-semibold">PCA/2026/B2/0001</span></p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-green-400 font-inter font-semibold">Enrollment Active</span>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <div key={i} className={`p-5 rounded-2xl border transition-all hover:-translate-y-0.5 ${stat.highlight ? 'bg-[#aa7217]/10 border-[#aa7217]/25' : 'bg-white/3 border-white/8'}`}>
            <p className="text-[9px] uppercase tracking-widest text-gray-500 font-inter mb-2">{stat.label}</p>
            <p className={`font-playfair text-xl font-bold ${stat.highlight ? 'text-[#aa7217]' : 'text-[#FAF9F6]'}`}>{stat.value}</p>
            <p className="text-[10px] text-gray-400 font-inter mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Schedule */}
        <div className="lg:col-span-2 bg-white/3 border border-white/8 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Calendar className="w-4.5 h-4.5 text-[#aa7217]" />
            <h2 className="font-playfair text-lg font-semibold text-[#FAF9F6]">This Week's Schedule</h2>
          </div>
          <div className="space-y-3">
            {schedule.map((s, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/3 rounded-xl border border-white/5 hover:border-[#aa7217]/20 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#aa7217]/10 border border-[#aa7217]/20 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4 text-[#aa7217]" />
                  </div>
                  <div>
                    <p className="text-sm font-playfair font-semibold text-[#FAF9F6]">{s.subject}</p>
                    <p className="text-[10px] text-gray-400 font-inter mt-0.5">{s.day} · {s.room}</p>
                  </div>
                </div>
                <span className="text-[10px] text-[#aa7217] font-inter font-semibold bg-[#aa7217]/10 px-2.5 py-1 rounded-full border border-[#aa7217]/15 shrink-0">{s.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Bell className="w-4.5 h-4.5 text-[#aa7217]" />
            <h2 className="font-playfair text-lg font-semibold text-[#FAF9F6]">Notifications</h2>
          </div>
          <div className="space-y-4">
            {announcements.map((a, i) => (
              <div key={i} className={`p-4 rounded-xl border ${
                a.type === 'success' ? 'bg-green-500/5 border-green-500/15' :
                a.type === 'warning' ? 'bg-yellow-500/5 border-yellow-500/15' :
                'bg-blue-500/5 border-blue-500/15'
              }`}>
                <div className="flex items-start gap-2">
                  {a.type === 'success' ? <CheckCircle className="w-3.5 h-3.5 text-green-400 mt-0.5 shrink-0" /> : <AlertCircle className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${a.type === 'warning' ? 'text-yellow-400' : 'text-blue-400'}`} />}
                  <div>
                    <p className="text-xs font-inter font-semibold text-[#FAF9F6]">{a.title}</p>
                    <p className="text-[10px] text-gray-400 font-inter mt-1 leading-relaxed">{a.desc}</p>
                    <p className="text-[9px] text-gray-600 font-inter mt-1.5">{a.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Upload Documents', icon: FileText, href: '/portal/documents', color: 'text-blue-400', bg: 'bg-blue-500/8 border-blue-500/15' },
          { label: 'View Results',     icon: BarChart2, href: '/portal/results',   color: 'text-green-400', bg: 'bg-green-500/8 border-green-500/15' },
          { label: 'Make Payment',     icon: CreditCard, href: '/portal/payments', color: 'text-[#aa7217]', bg: 'bg-[#aa7217]/8 border-[#aa7217]/15' },
          { label: 'Notifications',    icon: Bell, href: '/portal/notifications',  color: 'text-purple-400', bg: 'bg-purple-500/8 border-purple-500/15' },
        ].map(item => (
          <a key={item.label} href={item.href} className={`p-5 rounded-2xl border ${item.bg} flex flex-col items-center gap-3 text-center hover:-translate-y-0.5 transition-all group`}>
            <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform`} />
            <span className="text-xs font-inter font-semibold text-gray-300">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
