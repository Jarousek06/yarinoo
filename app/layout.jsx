import "./globals.css";
import { Barlow, Barlow_Condensed } from "next/font/google";

// ---- Fonty (nacitaji se pres next/font, rychle a bez blikani) ----
// Barlow = text, Barlow Condensed = nadpisy (atleticky, sevreny styl)
const barlow = Barlow({
  subsets: ["latin", "latin-ext"], // latin-ext kvuli ceskym znakum (š, č, ř...)
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-head",
  display: "swap",
});

// ---- SEO / meta info (uprav dle sebe) ----
// Az bude web nasazeny, zmen metadataBase na skutecnou adresu
// (napr. https://yarinoo.cz nebo https://yarinoo.vercel.app)
export const metadata = {
  metadataBase: new URL("https://yarinoo.vercel.app"),
  title: "YARINOO — Weby, obsah a vlastní cesta",
  description:
    "Jaroslav Perlík (YARINOO) — tvořím moderní weby, spravuju sociální sítě a dělám content. Disciplína ze sportu v každém projektu.",
  keywords: [
    "tvorba webu",
    "správa sociálních sítí",
    "content creator",
    "YARINOO",
    "Jaroslav Perlík",
  ],
  openGraph: {
    title: "YARINOO — Weby, obsah a vlastní cesta",
    description: "Weby, sociální sítě a content s energií sportovce.",
    type: "website",
    locale: "cs_CZ",
    // nahledova kartka pri sdileni odkazu (Instagram, WhatsApp, Messenger...)
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "YARINOO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YARINOO — Weby, obsah a vlastní cesta",
    description: "Weby, sociální sítě a content s energií sportovce.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="grain font-body antialiased">{children}</body>
    </html>
  );
}
