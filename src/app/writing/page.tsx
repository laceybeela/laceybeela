'use client'

import { useEffect } from 'react'

export default function WritingPage() {
  useEffect(() => {
    window.location.href = 'https://substack.com/@laceybeela'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ color: '#4A284D' }}>
          Redirecting to Substack...
        </h1>
        <p className="text-gray-600 mb-6">
          Taking you to Lacey's writing on Substack
        </p>
        <a 
          href="https://substack.com/@laceybeela" 
          className="text-amber hover:underline"
        >
          Click here if you're not redirected automatically
        </a>
      </div>
    </div>
  )
}