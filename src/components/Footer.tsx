"use client";

import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo_mirante.jpg" alt="Logo" className="h-12 w-12 rounded-full border-2 border-secondary" />
              <span className="text-xl font-serif">Mirante Santo Antônio</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Onde o silêncio da serra encontra o conforto mineiro. Sua melhor experiência na Serra do Funil.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Links Rápidos</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#acomodacoes" className="hover:text-white transition-colors">Acomodações</a></li>
              <li><a href="#gastronomia" className="hover:text-white transition-colors">Gastronomia</a></li>
              <li><a href="#experiencias" className="hover:text-white transition-colors">Experiências</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Contato</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary" />
                <span>(32) 98426-3074</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary" />
                <span>contato@mirantesantoantonio.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-secondary" />
                <span>Serra do Funil, Rio Preto - MG</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-secondary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
            <div className="mt-8">
              <p className="text-sm text-white/50">Pacote especial de fim de semana — Vagas limitadas!</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© 2024 Pousada Mirante Santo Antônio. Todos os direitos reservados.</p>
          <p>Desenvolvido com carinho mineiro.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;