import { useMemo, useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

import SectionHeading from './SectionHeading';

type FormData = {
  fullName: string;
  phone: string;
  carModel: string;
  service: string;
  message: string;
};

type DateParts = {
  day: string;
  month: string;
  year: string;
};

type FormErrors = Partial<Record<keyof FormData | 'desiredDate', string>>;

const serviceOptions = [
  { value: '', label: 'Odaberite uslugu' },
  { value: 'Mali servis', label: 'Mali servis' },
  { value: 'Veliki servis', label: 'Veliki servis' },
  { value: 'Dijagnostika', label: 'Dijagnostika' },
  { value: 'Kočnice', label: 'Kočnice' },
  { value: 'Klima servis', label: 'Klima servis' },
  { value: 'Ovjes i trap', label: 'Ovjes i trap' },
  { value: 'Nešto drugo / Nisam siguran', label: 'Nešto drugo / Nisam siguran' },
];

const monthOptions = [
  { value: '01', label: '01 - Siječanj' },
  { value: '02', label: '02 - Veljača' },
  { value: '03', label: '03 - Ožujak' },
  { value: '04', label: '04 - Travanj' },
  { value: '05', label: '05 - Svibanj' },
  { value: '06', label: '06 - Lipanj' },
  { value: '07', label: '07 - Srpanj' },
  { value: '08', label: '08 - Kolovoz' },
  { value: '09', label: '09 - Rujan' },
  { value: '10', label: '10 - Listopad' },
  { value: '11', label: '11 - Studeni' },
  { value: '12', label: '12 - Prosinac' },
];

const pad = (value: number) => value.toString().padStart(2, '0');

const createIsoDate = (date: Date) => {
  const normalized = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return normalized.toISOString().slice(0, 10);
};

const addDays = (date: Date, days: number) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

const getDaysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate();

const isValidCalendarDate = (day: number, month: number, year: number) => {
  const test = new Date(year, month - 1, day);
  return test.getFullYear() === year && test.getMonth() === month - 1 && test.getDate() === day;
};

const toDateParts = (date: Date): DateParts => ({
  day: pad(date.getDate()),
  month: pad(date.getMonth() + 1),
  year: String(date.getFullYear()),
});

const formatDisplayDate = ({ day, month, year }: DateParts) => {
  if (!day || !month || !year) return 'Nije odabran datum';
  return `${day}/${month}/${year}`;
};

export default function Contact() {
  const today = useMemo(() => new Date(), []);
  const currentYear = today.getFullYear();
  const maxYear = currentYear + 2;
  const minDate = useMemo(() => createIsoDate(today), [today]);
  const maxDate = useMemo(() => {
    const next = new Date(today);
    next.setFullYear(next.getFullYear() + 2);
    return createIsoDate(next);
  }, [today]);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    carModel: '',
    service: '',
    message: '',
  });
  const [dateParts, setDateParts] = useState<DateParts>({ day: '', month: '', year: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitMessage, setSubmitMessage] = useState('');

  const yearOptions = useMemo(
    () => Array.from({ length: maxYear - currentYear + 1 }, (_, index) => String(currentYear + index)),
    [currentYear, maxYear]
  );

  const dayOptions = useMemo(() => {
    const fallbackMonth = today.getMonth() + 1;
    const fallbackYear = today.getFullYear();
    const month = Number(dateParts.month || fallbackMonth);
    const year = Number(dateParts.year || fallbackYear);
    const totalDays = getDaysInMonth(year, month);
    return Array.from({ length: totalDays }, (_, index) => pad(index + 1));
  }, [dateParts.month, dateParts.year, today]);

  const inputBaseClass =
    'w-full rounded-xl border bg-zinc-950 px-4 py-3.5 text-white transition-colors outline-none placeholder:text-zinc-500 focus:border-red-500';

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitMessage('');
  };

  const updateDatePart = (field: keyof DateParts, value: string) => {
    setDateParts((current) => {
      const next = { ...current, [field]: value };
      const month = Number(next.month || today.getMonth() + 1);
      const year = Number(next.year || today.getFullYear());
      const maxDay = getDaysInMonth(year, month);

      if (next.day && Number(next.day) > maxDay) {
        next.day = pad(maxDay);
      }

      return next;
    });

    setErrors((current) => ({ ...current, desiredDate: undefined }));
    setSubmitMessage('');
  };

  const applyPresetDate = (date: Date) => {
    setDateParts(toDateParts(date));
    setErrors((current) => ({ ...current, desiredDate: undefined }));
    setSubmitMessage('');
  };

  const clearDate = () => {
    setDateParts({ day: '', month: '', year: '' });
    setErrors((current) => ({ ...current, desiredDate: undefined }));
    setSubmitMessage('');
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};
    const digitsOnlyPhone = formData.phone.replace(/\D/g, '');
    const hasAnyDateValue = Boolean(dateParts.day || dateParts.month || dateParts.year);
    const hasFullDate = Boolean(dateParts.day && dateParts.month && dateParts.year);

    if (formData.fullName.trim().length < 3) {
      nextErrors.fullName = 'Unesite ime i prezime.';
    }

    if (digitsOnlyPhone.length < 8) {
      nextErrors.phone = 'Unesite ispravan broj telefona.';
    }

    if (formData.carModel.trim().length < 2) {
      nextErrors.carModel = 'Upišite marku i model vozila.';
    }

    if (!formData.service) {
      nextErrors.service = 'Odaberite vrstu usluge.';
    }

    if (hasAnyDateValue && !hasFullDate) {
      nextErrors.desiredDate = 'Odaberite dan, mjesec i godinu.';
    }

    if (hasFullDate) {
      const day = Number(dateParts.day);
      const month = Number(dateParts.month);
      const year = Number(dateParts.year);

      if (!isValidCalendarDate(day, month, year)) {
        nextErrors.desiredDate = 'Odabrani datum nije valjan.';
      } else {
        const isoDate = `${dateParts.year}-${dateParts.month}-${dateParts.day}`;
        if (isoDate < minDate || isoDate > maxDate) {
          nextErrors.desiredDate = 'Odaberite datum između danas i 2 godine unaprijed.';
        }
      }
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitMessage('Provjerite označena polja i pokušajte ponovno.');
      return;
    }

    const emailBody = [
      `Ime i prezime: ${formData.fullName}`,
      `Telefon: ${formData.phone}`,
      `Marka i model vozila: ${formData.carModel}`,
      `Vrsta usluge: ${formData.service}`,
      `Željeni datum: ${
        dateParts.day && dateParts.month && dateParts.year ? formatDisplayDate(dateParts) : 'Nije naveden'
      }`,
      '',
      'Poruka / opis kvara:',
      formData.message.trim() || 'Nema dodatne poruke.',
    ].join('\n');

    const subject = encodeURIComponent(`Upit s web stranice - ${formData.service}`);
    const body = encodeURIComponent(emailBody);

    setSubmitMessage('Otvara se vaš email s popunjenim podacima.');
    window.location.href = `mailto:hidrokopdoo@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontakt" className="relative bg-zinc-950 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center" data-gsap="reveal" data-y="20">
          <SectionHeading
            align="center"
            title="Tu smo"
            subtitle="za vaš auto"
            inline
            description="Rezervirajte termin, postavite pitanje ili nas posjetite na našoj lokaciji."
            className="max-w-[760px]"
          />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row">
          <div data-gsap="reveal" data-x="-30" className="space-y-8 lg:w-1/3">
            <div className="h-full space-y-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-red-500">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-white">Telefon</h3>
                  <a href="tel:051642111" className="text-zinc-400 transition-colors hover:text-red-500">
                    051 642 111
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-red-500">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-white">Adresa</h3>
                  <p className="text-zinc-400">
                    Zametska ulica 28
                    <br />
                    51000, Rijeka
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Hidrokop+-+HP+Auto,+Rijeka"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 inline-block text-sm text-red-500 hover:underline"
                  >
                    Prikaži na mapi
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-red-500">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-white">Radno vrijeme</h3>
                  <p className="text-zinc-400">Pon - Pet: 08:00 - 16:00</p>
                  <p className="text-zinc-400">Subota: 08:00 - 14:00</p>
                  <p className="mt-1 text-sm text-zinc-500">Nedjelja: Zatvoreno</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-red-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-white">Email</h3>
                  <a href="mailto:hidrokopdoo@gmail.com" className="text-zinc-400 transition-colors hover:text-red-500">
                    hidrokopdoo@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div data-gsap="reveal" data-x="30" data-delay="0.04" className="lg:w-2/3">
            <form className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-8" onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">Zatraži termin ili ponudu</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-zinc-400">
                    Ime i prezime *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(event) => updateField('fullName', event.target.value)}
                    className={`${inputBaseClass} ${errors.fullName ? 'border-red-500' : 'border-zinc-800'}`}
                    placeholder="Vaše ime i prezime"
                    autoComplete="name"
                  />
                  {errors.fullName ? <p className="text-xs text-red-500">{errors.fullName}</p> : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-zinc-400">
                    Broj telefona *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(event) => updateField('phone', event.target.value)}
                    className={`${inputBaseClass} ${errors.phone ? 'border-red-500' : 'border-zinc-800'}`}
                    placeholder="091 123 4567"
                    autoComplete="tel"
                  />
                  {errors.phone ? <p className="text-xs text-red-500">{errors.phone}</p> : null}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="carModel" className="text-sm font-medium text-zinc-400">
                    Marka i model vozila *
                  </label>
                  <input
                    type="text"
                    id="carModel"
                    value={formData.carModel}
                    onChange={(event) => updateField('carModel', event.target.value)}
                    className={`${inputBaseClass} ${errors.carModel ? 'border-red-500' : 'border-zinc-800'}`}
                    placeholder="Npr. VW Golf 7 1.6 TDI"
                  />
                  {errors.carModel ? <p className="text-xs text-red-500">{errors.carModel}</p> : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-zinc-400">
                    Vrsta usluge *
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(event) => updateField('service', event.target.value)}
                    className={`${inputBaseClass} appearance-none ${errors.service ? 'border-red-500' : 'border-zinc-800'}`}
                  >
                    {serviceOptions.map((option) => (
                      <option key={option.label} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.service ? <p className="text-xs text-red-500">{errors.service}</p> : null}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <label className="text-sm font-medium text-zinc-400">Željeni datum (opcionalno)</label>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <select
                    value={dateParts.day}
                    onChange={(event) => updateDatePart('day', event.target.value)}
                    className={`${inputBaseClass} appearance-none ${errors.desiredDate ? 'border-red-500' : 'border-zinc-800'}`}
                  >
                    <option value="">Dan</option>
                    {dayOptions.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>

                  <select
                    value={dateParts.month}
                    onChange={(event) => updateDatePart('month', event.target.value)}
                    className={`${inputBaseClass} appearance-none ${errors.desiredDate ? 'border-red-500' : 'border-zinc-800'}`}
                  >
                    <option value="">Mjesec</option>
                    {monthOptions.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>

                  <select
                    value={dateParts.year}
                    onChange={(event) => updateDatePart('year', event.target.value)}
                    className={`${inputBaseClass} appearance-none ${errors.desiredDate ? 'border-red-500' : 'border-zinc-800'}`}
                  >
                    <option value="">Godina</option>
                    {yearOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => applyPresetDate(today)}
                    className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-red-500 hover:text-white"
                  >
                    Danas
                  </button>
                  <button
                    type="button"
                    onClick={() => applyPresetDate(addDays(today, 1))}
                    className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-red-500 hover:text-white"
                  >
                    Sutra
                  </button>
                  <button
                    type="button"
                    onClick={() => applyPresetDate(addDays(today, 7))}
                    className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-red-500 hover:text-white"
                  >
                    Za 7 dana
                  </button>
                  {(dateParts.day || dateParts.month || dateParts.year) ? (
                    <button
                      type="button"
                      onClick={clearDate}
                      className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-500 transition hover:border-zinc-600 hover:text-zinc-300"
                    >
                      Očisti datum
                    </button>
                  ) : null}
                </div>

                {dateParts.day && dateParts.month && dateParts.year ? (
                  <p className="text-sm text-zinc-500">Odabrano: {formatDisplayDate(dateParts)}</p>
                ) : (
                  <p className="text-sm text-zinc-500">Datum nije zabilježen.</p>
                )}
                {errors.desiredDate ? <p className="text-xs text-red-500">{errors.desiredDate}</p> : null}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">
                  Poruka / Opis kvara
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  className={`${inputBaseClass} resize-none border-zinc-800`}
                  placeholder="Opišite problem, simptome ili bilo kakvu dodatnu napomenu..."
                />
              </div>

              {submitMessage ? (
                <div
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    Object.keys(errors).length
                      ? 'border-red-500/35 bg-red-500/10 text-red-200'
                      : 'border-zinc-700 bg-zinc-950 text-zinc-300'
                  }`}
                >
                  {submitMessage}
                </div>
              ) : null}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-4 font-medium text-white transition-colors hover:bg-red-700"
              >
                <Send className="h-5 w-5" />
                Pošalji upit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
