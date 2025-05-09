import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-tech-dark/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="py-4 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-screen-2xl mx-auto">
        <nav className="flex justify-between items-center">
          <a href="#home" className="text-xl md:text-2xl font-bold text-white">
            Sujal<span className="text-tech-blue-light"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <Button size="sm" variant="default" className="ml-2 bg-tech-blue hover:bg-tech-blue-light">
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-tech-darker animate-fade-in px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white px-4 py-2 hover:text-tech-blue-light"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-tech-blue hover:bg-tech-blue-light mt-2">
              <a href="#contact" onClick={toggleMenu}>
                Let's Talk
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
