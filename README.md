# Hidrokop-HP Auto

Moderna web stranica za **Hidrokop-HP Auto**, autoservis i trgovinu autodijelovima iz Rijeke. Stranica je napravljena kao prezentacijska landing stranica s naglaskom na pregledne informacije, brzi kontakt i prikaz usluga koje firma nudi.

## O čemu je stranica?

Stranica predstavlja poslovanje Hidrokop-HP Auto i služi da korisnici brzo pronađu:

- osnovne informacije o autoservisu
- usluge servisa i trgovine
- vučnu službu i kontakt brojeve
- galeriju i društveni dokaz kroz recenzije
- lokaciju i način kontakta
- pravne stranice: politika privatnosti i uslovi korištenja

Cilj stranice je da posjetitelj u par sekundi razumije šta firma radi i da odmah može nazvati ili zatražiti ponudu.

## Tech stack

- **React 19** – glavna frontend biblioteka
- **TypeScript** – tipizacija i bolja održivost koda
- **Vite** – development server i build alat
- **Tailwind CSS 4** – styling i responsive layout
- **GSAP** – animacije pri učitavanju i scroll efektima
- **Motion** – dodatne animacije
- **Lucide React** – ikone
- **Node.js / npm** – upravljanje paketima i build procesom

## Glavne sekcije

- **Navbar** – navigacija kroz sekcije stranice
- **Hero** – uvodna sekcija sa glavnom porukom i CTA dugmadima
- **Services** – pregled usluga kroz carousel/kartice
- **TowingService** – vučna služba
- **AutoParts** – prodaja autodijelova
- **Reviews** – recenzije korisnika
- **About** – informacije o firmi i iskustvu
- **Location** – lokacija i mapa / kontakt informacije
- **Gallery** – galerija slika
- **Contact** – telefoni, email i pravne stranice
- **StickyCTA** – stalni poziv na akciju na mobilnim uređajima

## Funkcionalnosti

- responsive dizajn za desktop i mobilne uređaje
- smooth animacije pri skrolanju
- klikabilni telefonski linkovi za brzo pozivanje
- SEO meta tagovi i Open Graph podaci
- statičke stranice za privatnost i uslove korištenja
- optimizirano za GitHub Pages / statički hosting

## Kontakt podaci

- **Glavni broj:** 051 642 111
- **E-mail:** hidrokopdoo@gmail.com
- **Vučna služba:** Leo – 091 210 5202, Denis – 091 6422 313
- **Lokacija:** Rijeka, Hrvatska

## Pokretanje projekta

### Instalacija

```bash
npm install
```

### Development server

```bash
npm run dev
```

### Build za produkciju

```bash
npm run build
```

### Build za GitHub Pages / docs folder

```bash
npm run build:pages
```

## Struktura projekta

```text
src/
  components/
  utils/
public/
docs/
```

- `src/components` sadrži sve sekcije stranice
- `public` sadrži statičke fajlove i dokumente
- `docs` se koristi kao build output za hosting na GitHub Pages

## Napomena

Stranica je pisana kao marketing i informativni web za autoservis, sa fokusom na brz kontakt i jasan prikaz usluga.
