"use client";

import { socials, brand } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { platformIcons } from "./BrandIcons";

// =============================================================
//  SOCIALS — "Sledujte me". Velke klikaci dlazdice na TikTok,
//  Instagram a Kick. Nazvy ve skosenem stylu nadpisu.
// =============================================================
export default function Socials() {
  return (
    <section id="socials" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionHead kicker={socials.kicker} title={socials.title} />

      <p className="mt-4 font-head text-lg uppercase tracking-widest text-smoke">
        {brand.handle}
      </p>

      <div className="mt-12 flex flex-col divide-y divide-paper/10 border-y border-paper/10">
        {socials.platforms.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-7 transition-colors duration-150 hover:bg-accent/5 md:py-9"
            >
              <span className="flex items-center gap-5 md:gap-8">
                {(() => {
                  const Icon = platformIcons[p.name];
                  return Icon ? (
                    <Icon className="h-8 w-8 text-smoke transition-colors duration-150 group-hover:text-accent md:h-14 md:w-14" />
                  ) : null;
                })()}
                <span className="skew-head font-head text-5xl font-bold uppercase tracking-tight text-paper transition-colors duration-150 group-hover:text-accent md:text-8xl">
                  {p.name}
                </span>
              </span>
              <span className="font-head text-3xl text-smoke transition-all duration-150 group-hover:translate-x-2 group-hover:text-accent md:text-5xl">
                ↗
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
