import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { asset } from '../utils/asset';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Početna', href: '#pocetna' },
    { name: 'Usluge', href: '#usluge' },
    { name: 'Autodijelovi', href: '#autodijelovi' },
    { name: 'Recenzije', href: '#recenzije' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 bg-transparent py-7 lg:absolute lg:py-8">
        <div className="container relative z-10 mx-auto flex items-center justify-between px-6 lg:px-8">
          <a href="#pocetna" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-[76px] overflow-hidden md:w-auto">
              <img
                src={asset('logo.png')}
                alt="Hidrokop-HP Auto Logo"
                className="h-[4.5rem] w-auto max-w-none drop-shadow-2xl md:h-24"
              />
            </div>
          </a>

          <nav className="hidden items-center gap-9 md:flex lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-[1.08rem] font-semibold tracking-[0.01em] text-zinc-300 transition-colors hover:text-white"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Zatvori izbornik' : 'Otvori izbornik'}
            className="relative z-[80] text-zinc-300 transition-colors hover:text-white md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed inset-x-0 top-0 z-[70] border-b border-zinc-800 bg-zinc-950/98 pt-28 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:hidden"
            >
              <div className="container mx-auto flex min-h-[100dvh] flex-col px-6 pb-8">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="border-b border-zinc-800/70 py-4 text-lg font-semibold text-zinc-100 transition-colors hover:text-red-400"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
