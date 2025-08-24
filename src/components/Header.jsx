import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import images from '../constants/images'; // your logo import
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // mobile menu icons
import { FaPlus } from 'react-icons/fa'; // dropdown icon

// ✅ Nav Item
const NavItem = ({ to, children }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-medium transition-colors duration-300 ${
          isActive ? 'text-catalina-blue' : 'text-onyx hover:text-mountain-meadow'
        }`
      }
    >
      {children}
    </NavLink>
  </li>
);

// ✅ Dropdown (desktop)
const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // close if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <li className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-medium text-onyx hover:text-mountain-meadow flex items-center gap-1 transition-colors duration-300"
      >
        {title}
        <FaPlus
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-45 text-mountain-meadow' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-xl rounded-xl border border-gray-100 z-50">
          <ul className="p-2">
            {items.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block px-4 py-2 text-sm text-onyx hover:bg-mountain-meadow hover:text-white rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // 🔹 Links
  const focusAreas = [
    { name: 'Fintech Solutions', path: '/focus/fintech' },
    { name: 'Sustainable Tech', path: '/focus/sustainability' },
    { name: 'Health Informatics', path: '/focus/health' },
    { name: 'Deep Tech & AI', path: '/focus/ai' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/company/about' },
    { name: 'Our Team', path: '/company/team' },
    // { name: 'Our Partners', path: '/company/partners' },
    // { name: 'Stories & Insights', path: '/company/blog' },
  ];

  const navLinks = [
    { type: 'link', name: 'Partners', path: '/partners' },
    { type: 'link', name: 'Portfolio', path: '/portfolio' },
    { type: 'dropdown', name: 'Focus Areas', items: focusAreas },
    { type: 'link', name: 'Careers', path: '/careers' },
    { type: 'dropdown', name: 'Company', items: companyLinks },
  ];

  return (
    <>
      {/* 🔹 NAVBAR */}
      <header className="bg-white text-onyx shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link to="/">
            <img
              src={images.logo}
              alt="MacTech Global Ventures Ltd"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) =>
                link.type === 'link' ? (
                  <NavItem key={link.name} to={link.path}>
                    {link.name}
                  </NavItem>
                ) : (
                  <Dropdown key={link.name} title={link.name} items={link.items} />
                )
              )}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="bg-catalina-blue text-white font-semibold px-6 py-2 rounded-full hover:bg-mountain-meadow transition-transform duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* 🔹 Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close Btn */}
          <div className="flex justify-end mb-6">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <HiX size={28} />
            </button>
          </div>

          <ul className="space-y-6 text-lg">
            {navLinks.map((link) =>
              link.type === 'link' ? (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-medium text-onyx hover:text-mountain-meadow"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li key={link.name}>
                  {/* Mobile Accordion Dropdown */}
                  <button
                    className="w-full flex justify-between items-center font-semibold text-onyx hover:text-mountain-meadow"
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.name ? null : link.name)
                    }
                  >
                    {link.name}
                    <FaPlus
                      className={`transition-transform ${
                        openDropdown === link.name ? 'rotate-45 text-mountain-meadow' : ''
                      }`}
                    />
                  </button>
                  {openDropdown === link.name && (
                    <ul className="pl-4 mt-2 space-y-2 text-base">
                      {link.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-onyx hover:text-mountain-meadow"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            )}

            {/* Contact Btn */}
            <li className="pt-6">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-catalina-blue text-white font-semibold px-8 py-3 rounded-full hover:bg-mountain-meadow"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
