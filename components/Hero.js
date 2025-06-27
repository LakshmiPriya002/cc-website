// components/Hero.js
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-[#e0f2ff] text-blue-900 py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="w-full md:max-w-xl text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Innovative<br />
            Digital Solutions<br />
            for Modern Businesses
          </h1>
          <p className="text-lg md:text-xl text-blue-800 mb-8 leading-relaxed">
            Crestcode delivers technology-driven solutions that align with strategic goals and adapt to evolving market demands. From streamlined user interfaces to robust backend systems, each project is engineered for long-term impact and efficiency.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-700 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-800 transition"
          >
            Get in Touch
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex justify-end mt-10 md:mt-12">
          <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500">
            <Image
              src="/hero-illustration.png"
              alt="Digital Innovation"
              width={450}
              height={350}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
