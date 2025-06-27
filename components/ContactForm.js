// components/ContactForm.js
'use client'
import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 text-blue-900">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-3 text-blue-800">Let's Connect</h2>
        <p className="text-lg text-gray-700">Have an idea or project in mind? Drop a message below and we'll get back shortly.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white rounded-[2rem] shadow-2xl p-10 space-y-6 border border-blue-100"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border border-gray-300 px-5 py-3 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-800 bg-purple-50 hover:bg-purple-100 transition"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border border-gray-300 px-5 py-3 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-800 bg-blue-50 hover:bg-blue-100 transition"
          />
        </div>

        <textarea
          placeholder="Your Message"
          rows="5"
          required
          className="w-full border border-gray-300 px-5 py-3 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none text-gray-800 bg-cyan-50 hover:bg-cyan-100 transition"
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-10 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <FaPaperPlane className="text-lg" /> Send Message
          </button>
        </div>

        {submitted && (
          <p className="text-green-600 mt-6 text-center font-medium animate-pulse">
            ✅ Thank you! We'll be in touch soon.
          </p>
        )}
      </form>
    </section>
  )
}
