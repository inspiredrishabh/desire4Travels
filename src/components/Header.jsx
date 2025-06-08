import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { title: "Home", href: "#" },
    { title: "About Us", href: "#" },
    { title: "Packages", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Contact us", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">
              <span className="text-slate-300">Desire</span>4Travels
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-white hover:text-slate-300"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.title}
              </a>
            ))}

            <button className="bg-gradient-to-r from-slate-500 to-slate-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-500/50">
              EXPLORE NOW
            </button>
          </nav>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-slate-900/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-96 opacity-100 py-5"
            : "max-h-0 opacity-0 py-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-white hover:text-slate-300 text-sm font-medium px-4 py-2 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <button className="bg-gradient-to-r from-slate-500 to-slate-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm shadow-md mx-4 my-2">
            EXPLORE NOW
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
