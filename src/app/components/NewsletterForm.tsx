'use client'

import { useEffect, useRef } from 'react'

export default function NewsletterForm() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const script = document.createElement('script')
    script.src = 'https://the-coach-house-co.kit.com/6f30c0d327/index.js'
    script.async = true
    script.onload = () => {
      console.log('Kit script loaded successfully')
    }

    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current) {
        const scriptElement = containerRef.current.querySelector('script')
        if (scriptElement) {
          containerRef.current.removeChild(scriptElement)
        }
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-[200px] relative z-10 bg-transparent">
      <div 
        data-uid="6f30c0d327" 
        className="block w-full min-h-[100px] bg-transparent"
      />
    </div>
  )
} 