"use client";

import React from 'react';

const FloatingCTA = () => {
  const phoneNumber = "5532984263074";
  const message = encodeURIComponent("Olá! Gostaria de mais informações sobre as acomodações e disponibilidade da Pousada Mirante Santo Antônio.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 hover:scale-110 transition-transform duration-300 flex items-center gap-2 group"
    >
      <div className="bg-white text-primary font-bold py-2 px-4 rounded-full shadow-xl border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Reserve via WhatsApp
      </div>
      <img 
        src="/whatsapp_logo.png" 
        alt="WhatsApp" 
        className="w-16 h-16 drop-shadow-2xl"
      />
    </a>
  );
};

export default FloatingCTA;