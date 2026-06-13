'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  LayoutDashboard, User, FileText, BarChart2, CreditCard,
  Bell, BookOpen, ClipboardList, Settings, LogOut, Menu, X, ChevronRight
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard',         href: '/portal',                    icon: LayoutDashboard },
  { label: 'Profile',           href: '/portal/profile',             icon: User },
  { label: 'Documents',         href: '/portal/documents',           icon: FileText },
  { label: 'Results',           href: '/portal/results',             icon: BarChart2 },
  { label: 'Payments',          href: '/portal/payments',            icon: CreditCard },
  { label: 'Notifications',     href: '/portal/notifications',       icon: Bell },
  { label: 'Academic Records',  href: '/portal/academic-records',    icon: BookOpen },
  { label: 'Course Registration',href: '/portal/course-registration', icon: ClipboardList },
  { label: 'Settings',          href: '/portal/settings',            icon: Settings },
]

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem('portalAuth')
      if (!auth) router.replace('/portal-login')
    }
  }, [router])

  const handleLogout = () => {
    sessionStorage.removeItem('portalAuth')
    router.push('/portal-login')
  }

  const NavLink = ({ item }: { item: typeof navItems[0] }) => {
    const active = pathname === item.href
    const Icon = item.icon
    return (
      <Link
        href={item.href}
        onClick={() => setSidebarOpen(false)}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-inter font-medium transition-all duration-200 group ${
          active
            ? 'bg-[#aa7217]/15 text-[#aa7217] border border-[#aa7217]/25'
            : 'text-gray-400 hover:text-[#FAF9F6] hover:bg-white/5 border border-transparent'
        }`}
      >
        <Icon className={`w-4.5 h-4.5 shrink-0 ${active ? 'text-[#aa7217]' : 'text-gray-500 group-hover:text-gray-300'}`} />
        <span>{item.label}</span>
        {active && <ChevronRight className="w-3.5 h-3.5 ml-auto text-[#aa7217]" />}
      </Link>
    )
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAF9F6] flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/70 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-[#080808] border-r border-white/5 z-50 flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:flex`}>
        {/* Logo */}
        <div className="p-5 border-b border-white/5 flex items-center justify-between">
          <a href="/">
            <Image src="/logo.png" alt="Pinnacle" width={120} height={60} className="h-10 w-auto object-contain" />
          </a>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Student Badge */}
        <div className="mx-4 mt-4 p-4 bg-[#aa7217]/8 border border-[#aa7217]/20 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#aa7217]/20 border border-[#aa7217]/30 flex items-center justify-center">
              <User className="w-4.5 h-4.5 text-[#aa7217]" />
            </div>
            <div>
              <p className="text-xs font-playfair font-semibold text-[#FAF9F6]">Student Portal</p>
              <p className="text-[9px] text-[#aa7217] font-mono tracking-wider mt-0.5">PCA/2026/B2/0001</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map(item => <NavLink key={item.href} item={item} />)}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-inter font-medium text-red-400 hover:text-red-300 hover:bg-red-500/8 border border-transparent hover:border-red-500/15 transition-all"
          >
            <LogOut className="w-4.5 h-4.5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 px-4 sm:px-6 py-4 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-400 hover:text-white p-1">
            <Menu className="w-6 h-6" />
          </button>
          <div className="lg:flex items-center gap-2 hidden">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-gray-400 font-inter uppercase tracking-wider">Portal Active</span>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <div className="w-8 h-8 rounded-full bg-[#aa7217]/15 border border-[#aa7217]/30 flex items-center justify-center">
              <Bell className="w-4 h-4 text-[#aa7217]" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
