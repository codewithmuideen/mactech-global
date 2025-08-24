// src/components/CTASection.jsx

import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiUserGroup } from "react-icons/hi";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-cyan-900">
      {/* Decorative gradient orbs */}
      <div className="absolute -top-10 -left-10 w-[20rem] h-[20rem] bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-6 py-24 text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto drop-shadow-lg">
          Ready to <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">build the future</span>?  
          <br className="hidden sm:block" /> Join us in shaping tomorrow's{" "}
          <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">technology</span>.
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Whether you’re a startup founder, corporate partner, or visionary
          investor — we co-create the next wave of innovation with you.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Primary Action */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white
                       bg-gradient-to-r from-cyan-400 to-green-400 shadow-lg backdrop-blur-md
                       hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Start a Conversation <HiArrowRight size={20} />
          </Link>

          {/* Secondary Action */}
          <Link
            to="/company/partners"
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white border-2 border-white/40
                       hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 group"
          >
            <HiUserGroup size={22} />
            Become a Corporate Partner
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-cyan-400 transition-all duration-300"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
