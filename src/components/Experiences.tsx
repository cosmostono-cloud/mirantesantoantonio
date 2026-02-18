"use client";

import React from 'react';
import { Compass, Camera, Footprints, Star } from 'lucide-react';

const experiences = [
  {
    icon: <Footprints className="w-8 h-8" />,
    title: "Trilhas Guiadas",
    description: "Explore os segredos da Serra do Funil com guias experientes."
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: "Cachoeiras",
    description: "Banhos revigorantes em águas cristalinas a poucos minutos."
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Mirantes",
    description: "Pontos estratégicos para fotos inesquecíveis do pôr do sol."
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Céu Estrelado",
    description: "Noites mágicas longe da poluição luminosa das cidades."
  }
];

const Experiences = () => {
  return (
    <section id="experiencias" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl text-primary mb-6">Experiências que renovam a alma</h2>
            <p className="text-muted-foreground text-lg">
              Trilhas encantadoras, cachoeiras ao redor e céu estrelado para suas noites inesquecíveis.
            </p>
          </div>
          <div className="bg-secondary/10 px-6 py-4 rounded-2xl border border-secondary/20">
            <div className="flex items-center gap-2 text-secondary font-bold">
              <Star size={20} fill="currentColor" />
              <span>Avaliação 4.8/5 no Google</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 group">
              <div className="bg-primary/5 text-primary p-4 rounded-2xl inline-block mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                {exp.icon}
              </div>
              <h3 className="text-xl mb-4 text-primary">{exp.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 relative rounded-[3rem] overflow-hidden h-[500px]">
          <img src="/mirante5.jpg" alt="Gruta e espiritualidade" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-12">
            <div className="max-w-xl text-white">
              <h3 className="text-3xl mb-4">Conexão e Espiritualidade</h3>
              <p className="text-lg text-white/80">
                Visite a Gruta do Santo Antônio, um lugar de paz e contemplação único na região.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;