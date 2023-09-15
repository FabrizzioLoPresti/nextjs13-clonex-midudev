import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ProviderUI } from '@/providers/nextui-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js 13 | Clone X | Midudev 🤓',
  description: 'Next.js 13 | Clone X | Midudev 🤓',
  keywords: 'nextjs, clone, midudev'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <ProviderUI>
          {children}
        </ProviderUI>
      </body>
    </html>
  )
}
