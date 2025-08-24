// src/components/OfferingsSection.jsx

import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

// Data for offering cards
const offeringsData = [
  {
    title: "MacTech Global",
    description:
      "Co-found a new company with the strategic backing of our expert team and extensive network of corporate partners.",
    buttonText: "Build with us",
    path: "/venture-studio",
  },
  {
    title: "Accelerator",
    description:
      "Raise capital and supercharge your growth through our world-class pre-seed and seed stage investment programs.",
    buttonText: "Explore programs",
    path: "/accelerator",
  },
];

const OfferingsSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Headline */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="font-semibold text-mountain-meadow uppercase tracking-widest text-sm">
              Builders & Investors
            </h3>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-onyx leading-tight">
              Shaping the future of{" "}
              <span className="bg-gradient-to-r from-mountain-meadow to-catalina-blue bg-clip-text text-transparent">
                Fintech, Health, Climate & Deep Tech
              </span>
            </h1>
            <p className="mt-6 text-lg text-onyx/70 max-w-xl mx-auto lg:mx-0">
              Partner with us to build, accelerate, and scale solutions that
              truly make an impact in tomorrow’s world.
            </p>
          </motion.div>

          {/* Right Column: Offering Cards */}
          <div className="flex flex-col gap-8">
            {offeringsData.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                           hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <h4 className="font-bold uppercase tracking-wider text-sm text-catalina-blue">
                  {offering.title}
                </h4>
                <p className="mt-4 text-base md:text-lg text-onyx/80 leading-relaxed">
                  {offering.description}
                </p>
                <Link
                  to={offering.path}
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 
                             bg-gradient-to-r from-onyx to-catalina-blue text-white font-semibold 
                             rounded-lg shadow hover:shadow-xl hover:scale-105 
                             transition-all duration-300"
                >
                  {offering.buttonText}
                  <HiArrowRight className="text-lg" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative blurred background accents */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-mountain-meadow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-catalina-blue/10 rounded-full blur-3xl" />
    </section>
  );
};

export default OfferingsSection;
