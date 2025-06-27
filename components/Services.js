    // components/Services.js
    'use client'
    import { useEffect, useRef } from 'react'
    import { motion, useAnimation, useInView } from 'framer-motion'

    const services = [
    {
        icon: "💻",
        title: "Web Development",
        desc: "High-performance websites tailored for speed, scalability, and SEO.",
        color: "from-cyan-400 to-blue-500",
    },
    {
        icon: "🎨",
        title: "UI/UX Design",
        desc: "Human-centered design principles for delightful user experiences.",
        color: "from-pink-400 to-red-400",
    },
    {
        icon: "📱",
        title: "Mobile App Development",
        desc: "Native and hybrid mobile solutions for iOS and Android.",
        color: "from-purple-400 to-indigo-500",
    },
    {
        icon: "🔗",
        title: "API & Integration",
        desc: "Efficient APIs and backend systems that power modern apps.",
        color: "from-green-400 to-teal-400",
    },
    {
        icon: "🔧",
        title: "Maintenance & Support",
        desc: "Ongoing support and improvements to ensure performance.",
        color: "from-yellow-300 to-yellow-500",
    },
    {
        icon: "☁️",
        title: "Cloud & DevOps",
        desc: "CI/CD pipelines and cloud deployments to scale infrastructure.",
        color: "from-blue-400 to-cyan-400",
    },
    ]

    export default function Services() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [inView]);

    return (
        <section
        id="services"
        className="py-24 px-4 bg-gradient-to-br from-white to-blue-50 text-blue-900 overflow-hidden"
        >
        <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-extrabold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strategic. Scalable. Built for the future.
            </p>
        </div>

        <div
            ref={ref}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl mx-auto"
        >
            {services.map((service, i) => (
            <motion.div
                key={i}
                className="h-full"
                initial="hidden"
                animate={controls}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
                }}
            >
                <div className={`relative group p-8 h-full min-h-[200px] flex flex-col justify-start rounded-3xl bg-white shadow-xl border-t-4 border-b-4 border-transparent hover:border-blue-300 transition-all duration-300`}>              
                <div className={`absolute -top-6 left-6 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${service.color} text-white text-3xl shadow-lg`}>{service.icon}</div>
                <h3 className="text-2xl font-bold mt-10 mb-3 text-blue-900">{service.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                    {service.desc}
                </p>
                </div>
            </motion.div>
            ))}
        </div>

        {/* <p className="text-2xl italic text-center text-blue-800 font-medium mt-20">
            “Crafting solutions with unique form and function.”
        </p> */}
        </section>
    );
    }
