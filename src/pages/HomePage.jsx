// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import bgVideo from "../assets/video.mp4";
import PartnersSection from "../components/PartnersSection";
import OfferingsSection from "../components/OfferingsSection";
// import PlatformSection from "../components/PlatformSection";
import PortfolioSection from "../components/PortfolioSection";
import CTASection from "../components/CTASection";
import ServicesVentures from "../components/ServicesVentures";
import AboutSections from "../components/AboutSections";
import Platform from "../components/Platform";

const HomePage = () => {
  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* 🔹 Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-catalina-blue/70 z-10"></div>

      {/* 🔹 Floating Bubble Effects */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-bounce-slow"></div>
        <div className="absolute top-20 right-1/3 w-24 h-24 bg-green-400/20 rounded-full blur-2xl animate-bounce-slower"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 bg-purple-400/20 rounded-full blur-lg animate-bounce"></div>
      </div>

      {/* 🔹 Hero Content */}
      <motion.div
        className="relative container mx-auto px-6 text-center z-30 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Glassmorphism Box */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl inline-block">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            Powering <span className="text-blue-400">Global</span> Innovation 
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
             We are MacTech Global Ventures. We partner with visionary founders to turn bold ideas into category-defining companies.
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
          >
            <Link
  to="/portfolio"
  className="
    bg-gradient-to-r from-blue-500 to-purple-500 
    text-white font-bold 
    px-6 py-3 sm:px-10 sm:py-4 
    rounded-full inline-block 
    text-sm sm:text-base lg:text-lg   /* Responsive font sizes */
    transform hover:scale-110 
    transition-transform duration-300 
    shadow-lg hover:shadow-2xl
  "
>
  Explore Our Portfolio
</Link>

          </motion.div>
        </div>
      </motion.div>

      {/* 🔹 Scroll Down Arrow */}
     
    </section>
    <AboutSections />
    <ServicesVentures />
    <PartnersSection />
    <OfferingsSection />
    {/* <PlatformSection /> */}
    <PortfolioSection />
    <Platform />
    <CTASection />
    </>
  );
};

export default HomePage;
