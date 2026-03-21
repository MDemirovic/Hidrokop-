import { ArrowUpRight, Mail, Phone, Truck } from 'lucide-react';

const towingContacts = [
  { name: 'Leo', phoneDisplay: '091 210 5202', phoneHref: '0912105202' },
  { name: 'Denis', phoneDisplay: '091 6422 313', phoneHref: '0916422313' },
];

export default function Contact() {
  const privacyUrl = `${import.meta.env.BASE_URL}politika-privatnosti.html`;
  const termsUrl = `${import.meta.env.BASE_URL}uslovi-koristenja.html`;

  return (
    <section id="kontakt" className="relative overflow-hidden bg-[#120708] py-24 text-white md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#1a0709_7%,#451116_14%,#742028_28%,#92272d_46%,#92252c_66%,#721b22_84%,#20090c_97%,#09090b_100%)]" />
        <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0.96)_18%,rgba(0,0,0,0.82)_36%,rgba(7,4,5,0.56)_58%,rgba(18,7,8,0.22)_82%,rgba(18,7,8,0)_100%)]" />
        <div className="absolute inset-x-[10%] top-[14%] h-40 bg-[linear-gradient(90deg,rgba(127,29,29,0),rgba(239,68,68,0.14),rgba(127,29,29,0))] blur-3xl" />
        <div className="absolute left-[-8rem] top-[16%] h-[24rem] w-[24rem] rounded-full bg-red-950/18 blur-3xl" />
        <div className="absolute right-[-10rem] top-[13%] h-[26rem] w-[26rem] rounded-full bg-red-900/16 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(58,16,20,0)_0%,rgba(58,16,20,0.2)_22%,rgba(50,13,17,0.55)_52%,rgba(42,10,13,0.86)_82%,#2a0a0d_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_22%,transparent_78%,rgba(0,0,0,0.2))]" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-start">
          <div data-gsap="reveal" data-y="18" className="pt-6">
            <p className="text-sm font-bold uppercase tracking-[0.34em] text-white/88">Kontakt</p>
            <h2 className="mt-6 max-w-4xl font-serif text-[3.1rem] leading-[0.92] font-semibold tracking-[-0.03em] text-white sm:text-[4.1rem] md:text-[5rem]">
              Nazovite nas
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
              Firma radi isključivo preko telefonskog kontakta. Za servis i trgovinu nazovite glavni broj, a za vučnu
              službu odaberite Lea ili Denisa.
            </p>
          </div>

          <div
            data-gsap="reveal"
            data-delay="0.08"
            className="hidden pt-8 text-right text-[0.82rem] font-semibold uppercase tracking-[0.9em] text-white/80 md:block"
          >
            <div className="grid grid-cols-8 gap-x-5 gap-y-4">
              {Array.from({ length: 24 }).map((_, index) => (
                <span key={index} className="h-1.5 w-1.5 rounded-full bg-white/85" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-2">
          <div data-gsap="reveal" data-x="-24">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.28em] text-white/75">Opći kontakt</p>

            <a
              href="tel:051642111"
              aria-label="Nazovi glavni broj 051 642 111"
              className="group block border-b border-white/18 py-5 transition-colors hover:border-white/40"
            >
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-[2.2rem] font-medium leading-none tracking-[-0.04em] text-white/92 sm:text-[3rem] md:text-[3.6rem]">
                    051 642 111
                  </p>
                  <p className="mt-4 text-sm uppercase tracking-[0.24em] text-white/64">Autoservis i trgovina</p>
                </div>
                <ArrowUpRight className="mb-2 h-8 w-8 shrink-0 text-white/72 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
              </div>
            </a>
          </div>

          <div data-gsap="reveal" data-x="24">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.28em] text-white/75">Vučna služba</p>

            <div className="space-y-2">
              {towingContacts.map((contact) => (
                <a
                  key={contact.name}
                  href={`tel:${contact.phoneHref}`}
                  aria-label={`Nazovi ${contact.name} na broj ${contact.phoneDisplay}`}
                  className="group block border-b border-white/18 py-5 transition-colors hover:border-white/40"
                >
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/64">{contact.name}</p>
                      <p className="mt-3 text-[2rem] font-medium leading-none tracking-[-0.04em] text-white/92 sm:text-[2.6rem] md:text-[3.1rem]">
                        {contact.phoneDisplay}
                      </p>
                    </div>
                    <div className="mb-2 flex items-center gap-3">
                      <Truck className="h-5 w-5 text-white/48 transition-colors group-hover:text-white/80" />
                      <ArrowUpRight className="h-8 w-8 text-white/72 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/14 pt-6 text-xs font-semibold uppercase tracking-[0.24em] text-white/58 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4 md:items-start">
            <span>Hidrokop-HP Auto, Rijeka</span>
            <p className="normal-case tracking-normal text-white/46">
              <span>&copy; {new Date().getFullYear()} Hidrokop-HP Auto. Sva prava zadržana.</span>
              <span className="block md:inline">
                {' '}
                Dizajn i izrada:{' '}
                <a href="mailto:demirovicmarko10@gmail.com" className="transition-colors hover:text-white/70">
                  MDemirovic
                </a>
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={privacyUrl}
                className="transition-colors hover:text-white/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                Politika privatnosti
              </a>
              <a
                href={termsUrl}
                className="transition-colors hover:text-white/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                Uslovi korištenja
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="tel:051642111"
                aria-label="Nazovite nas"
                className="text-white/52 transition-colors hover:text-white/80"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="mailto:hidrokopdoo@gmail.com"
                aria-label="Pošaljite email"
                className="text-white/52 transition-colors hover:text-white/80"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
