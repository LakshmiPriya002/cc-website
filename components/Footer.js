'use client'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#865DFF] to-[#3ABEFF] text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left: Company Info with Logo */}
        <div className="md:w-1/3 text-left">
          <Image
            src="/logo.png"
            alt="Crestcode Logo"
            width={180}
            height={180}
            className="mb-4"
          />
          <p className="text-lg text-blue-100 max-w-xs">
            An AI-powered product studio partnering with entrepreneurs and enterprises to solve real-world problems through innovative tech solutions.
          </p>
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="md:w-1/3 text-center">
          <h4 className="font-semibold text-2xl mb-4">Quick Links</h4>
          <ul className="space-y-2 text-lg text-blue-100">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Right: Locations */}
        <div className="md:w-1/3 text-right">
          <h4 className="font-semibold text-2xl mb-4">Our Locations</h4>
          <ul className="space-y-2 text-lg text-blue-100">
            <li>South Carolina, USA</li>
            <li>Chennai, India</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-lg text-blue-100 mt-12 border-t border-blue-300 pt-6">
        &copy; {new Date().getFullYear()} Crestcode. All rights reserved.
      </div>
    </footer>
  )
}
