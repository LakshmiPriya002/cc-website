'use client'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Header() {
  // Enable smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <>
      {/* Top Navbar */}
      <header className="fixed top-0 w-full bg-white text-blue-900 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3 relative">
            <div className="w-28 h-28 relative mt-2">
              <Image
                src="/logo.png"
                alt="Crestcode Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-wide"></span>
          </div>

          {/* Navigation Links */}
          <nav className="space-x-8 text-lg font-medium">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Spacer to avoid overlap due to fixed header */}
      <div className="h-20"></div>

      {/* Thin Blue Gradient Line Below Header */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900"></div>
    </>
  )
}
