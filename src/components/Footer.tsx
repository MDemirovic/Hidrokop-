import { Mail, Phone } from 'lucide-react';

import { asset } from '../utils/asset';

export default function Footer() {
  const privacyUrl = `${import.meta.env.BASE_URL}politika-privatnosti.html`;
  const termsUrl = `${import.meta.env.BASE_URL}uslovi-koristenja.html`;

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 text-sm text-zinc-600">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-[64px] md:w-auto overflow-hidden">
              <img
                src={asset('logo.png')}
                alt="Hidrokop-HP Auto Logo"
                className="h-16 md:h-20 w-auto max-w-none"
              />
            </div>
            <p>&copy; {new Date().getFullYear()} Hidrokop-HP Auto. Sva prava zadržana.</p>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex gap-4">
              <a
                href={privacyUrl}
                className="hover:text-zinc-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Politika privatnosti
              </a>
              <a
                href={termsUrl}
                className="hover:text-zinc-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Uslovi korištenja
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:051642111"
                aria-label="Nazovite nas"
                className="text-zinc-500 hover:text-red-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:hidrokopdoo@gmail.com"
                aria-label="Pošaljite email"
                className="text-zinc-500 hover:text-red-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
