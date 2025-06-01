import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Header } from '@/components/layout/header'
import { Sidebar } from '@/components/layout/sidebar'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevWiki - Developer Knowledge Base',
  description: 'A comprehensive wiki platform for developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex flex-1 flex-col md:flex-row">
              <Sidebar />
              <main className="flex-1 p-4 md:p-6">{children}</main>
            </div>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}