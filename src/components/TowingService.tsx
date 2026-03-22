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
    <section id="vucna-sluzba" className="relative isolate -mt-px overflow-hidden bg-zinc-950 pb-20 pt-6 md:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(82%_62%_at_50%_56%,rgba(185,28,28,0.22),rgba(9,9,11,0.96)_52%,#09090b_82%)] md:hidden" />
        <div className="absolute inset-0 hidden bg-[radial-gradient(96%_92%_at_56%_34%,rgba(185,28,28,0.18),rgba(9,9,11,0.97)_54%,#09090b_84%)] md:block" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-transparent md:h-52" />
        <div className="absolute inset-x-0 bottom-[-10rem] h-[24rem] bg-[radial-gradient(70%_100%_at_50%_0%,rgba(127,29,29,0.26),rgba(127,29,29,0.12)_38%,rgba(9,9,11,0)_78%)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-zinc-950/55 to-zinc-950" />
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

        
        </div>

        <div data-gsap="reveal" data-y="18" className="relative mx-auto w-full max-w-[250px] lg:max-w-[290px]">
          <div className="absolute left-1/2 top-[12%] h-[13rem] w-[13rem] -translate-x-1/2 bg-[linear-gradient(180deg,rgba(177,18,23,0.16),rgba(177,18,23,0.08)_40%,rgba(177,18,23,0)_100%)] blur-3xl md:h-[15rem] md:w-[15rem]" />
          <div className="absolute left-1/2 top-[40%] h-[9rem] w-[9rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,42,42,0.12),rgba(177,18,23,0.06)_48%,rgba(177,18,23,0)_78%)] blur-2xl md:h-[10rem] md:w-[10rem]" />
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
