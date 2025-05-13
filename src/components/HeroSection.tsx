
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Download, ArrowDown, DollarSign, Bitcoin, Wallet, ChartLine } from 'lucide-react';

const HeroSection = () => {
  const [stockValue, setStockValue] = useState(0);
  const [trend, setTrend] = useState<'up' | 'down'>('up');
  const [stockData, setStockData] = useState<number[]>([50, 52, 48, 55, 46, 54, 58, 53, 57, 60, 55, 59, 62, 58, 63]);
  const [cryptoPrice, setCryptoPrice] = useState(42389.75);

  useEffect(() => {
    // Simulate stock market fluctuations
    const interval = setInterval(() => {
      setStockValue(prev => {
        const change = Math.random() * 10 - 5;
        const newValue = prev + change;
        setTrend(change >= 0 ? 'up' : 'down');
        return parseFloat(newValue.toFixed(2));
      });

      // Add new data point to chart
      setStockData(prev => {
        const lastValue = prev[prev.length - 1];
        const change = Math.random() * 8 - 4;
        const newValue = Math.max(30, Math.min(70, lastValue + change));
        const newData = [...prev.slice(1), newValue];
        return newData;
      });

      // Update crypto price
      setCryptoPrice(prev => {
        const change = Math.random() * 200 - 100;
        return parseFloat((prev + change).toFixed(2));
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
    <section className="min-h-screen relative bg-gradient-to-b from-blue-900 to-indigo-950 text-white overflow-hidden">
      {/* Abstract financial background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-400"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
                filter: 'blur(60px)',
                animation: `pulse ${Math.random() * 10 + 5}s infinite alternate`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Financial icons backdrop */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => {
          const Icon = [DollarSign, Bitcoin, Wallet, ChartLine][i % 4];
          return (
            <Icon
              key={i}
              className="absolute text-blue-500/10"
              style={{
                width: `${Math.random() * 60 + 40}px`,
                height: `${Math.random() * 60 + 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left side content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full mb-6">
              <span className={`flex items-center gap-1 ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                <ChartLine size={16} />
                {trend === 'up' ? '+' : ''}{stockValue.toFixed(2)}%
              </span>
              <span className="mx-2">|</span>
              <span className="text-blue-300">Finance & Operations Expert</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                Chirag S M
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-blue-200 font-medium mb-6">
              Finance | Operations and Supply Chain Management
              <div className="h-1 w-20 bg-blue-500 mt-3"></div>
            </h2>

            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg border border-white/10 mb-8 shadow-lg">
              <p className="text-lg text-blue-100">
                Motivated and detail-oriented professional with a strong foundation in finance, operations, 
                and supply chain management. Adept at problem-solving, team coordination, and developing 
                solutions to drive operational efficiency.
              </p>
            </div>
            
            {/* Financial metrics cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg border border-white/10">
                <div className="text-xs text-blue-300 mb-1">BTC/USD</div>
                <div className="text-xl font-mono font-bold">${cryptoPrice}</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg border border-white/10">
                <div className="text-xs text-blue-300 mb-1">Performance</div>
                <div className={`text-xl font-bold ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                  {trend === 'up' ? '+' : ''}{stockValue.toFixed(1)}%
                </div>
              </div>
              
              <div className="hidden md:block bg-white/10 backdrop-blur p-4 rounded-lg border border-white/10">
                <div className="text-xs text-blue-300 mb-1">Expertise</div>
                <div className="text-xl font-bold text-blue-300">Finance</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/30">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
              
              <Button asChild variant="outline" className="border-2 border-blue-500 text-blue-300 hover:bg-blue-600 hover:text-white">
                <Link to="/contact">Contact Me</Link>
              </Button>
              
              <Button asChild variant="ghost" className="text-blue-300 hover:bg-blue-600/20">
                <a href="https://crimson-kip-34.tiiny.site" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Download size={18} className="mr-2" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right side with profile */}
          <div className="animate-fade-in flex justify-center">
            <div className="relative max-w-md">
              {/* Glowing background effect */}
              <div className="absolute -inset-2 bg-blue-500/30 rounded-2xl blur-2xl"></div>
              
              {/* Glass card container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                {/* Card header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex gap-2">
                    {[1,2,3].map(i => (
                      <div key={i} className={`w-3 h-3 rounded-full ${
                        i === 1 ? 'bg-red-500' : i === 2 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                    ))}
                  </div>
                  <div className="text-xs text-blue-300">FINANCIAL ANALYST</div>
                </div>
                
                {/* Card content */}
                <div className="p-4">
                  {/* Profile image */}
                  <div className="relative mb-4">
                    <img 
                      src="https://i.postimg.cc/yNDscVXH/Untitled-design-3.png" 
                      alt="Chirag S M" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent rounded-lg"></div>
                  </div>
                  
                  {/* Financial chart */}
                  <div className="h-24 bg-black/30 p-3 rounded-lg mb-4">
                    <div className="h-full w-full relative">
                      <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <path
                          d={`M0,${40 - stockData[0] / 5} ${stockData.map((value, index) => 
                            `L${(index + 1) * (100 / stockData.length)},${40 - value / 5}`).join(' ')}`}
                          fill="none"
                          stroke={trend === 'up' ? "#4ADE80" : "#F87171"}
                          strokeWidth="2"
                        />
                        <path
                          d={`M0,${40 - stockData[0] / 5} ${stockData.map((value, index) => 
                            `L${(index + 1) * (100 / stockData.length)},${40 - value / 5}`).join(' ')} L100,40 L0,40 Z`}
                          fill={trend === 'up' ? "url(#gradientUp)" : "url(#gradientDown)"}
                          opacity="0.2"
                        />
                        <defs>
                          <linearGradient id="gradientUp" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.8"/>
                            <stop offset="100%" stopColor="#4ADE80" stopOpacity="0.1"/>
                          </linearGradient>
                          <linearGradient id="gradientDown" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#F87171" stopOpacity="0.8"/>
                            <stop offset="100%" stopColor="#F87171" stopOpacity="0.1"/>
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      <div className="absolute top-1 left-1 text-xs text-blue-300 font-mono">PERFORMANCE</div>
                      <div className={`absolute bottom-1 right-1 text-xs font-mono font-bold ${
                        trend === 'up' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {trend === 'up' ? '+' : ''}{stockValue.toFixed(2)}%
                      </div>
                    </div>
                  </div>
                  
                  {/* Skills/badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['MBA', 'Finance', 'Operations'].map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-900/50 text-xs text-blue-300 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce" onClick={scrollToNextSection}>
          <ArrowDown className="text-blue-400" size={20} />
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
