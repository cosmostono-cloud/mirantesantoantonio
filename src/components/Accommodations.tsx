"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bed, Wind, Mountain, Coffee } from 'lucide-react';

const accommodations = [
  {
    title: "Chalé Master",
    description: "Desperte com o canto dos pássaros e vista direta para a serra. Perfeito para casais.",
    image: "/mirante2.jpg",
    features: ["Cama King Size", "Hidromassagem", "Vista Panorâmica"]
  },
  {
    title: "Chalé Família",
    description: "Espaço amplo e aconchegante para toda a família desfrutar do melhor de Minas.",
    image: "/mirante1.jpg",
    features: ["2 Quartos", "Varanda com Rede", "Cozinha Equipada"]
  },
  {
    title: "Suíte Mirante",
    description: "Conforto e simplicidade em harmonia com a natureza exuberante ao redor.",
    image: "/mirante4.jpg",
    features: ["Cama Queen", "Frigobar", "Acesso ao Deck"]
  }
];

const Accommodations = () => {
  return (
    <section id="acomodacoes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-primary mb-4">Nossas Acomodações</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Onde o silêncio da serra encontra o conforto dos nossos chalés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accommodations.map((item, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group rounded-3xl">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                  Destaque
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-primary/80">
                    <Bed size={18} className="text-secondary" />
                    <span>Conforto</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary/80">
                    <Mountain size={18} className="text-secondary" />
                    <span>Vista</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary/80">
                    <Coffee size={18} className="text-secondary" />
                    <span>Café Incluso</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;