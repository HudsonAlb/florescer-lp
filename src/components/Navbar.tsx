import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '../lib/utils';
import { Magnetic } from './Interactive';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 pointer-events-none"
    >
      <div className="container-custom flex justify-center">
        <div className={cn(
          "flex items-center gap-8 px-6 py-3 rounded-full transition-all duration-500 pointer-events-auto",
          isScrolled ? "glass shadow-premium" : "bg-white/10 backdrop-blur-sm"
        )}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
              <Heart className="text-white fill-white" size={16} />
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <Magnetic key={link.name}>
                <motion.a
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-sm font-medium text-brand-text/70 hover:text-brand-accent transition-colors px-2 py-1"
                >
                  {link.name}
                </motion.a>
              </Magnetic>
            ))}
            <Magnetic>
              <button className="bg-gradient-to-r from-brand-lavender to-brand-accent text-white px-5 py-2 rounded-full text-xs font-bold hover:shadow-premium hover:scale-105 transition-all">
                AGENDAR
              </button>
            </Magnetic>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-brand-heading"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
            className="absolute top-20 left-6 right-6 md:hidden glass rounded-3xl overflow-hidden pointer-events-auto p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-brand-text p-2 hover:bg-brand-lavender rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-accent text-white px-6 py-4 rounded-full font-medium mt-2">
                Agendar Consulta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
