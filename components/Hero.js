// components/Hero.js
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-[#e0f2ff] text-blue-900 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Text Content */}
        <div className="w-full md:max-w-xl text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Innovative<br />
            Digital Solutions<br />
            for Modern Businesses
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-800 mb-8 leading-relaxed">
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
        <div className="flex justify-center md:justify-end mt-10 md:mt-0 w-full">
          <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 w-full max-w-sm sm:max-w-md md:max-w-lg h-[550px] bg-[#d8ebf9]">
            <Image
              src="/hero-illustration.png"
              alt="Digital Innovation"
              width={800}
              height={600}
              className="object-cover object-top w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
