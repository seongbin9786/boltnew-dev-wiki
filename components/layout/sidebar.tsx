'use client'

import { cn } from '@/lib/utils'
import { BookIcon, FileIcon, FolderIcon, HomeIcon, LayersIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const sidebarItems = [
  {
    title: 'Home',
    href: '/',
    icon: HomeIcon,
  },
  {
    title: 'Categories',
    icon: FolderIcon,
    items: [
      { title: 'React', href: '/category/react' },
      { title: 'Next.js', href: '/category/nextjs' },
      { title: 'TypeScript', href: '/category/typescript' },
      { title: 'CSS', href: '/category/css' },
      { title: 'Node.js', href: '/category/nodejs' },
    ],
  },
  {
    title: 'Popular Articles',
    icon: BookIcon,
    items: [
      { title: 'Getting Started with React', href: '/wiki/1' },
      { title: 'Next.js Page Router vs App Router', href: '/wiki/2' },
      { title: 'TypeScript Advanced Types', href: '/wiki/3' },
      { title: 'CSS Grid Layout Guide', href: '/wiki/4' },
    ],
  },
  {
    title: 'Resources',
    icon: FileIcon,
    items: [
      { title: 'Code Snippets', href: '/resources/snippets' },
      { title: 'Cheat Sheets', href: '/resources/cheatsheets' },
      { title: 'Tutorials', href: '/resources/tutorials' },
    ],
  },
  {
    title: 'API Documentation',
    href: '/api-docs',
    icon: LayersIcon,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="group fixed inset-y-0 left-0 z-30 flex h-full w-[250px] flex-col border-r bg-background transition-transform duration-300 md:sticky md:top-16 md:-ml-0 md:h-[calc(100vh-4rem)] md:translate-x-0 -translate-x-full group-hover:translate-x-0 md:group-hover:translate-x-0">
      <div className="flex h-full flex-col overflow-y-auto py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Navigation</h2>
          <div className="space-y-1">
            {sidebarItems.map((item, index) => {
              const isActive =
                pathname === item.href ||
                (item.items?.some((subItem) => pathname === subItem.href) ?? false)

              if (!item.items) {
                return (
                  <Link
                    key={index}
                    href={item.href || '#'}
                    className={cn(
                      'flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                      isActive ? 'bg-accent text-accent-foreground' : 'transparent'
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                )
              }

              return (
                <div key={index} className="space-y-1">
                  <div className="flex items-center rounded-md px-3 py-2 text-sm font-medium">
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </div>
                  {item.items && (
                    <div className="ml-6 space-y-1">
                      {item.items.map((subItem, subIndex) => {
                        const isSubActive = pathname === subItem.href
                        return (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className={cn(
                              'flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                              isSubActive ? 'bg-accent text-accent-foreground' : 'transparent'
                            )}
                          >
                            {subItem.title}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}