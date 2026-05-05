import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Início', href: '#' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Contato', href: '#contato' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <div className={cn(
        "flex items-center gap-4 md:gap-8 px-4 md:px-8 py-3 rounded-full transition-all duration-500 pointer-events-auto w-full max-w-5xl",
        isScrolled ? "glass shadow-premium" : "bg-white/10 backdrop-blur-sm border border-white/20"
      )}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">F</span>
          </div>
          <span className="text-lg font-bold tracking-tighter text-brand-heading">Florescer</span>
        </div>

        <div className="hidden md:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold text-brand-text hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-accent text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg transition-all flex items-center gap-2">
            Agendar
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="flex items-center gap-4 ml-auto md:hidden">
          <a href="https://wa.me/5581992310781" className="p-2 text-brand-accent">
            <MessageCircle size={24} />
          </a>
          <button 
            className="p-2 text-brand-heading"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 inset-x-4 glass rounded-3xl p-8 shadow-2xl md:hidden pointer-events-auto border border-white/20"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-brand-heading"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-primary py-4 w-full text-lg mt-4">
                Agendar Avaliação
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
