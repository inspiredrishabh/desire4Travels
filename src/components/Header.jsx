import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isJumpToOpen, setIsJumpToOpen] = useState(false);
  

  const jumpToRef = useRef(null);
  const mobileMenuRef = useRef(null);


  const navLinks = [
    { title: 'Home', href: '#' },
    { title: 'About Us', href: '#' },
    { title: 'Packages', href: '#' },
    { title: 'Blog', href: '#' },
    { title: 'Travel Agents', href: '#' },
    { title: 'Contact us', href: '#' },
  ]
  const socialLinks = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaPinterestP />, href: '#', label: 'Pinterest' },
  ];

  const jumpToOptions = [
    { title: 'Destinations', href: '#destinations' },
    { title: 'Special Offers', href: '#offers' },
    { title: 'Testimonials', href: '#testimonials' },
  ];

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (jumpToRef.current && !jumpToRef.current.contains(event.target)) {
        setIsJumpToOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('#mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isJumpToOpen) setIsJumpToOpen(false);
  }

  // Function to toggle jump to dropdown
  const toggleJumpTo = () => {
    setIsJumpToOpen(!isJumpToOpen);
  }

  // Function to handle mobile link clicks
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsJumpToOpen(false);
  }

  // Reusable CSS classes for consistent styling
  const baseLinkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const baseButtonClasses = "px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors";

  return (
    <header className="bg-slate-800 text-slate-100 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold hover:text-sky-400 transition-colors">
              Desire4Travels
            </a>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-5 lg:space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={`${baseLinkClasses} hover:bg-slate-700 hover:text-sky-300`}
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Desktop Social Icons & Jump To Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  {React.cloneElement(social.icon, { size: "1.1em" })}
                </a>
              ))}
            </div>

            {/* Jump To Dropdown - Desktop */}
            <div className="relative" ref={jumpToRef}>
              <button
                type="button"
                onClick={toggleJumpTo}
                className={`${baseButtonClasses} bg-sky-600 hover:bg-sky-500 text-white`}
              >
                JUMP TO
                <FaChevronDown
                  className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
                    isJumpToOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              {isJumpToOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none py-1 z-10">
                  {jumpToOptions.map((opt) => (
                    <a
                      key={opt.title}
                      href={opt.href}
                      onClick={() => setIsJumpToOpen(false)}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-sky-600 transition-colors"
                    >
                      {opt.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-button"
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 transition-all"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-slate-800 p-2 space-y-1 sm:px-3 shadow-xl" id="mobile-menu" ref={mobileMenuRef}>
          {/* Mobile Navigation Links */}
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={handleMobileLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-100 hover:bg-slate-700 hover:text-sky-300 transition-colors"
            >
              {link.title}
            </a>
          ))}
          
          {/* Mobile Menu Footer Section */}
          <div className="pt-4 pb-3 border-t border-slate-700">
            {/* Jump To Dropdown - Mobile */}
            <div className="relative px-2 mb-3">
              <button
                type="button"
                onClick={toggleJumpTo}
                className={`w-full ${baseButtonClasses} bg-sky-600 hover:bg-sky-500 text-white justify-between`}
              >
                JUMP TO
                <FaChevronDown
                  className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
                    isJumpToOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              {isJumpToOpen && (
                <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none py-1 z-10">
                  {jumpToOptions.map((opt) => (
                    <a
                      key={opt.title}
                      href={opt.href}
                      onClick={handleMobileLinkClick}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-sky-600 transition-colors"
                    >
                      {opt.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center space-x-5 px-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  onClick={handleMobileLinkClick}
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  {React.cloneElement(social.icon, { size: "1.3em" })}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;