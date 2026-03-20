import { useEffect, useRef, useState } from 'react';
import {
  Activity,
  Wrench,
  Droplet,
  Disc,
  Settings,
  CircleDashed,
  Cog,
  Wind,
  Battery,
  Circle,
  ClipboardCheck,
  Search,
  ChevronLeft,
  ChevronRight,
  Phone,
} from 'lucide-react';

const services = [
  { icon: Activity, title: 'Kompjuterska Dijagnostika', image: 'https://picsum.photos/seed/diag/400/300' },
  { icon: Wrench, title: 'Mali i Veliki Servis', image: 'https://picsum.photos/seed/service/400/300' },
  { icon: Droplet, title: 'Zamjena Ulja i Filtera', image: 'https://picsum.photos/seed/oil/400/300' },
  { icon: Disc, title: 'Kočioni Sistem', image: 'https://picsum.photos/seed/brakes/400/300' },
  { icon: Settings, title: 'Trap i Ovjes', image: 'https://picsum.photos/seed/suspension/400/300' },
  { icon: CircleDashed, title: 'Set Kvačila', image: 'https://picsum.photos/seed/clutch/400/300' },
  { icon: Cog, title: 'Motor i Mehanika', image: 'https://picsum.photos/seed/engine/400/300' },
  { icon: Wind, title: 'Klima Servis', image: 'https://picsum.photos/seed/ac/400/300' },
  { icon: Battery, title: 'Akumulatori', image: 'https://picsum.photos/seed/battery/400/300' },
  { icon: Circle, title: 'Vulkanizer', image: 'https://picsum.photos/seed/tires/400/300' },
  { icon: ClipboardCheck, title: 'Priprema za Tehnički', image: 'https://picsum.photos/seed/inspection/400/300' },
  { icon: Search, title: 'Pregled Vozila', image: 'https://picsum.photos/seed/checkup/400/300' },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const getCards = () => {
    if (!scrollRef.current) return [] as HTMLElement[];
    return Array.from(scrollRef.current.children) as HTMLElement[];
  };

  const getCenteredIndex = () => {
    if (!scrollRef.current) return activeIndex;
    const cards = getCards();
    if (!cards.length) return activeIndex;

    const containerCenter = scrollRef.current.scrollLeft + scrollRef.current.clientWidth / 2;
    let nearestIdx = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const dist = Math.abs(cardCenter - containerCenter);
      if (dist < nearestDistance) {
        nearestDistance = dist;
        nearestIdx = idx;
      }
    });

    return nearestIdx;
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    setActiveIndex(getCenteredIndex());
    const maxLeft = Math.max(0, scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
    const epsilon = 2;
    setCanScrollLeft(scrollRef.current.scrollLeft > epsilon);
    setCanScrollRight(scrollRef.current.scrollLeft < maxLeft - epsilon);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const refresh = () => {
      const maxLeft = Math.max(0, el.scrollWidth - el.clientWidth);
      const epsilon = 2;
      setCanScrollLeft(el.scrollLeft > epsilon);
      setCanScrollRight(el.scrollLeft < maxLeft - epsilon);
      setActiveIndex(getCenteredIndex());
    };

    refresh();
    window.addEventListener('resize', refresh);
    return () => window.removeEventListener('resize', refresh);
  }, []);

  const getCurrentIndex = () => {
    return getCenteredIndex();
  };

  const goToIndex = (index: number, withAnimation = false) => {
    if (!scrollRef.current) return;
    const cards = getCards();
    if (!cards.length) return;

    const clamped = Math.max(0, Math.min(index, cards.length - 1));
    const card = cards[clamped];
    const rawLeft = card.offsetLeft - (scrollRef.current.clientWidth - card.clientWidth) / 2;
    const maxLeft = Math.max(0, scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
    const targetLeft = Math.max(0, Math.min(rawLeft, maxLeft));

    setActiveIndex(clamped);

    if (withAnimation) {
      const targetCard = cardRefs.current[clamped];
      if (targetCard) {
        targetCard.animate(
          [
            { opacity: 0.84, transform: 'translateY(14px)' },
            { opacity: 1, transform: 'translateY(0px)' },
          ],
          {
            duration: 450,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }
        );
      }
    }

    scrollRef.current.scrollTo({
      left: targetLeft,
      behavior: 'smooth',
    });
  };

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && !canScrollLeft) return;
    if (direction === 'right' && !canScrollRight) return;
    const current = getCurrentIndex();
    const target = direction === 'left' ? current - 1 : current + 1;
    goToIndex(target, true);
  };

  const scrollMobile = (direction: 'left' | 'right') => {
    if (direction === 'left' && !canScrollLeft) return;
    if (direction === 'right' && !canScrollRight) return;
    const current = getCurrentIndex();
    const target = direction === 'left' ? current - 1 : current + 1;
    goToIndex(target, true);
  };

  return (
    <section id="usluge" className="relative overflow-hidden bg-zinc-950 pb-24 pt-14 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-10 max-w-3xl md:mb-14">
          <div data-gsap="reveal" data-y="14" className="flex flex-col items-center text-center">
            <h2 className="mb-4 w-full text-center font-serif text-[2.75rem] leading-[1.02] font-semibold tracking-[0.015em] text-zinc-100 sm:text-[3.55rem] md:text-[4.35rem]">
              Naše usluge
            </h2>
            <p className="text-center text-lg font-light text-zinc-300 md:text-xl">Kvaliteta koja se prepoznaje.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-zinc-700" />
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-px w-10 bg-zinc-700" />
            </div>
          </div>
        </div>

        <div className="mb-6 hidden justify-end gap-4 md:flex">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="cursor-pointer rounded-full border border-zinc-800 bg-zinc-900 p-3 text-white transition-all hover:border-red-600 hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-zinc-800 disabled:hover:bg-zinc-900"
            aria-label="Prethodna usluga"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="cursor-pointer rounded-full border border-zinc-800 bg-zinc-900 p-3 text-white transition-all hover:border-red-600 hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-zinc-800 disabled:hover:bg-zinc-900"
            aria-label="Sljedeća usluga"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden pb-4 md:overflow-x-hidden md:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group relative h-[500px] w-[85vw] shrink-0 snap-center overflow-hidden rounded-3xl md:w-[380px]"
            >
              <div
                className={`absolute inset-x-3 top-1/2 z-30 flex -translate-y-1/2 items-center justify-between transition-opacity md:hidden ${
                  activeIndex === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                <button
                  type="button"
                  onClick={() => scrollMobile('left')}
                  disabled={!canScrollLeft}
                  aria-label="Prethodna usluga"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-950/80 text-white backdrop-blur-sm transition-transform active:scale-95 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollMobile('right')}
                  disabled={!canScrollRight}
                  aria-label="Sljedeća usluga"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-950/80 text-white backdrop-blur-sm transition-transform active:scale-95 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <img
                src={service.image}
                alt={service.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 flex w-full flex-col justify-end p-6 md:p-8">
                <h4 className="mb-2 text-3xl font-bold text-white">{service.title}</h4>
                <div>
                  <a
                    href="#kontakt"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-3.5 font-medium text-white shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Zatraži ponudu</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToIndex(idx, true)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-8 bg-white' : 'w-2.5 bg-zinc-700 hover:bg-zinc-500'
              }`}
              aria-label={`Idi na uslugu ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
