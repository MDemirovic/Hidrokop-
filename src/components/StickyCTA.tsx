import { Phone } from 'lucide-react';

export default function StickyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <a 
        href="tel:051642111" 
        className="flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full shadow-lg shadow-red-600/30 hover:bg-red-700 hover:scale-110 transition-all"
        aria-label="Nazovi odmah"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
