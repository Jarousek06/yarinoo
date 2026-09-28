"use client";

import { contact, brand, socials } from "@/lib/content";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

// =============================================================
//  CONTACT — zaverecna vyzva k akci + e-mail + odkazy na site.
//  Zadny formular, jen primy odkaz na e-mail (mailto).
// =============================================================
export default function Contact() {
  return (
    <section id="kontakt" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 shrink-0 bg-accent" />
          <span className="font-head text-sm uppercase tracking-[0.3em] text-accent">
            {contact.kicker}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="skew-head mt-4 max-w-4xl font-head text-5xl font-bold uppercase leading-[0.9] tracking-tightest text-paper md:text-8xl">
          {contact.title}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-xl font-body text-lg text-paper/70">
          {contact.text}
        </p>
      </Reveal>

      {/* velky e-mail odkaz — magneticky (prilne k mysi) */}
      <Reveal delay={0.15}>
        <Magnetic className="mt-10">
          <a
            href={`mailto:${brand.email}`}
            className="group inline-flex items-center gap-3 border-b-2 border-accent pb-2 font-head text-2xl font-bold uppercase tracking-tight text-paper transition-colors duration-150 hover:text-accent md:text-4xl"
          >
            {brand.email}
            <span className="transition-transform duration-150 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Magnetic>
      </Reveal>

      {/* zopakovane odkazy na socialni site */}
      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-wrap gap-4">
          {socials.platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-paper/25 px-5 py-2 font-head text-sm font-semibold uppercase tracking-widest text-paper/80 transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              {p.name}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
