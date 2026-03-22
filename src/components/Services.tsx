import { useEffect, useRef, useState } from 'react';
import {
  ShoppingBag,
  Wrench,
  Search,
  Circle,
  Truck,
  Wind,
  ChevronLeft,
  ChevronRight,
  Phone,
} from 'lucide-react';

import { asset } from '../utils/asset';

const services = [
  { icon: ShoppingBag, title: 'Trgovina', image: asset('trgovina1.png'), width: 1024, height: 1536 },
  { icon: Wrench, title: 'Autoservis', image: asset('autoservis.jpg'), width: 960, height: 720 },
  { icon: Truck, title: 'Vučna služba', image: asset('4.jpg'), width: 958, height: 711 },
  { icon: Search, title: 'Optika trapa', image: asset('HPUlaz.png'), width: 876, height: 584 },
  { icon: Circle, title: 'Vulkanizerske usluge', image: asset('1.jpg'), width: 1280, height: 720 },
  { icon: Wind, title: 'Punjenje i održavanje klime', image: asset('3.jpg'), width: 612, height: 408 },
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
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-[12%] top-[18%] h-[16rem] bg-[linear-gradient(90deg,rgba(127,29,29,0),rgba(127,29,29,0.12),rgba(127,29,29,0))] blur-3xl" />
        <div className="absolute bottom-[-9rem] right-[-8rem] h-[22rem] w-[30rem] rounded-full bg-red-900/12 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-zinc-950/70 to-zinc-950" />
      </div>
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-10 max-w-3xl md:mb-14">
          <div data-gsap="reveal" data-y="14" className="flex flex-col items-center text-center">
            <h2 className="mb-4 w-full text-center font-serif text-[2.75rem] leading-[1.02] font-semibold tracking-[0.015em] text-zinc-100 sm:text-[3.55rem] md:text-[4.35rem]">
              Naše usluge
            </h2>
            <p className="text-center text-lg font-light text-zinc-300 md:text-xl">
              Radimo na svim markama i modelima automobila.
            </p>
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
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
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
                  width={service.width}
                  height={service.height}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 768px) 380px, 85vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute left-0 top-0 flex w-full items-center justify-between p-6 md:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-black/25 text-white backdrop-blur-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-300">
                    0{index + 1}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 flex w-full flex-col justify-end p-6 md:p-8">
                  <h4 className="mb-2 text-3xl font-bold text-white">{service.title}</h4>
                  <div>
                    <a
                      href={service.title === 'Vučna služba' ? '#vucna-sluzba' : '#kontakt'}
                      className="group inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-3.5 font-medium text-white shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                    >
                      <Phone className="h-4 w-4" />
                      <span>{service.title === 'Vučna služba' ? 'Nazovi vučnu' : 'Zatraži ponudu'}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
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
