import { useEffect, useState } from 'react';
import { asset } from '../utils/asset';
import SectionHeading from './SectionHeading';

const images = [
  { src: asset('1.jpg'), alt: 'Galerija slika 1' },
  { src: asset('2.jpg'), alt: 'Galerija slika 2' },
  { src: asset('3.jpg'), alt: 'Galerija slika 3' },
  { src: asset('4.jpg'), alt: 'Galerija slika 4' },
  { src: asset('5.jfif'), alt: 'Galerija slika 5' },
  { src: asset('6.jpeg'), alt: 'Galerija slika 6' },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!activeImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeImage]);

  return (
    <>
      <section className="relative bg-zinc-950 pb-24 pt-14 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center" data-gsap="reveal" data-y="20">
            <SectionHeading
              align="center"
              title="Zavirite"
              subtitle="u radionicu"
              description="Čistoća, red i profesionalan alat su osnova dobrog servisa."
              className="max-w-[760px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {images.map(({ src, alt }, index) => (
              <button
                type="button"
                key={src}
                onClick={() => setActiveImage(src)}
                data-gsap="reveal"
                data-scale="0.95"
                data-y="16"
                data-delay={`${index * 0.06}`}
                className={`group relative overflow-hidden rounded-2xl text-left ${
                  index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                aria-label={`Otvori sliku ${index + 1} u galeriji`}
              >
                <div className="aspect-[4/3] h-full w-full">
                  <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-zinc-950/20 transition-colors duration-500 group-hover:bg-transparent" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/82 px-4 py-8 backdrop-blur-md sm:px-8 md:px-12"
          onClick={() => setActiveImage(null)}
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12),transparent_55%)]" />
          <img
            src={activeImage}
            alt="Povećana slika galerije"
            className="relative z-10 max-h-[88vh] w-auto max-w-[min(100%,1200px)] rounded-2xl object-contain shadow-[0_35px_90px_rgba(0,0,0,0.7)]"
            onClick={(event) => event.stopPropagation()}
            referrerPolicy="no-referrer"
          />
        </div>
      ) : null}
    </>
  );
}
