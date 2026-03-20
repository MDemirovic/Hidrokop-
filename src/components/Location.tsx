import { MapPin } from 'lucide-react';

import SectionHeading from './SectionHeading';

export default function Location() {
  const mapUrl =
    'https://maps.google.com/maps?q=Hidrokop+-+HP+Auto,+Rijeka&t=&z=15&ie=UTF8&iwloc=&output=embed';

  const openingHours = [
    { day: 'Ponedjeljak - Petak', hours: '08:00 - 16:00' },
    { day: 'Subota', hours: '08:00 - 14:00' },
    { day: 'Nedjelja', hours: 'Zatvoreno' },
  ];

  return (
    <section
      id="lokacija"
      className="relative -mt-2 overflow-hidden bg-zinc-950 pb-14 pt-8 md:mt-0 md:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[56%] h-[34rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/14 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-18" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(120,20,30,0.18),rgba(9,9,11,0.96)_45%,#09090b_72%)]" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-14" data-gsap="reveal" data-y="20">
          <SectionHeading
            align="center"
            title="Servisni punkt"
            subtitle="u srcu Rijeke"
            inline
            className="max-w-[760px]"
            titleClassName="md:max-w-none"
          />
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/70 shadow-[0_25px_85px_-35px_rgba(0,0,0,0.95)] backdrop-blur-sm">
          <div className="grid lg:grid-cols-[420px_1fr]">
            <div
              data-gsap="reveal"
              data-x="-48"
              data-start="top 82%"
              className="relative z-10 border-b border-white/10 bg-zinc-950/85 p-8 lg:border-b-0 lg:border-r lg:p-12"
            >
              <div aria-hidden className="absolute -right-10 top-12 hidden h-36 w-36 rounded-full bg-red-600/15 blur-2xl lg:block" />

              <div className="relative mb-8 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-500/35 bg-red-500/15">
                  <MapPin className="h-7 w-7 text-red-300" />
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-semibold text-white">Lokacija</h3>
                  <p className="leading-relaxed text-zinc-300">
                    Zametska ulica 28
                    <br />
                    51000, Rijeka
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-300">Radno vrijeme</h4>
                <ul className="space-y-3">
                  {openingHours.map((item) => (
                    <li key={item.day} className="flex items-center justify-between gap-3 text-sm">
                      <span className="text-zinc-400">{item.day}</span>
                      <span className={`font-semibold ${item.hours === 'Zatvoreno' ? 'text-zinc-500' : 'text-zinc-100'}`}>
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Hidrokop+-+HP+Auto,+Rijeka"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-red-400/45 bg-red-500/15 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-red-200 transition hover:border-red-300 hover:bg-red-500/25"
              >
                Otvori u Google Maps
              </a>
            </div>

            <div
              data-gsap="reveal"
              data-x="48"
              data-delay="0.08"
              data-scale="0.985"
              data-start="top 82%"
              className="relative min-h-[420px] overflow-hidden bg-zinc-900"
            >
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
                title="Google Maps Lokacija"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
