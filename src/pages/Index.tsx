"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Accommodations from '@/components/Accommodations';
import Gastronomy from '@/components/Gastronomy';
import VideoTour from '@/components/VideoTour';
import Experiences from '@/components/Experiences';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Accommodations />
        <Gastronomy />
        <VideoTour />
        <Experiences />
        <Testimonials />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;