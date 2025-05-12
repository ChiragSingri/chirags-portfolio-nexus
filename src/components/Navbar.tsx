
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChartBar, Download } from 'lucide-react';
import { Button } from './ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-primary font-display font-bold text-2xl flex items-center gap-2 group"
        >
          <span className="inline-block transition-all duration-300 group-hover:scale-110">
            <ChartBar 
              size={28} 
              className="text-primary inline-block transition-all" 
            />
          </span>
          <span className="relative">
            Chirag S M
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink 
                    className={`${navigationMenuTriggerStyle()} ${
                      location.pathname === '/' ? 'bg-primary/10 text-primary' : ''
                    } relative px-4 py-2 rounded-md transition-colors hover:bg-primary/5`}
                  >
                    Home
                    {location.pathname === '/' && (
                      <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-primary mx-auto w-10"></span>
                    )}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink 
                    className={`${navigationMenuTriggerStyle()} ${
                      location.pathname === '/about' ? 'bg-primary/10 text-primary' : ''
                    } relative px-4 py-2 rounded-md transition-colors hover:bg-primary/5`}
                  >
                    About
                    {location.pathname === '/about' && (
                      <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-primary mx-auto w-10"></span>
                    )}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={`${
                    location.pathname === '/portfolio' ? 'bg-primary/10 text-primary' : ''
                  }`}
                >
                  Portfolio
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/10 to-primary/20 p-6 no-underline outline-none focus:shadow-md"
                          to="/portfolio"
                        >
                          <ChartBar className="h-6 w-6 text-primary" />
                          <div className="mb-2 mt-4 text-lg font-medium text-primary">
                            View All Projects
                          </div>
                          <p className="text-sm leading-tight text-primary/80">
                            Explore my financial analysis projects, research, and case studies
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/portfolio#research" title="Research Projects">
                      Geopolitical conflicts impact on exchange rate dynamics
                    </ListItem>
                    <ListItem href="/portfolio#financial-modeling" title="Financial Modeling">
                      Corporate valuation using DDM and DCF models
                    </ListItem>
                    <ListItem href="/portfolio#stock-valuation" title="Stock Valuation">
                      Stock valuation with Dividend Discount Model
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/services">
                  <NavigationMenuLink 
                    className={`${navigationMenuTriggerStyle()} ${
                      location.pathname === '/services' ? 'bg-primary/10 text-primary' : ''
                    } relative px-4 py-2 rounded-md transition-colors hover:bg-primary/5`}
                  >
                    Services
                    {location.pathname === '/services' && (
                      <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-primary mx-auto w-10"></span>
                    )}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink 
                    className={`${navigationMenuTriggerStyle()} ${
                      location.pathname === '/contact' ? 'bg-primary/10 text-primary' : ''
                    } relative px-4 py-2 rounded-md transition-colors hover:bg-primary/5`}
                  >
                    Contact
                    {location.pathname === '/contact' && (
                      <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-primary mx-auto w-10"></span>
                    )}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <a href="/resume.pdf" download>
            <Button variant="outline" className="ml-4 border-primary text-primary hover:bg-primary hover:text-white">
              <Download size={16} className="mr-2" />
              Resume
            </Button>
          </a>
        </div>
        
        {/* Mobile navigation */}
        {isOpen && (
          <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 lg:hidden">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)}>
                <X size={24} className="text-primary" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-6 p-8">
              <MobileNavLink to="/" onClick={() => setIsOpen(false)} active={location.pathname === '/'}>Home</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsOpen(false)} active={location.pathname === '/about'}>About</MobileNavLink>
              <MobileNavLink to="/portfolio" onClick={() => setIsOpen(false)} active={location.pathname === '/portfolio'}>Portfolio</MobileNavLink>
              <MobileNavLink to="/services" onClick={() => setIsOpen(false)} active={location.pathname === '/services'}>Services</MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setIsOpen(false)} active={location.pathname === '/contact'}>Contact</MobileNavLink>
              
              <div className="w-full border-t border-gray-100 my-4"></div>
              
              <a 
                href="/resume.pdf" 
                download 
                className="mt-4 px-6 py-2 rounded bg-primary text-white hover:bg-primary-dark transition-colors flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const MobileNavLink = ({ 
  to, 
  children, 
  onClick,
  active = false,
}: { 
  to: string; 
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) => (
  <Link
    to={to}
    className={`text-xl ${active ? 'text-primary font-semibold' : 'text-secondary-dark'} hover:text-primary font-medium py-2 transition-colors relative`}
    onClick={onClick}
  >
    {children}
    {active && <span className="absolute -bottom-1 left-0 right-0 mx-auto w-8 h-0.5 bg-primary"></span>}
  </Link>
);

export default Navbar;
