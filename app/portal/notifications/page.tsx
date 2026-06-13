'use client'

import { Bell, MailOpen, Calendar, Clock, Sparkles } from 'lucide-react'

const notifications = [
  { id: 1, title: 'Orientation Schedule Confirmed', desc: 'Welcome to Pinnacle Culinary Academy! Your orientation is scheduled for Monday, June 16th, 2026 at 9:00 AM in Kitchen Lab A.', date: 'June 11, 2026', read: false },
  { id: 2, title: 'Tuition Payment Received', desc: 'Your payment of ₦450,000 for the African Culinary Art course has been confirmed. Thank you!', date: 'June 11, 2026', read: true },
  { id: 3, title: 'Required Documents Submission', desc: 'Reminder: Please upload your Birth Certificate and Secondary School Credentials in the Documents section to complete profile verification.', date: 'June 11, 2026', read: true },
]

export default function NotificationsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="font-playfair text-3xl font-bold text-[#FAF9F6]">Notifications</h1>
        <p className="text-sm text-gray-400 font-inter mt-1">Stay updated with academic timelines, news, and official announcements</p>
      </div>

      <div className="bg-white/3 border border-white/8 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <Bell className="w-4.5 h-4.5 text-[#aa7217]" />
            <h2 className="font-playfair text-lg font-semibold text-[#FAF9F6]">Recent Notifications</h2>
          </div>
          <button className="text-[10px] uppercase tracking-wider text-[#aa7217] hover:underline font-inter font-semibold">
            Mark all as read
          </button>
        </div>

        <div className="space-y-3">
          {notifications.map(n => (
            <div key={n.id} className={`p-5 rounded-xl border transition-colors ${n.read ? 'bg-white/1 border-white/5' : 'bg-[#aa7217]/5 border-[#aa7217]/20'}`}>
              <div className="flex items-start gap-4 justify-between">
                <div>
                  <div className="flex items-center gap-2.5">
                    {!n.read && <div className="w-1.5 h-1.5 rounded-full bg-[#aa7217]" />}
                    <h3 className="font-playfair text-sm font-semibold text-[#FAF9F6]">{n.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-inter mt-1.5 leading-relaxed">{n.desc}</p>
                </div>
                <span className="text-[10px] text-gray-500 font-inter shrink-0">{n.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
