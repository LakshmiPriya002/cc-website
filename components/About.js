// components/About.js
export default function About() {
  return (
    <section id="about" className="bg-white text-blue-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">About Crestcode</h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Crestcode is a digital technology studio that blends strategy, design, and engineering to create impactful web and software solutions. Every solution is thoughtfully engineered to solve real-world challenges, streamline operations, and unlock long-term value.
          </p>
        </div>

        {/* Feature Cards (Scalable, Purpose, Reliable) */}
        <div className="mb-24">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "🚀",
                title: "Scalable by Design",
                desc: "Solutions that adapt and grow with evolving business needs.",
                bg: "bg-indigo-50",
              },
              {
                icon: "🎯",
                title: "Built for Purpose",
                desc: "Focused, efficient development tied to real-world results.",
                bg: "bg-rose-50",
              },
              {
                icon: "🛠️",
                title: "Reliable Engineering",
                desc: "Stable, secure, and performance-optimized systems.",
                bg: "bg-amber-50",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${item.bg} rounded-2xl p-10 min-h-[280px] shadow-md transform hover:scale-105 transition duration-300 text-center`}
              >
                <div className="text-[70px] text-blue-600 mb-4">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                <p className="text-lg text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Strengths Section */}
        <div className="mb-20">
          <h3 className="text-5xl font-bold text-center mb-12">Core Strengths</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
            {[
              {
                icon: "💡",
                title: "Innovation",
                desc: "Exploring emerging technologies to stay ahead of the curve and deliver smarter, future-ready solutions.",
              },
              {
                icon: "⚙️",
                title: "Quality",
                desc: "Precision-built, thoroughly tested, and optimized for performance and long-term reliability.",
              },
              {
                icon: "🔍",
                title: "Transparency",
                desc: "Open communication, clear timelines, and honest collaboration through every phase of a project.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-10 min-h-[300px] border rounded-3xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
              >
                <div className="text-[90px] mb-5">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                <p className="text-lg text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-3xl italic text-center text-blue-800 font-semibold mt-20 leading-relaxed">
          “Technology that simplifies, scales, and strengthens businesses — that’s what Crestcode builds.”
        </p>
      </div>
    </section>
  );
}
