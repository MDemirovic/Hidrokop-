import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

import SectionHeading from './SectionHeading';

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const mapUrl =
    'https://maps.google.com/maps?q=Hidrokop+-+HP+Auto,+Rijeka&t=&z=15&ie=UTF8&iwloc=&output=embed';

  const openingHours = [
    { day: 'Ponedjeljak - Petak', hours: '08:00 - 16:00' },
    { day: 'Subota', hours: '08:00 - 14:00' },
    { day: 'Nedjelja', hours: 'Zatvoreno' },
  ];

  useEffect(() => {
    if (!sectionRef.current || shouldLoadMap) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [shouldLoadMap]);

  return (
    <section
      ref={sectionRef}
      id="lokacija"
      className="relative -mt-2 overflow-x-clip overflow-y-hidden bg-zinc-950 pb-0 pt-8 md:mt-0 md:pt-28 md:pb-14 lg:pb-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[56%] h-[34rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/14 blur-[150px] md:hidden" />
        <div className="absolute left-1/2 top-[46%] hidden h-[28rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/8 blur-[140px] md:block" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-18" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(120,20,30,0.18),rgba(9,9,11,0.96)_45%,#09090b_72%)] md:hidden" />
        <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_50%_48%,rgba(120,20,30,0.1),rgba(9,9,11,0.97)_42%,#09090b_68%)] md:block" />
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
            subtitleClassName="block text-zinc-100 sm:inline"
          />
        </div>

        <div className="relative w-full max-w-full overflow-hidden rounded-t-[2rem] border border-white/10 border-b-0 bg-zinc-950/70 shadow-[0_25px_85px_-35px_rgba(0,0,0,0.95)] backdrop-blur-sm lg:rounded-[2rem] lg:border-b">
          <div className="grid min-w-0 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
            <div className="relative z-10 min-w-0 border-b border-white/10 bg-zinc-950/85 p-8 lg:border-b-0 lg:border-r lg:p-12">
              <div aria-hidden className="absolute -right-10 top-12 hidden h-36 w-36 rounded-full bg-red-600/15 blur-2xl lg:block" />

              <div data-gsap="reveal" data-y="20" data-start="top 82%" className="relative mb-8 flex items-start gap-4">
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

              <div
                data-gsap="reveal"
                data-y="20"
                data-delay="0.04"
                data-start="top 82%"
                className="rounded-2xl border border-white/10 bg-black/30 p-5"
              >
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-300">Radno vrijeme</h4>
                <ul className="space-y-3">
                  {openingHours.map((item) => (
                    <li key={item.day} className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 text-sm">
                      <span className="text-zinc-400">{item.day}</span>
                      <span
                        className={`text-right font-semibold ${
                          item.hours === 'Zatvoreno' ? 'text-zinc-500' : 'text-zinc-100'
                        }`}
                      >
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                data-gsap="reveal"
                data-y="20"
                data-delay="0.08"
                data-start="top 82%"
                href="https://www.google.com/maps/search/?api=1&query=Hidrokop+-+HP+Auto,+Rijeka"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-red-400/45 bg-red-500/15 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-red-200 transition hover:border-red-300 hover:bg-red-500/25"
              >
                Otvori u Google Maps
              </a>
            </div>

            <div className="relative h-[320px] min-w-0 overflow-hidden bg-transparent lg:h-auto lg:min-h-[420px] lg:bg-zinc-900">
              {shouldLoadMap ? (
                <iframe
                  data-gsap="reveal"
                  data-y="20"
                  data-delay="0.08"
                  data-scale="0.985"
                  data-start="top 82%"
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 block h-full w-full lg:min-h-[400px]"
                  scrolling="no"
                  title="Google Maps Lokacija"
                />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.14),rgba(9,9,11,0.95)_66%)]" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
