import { Phone, ArrowRight } from 'lucide-react';

import { asset } from '../utils/asset';

export default function Hero() {
  return (
    <section id="pocetna" className="relative w-full overflow-hidden pb-8 pt-32 md:flex md:h-screen md:items-center md:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={asset('bg.png')}
          alt="Auto Servis"
          className="absolute top-0 right-0 h-full w-[115%] max-w-none object-cover object-[70%_center] md:w-[106%] md:object-center"
        />
        <div className="absolute inset-0 w-full bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent md:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent md:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-zinc-950/70 to-zinc-950 md:h-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-start justify-center px-6 md:h-full md:pb-16 md:pt-10">
        <div data-gsap="load" className="max-w-3xl w-full text-left">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[2px] w-8 bg-red-600" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-500 md:text-base">Hidrokop HP Auto</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
            Autoservis i prodaja <br className="hidden md:block" />
            <span>autodijelova.</span>
          </h1>

          <p className="mb-10 max-w-xl text-lg font-light leading-relaxed text-zinc-400">
            Od brze dijagnostike i pouzdanih popravaka do širokog asortimana kvalitetnih autodijelova - sve za vaš
            automobil na jednom mjestu.
          </p>

          <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="tel:051642111"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 font-medium text-white transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              <span>Nazovi odmah</span>
            </a>

            <a
              href="#usluge"
              className="group flex w-full items-center justify-center gap-3 rounded-full border border-zinc-700 bg-transparent px-8 py-4 font-medium text-zinc-300 transition-all duration-300 hover:border-zinc-400 hover:text-white sm:w-auto"
            >
              <span>Naše usluge</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
