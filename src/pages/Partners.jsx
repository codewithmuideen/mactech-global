import React from "react";
import { Users, Building2, Briefcase, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const partners = [
  { name: "TechCorp", field: "Technology", icon: <Building2 className="h-8 w-8 text-catalina-blue" /> },
  { name: "HealthPlus", field: "Healthcare", icon: <HeartHandshake className="h-8 w-8 text-mountain-meadow" /> },
  { name: "GreenEnergy", field: "Sustainability", icon: <Briefcase className="h-8 w-8 text-catalina-blue" /> },
  { name: "FinSolve", field: "Finance", icon: <Users className="h-8 w-8 text-mountain-meadow" /> },
  { name: "EduSmart", field: "Education", icon: <Building2 className="h-8 w-8 text-catalina-blue" /> },
  { name: "AgriGrowth", field: "Agriculture", icon: <HeartHandshake className="h-8 w-8 text-mountain-meadow" /> },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔹 Hero Section */}
      <section className="relative bg-catalina-blue text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Our Trusted Partners
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            We collaborate with industry leaders to create lasting impact across
            technology, health, sustainability, and more.
          </p>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-8rem] right-[-8rem] h-[20rem] w-[20rem] bg-gradient-to-r from-mountain-meadow to-catalina-blue rounded-full opacity-40 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[-5rem] left-[-5rem] h-[18rem] w-[18rem] bg-gradient-to-r from-catalina-blue to-mountain-meadow rounded-full opacity-30 blur-3xl animate-pulse-slow delay-2000"></div>
        </div>
      </section>

      {/* 🔹 Partners Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-onyx mb-12">
            Working Hand-in-Hand with Innovators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="mb-4">{partner.icon}</div>
                <h3 className="text-lg font-semibold text-onyx">{partner.name}</h3>
                <p className="text-gray-500 text-sm">{partner.field}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 CTA Section */}
      <section className="bg-white py-20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-onyx mb-6">
          Interested in Partnering With Us?
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Let’s build the future together. We’re always open to new
          collaborations that create meaningful impact.
        </p>
        <Link
          to="/contact"
          className="bg-catalina-blue text-white font-semibold px-8 py-4 rounded-full hover:bg-mountain-meadow transition-transform duration-300 transform hover:scale-105"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Partners;
