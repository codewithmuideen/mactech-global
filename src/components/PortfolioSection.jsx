// src/components/PortfolioSection.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import images from "../constants/images";

const portfolioData = [
  {
    name: "Aether Financial",
    stage: "Series B",
    description:
      "AI-powered platform democratizing algorithmic trading and financial instruments.",
    category: "Fintech",
    categoryColor: "bg-yellow-400",
    image: images.ai,
    path: "/portfolio/aether",
  },
  {
    name: "TerraGen",
    stage: "Exited",
    description:
      "Next-gen carbon capture tech. Acquired by Carbon Collective in 2023.",
    category: "Climate",
    categoryColor: "bg-green-400",
    image: images.carbon,
    path: "/portfolio/terragen",
  },
  {
    name: "Nova Health",
    stage: "Series A",
    description:
      "Preventative healthcare with genomics & wearables for personalized wellness.",
    category: "Health",
    categoryColor: "bg-blue-400",
    image: images.health,
    path: "/portfolio/nova-health",
  },
  {
    name: "SynthVerse",
    stage: "Seed",
    description:
      "Generative AI for creating immersive 3D worlds & assets from text prompts.",
    category: "Deep Tech",
    categoryColor: "bg-purple-400",
    image: images.ai3,
    path: "/portfolio/synthverse",
  },
  {
    name: "LogiChain",
    stage: "Series B",
    description:
      "Blockchain-powered supply chain management for global logistics.",
    category: "Supply Chain",
    categoryColor: "bg-pink-400",
    image: images.block,
    path: "/portfolio/logichain",
  },
];

const PortfolioSection = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[160px] -top-40 -left-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[160px] -bottom-40 -right-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-14">
          <div>
            <h4 className="uppercase tracking-widest text-gray-400 font-semibold">
              Our Portfolio
            </h4>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Building the Future of Innovation
            </h1>
          </div>
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => swiper?.slidePrev()}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 text-white hover:bg-white/10 transition"
            >
              <FiArrowLeft size={22} />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 text-white hover:bg-white/10 transition"
            >
              <FiArrowRight size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="pl-6 md:pl-0 relative z-10">
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={30}
          slidesPerView={"auto"}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!overflow-visible"
        >
          {portfolioData.map((item) => (
            <SwiperSlide key={item.name} className="!h-auto md:!w-auto">
              <Link to={item.path} className="group block h-full">
                <div className="relative flex flex-col h-full rounded-2xl border border-white/10 p-6 backdrop-blur-xl bg-white/5 
                                hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-3 
                                shadow-lg hover:shadow-2xl hover:shadow-purple-500/30">
                  {/* Gradient Border Hover */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

                  <div className="relative z-10">
                    {/* Image */}
                    <div className="flex justify-center mb-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-100 h-100 object-contain rounded-xl group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Info */}
                    <div>
                      <h3 className="text-2xl font-bold">
                        {item.name}{" "}
                        <span className="text-lg font-normal text-gray-400">
                          / {item.stage}
                        </span>
                      </h3>
                      <p className="mt-3 text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-full ${item.categoryColor}`}
                        ></span>
                        <span className="text-sm font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <FiArrowRight
                        className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                        size={20}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PortfolioSection;
