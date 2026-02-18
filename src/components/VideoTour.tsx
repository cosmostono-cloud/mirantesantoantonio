"use client";

import React from 'react';

const VideoTour = () => {
  // Substitua o ID abaixo pelo ID do vídeo do YouTube da pousada
  const videoId = "dQw4w9WgXcQ"; // Exemplo: dQw4w9WgXcQ
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=1&rel=0`;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-primary mb-4">Conheça nosso Paraíso</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dê um play e sinta a energia da Serra do Funil e o aconchego que espera por você.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-8 border-background">
            <iframe
              src={videoUrl}
              title="Video Tour Pousada Mirante Santo Antônio"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-secondary font-serif text-4xl mb-2">360°</div>
              <p className="text-primary font-medium">Vista Panorâmica</p>
            </div>
            <div className="p-6">
              <div className="text-secondary font-serif text-4xl mb-2">100%</div>
              <p className="text-primary font-medium">Natureza Preservada</p>
            </div>
            <div className="p-6">
              <div className="text-secondary font-serif text-4xl mb-2">Rio Preto</div>
              <p className="text-primary font-medium">Minas Gerais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTour;