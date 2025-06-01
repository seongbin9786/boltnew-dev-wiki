'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { MessageSquareIcon, ThumbsUpIcon, ReplyIcon, TrashIcon } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface Comment {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  createdAt: string
  likes: number
  userLiked: boolean
}

export function CommentSection({ articleId }: { articleId: string }) {
  const { toast } = useToast()
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: {
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?img=68',
      },
      content: 'This article was incredibly helpful! I was struggling with understanding the concepts but your explanations made it clear.',
      createdAt: '2023-09-20T14:48:00.000Z',
      likes: 5,
      userLiked: false,
    },
    {
      id: '2',
      author: {
        name: 'Lisa Chen',
        avatar: 'https://i.pravatar.cc/150?img=47',
      },
      content: 'I have a question about the implementation. Would this approach work in a server-side rendering context as well?',
      createdAt: '2023-09-21T09:12:00.000Z',
      likes: 2,
      userLiked: false,
    },
  ])
  const [newComment, setNewComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!newComment.trim()) {
      toast({
        title: 'Comment cannot be empty',
        variant: 'destructive',
      })
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      const comment: Comment = {
        id: `comment-${Date.now()}`,
        author: {
          name: 'You',
          avatar: 'https://i.pravatar.cc/150?img=12',
        },
        content: newComment,
        createdAt: new Date().toISOString(),
        likes: 0,
        userLiked: false,
      }
      
      setComments([comment, ...comments])
      setNewComment('')
      setIsSubmitting(false)
      
      toast({
        title: 'Comment added',
        description: 'Your comment has been added successfully.',
      })
    }, 1000)
  }

  const toggleLike = (commentId: string) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            likes: comment.userLiked ? comment.likes - 1 : comment.likes + 1,
            userLiked: !comment.userLiked,
          }
        }
        return comment
      })
    )
  }

  const deleteComment = (commentId: string) => {
    setComments(comments.filter((comment) => comment.id !== commentId))
    
    toast({
      title: 'Comment deleted',
      description: 'Your comment has been deleted.',
    })
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold flex items-center gap-2">
        <MessageSquareIcon className="h-5 w-5" />
        Comments ({comments.length})
      </h3>
      
      <form onSubmit={handleCommentSubmit} className="space-y-4">
        <Textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px]"
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </Button>
      </form>
      
      <div className="space-y-6 mt-8">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 rounded-lg border bg-card">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">{comment.author.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">
                      {formatDate(comment.createdAt)}
                    </span>
                  </div>
                  {comment.author.name === 'You' && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteComment(comment.id)}
                      className="h-8 w-8 text-destructive"
                    >
                      <TrashIcon className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  )}
                </div>
                <p className="text-sm">{comment.content}</p>
                <div className="flex items-center gap-4 pt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-muted-foreground"
                    onClick={() => toggleLike(comment.id)}
                  >
                    <ThumbsUpIcon
                      className={`h-4 w-4 mr-1 ${comment.userLiked ? 'fill-current' : ''}`}
                    />
                    <span>{comment.likes}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-muted-foreground"
                  >
                    <ReplyIcon className="h-4 w-4 mr-1" />
                    <span>Reply</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {comments.length === 0 && (
          <div className="text-center py-6 text-muted-foreground">
            <p>No comments yet. Be the first to comment!</p>
          </div>
        )}
      </div>
    </div>
  )
}