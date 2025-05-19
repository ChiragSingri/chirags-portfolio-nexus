
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532619031801-5e66e4bca655?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Chirag S M
            </h1>
            <h2 className="text-xl md:text-2xl text-secondary mb-6">
              Finance | Operations and Supply Chain Management
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Motivated and detail-oriented professional with a strong foundation in finance, operations, and supply chain management. Adept at problem-solving, team coordination, and developing solutions to drive operational efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary hover:bg-primary-dark text-white">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full shadow-xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="Chirag S M" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
