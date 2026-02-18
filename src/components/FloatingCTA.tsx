"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingCTA = () => {
  return (
    <a 
      href="https://wa.me/5532999999999" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center gap-2 group"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold px-0 group-hover:px-2">
        Reserve via WhatsApp
      </span>
      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
};

export default FloatingCTA;