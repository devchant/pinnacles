'use client'

import { useState } from 'react'
import { Settings, Lock, Bell, User, CheckCircle } from 'lucide-react'

export default function SettingsPage() {
  const [success, setSuccess] = useState(false)
  const [passForm, setPassForm] = useState({ oldPass: '', newPass: '', confirmPass: '' })

  const handleSave = () => {
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2500)
    setPassForm({ oldPass: '', newPass: '', confirmPass: '' })
  }

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="font-playfair text-3xl font-bold text-[#FAF9F6]">Account Settings</h1>
        <p className="text-sm text-gray-400 font-inter mt-1">Configure your login credentials, notifications, and portal preferences</p>
      </div>

      <div className="bg-white/3 border border-white/8 rounded-2xl p-6 space-y-6">
        <div className="flex items-center gap-2 border-b border-white/5 pb-4">
          <Lock className="w-4.5 h-4.5 text-[#aa7217]" />
          <h2 className="font-playfair text-lg font-semibold text-[#FAF9F6]">Update Password</h2>
        </div>

        <div className="space-y-4 max-w-md">
          {[
            { label: 'Current Password', name: 'oldPass', type: 'password', value: passForm.oldPass },
            { label: 'New Password', name: 'newPass', type: 'password', value: passForm.newPass },
            { label: 'Confirm New Password', name: 'confirmPass', type: 'password', value: passForm.confirmPass },
          ].map(field => (
            <div key={field.name} className="text-left">
              <label className="block text-[10px] uppercase tracking-wider text-gray-500 font-inter mb-1.5">{field.label}</label>
              <input
                type={field.type}
                value={field.value}
                onChange={e => setPassForm(prev => ({ ...prev, [field.name]: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-[#FAF9F6] focus:outline-none focus:border-[#aa7217]/60 transition-colors font-mono"
              />
            </div>
          ))}

          {success && (
            <div className="flex items-center gap-2 text-green-400 text-xs font-inter p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
              <CheckCircle className="w-4 h-4" />
              <span>Password successfully updated.</span>
            </div>
          )}

          <button
            onClick={handleSave}
            className="px-6 py-2.5 bg-[#aa7217] hover:bg-[#c48920] text-black font-semibold text-xs font-inter rounded-xl transition-colors cursor-pointer"
          >
            Save Password
          </button>
        </div>
      </div>
    </div>
  )
}
