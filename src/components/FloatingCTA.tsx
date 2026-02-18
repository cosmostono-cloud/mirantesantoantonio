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
      className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform duration-300 flex items-center gap-3 group"
    >
      <div className="bg-white text-primary font-bold py-2 px-4 rounded-full shadow-xl border border-border hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Reserve via WhatsApp
      </div>
      <div className="bg-white p-1 rounded-full shadow-2xl border border-border/50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16">
        <img 
          src="/whatsapp_logo.png" 
          alt="WhatsApp" 
          className="w-full h-full object-contain rounded-full"
        />
      </div>
    </a>
  );
};

export default FloatingCTA;