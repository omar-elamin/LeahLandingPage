'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <div className="text-[4rem] font-semibold text-center text-gray-900">
        The new way to experience museums.
      </div>
      <div className="text-[8rem] font-bold mt-4">Leah<span className="text-gray-900">.</span></div>
      <p className="text-gray-500 mt-2">Coming soon.</p>
    
      <button className="mt-4 px-6 py-2 text-sm font-semibold bg-black text-white rounded-full shadow-md hover:shadow-lg">
        Contact.
      </button>
      <footer className="absolute bottom-0 w-full text-center bg-gray-900 text-gray-400 text-sm py-2">
        &copy; Leah. 2025
      </footer>
    </div>
  );
}