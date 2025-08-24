// src/components/PartnersSection.jsx
import React from 'react';
import images from '../constants/images';
import { FaRocket, FaUsers, FaGlobe } from 'react-icons/fa';

const partnerLogos = [
  images.p1, images.p2, images.p3, images.p4, images.p5,
  images.p6, images.p7, images.p8, images.p9, images.p10,
  images.p11, images.p12, images.p13,
];

// Duplicate for infinite loop
const extendedLogos = [...partnerLogos, ...partnerLogos];

const PartnersSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-catalina-blue via-[#0B1E39] to-black py-24 overflow-hidden">
      <div className="container mx-auto px-6 text-center text-white">
        
        {/* Section Heading */}
        <h3 className="text-mountain-meadow font-semibold tracking-widest uppercase animate-pulse">
          GO FURTHER, FASTER
        </h3>
        <p className="mt-6 text-3xl md:text-5xl font-extrabold max-w-4xl mx-auto leading-tight">
          Backed by world-class <span className="text-mountain-meadow">partners</span> & industry leaders
        </p>

        {/* Stats with Glowing Glass Effect */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/10 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 text-lg sm:text-xl">
            <FaRocket className="text-mountain-meadow animate-bounce" />
            <span className="font-bold">150+</span>
            <span className="text-gray-300">startups</span>
          </div>
          <div className="hidden sm:block text-white/20">|</div>
          <div className="flex items-center gap-3 text-lg sm:text-xl">
            <FaUsers className="text-mountain-meadow animate-pulse" />
            <span className="font-bold">60+</span>
            <span className="text-gray-300">operators</span>
          </div>
          <div className="hidden sm:block text-white/20">|</div>
          <div className="flex items-center gap-3 text-lg sm:text-xl">
            <FaGlobe className="text-mountain-meadow animate-spin-slow" />
            <span className="font-bold">5</span>
            <span className="text-gray-300">continents</span>
          </div>
        </div>

        {/* Scrolling Logos */}
        <div className="relative w-full mt-20">
          <div className="flex animate-scroll gap-16">
            {extendedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="max-h-12 w-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 transform hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(0,255,200,0.7)]"
                />
              </div>
            ))}
          </div>

          {/* Gradient fade edges for smoothness */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-catalina-blue via-catalina-blue/80 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-catalina-blue via-catalina-blue/80 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Floating bubbles in background for depth */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-24 h-24 bg-mountain-meadow/10 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-1/3 w-20 h-20 bg-mountain-meadow/20 rounded-full blur-2xl animate-pulse"></div>
      </div>
    </section>
  );
};

export default PartnersSection;
