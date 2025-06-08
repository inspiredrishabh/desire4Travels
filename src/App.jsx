import React, { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-slate-400 border-solid rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl text-white font-medium">Desire4Travels</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <HomePage />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
