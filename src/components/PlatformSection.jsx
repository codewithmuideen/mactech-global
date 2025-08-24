// src/components/PlatformSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiDollarSign, FiGrid, FiBriefcase, FiGlobe } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Data-driven platform features
const platformData = [
  {
    icon: FiDollarSign,
    title: 'Capital',
    description:
      'We fund startups at idea, pre-seed and seed, combining intelligent capital with the full backing of our investment programs.',
    linkText: 'Our programs',
    path: '/accelerator',
  },
  {
    icon: FiGrid,
    title: 'Operational Support',
    description:
      'Co-founder level support from our 60+ team of builders and operators. We’ll help you find product-market fit and raise your next round.',
    linkText: 'Meet the team',
    path: '/company/team',
  },
  {
    icon: FiBriefcase,
    title: 'Corporate Partners',
    description:
      'Access to industry-leading corporates is our unfair advantage: from distribution and market intelligence to commercial partnerships.',
    linkText: 'Our partners',
    path: '/company/partners',
  },
  {
    icon: FiGlobe,
    title: 'Community & Network',
    description:
      'We operate at the heart of the global tech ecosystem. Join our community of founders, investors and corporate innovators.',
    linkText: 'Learn more',
    path: '/community',
  },
];

const PlatformSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 sm:py-28 overflow-hidden">
      {/* Floating background animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute top-1/4 -right-1/3 w-[45rem] h-[45rem] bg-gradient-to-r from-mountain-meadow/30 to-catalina-blue/20 rounded-full blur-3xl pointer-events-none"
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="font-bold text-mountain-meadow uppercase tracking-widest">
            Our Platform
          </h3>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-onyx leading-tight">
            We back founders from <span className="text-catalina-blue">idea to seed</span> — and beyond
          </h1>
          <p className="mt-6 text-lg text-onyx/70">
            Everything you need to transform bold ideas into world-changing companies.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-20">
          {platformData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex gap-6 group"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-mountain-meadow/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-mountain-meadow/20 transition-transform duration-300">
                  <item.icon size={32} className="text-mountain-meadow" />
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-onyx group-hover:text-catalina-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-3 text-onyx/70 leading-relaxed">{item.description}</p>
                <Link
                  to={item.path}
                  className="inline-flex items-center gap-1 mt-5 font-semibold text-catalina-blue group-hover:gap-2 transition-all duration-300"
                >
                  {item.linkText}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-catalina-blue"></span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
