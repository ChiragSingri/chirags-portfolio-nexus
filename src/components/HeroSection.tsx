
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Download, ArrowDown, TrendingUp, ChartLine, ChartBar } from 'lucide-react';

const HeroSection = () => {
  const [stockValue, setStockValue] = useState(0);
  const [trend, setTrend] = useState<'up' | 'down'>('up');

  useEffect(() => {
    // Simulate stock market fluctuations
    const interval = setInterval(() => {
      setStockValue(prev => {
        const change = Math.random() * 10 - 5;
        const newValue = prev + change;
        setTrend(change >= 0 ? 'up' : 'down');
        return parseFloat(newValue.toFixed(2));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.section-container');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Abstract market chart background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 L10,45 L20,55 L30,40 L40,60 L50,35 L60,65 L70,50 L80,70 L90,30 L100,50" 
                stroke="currentColor" 
                strokeWidth="0.5" 
                fill="none" 
                className="text-primary" />
        </svg>
      </div>
      
      {/* Floating stock market elements */}
      <div className="absolute w-full h-full overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute opacity-10 text-primary"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.8 + Math.random() * 1.5})`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`
            }}
          >
            {i % 3 === 0 ? <TrendingUp size={40} /> : i % 3 === 1 ? <ChartLine size={40} /> : <ChartBar size={40} />}
          </div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                <span className={`mr-2 inline-flex items-center ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {trend === 'up' ? <TrendingUp size={16} className="mr-1" /> : <TrendingUp size={16} className="mr-1 transform rotate-180" />}
                  {stockValue > 0 ? `+${stockValue}` : stockValue}%
                </span>
                <span className="text-gray-600">| Finance & Operations Expert</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-primary">Chirag S M</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-secondary font-semibold mb-8 relative">
                Finance | Operations and Supply Chain Management
                <div className="h-1 w-20 bg-accent mt-2"></div>
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed backdrop-blur-sm bg-white/30 p-4 rounded-lg border border-gray-100 shadow-sm">
              Motivated and detail-oriented professional with a strong foundation in finance, operations, and supply chain management. Adept at problem-solving, team coordination, and developing solutions to drive operational efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary hover:bg-primary-dark text-white shadow-md transition-all hover:translate-y-[-2px] relative overflow-hidden group">
                <Link to="/portfolio" className="flex items-center">
                  View Portfolio
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all hover:translate-y-[-2px] relative overflow-hidden group">
                <Link to="/contact" className="flex items-center">
                  Contact Me
                  <span className="absolute inset-0 w-0 h-full bg-primary/20 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </Button>
              
              <Button asChild variant="ghost" className="text-primary hover:bg-primary/5 group">
                <a href="/resume.pdf" download className="flex items-center">
                  <Download size={18} className="mr-2 group-hover:animate-bounce" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative">
              {/* Stock market themed profile wrapper */}
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-[spin_60s_linear_infinite]">
                  <div className="h-4 w-4 bg-primary rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="h-4 w-4 bg-accent rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"></div>
                  <div className="h-4 w-4 bg-secondary rounded-full absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="h-4 w-4 bg-primary/60 rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2"></div>
                </div>
                
                {/* Profile image */}
                <div className="w-64 h-64 md:w-72 md:h-72 overflow-hidden rounded-full shadow-xl border-4 border-white relative z-10 bg-gradient-to-br from-gray-50 to-white p-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                    alt="Chirag S M" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-green-400/10 blur-xl"></div>
                <div className="absolute bottom-5 left-5 w-12 h-12 rounded-full bg-blue-400/20 blur-lg"></div>
              </div>
              
              {/* Stock ticker */}
              <div className="mt-6 bg-black/5 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-200 shadow-inner overflow-hidden">
                <div className="flex items-center gap-4 animate-[scroll_20s_linear_infinite]" style={{ width: 'max-content' }}>
                  {['MSFT', 'AAPL', 'GOOG', 'AMZN', 'META', 'TSLA', 'NFLX', 'NVDA'].map((ticker, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm">
                      <span className="font-semibold">{ticker}</span>
                      <span className={Math.random() > 0.5 ? "text-green-600" : "text-red-500"}>
                        {Math.random() > 0.5 ? "+" : "-"}{(Math.random() * 5).toFixed(2)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer" onClick={scrollToNextSection}>
          <span className="text-sm text-gray-500 mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
      
      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
