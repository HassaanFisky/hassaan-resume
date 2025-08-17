import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Hassaan Aslam - Full Stack Developer & AI Specialist',
  description: 'I build complex digital products faster than most teams finish coffee. Full-stack developer specializing in React, Next.js, AI integration, and high-value SaaS solutions.',
  keywords: 'Muhammad Hassaan Aslam, Full Stack Developer, React, Next.js, AI, SaaS, Web Development, Pakistan',
  authors: [{ name: 'Muhammad Hassaan Aslam' }],
  creator: 'Muhammad Hassaan Aslam',
  openGraph: {
    title: 'Muhammad Hassaan Aslam - Full Stack Developer & AI Specialist',
    description: 'I build complex digital products faster than most teams finish coffee.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Hassaan Aslam - Full Stack Developer & AI Specialist',
    description: 'I build complex digital products faster than most teams finish coffee.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
