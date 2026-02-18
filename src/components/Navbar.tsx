"use client";

import React from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const phoneNumber = "5532984263074";
  const message = encodeURIComponent("Olá! Gostaria de mais informações sobre as acomodações e disponibilidade da Pousada Mirante Santo Antônio.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src="/logo_mirante.jpg" alt="Logo Mirante Santo Antônio" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-primary" />
          <span className="text-lg sm:text-xl font-serif text-primary truncate max-w-[150px] sm:max-w-none">Mirante Santo Antônio</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#acomodacoes" className="text-sm font-medium hover:text-secondary transition-colors">Acomodações</a>
          <a href="#gastronomia" className="text-sm font-medium hover:text-secondary transition-colors">Gastronomia</a>
          <a href="#experiencias" className="text-sm font-medium hover:text-secondary transition-colors">Experiências</a>
          <a href="#depoimentos" className="text-sm font-medium hover:text-secondary transition-colors">Depoimentos</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              <Phone className="mr-2 h-4 w-4" />
              Reservar Agora
            </Button>
          </a>
        </div>

        <button className="md:hidden text-primary p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border p-4 space-y-4 animate-in slide-in-from-top duration-300">
          <a href="#acomodacoes" className="block text-lg font-medium py-2 border-b border-border/50" onClick={() => setIsOpen(false)}>Acomodações</a>
          <a href="#gastronomia" className="block text-lg font-medium py-2 border-b border-border/50" onClick={() => setIsOpen(false)}>Gastronomia</a>
          <a href="#experiencias" className="block text-lg font-medium py-2 border-b border-border/50" onClick={() => setIsOpen(false)}>Experiências</a>
          <a href="#depoimentos" className="block text-lg font-medium py-2 border-b border-border/50" onClick={() => setIsOpen(false)}>Depoimentos</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block pt-2">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 text-lg">
              Reservar via WhatsApp
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;