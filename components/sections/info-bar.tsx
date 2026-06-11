'use client'

export default function InfoBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-wrap text-gray-700 text-sm font-medium">
          <span>📞 +1 (555) 123-4567</span>
          <span>•</span>
          <span>✉️ admissions@pinnacleculinary.edu</span>
          <span>•</span>
          <span>📍 San Francisco, CA</span>
        </div>
        <a 
          href="#contact" 
          className="btn-secondary text-xs py-1 px-3 hover:scale-105 transition-transform"
        >
          Schedule Tour
        </a>
      </div>
    </div>
  )
}
