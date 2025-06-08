import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden border border-slate-200 transition-all duration-300 transform origin-bottom-right">
          <div className="bg-slate-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span className="font-medium">Travel Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white transition-colors focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-4 bg-slate-50">
            <div className="flex flex-col space-y-3">
              <div className="bg-slate-200 text-slate-800 p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
                Hello! How can I help you plan your next adventure?
              </div>

              <div className="bg-slate-700 text-white p-3 rounded-lg rounded-tr-none max-w-[80%] self-end">
                I'm looking for destinations in India.
              </div>

              <div className="bg-slate-200 text-slate-800 p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
                Great choice! India offers diverse experiences from Himalayan
                treks to beaches in Goa and cultural heritage in Rajasthan. Any
                specific interest?
              </div>
            </div>
          </div>

          <div className="p-3 border-t border-slate-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full py-2 px-3 bg-slate-100 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-500 text-slate-800 pr-10"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-slate-700 hover:bg-slate-800 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center focus:outline-none transition-all duration-300 hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {!isOpen && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">
          1
        </span>
      )}
    </div>
  );
};

export default Chatbot;
