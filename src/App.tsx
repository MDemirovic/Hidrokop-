/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TowingService from './components/TowingService';
import AutoParts from './components/AutoParts';
import About from './components/About';
import Location from './components/Location';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import StickyCTA from './components/StickyCTA';
export default function App() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    let cancelled = false;
    let cleanup = () => {};

    const scheduleAnimationSetup = (callback: () => void) => {
      const run = () => {
        const idleWindow = window as Window & {
          requestIdleCallback?: (cb: () => void, options?: { timeout: number }) => number;
        };

        if (idleWindow.requestIdleCallback) {
          idleWindow.requestIdleCallback(callback, { timeout: 800 });
          return;
        }

        window.setTimeout(callback, 180);
      };

      window.requestAnimationFrame(run);
    };

    scheduleAnimationSetup(() => {
      void (async () => {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger'),
        ]);

        if (cancelled || !pageRef.current) return;

        gsap.registerPlugin(ScrollTrigger);
        const refreshScrollTriggers = () => ScrollTrigger.refresh();

        const ctx = gsap.context(() => {
          const revealItems = gsap.utils.toArray<HTMLElement>('[data-gsap="reveal"]');

          revealItems.forEach((item) => {
            const x = Number(item.dataset.x ?? 0);
            const y = Number(item.dataset.y ?? 24);
            const start = item.dataset.start ?? 'top 85%';
            const delay = Number(item.dataset.delay ?? 0);
            const scale = Number(item.dataset.scale ?? 1);

            gsap.fromTo(
              item,
              { autoAlpha: 0, x, y, scale },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.85,
                ease: 'power3.out',
                delay,
                scrollTrigger: {
                  trigger: item,
                  start,
                  once: true,
                },
              }
            );
          });

          const loadItems = gsap.utils.toArray<HTMLElement>('[data-gsap="load"]');
          if (loadItems.length) {
            gsap.fromTo(
              loadItems,
              { autoAlpha: 0, y: 24 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.85,
                ease: 'power3.out',
                stagger: 0.12,
                delay: 0.08,
              }
            );
          }
        }, pageRef);

        const refreshTimeout = window.setTimeout(refreshScrollTriggers, 250);
        window.addEventListener('load', refreshScrollTriggers);

        void document.fonts?.ready.then(refreshScrollTriggers).catch(() => {});

        cleanup = () => {
          window.clearTimeout(refreshTimeout);
          window.removeEventListener('load', refreshScrollTriggers);
          ctx.revert();
        };
      })();
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <div ref={pageRef} className="bg-zinc-950 text-zinc-50 min-h-screen font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TowingService />
        <AutoParts />
        <Reviews />
        <About />
        <Location />
        <Gallery />
        <Contact />
      </main>
      <StickyCTA />
    </div>
  );
}
