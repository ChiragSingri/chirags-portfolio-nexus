
import React, { useEffect, useRef } from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animationDelay?: number;
}

const SectionWrapper = ({ 
  children, 
  className = "",
  id,
  animationDelay = 0 
}: SectionWrapperProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add staggered animation for children
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('is-visible');
              }, animationDelay + (index * 100)); // Stagger the animations
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationDelay]);

  return (
    <section 
      id={id} 
      className={`section-container ${className}`} 
      ref={sectionRef}
      style={{
        position: 'relative',
        zIndex: 1
      }}
    >
      {/* Decorative market-themed background element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-5">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 50" 
          preserveAspectRatio="none"
          className="absolute inset-0"
        >
          <path 
            d="M0,35 L5,32 L10,36 L15,30 L20,33 L25,25 L30,30 L35,22 L40,27 L45,20 L50,25 L55,15 L60,20 L65,10 L70,15 L75,5 L80,10 L85,5 L90,15 L95,10 L100,20" 
            stroke="currentColor" 
            strokeWidth="0.3" 
            fill="none" 
            className="text-primary" 
          />
          <path 
            d="M0,40 L5,38 L10,42 L15,36 L20,40 L25,32 L30,38 L35,30 L40,35 L45,28 L50,32 L55,22 L60,28 L65,18 L70,25 L75,15 L80,20 L85,15 L90,22 L95,18 L100,25" 
            stroke="currentColor" 
            strokeWidth="0.3" 
            fill="none" 
            className="text-accent" 
            strokeDasharray="1,1"
          />
        </svg>
      </div>
      
      {children}
    </section>
  );
};

export default SectionWrapper;
