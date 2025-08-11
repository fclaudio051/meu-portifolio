'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Tech Stack', href: '#tech' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar seção ativa
      const sections = links.map(link => link.href);
      const currentSection = sections.find(section => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'backdrop-blur-md bg-black/80 border-b border-zinc-800/50 shadow-lg shadow-black/20' 
            : 'backdrop-blur-sm bg-black/40 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#hero"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
            onClick={() => handleLinkClick('#hero')}
          >
            <div className="relative">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Cláudio
              </span>
              <span className="text-2xl font-bold text-white">.dev</span>
              
              {/* Underline effect */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                whileHover={{ y: -2 }}
                onClick={() => handleLinkClick(link.href)}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  activeSection === link.href 
                    ? 'text-blue-400' 
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                {link.name}
                
                {/* Active indicator */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === link.href ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover effect */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 opacity-50"></div>
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-blue-400 transition-colors duration-300"
            aria-label="Menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.div>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-[73px] left-0 w-full z-40 md:hidden overflow-hidden"
      >
        <div className="backdrop-blur-md bg-black/90 border-b border-zinc-800/50">
          <nav className="max-w-7xl mx-auto px-6 py-4">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                onClick={() => handleLinkClick(link.href)}
                className={`block py-3 text-lg font-medium transition-all duration-300 border-l-2 pl-4 ${
                  activeSection === link.href
                    ? 'text-blue-400 border-blue-400 bg-blue-400/10'
                    : 'text-zinc-300 hover:text-white border-transparent hover:border-zinc-600 hover:bg-zinc-800/50'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  );
}