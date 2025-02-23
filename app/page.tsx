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
        className={`text-[4rem] font-semibold text-center text-gray-900 opacity-0 ${
          show ? 'animate-fade-in' : ''
        }`}
      >
        The new way to experience museums.
      </div>
      <div 
        className={`text-[18rem] font-bold mt-4 opacity-0 ${
          show ? 'animate-fade-in animation-delay-500' : ''
        }`}
      >
        Leah<span className="text-gray-900">.</span>
      </div>
      <p className="text-gray-500 mt-2">Coming soon.</p>
    
      <button className="mt-4 px-6 py-2.5 text-sm font-medium bg-[#fbfbfd] text-black border border-[#d2d2d7] rounded-lg shadow-sm hover:bg-[#f5f5f7] transition-colors duration-200">
        Contact.
      </button>
      <footer className="absolute bottom-0 w-full text-center bg-gray-900 text-gray-400 text-sm py-2">
        &copy; Leah. 2025
      </footer>
    </div>
  );
}