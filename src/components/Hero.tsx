"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/mirante4.jpg" 
          alt="Vista panorâmica da Serra do Funil" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <MapPin size={16} className="text-secondary" />
          <span className="text-sm font-medium">Serra do Funil, Minas Gerais</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 max-w-4xl mx-auto leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Seu refúgio na natureza começa aqui 🌿
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Chalés aconchegantes, com café da manhã incluso e experiência de imersão na Serra do Funil.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-7 text-lg font-semibold group">
            Reserve agora no WhatsApp
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 rounded-full px-8 py-7 text-lg font-semibold">
            Ver Disponibilidade
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;