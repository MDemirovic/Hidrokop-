import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { asset } from '../utils/asset';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Početna', href: '#pocetna' },
    { name: 'Usluge', href: '#usluge' },
    { name: 'Autodijelovi', href: '#autodijelovi' },
    { name: 'Recenzije', href: '#recenzije' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent py-7 lg:py-8">
      <div className="container mx-auto flex items-center justify-between px-6 relative z-10 lg:px-8">
        <a href="#pocetna" className="flex items-center gap-2">
          <div className="w-[76px] md:w-auto overflow-hidden">
            <img 
              src={asset('logo.png')} 
              alt="Hidrokop-HP Auto Logo" 
              className="h-[4.5rem] md:h-24 w-auto max-w-none drop-shadow-2xl" 
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-[1.08rem] font-semibold tracking-[0.01em] text-zinc-300 hover:text-white transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-800 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-zinc-300 hover:text-white py-2 border-b border-zinc-800/50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

