'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MoonIcon, SearchIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">DevWiki</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search wiki..."
                className="w-full rounded-md pl-8 md:w-[200px] lg:w-[300px]"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}