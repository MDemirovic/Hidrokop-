import { Phone, Truck } from 'lucide-react';

import SectionHeading from './SectionHeading';
import { asset } from '../utils/asset';

const towingContacts = [
  {
    name: 'Leo',
    phoneDisplay: '091 210 5202',
    phoneHref: '0912105202',
  },
  {
    name: 'Denis',
    phoneDisplay: '091 6422 313',
    phoneHref: '0916422313',
  },
];

export default function TowingService() {
  return (
    <section id="vucna-sluzba" className="relative overflow-hidden bg-zinc-950 pb-20 pt-6 md:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,#000000_0%,#000000_28%,rgba(0,0,0,0.82)_56%,rgba(0,0,0,0.34)_82%,rgba(0,0,0,0)_100%)] md:hidden" />
        <div className="absolute top-[-8rem] right-[-8rem] h-[20rem] w-[20rem] rounded-full bg-red-900/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-32 h-[22rem] w-[22rem] rounded-full bg-red-950/14 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-zinc-950" />
      </div>

      <div className="container relative mx-auto grid gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(220px,300px)_minmax(340px,0.95fr)] lg:items-center xl:gap-14">
        <div data-gsap="reveal" data-x="-22">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-red-300">
            <Truck className="h-4 w-4" />
            Vučna služba
          </div>

          <SectionHeading
            title="Brza pomoć"
            subtitle="na cesti"
            description="Ako vozilo stane, treba transport ili siguran dolazak do servisa, nazovite direktno jednog od kontakata za vučnu službu."
            className="max-w-[760px]"
          />

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            Organiziramo vučnu službu za sva vozila, uz jasan dogovor i brz kontakt.
          </p>
        </div>

        <div data-gsap="reveal" data-y="18" className="relative mx-auto w-full max-w-[250px] lg:max-w-[290px]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(220,38,38,0.1),rgba(24,24,27,0))] blur-2xl" />
          <img
            src={asset('vucna.png')}
            alt="Vučna služba"
            width="1024"
            height="1536"
            loading="lazy"
            decoding="async"
            className="relative mx-auto h-auto w-full object-contain"
          />
        </div>

        <div data-gsap="reveal" data-x="24" className="grid gap-4">
          {towingContacts.map((contact) => (
            <a
              key={contact.name}
              href={`tel:${contact.phoneHref}`}
              aria-label={`Nazovi ${contact.name} na broj ${contact.phoneDisplay}`}
              className="group block rounded-[1.8rem] border border-zinc-800 bg-zinc-900/78 p-6 transition-all duration-300 hover:border-red-500/45 hover:bg-zinc-900"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-300">{contact.name}</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-[2rem]">
                    {contact.phoneDisplay}
                  </p>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-300 transition-transform duration-300 group-hover:scale-105">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Nazovite za brzu pomoć na cesti i dogovor vučne službe.
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
