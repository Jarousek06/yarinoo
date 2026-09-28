# YARINOO — osobní web

Osobní brandový web pro **Jaroslav Perlík (YARINOO)**. Postaveno na
**Next.js 14 + Tailwind CSS + Framer Motion**. Tmavé téma, atletický
„editorial" styl, akcentní barva elektrická oranžovo-červená `#FF3B1F`.

## Jak web spustit (krok za krokem)

1. Nainstaluj **Node.js** (verze 18 nebo novější) z <https://nodejs.org>.
2. Otevři složku `yarinoo` v terminálu.
3. Nainstaluj balíčky:
   ```bash
   npm install
   ```
4. Spusť vývojový server:
   ```bash
   npm run dev
   ```
5. Otevři v prohlížeči <http://localhost:3000>.

## Kde upravit texty

**Skoro všechny texty jsou na jednom místě:** [`lib/content.js`](lib/content.js).
Stačí přepsat text mezi uvozovkami `"..."`. Nemaž čárky ani závorky.

- E-mail a přezdívku → sekce `brand`
- Nadpis, podnadpis, běžící pás → sekce `hero`
- Milníky „Moje cesta" → sekce `journey`
- Služby → sekce `services`
- Projekty a filtry → sekce `portfolio`
- Citát a disciplíny → sekce `sport`
- Odkazy na sítě → sekce `socials`
- Kontaktní výzva → sekce `contact`

## Kde vyměnit fotky

Fotky jsou zatím jen šedé placeholdery. Hledej v komponentách komentář
`[ místo pro ... ]` nebo `nahrad`:

- **Hero portrét** → [`components/Hero.jsx`](components/Hero.jsx)
- **Foto v „Moje cesta"** → [`components/Journey.jsx`](components/Journey.jsx)
- **Náhledy projektů** → [`components/Portfolio.jsx`](components/Portfolio.jsx)

Fotky ulož do složky `public/` (např. `public/portret.jpg`) a v kódu je
vlož takto (tip: přidej třídu `grayscale` pro černobílý „duotone" vzhled):

```jsx
<img src="/portret.jpg" alt="Popis fotky" className="h-full w-full object-cover grayscale" />
```

## Barvy a fonty

- Barvy jsou v [`tailwind.config.js`](tailwind.config.js) (sekce `colors`).
- Fonty (Barlow + Barlow Condensed) se načítají v
  [`app/layout.jsx`](app/layout.jsx).

## Nasazení online

Nejjednodušší je **Vercel** (výrobce Next.js): nahraj složku na GitHub a
propoj s <https://vercel.com>. Nasazení je zdarma a automatické.
