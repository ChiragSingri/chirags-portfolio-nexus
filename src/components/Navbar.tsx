
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-primary font-display font-bold text-2xl">
          Chirag S M
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a href="/resume.pdf" download>
            <Button variant="outline" className="ml-4 border-primary text-primary hover:bg-primary hover:text-white">
              Download Resume
            </Button>
          </a>
        </nav>
        
        {/* Mobile navigation */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 lg:hidden">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)}>
                <X size={24} className="text-primary" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-6 p-8">
              <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
              <MobileNavLink to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</MobileNavLink>
              <MobileNavLink to="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
              <a 
                href="/resume.pdf" 
                download 
                className="mt-4 px-6 py-2 rounded bg-primary text-white hover:bg-primary-dark transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Download Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-secondary-dark hover:text-primary font-medium transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    className="text-xl text-secondary-dark hover:text-primary font-medium py-2 transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
