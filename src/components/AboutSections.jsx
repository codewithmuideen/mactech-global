// src/components/AboutSections.jsx

import React, { useEffect, useRef } from "react";
import { 
  motion, 
  useInView, 
  useMotionValue, 
  useTransform, 
  animate 
} from "framer-motion";
import { FaBuilding, FaCode, FaCar, FaChartLine } from "react-icons/fa";

// A wrapper component to handle scroll-triggered animations for each section
const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="py-20 sm:py-28"
    >
      {children}
    </motion.section>
  );
};

// **THE CORRECTED ANIMATED COUNTER COMPONENT**
const AnimatedCounter = ({ value, text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const count = useMotionValue(0);
  const formattedValue = useTransform(count, (latest) => 
    new Intl.NumberFormat().format(Math.round(latest))
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: "easeInOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref}>
      {text}
      <motion.span>{formattedValue}</motion.span>
    </span>
  );
};


// Data for the "At-a-Glance" section for easy management
const glanceData = [
  {
    icon: <FaBuilding size={32} className="text-[#064871]" />,
    title: "Headquarters",
    description: "Sheffield, United Kingdom",
  },
  {
    icon: <FaCode size={32} className="text-[#27845b]" />,
    title: "Core Focus",
    description: "Digital Solutions, Mobility & Urban Tech, SaaS",
  },
  {
    icon: <FaCar size={32} className="text-[#064871]" />,
    title: "Flagship Ventures",
    description: "MopMe (UK), WakaForMe Ride (Africa)",
  },
  {
    icon: <FaChartLine size={32} className="text-[#27845b]" />,
    title: "Community Impact",
    description: <AnimatedCounter value={1500} text="" />,
    description_suffix: "+ youths trained & multi-million user reach"
  },
];

export default function AboutSections() {
  return (
    <div className="font-sans bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Aurora Background Effect */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-radial-gradient from-[#064871] to-transparent opacity-20 blur-3xl" />
        <div className="absolute bottom-[20%] left-0 w-[40vw] h-[60vh] bg-radial-gradient from-[#27845b] to-transparent opacity-20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Homepage Blurb Section */}
        <AnimatedSection>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              MacTech Global Ventures
            </h1>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-gray-300">
              A UK-based digital technology company building products and
              platforms that scale across the UK and emerging markets. We turn
              complex problems into simple, useful tools.
            </p>
          </div>
        </AnimatedSection>
        
        {/* About Us Section with 2-column layout */}
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 text-center lg:text-left">
               <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Who We Are
              </h2>
              <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#27845b] to-[#064871] mx-auto lg:mx-0 rounded-full" />
               <p className="mt-6 text-lg text-gray-400">
                Rooted in real problems, strengthened in the UK, and built for the world.
              </p>
            </div>
            <div className="lg:col-span-3 text-lg text-gray-300 space-y-6 leading-relaxed">
              <p>
                MacTech Global Ventures is a Sheffield-based digital technology
                company with a global outlook and African roots. We design, build,
                and scale practical products that help organisations move faster and
                serve people better.
              </p>
              <p>
                Our team blends UK execution standards with deep experience
                operating in high-growth markets. From on-demand services like MopMe to mobility platforms like WakaForMe Ride, we focus on reliability, user trust, and long-term value.
              </p>
              <p>
                What sets us apart is impact at scale, clear outcomes, and transparent delivery. If you’re solving a hard problem, let’s build the solution together.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* At-a-Glance Section with Animated Stats */}
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              At a Glance
            </h2>
             <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#27845b] to-[#064871] mx-auto rounded-full" />
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {glanceData.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 text-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-gray-300">
                    {item.description}
                    {item.description_suffix}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Taglines Section */}
        <AnimatedSection>
           <div className="text-center max-w-4xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Our Ethos
            </h2>
            <div className="mt-10 space-y-6">
                <p className="text-2xl md:text-3xl font-medium text-gray-300 italic">
                    “Built in the UK. Designed for the world.”
                </p>
                 <p className="text-2xl md:text-3xl font-medium text-gray-300 italic">
                    “Practical tech. Global impact.”
                </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}