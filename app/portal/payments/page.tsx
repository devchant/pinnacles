'use client'

import { CreditCard, CheckCircle, Clock, FileText } from 'lucide-react'

const paymentHistory = [
  { id: 'PAY-88271', item: 'Application & Registration Fee', amount: '₦10,000', method: 'Debit Card', date: '2026-06-11', status: 'Completed' },
  { id: 'PAY-88272', item: 'First Semester Tuition - African Culinary Art', amount: '₦450,000', method: 'Debit Card', date: '2026-06-11', status: 'Completed' },
]

export default function PaymentsPage() {
  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h1 className="font-playfair text-3xl font-bold text-[#FAF9F6]">Payments & Fees</h1>
        <p className="text-sm text-gray-400 font-inter mt-1">Review your tuition receipts, billing schedules, and balance details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
          <p className="text-[9px] uppercase tracking-wider text-gray-500 font-inter">Total Paid Tuition</p>
          <p className="font-playfair text-2xl font-bold text-[#aa7217] mt-1">₦460,000</p>
          <p className="text-[10px] text-gray-400 font-inter mt-1">All dues successfully cleared</p>
        </div>
        <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
          <p className="text-[9px] uppercase tracking-wider text-gray-500 font-inter">Outstanding Balance</p>
          <p className="font-playfair text-2xl font-bold text-green-400 mt-1">₦0.00</p>
          <p className="text-[10px] text-gray-400 font-inter mt-1">No payment due</p>
        </div>
        <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
          <p className="text-[9px] uppercase tracking-wider text-gray-500 font-inter">Billing Status</p>
          <span className="inline-block mt-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-[10px] text-green-400 font-inter font-semibold uppercase">
            Up to date
          </span>
        </div>
      </div>

      <div className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex items-center gap-2">
          <CreditCard className="w-4.5 h-4.5 text-[#aa7217]" />
          <h2 className="font-playfair text-lg font-semibold text-[#FAF9F6]">Transaction History</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/8 bg-white/2 text-[10px] uppercase tracking-wider text-gray-400 font-inter font-semibold">
                <th className="py-4 px-6">Transaction ID</th>
                <th className="py-4 px-6">Payment For</th>
                <th className="py-4 px-6 text-center">Amount</th>
                <th className="py-4 px-6 text-center">Date</th>
                <th className="py-4 px-6 text-center">Method</th>
                <th className="py-4 px-6 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-inter text-xs">
              {paymentHistory.map(row => (
                <tr key={row.id} className="hover:bg-white/1 text-gray-300 transition-colors">
                  <td className="py-4 px-6 font-mono text-gray-400">{row.id}</td>
                  <td className="py-4 px-6 font-medium text-[#FAF9F6]">{row.item}</td>
                  <td className="py-4 px-6 text-center font-semibold text-[#aa7217]">{row.amount}</td>
                  <td className="py-4 px-6 text-center">{row.date}</td>
                  <td className="py-4 px-6 text-center text-gray-400">{row.method}</td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-[10px] font-semibold bg-green-500/10 border border-green-500/20 text-green-400 px-2.5 py-0.5 rounded-full">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
