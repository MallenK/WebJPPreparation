import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Tecnificación', path: '/tecnificacion' },
  { name: 'Metodología', path: '/metodologia' },
  { name: 'Equipo', path: '/equipo' },
  { name: 'Campus', path: '/campus' },
  { name: 'Galería', path: '/galeria' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contacto', path: '/contacto' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 py-3 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center font-display font-extrabold text-white text-xl group-hover:rotate-6 transition-transform shadow-lg shadow-brand-primary/20">
            JP
          </div>
          <span className={cn(
            "font-display font-extrabold text-xl tracking-tighter hidden sm:block transition-colors duration-300",
            scrolled || location.pathname !== '/' ? 'text-brand-dark' : 'text-white'
          )}>
            PREPARATION
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-bold transition-all duration-300 hover:text-brand-primary relative group/link',
                location.pathname === link.path 
                  ? 'text-brand-primary' 
                  : (scrolled || location.pathname !== '/' ? 'text-brand-text' : 'text-white')
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover/link:w-full",
                location.pathname === link.path && "w-full"
              )} />
            </Link>
          ))}
          <Link to="/contacto" className="btn-primary py-2 px-6 text-sm rounded-xl shadow-lg shadow-brand-primary/20 hover:scale-105 active:scale-95 transition-all">
            Únete
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg",
            scrolled || location.pathname !== '/' ? 'text-brand-dark' : 'text-white'
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-lg font-bold flex items-center justify-between px-4 py-2 rounded-xl transition-colors',
                  location.pathname === link.path ? 'bg-brand-light text-brand-primary' : 'text-brand-text hover:bg-slate-50'
                )}
              >
                {link.name}
                <ChevronRight size={18} />
              </Link>
            ))}
            <Link to="/contacto" className="btn-primary text-center mt-2">
              Únete ahora
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
