import React from "react";

// Simple footer with contact information
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-slate-400">Desire</span>4Travels
            </h3>
            <p className="text-slate-400 mb-6">
              We create tailored travel experiences that match your preferences,
              interests, and budget. Explore the world with confidence and
              comfort.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors duration-300"
              >
                <span>📘</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors duration-300"
              >
                <span>📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors duration-300"
              >
                <span>🐦</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors duration-300"
              >
                <span>📌</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Contact Info
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <span>A-84/B, Street no-9, New Ashok nagar, New Delhi</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">📞</span>
                <span>+91-01140392690</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">📞</span>
                <span>+91-7409030585</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">✉️</span>
                <span>info@desire4travels.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              For Business Partners
            </h4>
            <p className="text-slate-400 mb-6">
              Join our network of travel providers and grow your business with
              us.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2 rounded transition-colors duration-300">
                MERCHANT SIGN UP
              </button>
              <button className="w-full bg-transparent border border-slate-700 hover:border-slate-600 text-white py-2 rounded transition-colors duration-300">
                PARTNER WITH US
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Desire4Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
