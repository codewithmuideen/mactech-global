// src/components/Footer.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../constants/images"; 
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const footerLinkColumns = [
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/company/about" },
      { name: "Our Team", path: "/company/team" },
      { name: "Careers", path: "/careers" },
      { name: "Join Us", path: "/join-us" },
    ],
  },
  {
    title: "Focus Areas",
    links: [
      { name: "Fintech Solutions", path: "/focus/fintech" },
      { name: "Sustainable Tech", path: "/focus/sustainability" },
      { name: "Health Informatics", path: "/focus/health" },
      { name: "Deep Tech & AI", path: "/focus/ai" },
    ],
  },
  {
    title: "Ventures",
    links: [
      { name: "Portfolio", path: "/portfolio" },
      { name: "Our Partners", path: "/company/partners" },
      { name: "Venture Funds", path: "/ventures/funds" },
    ],
  },
];

const Footer = () => {
  // subscription state
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState([]);
  const [message, setMessage] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage({ type: "error", text: "❌ Please enter a valid email." });
      return;
    }

    if (subscribed.includes(email.toLowerCase())) {
      setMessage({ type: "warning", text: "⚠️ You have already subscribed." });
    } else {
      setSubscribed([...subscribed, email.toLowerCase()]);
      setMessage({ type: "success", text: "✅ You have subscribed." });
      setEmail("");
    }
  };

  return (
    <footer className="bg-gradient-to-br from-catalina-blue via-onyx to-black text-white relative overflow-hidden">
      {/* Decorative background bubbles */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 left-10 w-32 h-32 bg-mountain-meadow/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-bounce-slow" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Link Columns */}
          {footerLinkColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-white uppercase tracking-wider mb-5 text-lg">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="font-semibold text-white uppercase tracking-wider mb-5 text-lg">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-400 mb-5 max-w-md">
              Monthly stories and insights from leading founders, investors, and
              our team.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 sm:items-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mountain-meadow"
                required
              />
              <button
                type="submit"
                className="whitespace-nowrap bg-mountain-meadow text-white font-bold px-6 py-3 rounded-md shadow-lg hover:bg-emerald-600 transition duration-300"
              >
                Sign Up
              </button>
            </form>

            {/* Feedback message */}
            {message && (
              <p
                className={`mt-3 ${
                  message.type === "success"
                    ? "text-green-400"
                    : message.type === "warning"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                {message.text}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <Link to="/">
            <img
              src={images.logoc}
              alt="MacTech Global Ventures"
              className="h-9 w-auto mb-6 sm:mb-0"
            />
          </Link>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaFacebook size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black/40 backdrop-blur-md py-4 px-6 text-sm text-gray-400">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>
            &copy; {new Date().getFullYear()} MacTech Global Ventures Ltd. 
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-white transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
