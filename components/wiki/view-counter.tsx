'use client'

import { EyeIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

// In a real application, this would be SSR-rendered
// This is a client-side implementation for demonstration
export function ViewCounter({ id }: { id: string }) {
  const [views, setViews] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching view count from an API
    const fetchViews = async () => {
      // In a real app, this would be an API call
      // const response = await fetch(`/api/views/${id}`)
      // const data = await response.json()
      
      // For demo purposes, we'll generate a random number
      const mockViews = Math.floor(Math.random() * 5000) + 500
      
      setTimeout(() => {
        setViews(mockViews)
        setLoading(false)
      }, 500)
      
      // In a real app, we would increment the view count
      // await fetch(`/api/views/${id}`, { method: 'POST' })
    }
    
    fetchViews()
  }, [id])

  return (
    <div className="flex items-center gap-2">
      <EyeIcon className="h-4 w-4" />
      <span>
        {loading ? 'Loading...' : `${views?.toLocaleString()} views`}
      </span>
    </div>
  )
}