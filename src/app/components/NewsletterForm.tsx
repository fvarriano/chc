'use client'

import { useEffect, useRef } from 'react'

export default function NewsletterForm() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentContainer = containerRef.current
    if (!currentContainer) return

    const script = document.createElement('script')
    script.src = 'https://the-coach-house-co.kit.com/6f30c0d327/index.js'
    script.async = true
    script.onload = () => {
      console.log('Kit script loaded successfully')
    }

    currentContainer.appendChild(script)

    return () => {
      if (currentContainer) {
        const scriptElement = currentContainer.querySelector('script')
        if (scriptElement) {
          currentContainer.removeChild(scriptElement)
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