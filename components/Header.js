'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <>
      {/* Fixed Top Navbar */}
      <header className="fixed top-0 w-full bg-white text-blue-900 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 relative">
            <div className="w-24 h-24 relative mt-1 sm:mt-2">
              <Image
                src="/logo.png"
                alt="Crestcode Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-wide"></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-lg font-medium">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-lg font-medium shadow">
            <a href="#about" className="block hover:text-blue-600">About</a>
            <a href="#services" className="block hover:text-blue-600">Services</a>
            <a href="#contact" className="block hover:text-blue-600">Contact</a>
          </div>
        )}
      </header>

      {/* Fixed Gradient Line */}
      <div className="fixed top-20 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 z-40"></div>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  )
}
