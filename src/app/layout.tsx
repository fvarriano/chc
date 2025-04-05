import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Coach House Company',
  description: 'Modern dwellings in Atlantic Canada',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-xl font-light">
              The Coach House Company
            </Link>
            <div className="flex gap-8 text-sm text-white">
              <Link href="/process" className="hover:opacity-80">Our Process</Link>
              <Link href="/projects" className="hover:opacity-80">Featured Projects</Link>
              <Link href="/contact" className="hover:opacity-80">Contact Us</Link>
              <Link href="/faq" className="hover:opacity-80">FAQ</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
