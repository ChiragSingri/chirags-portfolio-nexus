
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Download, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.section-container');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background with improved gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-primary/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-primary/10 blur-2xl"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="relative">
              <span className="absolute -top-6 -left-6 text-5xl text-primary/10 font-bold">"</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-primary">Chirag S M</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-secondary font-semibold mb-8 relative">
                Finance | Operations and Supply Chain Management
                <div className="h-1 w-20 bg-accent mt-2"></div>
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              Motivated and detail-oriented professional with a strong foundation in finance, operations, and supply chain management. Adept at problem-solving, team coordination, and developing solutions to drive operational efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary hover:bg-primary-dark text-white shadow-md transition-all hover:translate-y-[-2px]">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all hover:translate-y-[-2px]">
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button asChild variant="ghost" className="text-primary hover:bg-primary/5">
                <a href="/resume.pdf" download className="flex items-center">
                  <Download size={18} className="mr-2" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative">
              {/* Profile image with better styling */}
              <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full shadow-xl border-4 border-white relative z-10 bg-gradient-to-br from-gray-50 to-white p-1">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                  alt="Chirag S M" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Decorative circles */}
              <div className="absolute top-5 -right-5 w-20 h-20 rounded-full border-2 border-accent/30 z-0"></div>
              <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full border-2 border-primary/30 z-0"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer" onClick={scrollToNextSection}>
          <span className="text-sm text-gray-500 mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
