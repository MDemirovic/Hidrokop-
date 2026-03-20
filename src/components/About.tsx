import { CheckCircle2 } from 'lucide-react';

import SectionHeading from './SectionHeading';
import { asset } from '../utils/asset';

export default function About() {
  const aboutPoints = [
    'Stručan tim sa certifikatima',
    'Najmodernija oprema za dijagnostiku',
    'Garancija na ugrađene dijelove',
    'Pristup rješavanju problema',
  ];

  return (
    <section id="o-nama" className="relative overflow-hidden bg-[#09090b] pb-14 pt-20 md:py-24">
      <div className="container relative mx-auto px-6">
        <div className="flex flex-col gap-6 md:gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div data-gsap="reveal" data-x="50" className="w-full lg:order-2 lg:w-1/2">
            <SectionHeading
              title="Servis kojem"
              subtitle="vjerujete"
              className="mb-6 max-w-[560px]"
              titleClassName="md:text-[4.5rem]"
            />

            <div className="hidden space-y-6 text-lg leading-relaxed text-zinc-400 lg:block">
              <p>
                Hidrokop-HP Auto je nastao iz strasti prema automobilima i želje da vozačima pružimo poštenu, stručnu
                i brzu uslugu. Znamo koliko je frustrirajuće kada auto stane, zato smo tu da taj stres svedemo na minimum.
              </p>
              <p>
                Naš pristup je jednostavan: nema skrivenih troškova, nema nepotrebnih popravki. Fokusirani smo na kvalitet
                i povjerenje, jer želimo da nam se vratite i da nas preporučite prijateljima.
              </p>
            </div>

            <ul className="mt-8 hidden space-y-4 lg:block">
              {aboutPoints.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-red-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-gsap="reveal" data-x="-50" className="relative w-full lg:order-1 lg:w-1/2">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-red-900/20">
              <img
                src={asset('HPUlaz.png')}
                alt="Hidrokop-HP Auto Ulaz"
                className="h-[500px] w-full object-cover object-[20%_center]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            </div>

            <div className="absolute -bottom-8 -right-8 hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl md:block">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-red-600">15+</div>
                <div className="font-medium leading-tight text-zinc-300">
                  Godina
                  <br />
                  Iskustva
                </div>
              </div>
            </div>
          </div>

          <div data-gsap="reveal" data-y="20" className="w-full lg:hidden">
            <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
              <p>
                Hidrokop-HP Auto je nastao iz strasti prema automobilima i želje da vozačima pružimo poštenu, stručnu
                i brzu uslugu. Znamo koliko je frustrirajuće kada auto stane, zato smo tu da taj stres svedemo na minimum.
              </p>
              <p>
                Naš pristup je jednostavan: nema skrivenih troškova, nema nepotrebnih popravki. Fokusirani smo na kvalitet
                i povjerenje, jer želimo da nam se vratite i da nas preporučite prijateljima.
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {aboutPoints.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-red-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
