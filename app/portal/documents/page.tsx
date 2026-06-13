'use client'

import { useState } from 'react'
import { Upload, FileText, CheckCircle, AlertCircle, Trash2 } from 'lucide-react'

interface UploadedDocument {
  name: string
  status: 'Pending Verification' | 'Verified' | 'Action Required'
  uploadedAt: string
  fileSize: string
  type: string
}

export default function DocumentsPage() {
  const [docs, setDocs] = useState<Record<string, UploadedDocument>>({
    passport: { name: 'Passport_Photograph.jpg', status: 'Verified', uploadedAt: '2026-06-11', fileSize: '1.2 MB', type: 'Passport Photograph' },
    birthCert: { name: 'Birth_Certificate.pdf', status: 'Pending Verification', uploadedAt: '2026-06-12', fileSize: '2.4 MB', type: 'Birth Certificate' },
  })

  const [uploading, setUploading] = useState<string | null>(null)

  const handleUpload = (typeKey: string, docName: string) => {
    setUploading(typeKey)
    setTimeout(() => {
      setDocs(prev => ({
        ...prev,
        [typeKey]: {
          name: docName,
          status: 'Pending Verification',
          uploadedAt: new Date().toISOString().split('T')[0],
          fileSize: '1.5 MB',
          type: typeKey.replace(/([A-Z])/g, ' $1').trim(),
        }
      }))
      setUploading(null)
    }, 1500)
  }

  const handleDelete = (typeKey: string) => {
    setDocs(prev => {
      const copy = { ...prev }
      delete copy[typeKey]
      return copy
    })
  }

  const documentTypes = [
    { key: 'passport', label: 'Passport Photograph', desc: 'Clear passport photo on white background (JPG/PNG).' },
    { key: 'birthCert', label: 'Birth Certificate', desc: 'Official government-issued birth certificate or age declaration.' },
    { key: 'academicCert', label: 'Academic Certificates', desc: 'Secondary school certificate (WAEC/NECO) or highest degree.' },
    { key: 'idDoc', label: 'Identification Document', desc: 'National ID Card, NIN Slip, International Passport, or Voter\'s Card.' },
    { key: 'otherDocs', label: 'Other Supporting Documents', desc: 'Any other relevant training certificates or reference letters.' },
  ]

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h1 className="font-playfair text-3xl font-bold text-[#FAF9F6]">Required Documents</h1>
        <p className="text-sm text-gray-400 font-inter mt-1">Upload and manage your academic credentials and identification files</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Upload Panels */}
        <div className="lg:col-span-2 space-y-6">
          {documentTypes.map(docType => {
            const uploaded = docs[docType.key]
            const isPending = uploading === docType.key

            return (
              <div key={docType.key} className="bg-white/3 border border-white/8 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all hover:border-[#aa7217]/20">
                <div className="space-y-1 text-left">
                  <h3 className="font-playfair text-base font-bold text-[#FAF9F6]">{docType.label}</h3>
                  <p className="text-xs text-gray-400 font-inter leading-relaxed max-w-md">{docType.desc}</p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  {uploaded ? (
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <p className="text-xs text-[#FAF9F6] font-mono max-w-[150px] truncate">{uploaded.name}</p>
                        <p className="text-[9px] text-gray-500 font-inter mt-0.5">{uploaded.fileSize} · {uploaded.uploadedAt}</p>
                      </div>
                      <button
                        onClick={() => handleDelete(docType.key)}
                        className="p-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/15 rounded-xl transition-all"
                        title="Delete Document"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      disabled={isPending}
                      onClick={() => handleUpload(docType.key, `${docType.label.replace(/\s+/g, '_')}_file.pdf`)}
                      className="px-5 py-2.5 bg-[#aa7217]/10 hover:bg-[#aa7217]/20 text-[#aa7217] border border-[#aa7217]/25 text-xs font-semibold font-inter rounded-xl transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      {isPending ? (
                        <><span className="w-3.5 h-3.5 border-2 border-[#aa7217]/30 border-t-[#aa7217] rounded-full animate-spin" /> Uploading...</>
                      ) : (
                        <><Upload className="w-3.5 h-3.5" /> Upload File</>
                      )}
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Column: Status Summary */}
        <div className="space-y-6">
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-[#FAF9F6] border-b border-white/5 pb-3">Status Overview</h3>
            
            <div className="space-y-3">
              {documentTypes.map(docType => {
                const uploaded = docs[docType.key]
                return (
                  <div key={docType.key} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 text-left">
                    <span className="text-xs text-gray-300 font-inter font-medium">{docType.label}</span>
                    {uploaded ? (
                      <span className={`text-[9px] uppercase tracking-wider font-mono font-semibold px-2 py-0.5 rounded border ${
                        uploaded.status === 'Verified' 
                          ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                          : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'
                      }`}>
                        {uploaded.status}
                      </span>
                    ) : (
                      <span className="text-[9px] uppercase tracking-wider font-mono font-semibold px-2 py-0.5 rounded border bg-red-500/10 border-red-500/20 text-red-400">
                        Missing
                      </span>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="pt-2">
              <div className="flex items-start gap-3 p-3 bg-[#aa7217]/8 border border-[#aa7217]/25 rounded-xl">
                <AlertCircle className="w-4 h-4 text-[#aa7217] shrink-0 mt-0.5" />
                <p className="text-[10px] text-gray-300 font-inter leading-relaxed">Please make sure all uploads are clear, legible scans. Altered or unreadable files may lead to a delay in registration approval.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
