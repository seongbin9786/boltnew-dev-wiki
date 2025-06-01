import { NextRequest, NextResponse } from 'next/server'

interface Comment {
  id: string
  articleId: string
  author: {
    name: string
    avatar: string
  }
  content: string
  createdAt: string
  likes: number
}

// In a real application, this would be connected to a database
const comments: Comment[] = []

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const articleId = searchParams.get('articleId')
  
  if (!articleId) {
    return NextResponse.json(
      { error: 'Article ID is required' },
      { status: 400 }
    )
  }
  
  const articleComments = comments.filter(
    (comment) => comment.articleId === articleId
  )
  
  return NextResponse.json(articleComments)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  if (!body.articleId || !body.content || !body.author) {
    return NextResponse.json(
      { error: 'Article ID, content, and author are required' },
      { status: 400 }
    )
  }
  
  const newComment: Comment = {
    id: `comment-${Date.now()}`,
    articleId: body.articleId,
    author: body.author,
    content: body.content,
    createdAt: new Date().toISOString(),
    likes: 0,
  }
  
  comments.push(newComment)
  
  return NextResponse.json(newComment)
}