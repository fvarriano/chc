'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-white flex items-center">
              <Image src="/logo.svg" alt="The Coach House Company" width={32} height={32} className="w-auto h-8" />
            </Link>
            <span className="text-white text-sm hidden md:block">The Coach House Co.</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm text-white items-center">
            <Link href="/process" className="hover:opacity-80">Our Process</Link>
            <Link href="/projects" className="hover:opacity-80">Featured Projects</Link>
            <Link href="/contact" className="hover:opacity-80">Contact Us</Link>
            <Link href="/faq" className="hover:opacity-80">FAQ</Link>
          </div>
          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-white"
          >
            <div className="space-y-2">
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="w-8 h-0.5 bg-white"></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center space-y-8 text-2xl text-white">
            <Link href="/process" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80">Our Process</Link>
            <Link href="/projects" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80">Featured Projects</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80">Contact Us</Link>
            <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80">FAQ</Link>
          </div>
        </div>
      )}
    </>
  )
} 