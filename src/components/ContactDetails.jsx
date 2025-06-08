import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-px bg-slate-300"></div>
            <h2 className="px-6 text-3xl font-bold text-slate-800 bg-slate-50">
              Office Contact Details
            </h2>
            <div className="flex-1 h-px bg-slate-300"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Map Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-96 bg-slate-200">
                {/* Map Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                      <FaMapMarkerAlt className="text-red-500 text-2xl" />
                    </div>
                    <p className="text-slate-600 text-sm mb-2">Interactive Map</p>
                    <p className="text-slate-500 text-xs">A-84/B, Street no-9, New Ashok nagar, New Delhi</p>
                  </div>
                </div>
                
                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <button className="w-8 h-8 bg-white shadow-md rounded flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                    <span className="text-sm">+</span>
                  </button>
                  <button className="w-8 h-8 bg-white shadow-md rounded flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                    <span className="text-sm">-</span>
                  </button>
                  <button className="w-8 h-8 bg-white shadow-md rounded flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                    <span className="text-xs">⌖</span>
                  </button>
                </div>
              </div>
              
              {/* Map Footer */}
              <div className="p-4 bg-white border-t">
                <p className="text-xs text-slate-500">
                  Keyboard shortcuts | Map data ©2025 | Terms | Report a map error
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-8">
            
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-sky-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Office Address</h3>
                <p className="text-slate-600 leading-relaxed">
                  A-84/B, Street no-9,<br />
                  New Ashok nagar,<br />
                  New Delhi
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Phone Numbers</h3>
                <div className="space-y-1">
                  <p className="text-slate-600">+91-01140392690</p>
                  <p className="text-slate-600">+91-7409030585</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Email Address</h3>
                <a 
                  href="mailto:info@desire4travels.com"
                  className="text-sky-600 hover:text-sky-800 transition-colors"
                >
                  info@desire4travels.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
