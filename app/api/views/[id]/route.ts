import { NextRequest, NextResponse } from 'next/server'

// In a real application, this would be connected to a database
const pageViews: Record<string, number> = {}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id
  // Return the current view count
  return NextResponse.json({ views: pageViews[id] || 0 })
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id
  
  // Increment the view count
  if (!pageViews[id]) {
    pageViews[id] = 0
  }
  
  pageViews[id]++
  
  return NextResponse.json({ views: pageViews[id] })
}