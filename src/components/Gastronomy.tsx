"use client";

import React from 'react';
import { UtensilsCrossed, Check } from 'lucide-react';

const Gastronomy = () => {
  return (
    <section id="gastronomia" className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="/mirante3.jpg" alt="Piscina e lazer" className="rounded-3xl h-80 w-full object-cover mt-8" />
              <img src="/mirante6.jpg" alt="Interação com a natureza" className="rounded-3xl h-80 w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-3xl shadow-2xl hidden md:block">
              <UtensilsCrossed size={48} className="text-white mb-4" />
              <p className="font-serif text-xl">Sabor de Minas</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl leading-tight">Delícias mineiras à mesa</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Bem-vindo à Mirante Santo Antônio — onde o cuidado mineiro está presente em cada gesto. Nosso café da manhã é uma celebração dos sabores locais, feito com carinho para começar seu dia com energia.
            </p>
            
            <ul className="space-y-4">
              {[
                "Café da manhã colonial incluso",
                "Pão de queijo quentinho e bolos caseiros",
                "Frutas frescas e sucos naturais",
                "Queijos artesanais da região",
                "Ambiente acolhedor com vista para a serra"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-secondary rounded-full p-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <div className="inline-block bg-white/10 border border-white/20 rounded-2xl p-6">
                <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">Destaque</p>
                <p className="text-xl font-serif italic">"A melhor comida caseira que já provamos em uma pousada!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gastronomy;