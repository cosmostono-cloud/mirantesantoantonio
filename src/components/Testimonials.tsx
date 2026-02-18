"use client";

import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Viajante Solo",
    text: "Pousada linda, atendimento nota 10 e natureza de tirar o fôlego! O café da manhã é simplesmente divino.",
    rating: 5
  },
  {
    name: "Ricardo Oliveira",
    role: "Casal",
    text: "Fim de semana maravilhoso, chalés confortáveis e pessoas acolhedoras. Perfeito para desacelerar.",
    rating: 5
  },
  {
    name: "Ana Paula",
    role: "Família",
    text: "Lugar perfeito para as crianças. O contato com os animais e a segurança da pousada são diferenciais.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-primary mb-4">O que dizem nossos hóspedes</h2>
          <p className="text-muted-foreground text-lg">Experiências reais de quem já viveu momentos mágicos conosco.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm relative">
              <Quote className="absolute top-8 right-8 text-secondary/20 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-lg text-primary/80 italic mb-8 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold text-primary">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-sm border border-border">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Tripadvisor_Logo.svg" alt="Tripadvisor" className="h-6" />
            <span className="font-bold text-primary">Avaliação 4.6/5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;