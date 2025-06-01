'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  toc: TocItem[]
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -80% 0px' }
    )

    toc.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      toc.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [toc])

  return (
    <nav className="space-y-2">
      {toc.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={cn(
            'block text-sm transition-colors hover:text-foreground',
            activeId === item.id
              ? 'font-medium text-foreground'
              : 'text-muted-foreground',
            item.level === 3 && 'pl-4',
            item.level === 4 && 'pl-6'
          )}
          onClick={(e) => {
            e.preventDefault()
            document.querySelector(`#${item.id}`)?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }}
        >
          {item.title}
        </a>
      ))}
    </nav>
  )
}