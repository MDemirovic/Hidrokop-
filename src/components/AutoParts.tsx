import { Phone } from 'lucide-react';

import { asset } from '../utils/asset';

export default function AutoParts() {
  return (
    <section id="autodijelovi" className="relative isolate overflow-hidden bg-zinc-950 pb-8 pt-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_84%_30%,rgba(185,28,28,0.28),rgba(9,9,11,0.97)_58%,#09090b_86%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-transparent md:h-52" />
        <div className="absolute inset-x-0 bottom-[-10rem] h-[24rem] bg-[radial-gradient(70%_100%_at_50%_0%,rgba(127,29,29,0.26),rgba(127,29,29,0.12)_38%,rgba(9,9,11,0)_78%)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-zinc-950/55 to-zinc-950" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:pr-[50vw] xl:pr-[48vw]">
        <div data-gsap="reveal" data-y="20" className="mb-10 flex max-w-[560px] flex-col gap-1 md:mb-14">
          <h2 className="font-serif text-5xl leading-[0.92] font-semibold tracking-[0.03em] text-zinc-100 sm:text-6xl md:text-7xl lg:text-8xl">
            Trgovina
          </h2>
          <p className="font-script text-5xl leading-[0.92] text-red-300 sm:text-6xl md:text-7xl lg:text-8xl">
            autodijelova
          </p>
        </div>

        <div className="grid gap-8">
          <div data-gsap="reveal" data-x="-30" className="relative z-20 max-w-[520px] lg:max-w-[430px] xl:max-w-[490px]">
            <p className="text-base leading-relaxed text-zinc-200 md:text-lg">
              Originalni i zamjenski dijelovi za većinu marki vozila, uz brz savjet i sigurnu nabavu bez čekanja.
            </p>
            <p className="mt-4 max-w-md border-l-2 border-red-500/70 pl-4 text-sm leading-relaxed text-zinc-400 md:text-base">
              Tražite specifičan dio? Nazovite nas i odmah provjeravamo dostupnost za vaše vozilo.
            </p>

            <a
              href="tel:051642111"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-red-400/55 bg-red-500/15 px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-red-100 transition hover:border-red-300 hover:bg-red-500/25"
            >
              <Phone className="h-4 w-4" />
              Nazovite trgovinu
            </a>
          </div>

          <div className="relative lg:hidden">
            <div className="relative pt-1">
              <div className="relative min-h-[290px] sm:min-h-[370px]">
                <picture>
                  <source media="(max-width: 639px)" srcSet={asset('mobileAutoParts.png')} />
                  <img
                    src={asset('auto3.png')}
                    alt="Auto dijelovi"
                    className="absolute inset-x-[-4%] bottom-0 h-full w-[108%] max-w-none object-contain object-center drop-shadow-[0_24px_55px_rgba(0,0,0,0.6)] sm:inset-x-[-6%] sm:w-[112%]"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-gsap="reveal"
        data-x="60"
        className="pointer-events-none absolute right-0 bottom-[-2.5rem] hidden w-[68vw] max-w-[1160px] lg:block xl:bottom-[-4rem]"
      >
        <img
          src={asset('auto3.png')}
          alt="Auto dijelovi"
          className="h-auto w-full object-contain object-right drop-shadow-[0_34px_80px_rgba(0,0,0,0.68)]"
        />
      </div>

      <div className="pointer-events-none absolute right-[5vw] bottom-[20%] hidden max-w-[240px] rounded-xl border border-red-500/30 bg-zinc-950/55 p-4 backdrop-blur-sm min-[1400px]:block">
        <p className="text-xs uppercase tracking-[0.22em] text-red-300">Brza isporuka</p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-200">Većina dijelova dostupna je isti dan ili unutar 24h.</p>
      </div>
    </section>
  );
}
