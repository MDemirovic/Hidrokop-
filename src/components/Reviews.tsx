import { Star, Quote } from 'lucide-react';

import SectionHeading from './SectionHeading';

const reviews = [
  {
    name: 'Renata Gacanin',
    rating: 5,
    text: 'Ja do sad nisam vidjela ljubaznije ,uljudnije ,brze i normalne majstore... Hvalaaa Vam na tome,i sve aute vozim tamo ..',
    date: '2025-09-15',
  },
  {
    name: 'Vida Kesin',
    rating: 5,
    text: 'Jako dobri majstori,uvijek pomognu. Povoljne cijene i problem se uvijek riješi. Moje sve preporuke.',
    date: '2021-03-15',
  },
  {
    name: 'Virna Medanic',
    rating: 5,
    text: 'Ekipa za 10, efikasnost i usluga na razini!',
    date: '2025-12-15',
  },
];

function getTimeAgo(dateString: string) {
  const past = new Date(dateString);
  const now = new Date();

  const diffMonths = (now.getFullYear() - past.getFullYear()) * 12 + (now.getMonth() - past.getMonth());

  if (diffMonths < 1) return 'prije manje od mjesec dana';
  if (diffMonths < 12) return `prije ${diffMonths} mj.`;

  const years = Math.floor(diffMonths / 12);
  return `prije ${years} god.`;
}

export default function Reviews() {
  return (
    <section id="recenzije" className="relative overflow-hidden bg-zinc-950 pb-24 pt-6 md:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 -top-44 h-[26rem] bg-[radial-gradient(70%_100%_at_50%_100%,rgba(127,29,29,0.16),rgba(127,29,29,0.06)_42%,rgba(9,9,11,0)_80%)] blur-3xl" />
        <div className="absolute left-1/2 top-[44%] h-[30rem] w-[58rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(185,28,28,0.19),rgba(185,28,28,0.08)_38%,rgba(9,9,11,0)_74%)] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-zinc-950/90 via-zinc-950/55 to-transparent" />
      </div>

      <div className="container relative mx-auto px-6">
        <div data-gsap="reveal" data-y="20" className="mx-auto mb-16 max-w-2xl text-center">
          <SectionHeading
            align="center"
            title="Povjerenje"
            subtitle="klijenata"
            inline
            description="Najbolja potvrda našeg rada su iskustva zadovoljnih klijenata."
            className="max-w-[760px]"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              data-gsap="reveal"
              data-y="20"
              data-delay={`${index * 0.08}`}
              className="relative flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-8"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-zinc-800" />

              <div className="mb-6 flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-red-500 text-red-500" />
                ))}
              </div>

              <p className="relative z-10 mb-8 flex-grow italic text-zinc-300">"{review.text}"</p>

              <div className="mt-auto text-left">
                <h4 className="font-semibold text-white">{review.name}</h4>
                <p className="text-sm text-zinc-500">{getTimeAgo(review.date)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" data-gsap="reveal" data-y="16" data-delay="0.04">
          <a
            href="https://www.google.com/search?client=opera&hs=zvq&sca_esv=a314a699d70fed9c&hl=hr-HR&sxsrf=ANbL-n7lM_gxmR_77jIYh1vM6PXn35SFkA:1773821290702&q=osvrti+za+hidrokop+-+hp+auto+rijeka&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOakuFacSYri16nIBB-xwC9ETiyWb6nlclAlEh0T3H1Tuk1y2wcUxhIMdEcre7jjNJWI7k2E%3D&uds=ALYpb_mgZNSyW_-r_VJg3_KzT_ZRa-QxgIIexvg3FhoqSS-11l5Eq5OlClHh4d7dIAnv9lV9MMQRa_UwwXI_NuSodSzRa5EKuE-4SbhRJc6U61fdUMJ6RsKyOdEb-oqx3uYC8exMr22g&sa=X&ved=2ahUKEwjwo7Wf_6iTAxVhzgIHHRMXOS8Q3PALegQIGhAE&biw=1666&bih=993&dpr=1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
          >
            Pogledajte sve recenzije na Google <Star className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
