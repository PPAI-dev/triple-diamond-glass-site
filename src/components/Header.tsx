import React, { useState, useEffect } from 'react';
import { Phone, Linkedin, Facebook, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLenis } from './SmoothScroll';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsScrolled(currentScrollY > 20);
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const updateScroll = (e: any) => {
      const currentScrollY = e.scroll;
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    lenis.on('scroll', updateScroll);
    return () => {
      lenis.off('scroll', updateScroll);
    };
  }, [lenis, lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Company', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element && lenis) {
      lenis.scrollTo(element, { offset: -100, duration: 1.5 });
    }
  };

  const Logo = () => (
    <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>
      <motion.div 
        className="flex items-center group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        style={{ scale: isScrolled ? 0.8 : 1 }}
      >
        <img 
          src="/logo.png" 
          alt="Triple Diamond Glass" 
          className="h-28 md:h-36 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </a>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled ? 'bg-[#020617]/95 backdrop-blur-md shadow-lg py-1' : 'bg-[#020617]/40 py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Top Row: Logo and Contact Info */}
        <div className="flex items-center justify-between mb-4">
          {/* Logo */}
          <Logo />

          {/* Socials and Phone */}
          <div className="hidden md:flex flex-col items-end gap-1">
            <div className="flex items-center gap-3 text-white">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1E3A8A] transition-colors" aria-label="Visit Triple Diamond Glass on LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1E3A8A] transition-colors" aria-label="Visit Triple Diamond Glass on Facebook">
                <Facebook size={18} />
              </a>
            </div>
            <a href="tel:9419151061" className="text-white font-sans font-medium text-xl tracking-wide group flex items-center gap-2">
              <Phone size={16} className="group-hover:rotate-12 transition-transform" />
              (941) 915-1061
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Bottom Row: Navigation Links */}
        <nav role="navigation" className="hidden md:flex items-center justify-center border-t border-white/10 pt-4 gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white text-lg font-heading font-medium tracking-[0.15em] hover:text-[#1E3A8A] transition-all duration-300 hover:italic"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[#0F172A] md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white text-2xl font-heading font-light tracking-[0.1em] py-6 border-b border-white/5 flex justify-between items-center group italic"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.name}
                  <ChevronRight size={20} className="text-white group-hover:text-white transition-colors" />
                </a>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                <a href="tel:9419151061" className="text-white font-bold text-xl">
                  (941) 915-1061
                </a>
                <div className="flex items-center gap-4 text-white">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
