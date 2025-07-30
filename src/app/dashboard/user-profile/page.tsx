'use client'

import { useSession } from "next-auth/react"

export default function UserProfileDashboard() {
  const { data: session } = useSession()

  if (!session) return <div>Loading...</div>

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome, {session.user?.name}</h1>
      <p className="mb-4">This is your personal dashboard powered by Fayda ID.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="font-semibold text-lg mb-2">🎯 Goals</h2>
          <p>[Load user's life goals from DB]</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="font-semibold text-lg mb-2">📅 Routines</h2>
          <p>[Show recent tasks, planner, habits]</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="font-semibold text-lg mb-2">📊 Insights</h2>
          <p>[Visual charts from usage data]</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="font-semibold text-lg mb-2">🔒 Security Settings</h2>
          <p>[2FA, password change, biometric]</p>
        </div>
      </div>
    </div>
  )
}
