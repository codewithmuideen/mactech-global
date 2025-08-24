// src/components/ServicesVentures.jsx

import React from "react";
import { FaLaptopCode, FaCity, FaLightbulb } from "react-icons/fa";
import { MdOutlineCleanHands } from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";

// Data arrays for easier management and scalability
const services = [
  {
    icon: <FaLaptopCode className="text-[#27845b]" size={40} />,
    title: "IT & Digital Solutions",
    description: "Web, mobile, and SaaS product development tailored to business and individual needs.",
  },
  {
    icon: <FaCity className="text-[#27845b]" size={40} />,
    title: "Mobility & Urban Tech",
    description: "Smart mobility, marketplace, fintech and social platforms like WakaForMe Ride and MopMe cleaning services.",
  },
  {
    icon: <FaLightbulb className="text-[#27845b]" size={40} />,
    title: "Consulting & Advisory",
    description: "Guidance on digital transformation, startup innovation, and growth strategies.",
  },
];

const ventures = [
  {
    icon: <MdOutlineCleanHands className="text-[#064871]" size={40} />,
    title: "MopMe",
    description: "An on-demand cleaning & lifestyle service platform designed for UK households and professionals.",
  },
  {
    icon: <IoCarSportSharp className="text-[#064871]" size={40} />,
    title: "WakaForMe Ride",
    description: "A Nigerian ride-hailing and logistics platform with 5M+ users, solving urban mobility challenges.",
  },
];

// Reusable Card Component for DRY code
const GlassCard = ({ icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-lg transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-base text-gray-300">{description}</p>
  </div>
);

// Reusable Section Title
const SectionTitle = ({ title }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
      {title}
    </h2>
    <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#27845b] to-[#064871] mx-auto rounded-full" />
  </div>
);


export default function ServicesVentures() {
  return (
    // Main container with dark background and relative positioning for the aurora effect
    <div className="bg-[#1a1a1a] font-sans relative overflow-hidden py-20 sm:py-28">
      
      {/* Aurora Background Effect */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-radial-gradient from-[#064871] to-transparent opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-radial-gradient from-[#27845b] to-transparent opacity-20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section: Our Services */}
        <section>
          <SectionTitle title="Our Services" />
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlassCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Spacer */}
        <div className="py-16"></div>

        {/* Section: Our Ventures */}
        <section>
          <SectionTitle title="Our Ventures" />
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ventures.map((venture, index) => (
              <GlassCard key={index} {...venture} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// You might need to add this to your tailwind.config.js for the radial gradient if it's not default
// In theme.extend:
// backgroundImage: {
//   'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
// },