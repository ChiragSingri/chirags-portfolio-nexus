
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Download, ArrowDown, TrendingUp, ChartLine, ChartBar } from 'lucide-react';

const HeroSection = () => {
  const [stockValue, setStockValue] = useState(0);
  const [trend, setTrend] = useState<'up' | 'down'>('up');
  const [stockData, setStockData] = useState<number[]>([50, 52, 48, 55, 46, 54, 58, 53, 57, 60, 55, 59, 62, 58, 63]);

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
    <section className="min-h-screen relative overflow-hidden bg-[#1E222D] text-white">
      {/* Grid background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="grid-background"></div>
      </div>
      
      {/* Market candles overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Candlestick patterns */}
          {[...Array(20)].map((_, i) => (
            <g key={i} transform={`translate(${i * 5}, 0)`}>
              <line 
                x1={i * 5 + 2.5} 
                y1={30 + Math.random() * 30} 
                x2={i * 5 + 2.5} 
                y2={40 + Math.random() * 20} 
                stroke="#4CAF50" 
                strokeWidth="0.5" 
              />
              <rect 
                x={i * 5 + 1.5} 
                y={35 + Math.random() * 20} 
                width="2" 
                height={5 + Math.random() * 10} 
                fill={Math.random() > 0.5 ? "#4CAF50" : "#F44336"} 
              />
            </g>
          ))}
        </svg>
      </div>
      
      {/* Floating market elements */}
      <div className="absolute w-full h-full overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute opacity-10 text-blue-400"
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
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left content: Text information */}
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="relative mb-8">
              <div className="inline-block px-4 py-1 bg-[#2962FF]/10 rounded-full text-[#2962FF] text-sm font-medium mb-4">
                <span className={`mr-2 inline-flex items-center ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {trend === 'up' ? <TrendingUp size={16} className="mr-1" /> : <TrendingUp size={16} className="mr-1 transform rotate-180" />}
                  {stockValue > 0 ? `+${stockValue}` : stockValue}%
                </span>
                <span className="text-gray-400">| Finance & Operations Expert</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                <span className="text-[#2962FF]">Chirag S M</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-300 font-semibold mb-8 relative">
                Finance | Operations and Supply Chain Management
                <div className="h-1 w-20 bg-[#2962FF] mt-2"></div>
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              Motivated and detail-oriented professional with a strong foundation in finance, operations, and supply chain management. Adept at problem-solving, team coordination, and developing solutions to drive operational efficiency.
            </p>
            
            {/* Live chart visualization */}
            <div className="h-20 mb-6 bg-[#131722] p-3 rounded-lg border border-white/10 overflow-hidden">
              <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path
                  d={`M0,${20 - stockData[0] / 5} ${stockData.map((value, index) => `L${(index + 1) * (100 / stockData.length)},${20 - value / 5}`).join(' ')}`}
                  fill="none"
                  stroke={trend === 'up' ? "#26A69A" : "#EF5350"}
                  strokeWidth="0.5"
                />
                <path
                  d={`M0,${20 - stockData[0] / 5} ${stockData.map((value, index) => `L${(index + 1) * (100 / stockData.length)},${20 - value / 5}`).join(' ')} L100,20 L0,20 Z`}
                  fill={`url(#${trend === 'up' ? 'upGradient' : 'downGradient'})`}
                  opacity="0.2"
                />
                <defs>
                  <linearGradient id="upGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#26A69A" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#26A69A" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="downGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EF5350" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#EF5350" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-[#2962FF] hover:bg-[#1E45D2] text-white shadow-md transition-all hover:translate-y-[-2px]">
                <Link to="/portfolio" className="flex items-center">
                  View Portfolio
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-2 border-[#2962FF] text-[#2962FF] hover:bg-[#2962FF] hover:text-white transition-all hover:translate-y-[-2px]">
                <Link to="/contact" className="flex items-center">
                  Contact Me
                </Link>
              </Button>
              
              <Button asChild variant="ghost" className="text-[#2962FF] hover:bg-[#2962FF]/10">
                <a href="https://crimson-kip-34.tiiny.site" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Download size={18} className="mr-2 group-hover:animate-bounce" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right content: Profile */}
          <div className="w-full md:w-1/2 flex justify-center items-center animate-fade-in">
            <div className="relative">
              {/* TradingView-style terminal frame for profile */}
              <div className="w-full max-w-md p-4 relative bg-[#131722] border border-[#2A2E39] rounded-lg shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#2A2E39]">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400">ANALYST PROFILE</div>
                </div>
                
                {/* Profile content */}
                <div className="bg-[#1E222D] p-4 rounded-md shadow-inner">
                  <div className="relative overflow-hidden mb-3">
                    <img 
                      src="https://i.postimg.cc/yNDscVXH/Untitled-design-3.png" 
                      alt="Chirag S M" 
                      className="w-full h-64 object-cover rounded-md"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#131722] to-transparent h-20"></div>
                  </div>
                  
                  {/* Mini metrics under photo */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-[#2A2E39] p-2 rounded text-center">
                      <div className="text-xs text-gray-400">Performance</div>
                      <div className={trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                        {trend === 'up' ? '+' : ''}{stockValue}%
                      </div>
                    </div>
                    <div className="bg-[#2A2E39] p-2 rounded text-center">
                      <div className="text-xs text-gray-400">Expertise</div>
                      <div className="text-[#2962FF]">Finance</div>
                    </div>
                    <div className="bg-[#2A2E39] p-2 rounded text-center">
                      <div className="text-xs text-gray-400">Risk</div>
                      <div className="text-yellow-500">Medium</div>
                    </div>
                  </div>
                  
                  {/* Stock ticker */}
                  <div className="bg-[#2A2E39] px-3 py-2 rounded-md overflow-hidden">
                    <div className="flex items-center gap-4 animate-[scroll_20s_linear_infinite]" style={{ width: 'max-content' }}>
                      {['MSFT', 'AAPL', 'GOOG', 'AMZN', 'META', 'TSLA', 'NFLX', 'NVDA'].map((ticker, i) => (
                        <div key={i} className="flex items-center gap-1 text-sm">
                          <span className="font-mono font-semibold">{ticker}</span>
                          <span className={Math.random() > 0.5 ? "text-green-500" : "text-red-500"}>
                            {Math.random() > 0.5 ? "+" : "-"}{(Math.random() * 5).toFixed(2)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer" onClick={scrollToNextSection}>
          <span className="text-sm text-gray-400 mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-[#2962FF]" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .grid-background {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
