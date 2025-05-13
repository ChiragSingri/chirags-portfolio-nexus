
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Download, ChevronDown, PieChart, TrendingUp, Briefcase } from 'lucide-react';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.section-container');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white min-h-[85vh] relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white/20 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 w-full absolute top-0">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-b border-white/20 w-full h-[8.33vh]"></div>
          ))}
        </div>
      </div>
      
      {/* Floating Finance Icons */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => {
          const Icon = i % 3 === 0 ? PieChart : i % 3 === 1 ? TrendingUp : Briefcase;
          return (
            <div 
              key={i}
              className="absolute text-white/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg) scale(${0.8 + Math.random() * 1.5})`,
                animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`
              }}
            >
              <Icon size={40} />
            </div>
          );
        })}
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col h-[85vh] justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="inline-block px-4 py-1 bg-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              Finance & Operations Professional
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Chirag S M
            </h1>
            
            <h2 className="text-xl md:text-2xl text-white/80 font-semibold mb-8">
              Finance | Operations & Supply Chain Management
              <div className="h-1 w-20 bg-accent mt-3"></div>
            </h2>
            
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Motivated and detail-oriented professional with a strong foundation in finance, operations, and supply chain management. Adept at problem-solving, team coordination, and developing solutions to drive operational efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-accent hover:bg-accent-dark text-white shadow-lg">
                <Link to="/portfolio">
                  View Portfolio
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white/20">
                <Link to="/contact">
                  Contact Me
                </Link>
              </Button>
              
              <Button asChild variant="ghost" className="text-white hover:bg-white/10">
                <a href="https://crimson-kip-34.tiiny.site" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Download size={18} className="mr-2" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="w-full md:w-1/2 flex justify-center items-center animate-fade-in">
            <div className="relative w-full max-w-md overflow-hidden">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 shadow-xl">
                <img 
                  src="https://i.postimg.cc/yNDscVXH/Untitled-design-3.png" 
                  alt="Chirag S M" 
                  className="w-full h-auto rounded-md mb-6 shadow-lg"
                />
                
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-white/10 p-3 rounded text-center">
                    <p className="text-xs text-white/70 mb-1">Expertise</p>
                    <p className="text-accent font-semibold">Finance</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded text-center">
                    <p className="text-xs text-white/70 mb-1">Experience</p>
                    <p className="text-accent font-semibold">Operations</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded text-center">
                    <p className="text-xs text-white/70 mb-1">Focus</p>
                    <p className="text-accent font-semibold">Supply Chain</p>
                  </div>
                </div>
                
                <div className="flex justify-around p-3 rounded bg-white/10">
                  <div className="text-center">
                    <p className="text-xs text-white/70">MBA</p>
                    <p className="text-sm">Finance & Operations</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-white/70">B.Com</p>
                    <p className="text-sm">Accounting & Marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer" 
          onClick={scrollToNextSection}
        >
          <span className="text-sm text-white/70 mb-1">Explore More</span>
          <ChevronDown className="h-5 w-5 text-accent" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
