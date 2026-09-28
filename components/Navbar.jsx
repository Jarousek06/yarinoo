"use client";

import { useEffect, useState } from "react";
import { brand } from "@/lib/content";

// =============================================================
//  NAVBAR — pevna horni lista. Po odscrollovani ztmavne pozadi.
//  Odkazy scrolluji na jednotlive sekce (kotvy #...).
// =============================================================
const links = [
  { label: "O mně", href: "#o-mne" },
  { label: "Služby", href: "#sluzby" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-ink/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="skew-head font-head text-2xl font-bold uppercase tracking-tight text-paper"
        >
          {brand.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-head text-sm font-semibold uppercase tracking-widest text-paper/70 transition-colors duration-150 hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="bg-accent px-4 py-2 font-head text-sm font-semibold uppercase tracking-widest text-ink transition-transform duration-150 hover:-translate-y-0.5 md:hidden"
        >
          Napiš mi
        </a>
      </nav>
    </header>
  );
}
