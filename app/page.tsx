'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <div 
        className={`text-[4vw] md:text-[3vw] font-semibold text-center text-gray-900 opacity-0 ${
          show ? 'animate-fade-in' : ''
        }`}
      >
        The new way to experience museums.
      </div>
      <div 
        className={`text-[20vw] md:text-[18vw] font-bold mt-4 opacity-0 ${
          show ? 'animate-fade-in animation-delay-1500' : ''
        }`}
      >
        Leah<span className="text-gray-900">.</span>
      </div>
      <div className={`opacity-0 ${
        show ? 'animate-fade-in animation-delay-2500' : ''
      }`}>
        <p className="text-gray-500 mt-2">Coming soon.</p>
        
        <button 
          onClick={() => window.location.href = 'mailto:info@leah.gg'}
          className="mt-4 px-6 py-2.5 text-sm font-medium bg-[#222222] text-white border border-[#222222] rounded-lg shadow-sm hover:bg-[#333333] transition-colors duration-200 cursor-pointer"
        >
          Contact
        </button>
      </div>
      <footer className="absolute bottom-0 w-full text-center bg-[#222222] text-gray-400 text-xs py-1">
        &copy; Leah. 2025
      </footer>
    </div>
  );
}