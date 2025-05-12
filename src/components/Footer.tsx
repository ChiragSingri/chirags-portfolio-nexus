
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and description */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Chirag S M</h3>
            <p className="text-gray-300 mb-6">
              Finance | Operations and Supply Chain Management
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+916362577112" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Phone size={18} />
                <span>+91 63625 77112</span>
              </a>
              <a href="mailto:chiraaagsingri@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Mail size={18} />
                <span>chiraaagsingri@gmail.com</span>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Education</h3>
            <ul className="text-gray-300 space-y-4">
              <li>
                <p className="font-semibold">MBA</p>
                <p>RV Institute of Management (2023-2025)</p>
              </li>
              <li>
                <p className="font-semibold">B.Com</p>
                <p>Vijaya Evening College (2020-2023)</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Chirag S M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
